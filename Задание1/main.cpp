#include <iostream>
#include <fstream>
#include <string>
#include <vector>
#include <map>
#include <set>
#include <algorithm>
#include <filesystem>
#include <regex>

namespace fs = std::filesystem;

class DependencyManager {
public:
    DependencyManager(const std::string& root) : rootPath(root) {}

    void findAllTextFiles() {
        for (const auto& entry : fs::recursive_directory_iterator(rootPath)) {
            if (entry.is_regular_file() && entry.path().extension() == ".txt") {
                files.push_back(entry.path().string());
            }
        }
        std::sort(files.begin(), files.end()); // Сортируем файлы по имени
    }
   

    bool topologicalSort() {
        std::set<std::string> visited;
        std::set<std::string> tempStack;

        for (const auto& file : files) {
            if (visited.find(file) == visited.end()) {
                if (!dfs(file, visited, tempStack)) {
                    return false; 
                }
            }
        }
        return true;
    }

    void concatenateFiles(const std::string& outputFile) {
        std::ofstream fout(outputFile);
        for (const auto& file : sortedFiles) {
            std::ifstream fin(file);
            if (!fin.is_open()) {
                std::cerr << "Error opening file: " << file << std::endl;
                continue;
            }
            fout << "// File: " << file << "\n";
            fout << fin.rdbuf() << "\n";
            fin.close();
        }
        fout.close();
    }

private:
    bool dfs(const std::string& file, std::set<std::string>& visited, std::set<std::string>& tempStack) {
        tempStack.insert(file);

        for (const auto& dep : dependencyGraph[file]) {
            if (tempStack.find(dep) != tempStack.end()) {
                printCycle(dep, file);
                return false;
            }
            if (visited.find(dep) == visited.end()) {
                if (!dfs(dep, visited, tempStack)) {
                    return false;
                }
            }
        }

        tempStack.erase(file);
        visited.insert(file);
        sortedFiles.push_back(file);
        return true;
    }

    void printCycle(const std::string& start, const std::string& end) {
        std::cerr << "Cycle detected: " << start << " -> " << end << std::endl;
    }

    std::string rootPath;
    std::vector<std::string> files;        
    std::map<std::string, std::set<std::string>> dependencyGraph;
    std::vector<std::string> sortedFiles;    
};

int main() {
    std::string rootPath = "Folders"; 
    std::string outputFile = "result.txt";

    DependencyManager manager(rootPath);
    manager.findAllTextFiles();
    

    if (manager.topologicalSort()) {
        manager.concatenateFiles(outputFile);
        std::cout << "Files concatenated successfully into " << outputFile << std::endl;
    } else {
        std::cerr << "Failed to concatenate due to cyclic dependencies" << std::endl;
    }

    return 0;
}
