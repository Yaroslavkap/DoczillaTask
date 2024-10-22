#include <iostream>
#include "crow.h" 
#include "crow/middlewares/cors.h"

#include <sqlite3.h>


bool executeQuery(sqlite3* db, const std::string& query) {
    char* errMsg = nullptr;
    int rc = sqlite3_exec(db, query.c_str(), nullptr, nullptr, &errMsg);
    if (rc != SQLITE_OK) {
        std::cerr << "Ошибка SQL: " << errMsg << std::endl;
        sqlite3_free(errMsg);
        return false;
    }
    return true;
}


bool addStudent(sqlite3* db, const std::string& firstName, const std::string& lastName,
                const std::string& middleName, const std::string& birthDate, const std::string& groupName) {
    std::string query = "INSERT INTO students (first_name, last_name, middle_name, birth_date, group_name) VALUES ('" 
                        + firstName + "', '" + lastName + "', '" + middleName + "', '" + birthDate + "', '" + groupName + "');";
    return executeQuery(db, query);
}


bool deleteStudent(sqlite3* db, int id) {
    std::string query = "DELETE FROM students WHERE id = " + std::to_string(id) + ";";
    return executeQuery(db, query);
}


std::string getStudents(sqlite3* db) {
    std::string query = "SELECT * FROM students;";
    sqlite3_stmt* stmt;
    std::string result = "[";
    
    if (sqlite3_prepare_v2(db, query.c_str(), -1, &stmt, nullptr) == SQLITE_OK) {
        while (sqlite3_step(stmt) == SQLITE_ROW) {
            result += "{";
            result += "\"id\": " + std::to_string(sqlite3_column_int(stmt, 0)) + ",";
            result += "\"first_name\": \"" + std::string(reinterpret_cast<const char*>(sqlite3_column_text(stmt, 1))) + "\","; 
            result += "\"last_name\": \"" + std::string(reinterpret_cast<const char*>(sqlite3_column_text(stmt, 2))) + "\","; 
            result += "\"middle_name\": \"" + std::string(reinterpret_cast<const char*>(sqlite3_column_text(stmt, 3))) + "\","; 
            result += "\"birth_date\": \"" + std::string(reinterpret_cast<const char*>(sqlite3_column_text(stmt, 4))) + "\","; 
            result += "\"group_name\": \"" + std::string(reinterpret_cast<const char*>(sqlite3_column_text(stmt, 5))) + "\""; 
            result += "},"; 
        }
        result.pop_back(); 
        result += "]"; 
    }
    sqlite3_finalize(stmt);
    return result; 
}

int main() {
    crow::App<crow::CORSHandler> app; 

    
    auto& cors = app.get_middleware<crow::CORSHandler>();
    cors
        .global() 
        .headers("Content-Type", "X-Custom-Header") 
        .methods("POST"_method, "GET"_method, "DELETE"_method) 
        .origin("*"); 

    
    sqlite3* db;
    if (sqlite3_open("students.db", &db)) {
        std::cerr << "Не удалось открыть базу данных: " << sqlite3_errmsg(db) << std::endl;
        return 1;
    }

    
    std::string createTableQuery = R"(
        CREATE TABLE IF NOT EXISTS students (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            first_name TEXT NOT NULL,
            last_name TEXT NOT NULL,
            middle_name TEXT,
            birth_date TEXT NOT NULL,
            group_name TEXT NOT NULL
        );
    )";
    executeQuery(db, createTableQuery);

    
    CROW_ROUTE(app, "/student/add").methods("POST"_method)([&db](const crow::request& req) {
        auto body = crow::json::load(req.body);
        if (!body) return crow::response(400, "Bad request");
        
        bool success = addStudent(db, body["first_name"].s(), body["last_name"].s(),
                                  body["middle_name"].s(), body["birth_date"].s(), body["group_name"].s());

        if (success) return crow::response(200, "Student added");
        return crow::response(500, "Failed to add student");
    });

    
    CROW_ROUTE(app, "/student/delete/<int>").methods("DELETE"_method)([&db](int id) {
        bool success = deleteStudent(db, id);
        if (success) return crow::response(200, "Student deleted");
        return crow::response(500, "Failed to delete student");
    });

    
    CROW_ROUTE(app, "/students").methods("GET"_method)([&db]() {
        std::string students = getStudents(db);
        return crow::response(200, students);
    });

    app.port(18080).multithreaded().run();

    sqlite3_close(db);
    return 0;
}
