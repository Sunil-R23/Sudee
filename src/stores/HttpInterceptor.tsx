import axios from 'axios';
import AppConstants from '../shared/constants/AppConstant';

 
const api = axios.create({
  baseURL: AppConstants.SUPABASE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    apiKey: AppConstants.SUPABASE_ANON_KEY,
    Authorization: `Bearer ${AppConstants.SUPABASE_ANON_KEY}`,
  },
});

export default api