// TimeZoneServise.js
import axios from 'axios';

const API_KEY = 'fcb83119981a4b2aa6614e403d914648';
const API_BASE_URL = 'https://timezone.abstractapi.com/v1';

export const getTimezoneByLocation = async (location) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/current_time/?api_key=${API_KEY}&location=${location}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching timezone information by location:', error.response?.data || error.message);
    throw error;
  }
};
