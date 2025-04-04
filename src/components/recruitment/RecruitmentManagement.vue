<script setup lang="ts">
import apiService from '@services/apiService';
import { useRecruitmentStore } from '@stores/recruitment';
import { RecruitmentTabs } from '@typesOrigin/recruitment';
import { onMounted } from 'vue';
import CandidatesTab from './candidates/CandidatesTab.vue';
import HeaderTabs from './HeaderTabs.vue';
import HeaderTools from './HeaderTools.vue';
import VacanciesTab from './vacancies/VacanciesTab.vue';

const recruitmentStore = useRecruitmentStore();

onMounted(async () => {
  await apiService
    .fetchCandidatureStatuses()
    .then((response) => {
      recruitmentStore.vacancyStatuses = response;
      console.log(recruitmentStore.vacancyStatuses);
    })
    .catch((error) => {
      console.log(error);
    });
});
</script>

<template>
  <div class="h-full flex flex-col bg-white rounded-2xl px-6 py-4 gap-6 shadow-outset-lg">
    <HeaderTabs />
    <HeaderTools />
    <VacanciesTab v-if="recruitmentStore.vacancyTabs[RecruitmentTabs.Vacancies]" />
    <CandidatesTab v-if="recruitmentStore.vacancyTabs[RecruitmentTabs.Candidates]" />
  </div>
</template>
