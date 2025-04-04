<script setup lang="ts">
import { useRecruitmentStore } from '@stores/recruitment';
import VacancyStatusCard from './VacancyStatusCard.vue';

const recruitmentStore = useRecruitmentStore();
</script>

<template>
  <div class="flex flex-row h-full w-full gap-3 pb-2 overflow-x-auto scroll-container">
    <VacancyStatusCard v-for="(vacancyStatus, index) in recruitmentStore.vacancyStatuses" :status="vacancyStatus" :key="index" :index="index" />
  </div>
</template>
