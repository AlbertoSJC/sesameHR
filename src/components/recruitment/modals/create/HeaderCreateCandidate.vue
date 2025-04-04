<script setup lang="ts">
import ButtonElement from '@components/common/ButtonElement.vue';
</script>

<template>
  <div class="flex flex-row justify-between items-end pb-2 border-b-2 border-[#F1F5F9]">
    <div class="flex flex-row gap-3 items-start">
      <img src="src/images/new-candidate.svg" alt="New candidate" class="h-[25px]" />
      <h5 class="text-2xl font-bold text-[#1f2d52]">Add new candidate</h5>
    </div>
    <ButtonElement text="Save Candidate" />
  </div>
</template>
