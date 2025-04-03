<script setup lang="ts">
import apiService from '@services/apiService';
import { useRecruitmentStore } from '@stores/recruitment';
import { onMounted } from 'vue';
import HeaderTabs from './HeaderTabs.vue';

const recruitmentStore = useRecruitmentStore();

onMounted(async () => {
  await apiService
    .fetchCandidatureStatuses()
    .then((response) => {
      recruitmentStore.vacancyStatuses = response;
    })
    .catch((error) => {
      console.log(error);
    });
});
</script>

<template>
  <div class="h-full bg-white rounded-2xl p-4 gap-4 shadow-outset-lg">
    <HeaderTabs />
  </div>
</template>
