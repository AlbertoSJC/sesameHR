<script setup lang="ts">
import type { Candidate } from '@domain/Candidate';
import CandidateOptionsTab from './CandidateOptionsTab.vue';
import { formatDate } from 'src/utils/dateUtils';

interface PropsModel {
  candidate: Candidate;
  vacancyIndex: number;
}

defineProps<PropsModel>();
</script>

<template>
  <div :class="['flex flex-col w-full h-full max-h-[87px] gap-2 p-2 bg-secondary-white border-1 border-primary-white rounded-xl', vacancyIndex % 2 === 0 ? 'bg-secondary-white' : 'bg-white']">
    <div class="w-full h-fit flex flex-row justify-between items-center">
      <span class="w-full h-fit ellipsis-text font-semibold color-secondary-blue max-w-[200px]" :title="`${candidate.firstName} ${candidate.lastName}`"
        >{{ candidate.firstName }} {{ candidate.lastName }}</span
      >
      <CandidateOptionsTab :candidate="candidate" />
    </div>
    <span class="added-by text-xs text-[#64748B]">Añadido por ATS</span>
    <div class="flex flex-row gap-1 items-center">
      <img :src="`src/images/icon-clock.svg`" class="h-[16px] w-[16px]" />
      <span class="created-at-text text-xs text-primary-grey">{{ formatDate(candidate.createdAt as string) }}</span>
    </div>
  </div>
</template>
