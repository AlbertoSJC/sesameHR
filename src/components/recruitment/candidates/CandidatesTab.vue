<script setup lang="ts">
import { useRecruitmentStore } from '@stores/recruitment';

const recruitmentStore = useRecruitmentStore();
</script>

<template>
  <div class="flex flex-row w-full h-full gap-3 pb-2 overflow-x-auto scroll-container"></div>
</template>
