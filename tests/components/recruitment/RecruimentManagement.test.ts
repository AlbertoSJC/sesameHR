import CandidatesTab from '@components/recruitment/candidates/CandidatesTab.vue';
import HeaderTabs from '@components/recruitment/HeaderTabs.vue';
import HeaderTools from '@components/recruitment/HeaderTools.vue';
import RecruitmentManagement from '@components/recruitment/RecruitmentManagement.vue';
import VacanciesTab from '@components/recruitment/vacancies/VacanciesTab.vue';
import { VacancyStatusText } from '@domain/VacancyStatus';
import apiService from '@services/apiService';
import { useRecruitmentStore } from '@stores/recruitment';
import { RecruitmentTabs } from '@typesOrigin/recruitment';
import { mount } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';
import { beforeEach, describe, expect, test, vi } from 'vitest';

vi.mock('@services/apiService', () => ({
  default: {
    fetchCandidatureStatuses: vi.fn().mockResolvedValue([]),
  },
}));

describe('RecruitmentManagement', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    vi.clearAllMocks();
  });

  test('Should mount', () => {
    const wrapper = mount(RecruitmentManagement);
    expect(wrapper).toBeDefined();
  });

  test('Should call apiService.fetchCandidatureStatuses on mount and update the store', async () => {
    const recruitmentStore = useRecruitmentStore();
    const mockResponse = [{ id: '1', name: VacancyStatusText.Default, order: 1, companyId: '123', vacancyId: '456' }];
    vi.mocked(apiService.fetchCandidatureStatuses).mockResolvedValueOnce(mockResponse);

    const wrapper = mount(RecruitmentManagement);

    await wrapper.vm.$nextTick();

    expect(apiService.fetchCandidatureStatuses).toHaveBeenCalled();
    expect(recruitmentStore.vacancyStatuses).toEqual(mockResponse);
  });

  test('Should handle errors from apiService.fetchCandidatureStatuses', async () => {
    const mockError = new Error('Network Error');
    vi.mocked(apiService.fetchCandidatureStatuses).mockRejectedValueOnce(mockError);

    const wrapper = mount(RecruitmentManagement);

    await wrapper.vm.$nextTick();

    expect(apiService.fetchCandidatureStatuses).toHaveBeenCalled();
  });

  test('Should render HeaderTabs component', () => {
    const wrapper = mount(RecruitmentManagement);
    const headerTabs = wrapper.findComponent(HeaderTabs);
    expect(headerTabs.exists()).toBe(true);
  });

  test('Should render HeaderTools component', () => {
    const wrapper = mount(RecruitmentManagement);
    const headerTools = wrapper.findComponent(HeaderTools);
    expect(headerTools.exists()).toBe(true);
  });

  test('Should render VacanciesTab component when Vacancies tab is active', () => {
    const recruitmentStore = useRecruitmentStore();
    recruitmentStore.vacancyTabs = {
      [RecruitmentTabs.Vacancies]: true,
      [RecruitmentTabs.Candidates]: false,
    };

    const wrapper = mount(RecruitmentManagement);
    const vacanciesTab = wrapper.findComponent(VacanciesTab);
    expect(vacanciesTab.exists()).toBe(true);
  });

  test('Should render CandidatesTab component when Candidates tab is active', () => {
    const recruitmentStore = useRecruitmentStore();
    recruitmentStore.vacancyTabs = {
      [RecruitmentTabs.Vacancies]: false,
      [RecruitmentTabs.Candidates]: true,
    };

    const wrapper = mount(RecruitmentManagement);
    const candidatesTab = wrapper.findComponent(CandidatesTab);
    expect(candidatesTab.exists()).toBe(true);
  });
});
