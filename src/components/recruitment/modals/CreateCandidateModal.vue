<script setup lang="ts">
import ModalContainer from '@components/common/ModalContainer.vue';
import { ModalIds, useModalsStore } from '@stores/modals';
import HeaderCreateCandidate from './create/HeaderCreateCandidate.vue';

const modalsStore = useModalsStore();
</script>

<template>
  <ModalContainer :modalId="ModalIds.CreateCandidate">
    <HeaderCreateCandidate />
  </ModalContainer>
</template>
