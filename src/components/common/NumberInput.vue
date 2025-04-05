<script setup lang="ts">
import type { ExtendedInputProps } from '@typesOrigin/recruitment';
import { defineProps, watch } from 'vue';

defineProps<ExtendedInputProps>();

const modelValue = defineModel<number>();

watch(modelValue, (newValue) => {
  const newValueToString = newValue?.toString() as string;
  if (newValueToString === '' || (newValue && newValue < 0)) {
    modelValue.value = undefined;
  }
});
</script>

<template>
  <div :class="[{ 'w-full items-start': widthFull }, 'flex flex-col items-center']">
    <label v-if="label" :for="id" class="font-semibold text-[#1F2D52]">{{ label }}</label>
    <input
      v-model="modelValue"
      :class="['my-1 border border-[#E2E8F0] bg-[#F8FAFC] text-[#94A3B8] p-1.25 rounded-xl outline-0', classes, { 'text-black': modelValue !== null && modelValue !== undefined, 'w-full': widthFull }]"
      type="number"
      :id="id"
      :placeholder="placeholder"
    />
  </div>
</template>
