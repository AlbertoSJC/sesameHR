<script setup lang="ts">
import { ModalIds, useModalsStore } from '@stores/modals';

interface ModalContainerProps {
  modalId: ModalIds;
  classes?: string;
}

const { modalId } = defineProps<ModalContainerProps>();

const modalsStore = useModalsStore();
</script>

<template>
  <div v-if="modalsStore.listModalIds[modalId]" class="fixed inset-0 z-10 flex items-center justify-center bg-[#181e27c7]" @click.self="modalsStore.toggleModal(modalId)">
    <div :class="['w-fit h-fit flex flex-col gap-4 rounded-2xl p-6 bg-white border-2 border-[#E2E8F0]', classes]">
      <slot />
    </div>
  </div>
</template>
