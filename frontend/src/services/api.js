import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:7068/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function getStudents() {
  try {
    const response = await api.get('/students');
    return response.data;
  } catch (error) {
    console.error('Error fetching students:', error);
    throw error;
  }
}

export async function getStudentById(id) {
  try {
    const response = await api.get(`/students/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching students:', error);
    throw error;
  }
}

export async function addStudent(studentData) {
  try {
    const response = await api.post('/students', studentData);
    return response.data;
  } catch (error) {
    console.error('Error adding student:', error);
    throw error;
  }
}

export async function editStudent(id, studentData) {
  try {
    const response = await api.put(`/students/${id}`, studentData);
    return response.data;
  } catch (error) {
    console.error('Error editing student:', error);
    throw error;
  }
}

export async function deleteStudent(id) {
  try {
    const response = await api.delete(`/students/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting student:', error);
    throw error;
  }
}
