import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api/v1';

// Ambil semua modul
export const fetchModules = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/modules`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    return response.data.data;
  } catch (error) {
    throw new Error('Failed to fetch modules');
  }
};

// Ambil detail modul beserta lessons
export const fetchModuleDetails = async (moduleUlid) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/modules/${moduleUlid}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    return response.data.data;
  } catch (error) {
    throw new Error('Failed to fetch module details');
  }
};

export const fetchModuleCount = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/modules/count');
    return response.data.totalModules; // Total modul
  } catch (error) {
    console.error('Error fetching module count:', error.message);
    return 0;
  }
};

export const fetchInProgressModules = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/modules/in-progress', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    return response.data; // Modul sedang dipelajari
  } catch (error) {
    console.error('Error fetching in-progress modules:', error.message);
    return [];
  }
};
