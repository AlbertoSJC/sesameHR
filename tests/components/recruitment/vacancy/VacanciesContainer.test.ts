import VacanciesContainer from '@components/recruitment/vacancy/VacanciesContainer.vue';
import apiService from '@services/apiService';
import { useRecruitmentStore } from '@stores/recruitment';
import { shallowMount } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';
import { beforeEach, describe, expect, test, vi } from 'vitest';

vi.mock('@services/apiService', () => ({
  default: {
    fetchCandidatureStatuses: vi.fn(),
  },
}));

describe('VacanciesContainer', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    vi.clearAllMocks();
  });

  test('should call apiService.fetchCandidatureStatuses on mount and update the store', async () => {
    const recruitmentStore = useRecruitmentStore();
    const mockResponse = [{ id: '1', name: 'Open', order: 1, companyId: '123', vacancyId: '456' }];
    vi.mocked(apiService.fetchCandidatureStatuses).mockResolvedValueOnce(mockResponse);

    const wrapper = shallowMount(VacanciesContainer);

    await wrapper.vm.$nextTick();

    expect(apiService.fetchCandidatureStatuses).toHaveBeenCalled();

    expect(recruitmentStore.vacancyStatuses).toEqual(mockResponse);
  });

  test('should handle errors from apiService.fetchCandidatureStatuses', async () => {
    const mockError = new Error('Network Error');
    const spy = vi.mocked(apiService.fetchCandidatureStatuses).mockRejectedValueOnce(mockError);

    const wrapper = shallowMount(VacanciesContainer);

    await wrapper.vm.$nextTick();

    expect(apiService.fetchCandidatureStatuses).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
