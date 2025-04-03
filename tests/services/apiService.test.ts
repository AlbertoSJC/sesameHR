import apiService from '@services/apiService';
import { mockVacancyStatuses } from '@tests/mocks/vacancyMocks';
import axios from 'axios';
import { ENV_VARIABLES } from 'src/env';
import { beforeEach, describe, expect, test, vi } from 'vitest';

vi.mock('axios');

describe('apiService', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('should fetch candidature statuses successfully', async () => {
    vi.mocked(axios.get).mockResolvedValueOnce({
      data: {
        data: mockVacancyStatuses,
      },
    });

    const result = await apiService.fetchCandidatureStatuses();

    expect(axios.get).toHaveBeenCalledWith(`${ENV_VARIABLES.PUBLIC_BASE_API_URL}/recruitment/v1/candidate-status/${ENV_VARIABLES.PUBLIC_VACANCY_ID}`, {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${ENV_VARIABLES.PUBLIC_API_TOKEN}`,
      },
    });

    expect(result).toEqual(mockVacancyStatuses);
  });

  test('should handle errors when fetching candidature statuses', async () => {
    const mockError = new Error('Network Error');

    vi.mocked(axios.get).mockRejectedValueOnce(mockError);

    await expect(apiService.fetchCandidatureStatuses()).rejects.toThrow('Network Error');

    expect(axios.get).toHaveBeenCalledWith(`${ENV_VARIABLES.PUBLIC_BASE_API_URL}/recruitment/v1/candidate-status/${ENV_VARIABLES.PUBLIC_VACANCY_ID}`, {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${ENV_VARIABLES.PUBLIC_API_TOKEN}`,
      },
    });
  });
});
