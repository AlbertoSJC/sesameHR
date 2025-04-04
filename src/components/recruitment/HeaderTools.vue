<script setup lang="ts">
import ButtonElement from '@components/common/ButtonElement.vue';
import TextInput from '@components/common/TextInput.vue';
import { useRecruitmentStore } from '@stores/recruitment';
import CreateCandidateModal from './modals/CreateCandidateModal.vue';
import { ModalIds, useModalsStore } from '@stores/modals';

const recruitmentStore = useRecruitmentStore();
const modalsStore = useModalsStore();
</script>

<template>
  <div class="flex flex-row items-center justify-between height-fit max-h-[32px]">
    <TextInput placeholder="Buscar" icon="src/images/icon-search.svg" v-model="recruitmentStore.recruitmentFilterInput" />
    <ButtonElement text="Añadir candidato" classes="text-sm" @click="modalsStore.toggleModal(ModalIds.CreateCandidate)" />
    <CreateCandidateModal />
  </div>
</template>
