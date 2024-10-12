import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:7068/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    if (!config.url.endsWith('/auth/login')) {
      const user = JSON.parse(localStorage.getItem('authToken'));
      if (user && user.token) {
        config.headers.Authorization = `Bearer ${user.token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export async function login(email, password) {
  try {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  } catch (error) {
    console.error('Invalid credentials:', error.response?.data || error.message);
    throw error;
  }
}

export async function getStudents() {
  try {
    const response = await api.get('/students');
    return response.data;
  } catch (error) {
    console.error('Error fetching students:', error.response?.data || error.message);
    throw error;
  }
}

export async function getStudentById(id) {
  try {
    const response = await api.get(`/students/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching student:', error.response?.data || error.message);
    throw error;
  }
}

export async function addStudent(studentData) {
  try {
    const response = await api.post('/students', studentData);
    return response.data;
  } catch (error) {
    console.error('Error adding student:', error.response?.data || error.message);
    throw error;
  }
}

export async function editStudent(id, studentData) {
  try {
    const response = await api.put(`/students/${id}`, studentData);
    return response.data;
  } catch (error) {
    console.error('Error editing student:', error.response?.data || error.message);
    throw error;
  }
}

export async function deleteStudent(id) {
  try {
    const response = await api.delete(`/students/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting student:', error.response?.data || error.message);
    throw error;
  }
}
