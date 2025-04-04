import type { VacancyStatus } from '@domain/VacancyStatus';
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

  return {
    loading,
    vacancyStatuses,
    vacancyTabs,
    recruitmentFilterInput,
  };
});
