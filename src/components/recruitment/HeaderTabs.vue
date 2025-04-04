<script setup lang="ts">
import { useRecruitmentStore } from '@stores/recruitment';
import { RecruitmentTabs } from '@typesOrigin/recruitment';

const recruitmentStore = useRecruitmentStore();

const handleTabClick = (tab: RecruitmentTabs) => {
  Object.keys(recruitmentStore.vacancyTabs).forEach((key) => {
    recruitmentStore.vacancyTabs[key as RecruitmentTabs] = key === tab;
  });
};
</script>

<template>
  <div class="w-full h-fit flex flex-row gap-14 px-8 border-b-2 border-[#F1F5F9]">
    <span
      v-for="(isActive, tab) in recruitmentStore.vacancyTabs"
      :key="tab"
      :class="['cursor-pointer pt-1 pb-2', isActive ? 'text-[#6C63FF] font-bold' : 'text-gray-500']"
      @click="handleTabClick(tab)"
    >
      {{ tab }}
      <hr class="relative top-[10px] text-[#6C63FF] bg-[#6C63FF] h-[3px] border-0" v-if="isActive" />
    </span>
  </div>
</template>
