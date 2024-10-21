const url ='http://localhost:18080'

export async function fetchStudents() {
    try {
        const response = await fetch(`${url}/students`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            
        });
        
        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
        }

        const data = await response.json();
        //console.log('Список студентов:', data);
        return data
    } catch (error) {
        console.error('Произошла ошибка при получении списка студентов:', error);
    }
}

export async function addStudent(student) {
    try {
        const response = await fetch(`${url}/student/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(student),  
        });

        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
        }

        const data = await response.text();
        console.log('Добавленный студент:', data);
        return data
    } catch (error) {
        console.error('Произошла ошибка при добавлении студента:', error);
    }
}

export async function deleteStudent(studentId) {
    try {
        const response = await fetch(`${url}/student/delete/${studentId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
        }

        const data = await response.text();  // Используем .text() для получения текстового ответа
        console.log('Ответ сервера после удаления студента:', data);
        return data;
    } catch (error) {
        console.error('Произошла ошибка при удалении студента:', error);
    }
}
