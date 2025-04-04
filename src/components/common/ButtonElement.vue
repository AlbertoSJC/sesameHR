<script setup lang="ts">
interface ButtonProps {
  text: string;
  disabled?: boolean;
  classes?: string;
}

defineProps<ButtonProps>();
</script>

<template>
  <button :class="[disabled ? '!bg-[#535353] border-[#535353] !text-black pointer-events-none' : 'cursor-pointer border-[#1F2D52] text-white bg-[#1F2D52]', classes]">
    {{ text }}
  </button>
</template>

<style scoped>
@reference "tailwindcss";

button {
  @apply w-fit py-1 px-3 rounded-xl border-2 transition duration-300 ease-in-out hover:bg-white hover:text-[#6C63FF] hover:border-[#6C63FF];
}
</style>
