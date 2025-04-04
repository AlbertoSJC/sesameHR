import type { VacancyStatus } from '@domain/VacancyStatus';
import apiService from '@services/apiService';
import { RecruitmentTabs } from '@typesOrigin/recruitment.js';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useRecruitmentStore = defineStore('recruitment', () => {
  const loading = ref<boolean>(false);
  const vacancyStatuses = ref<VacancyStatus[] | null>(null);
  const recruitmentFilterInput = ref<string>('');
  const vacancyTabs = ref<Record<RecruitmentTabs, boolean>>({
    [RecruitmentTabs.Vacancies]: true,
    [RecruitmentTabs.Candidates]: false,
  });

  const fetchVacancyStatuses = async () => {
    await apiService
      .fetchCandidatureStatuses()
      .then((response) => {
        vacancyStatuses.value = response;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return {
    loading,
    vacancyStatuses,
    vacancyTabs,
    recruitmentFilterInput,

    fetchVacancyStatuses,
  };
});
