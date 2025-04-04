<script setup lang="ts">
import { VacancyStatusText, type VacancyStatus } from '@domain/VacancyStatus';
import { useRecruitmentStore } from '@stores/recruitment';
import { vacancyStatusCardOutput } from '@typesOrigin/recruitment';
import { computed } from 'vue';

interface VacancyStatusCardProps {
  status?: VacancyStatus | null;
  index: number;
}

const recruitmentStore = useRecruitmentStore();

const { status } = defineProps<VacancyStatusCardProps>();

const getCurrentStatus = computed(() => vacancyStatusCardOutput[status?.name ?? VacancyStatusText.Default]);
</script>

<template>
  <div :class="['flex flex-col h-full w-full min-w-[296px] p-4 border-1 border-[#E2E8F0] rounded-xl', index % 2 !== 0 ? 'bg-[#F8FAFC]' : 'bg-white']">
    <div class="flex flex-col gap-3">
      <hr
        :class="[`h-[4px] border-0 rounded-4xl`]"
        :style="{
          backgroundColor: getCurrentStatus.color,
          color: getCurrentStatus.color,
        }"
      />
      <div class="flex flex-row gap-1">
        <img :src="`src/images/status/${getCurrentStatus.imgSrc}.svg`" class="max-h-[24px] max-w-[24px]" />
        <span class="text-[#1F2D52] font-bold">{{ status?.name ?? 'Recruitment' }}</span>
      </div>
    </div>
    <div></div>
  </div>
</template>
