<script setup lang="ts">
import type { InputProps } from '@typesOrigin/recruitment';

interface TextInputProps extends InputProps {
  icon?: string;
}

defineProps<TextInputProps>();

const modelValue = defineModel<string>();
</script>

<template>
  <div class="flex flex-row gap-2 items-center">
    <label v-if="label" :for="id" class="font-semibold">{{ label }}</label>
    <div class="relative">
      <img v-if="icon" :src="icon" class="absolute top-[20px] left-[6px]" />
      <input
        v-model="modelValue"
        :class="['my-2.5 border border-[#E2E8F0] bg-[#F8FAFC] text-[#94A3B8] p-1.25 rounded-xl outline-0', classes, { 'pl-6': icon, 'text-black': modelValue && modelValue.length > 0 }]"
        type="text"
        :id="id"
        :placeholder="placeholder"
      />
    </div>
  </div>
</template>

<style scoped>
@reference "tailwindcss";

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type='text'] {
  appearance: auto;
  -moz-appearance: textfield;
  @apply transition duration-300 ease-in-out focus:border-[#6C63FF] active:border-[#6C63FF] focus-visible:border-[#6C63FF];
}
</style>
