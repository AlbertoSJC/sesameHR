import type { VacancyStatus } from '@domain/VacancyStatus';
import axios from 'axios';
import { ENV_VARIABLES } from 'src/env.js';

const mainHeader = {
  accept: 'application/json',
  Authorization: `Bearer ${ENV_VARIABLES.PUBLIC_API_TOKEN}`,
};

const apiService = {
  async fetchCandidatureStatuses(): Promise<VacancyStatus[]> {
    try {
      const response = await axios.get(`${ENV_VARIABLES.PUBLIC_BASE_API_URL}/recruitment/v1/candidate-status/${ENV_VARIABLES.PUBLIC_VACANCY_ID}`, {
        headers: mainHeader,
      });

      return response.data.data;
    } catch (error) {
      console.error('Error statuses:', error);
      throw error;
    }
  },
};

export default apiService;
