<script setup lang="ts">
import ModalContainer from '@components/common/ModalContainer.vue';
import { ModalIds } from '@stores/modals';
import { useRecruitmentStore } from '@stores/recruitment';
import { onMounted } from 'vue';
import CandidateForm from './CandidateForm.vue';
import HeaderCreateCandidate from './create/HeaderCreateCandidate.vue';

const recruitmentStore = useRecruitmentStore();

onMounted(() => recruitmentStore.createCandidateToUpload());
</script>

<template>
  <ModalContainer classes="!w-[40%]" :modalId="ModalIds.CreateCandidate">
    <HeaderCreateCandidate />
    <CandidateForm />
  </ModalContainer>
</template>
