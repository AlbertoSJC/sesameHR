<script setup lang="ts">
import type { ExtendedInputProps } from '@typesOrigin/recruitment';

interface TextInputProps extends ExtendedInputProps {
  icon?: string;
  required?: boolean;
  errors?: string[];
  onInputCallback?: () => void;
}

defineProps<TextInputProps>();

const modelValue = defineModel<string>();
</script>

<template>
  <div :class="[{ 'w-full items-start': widthFull }, 'flex flex-col items-center']">
    <label v-if="label" :for="id" class="font-semibold text-[#1F2D52]">{{ label }}</label>
    <div :class="[{ 'w-full items-start': widthFull }, 'relative']">
      <img v-if="icon" :src="icon" class="absolute top-[15px] left-[6px]" />
      <input
        v-model="modelValue"
        :class="[
          'my-1 border border-[#E2E8F0] bg-[#F8FAFC] text-[#94A3B8] p-1.25 rounded-xl outline-0',
          classes,
          { 'pl-6': icon, 'text-black': modelValue && modelValue.length > 0, 'w-full': widthFull },
        ]"
        type="text"
        :id="id"
        :placeholder="placeholder"
        :required="required"
        @input="onInputCallback"
      />
      <span v-if="errors && errors[0]" class="error block w-full font-semibold text-xs text-[#770000]">{{ errors[0] }}</span>
      <span v-else class="block w-full h-[16px]"></span>
    </div>
  </div>
</template>
