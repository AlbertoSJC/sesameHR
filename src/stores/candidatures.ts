import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCandidaturesStore = defineStore('candidatures', () => {
  const loading = ref<boolean>(false);

  return {
    loading,
  };
});
