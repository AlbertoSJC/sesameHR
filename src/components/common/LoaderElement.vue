<script setup lang="ts">
interface PropsModel {
  text?: string;
}

const { text = 'Loading' } = defineProps<PropsModel>();
</script>

<template>
  <div class="w-full h-full flex flex-nowrap flex-col items-center justify-center gap-6">
    <div class="lds-hourglass"></div>
    <span class="text-lg font-semibold text-center text-secondary-blue">{{ text }}</span>
  </div>
</template>

<style scoped>
.lds-hourglass,
.lds-hourglass:after {
  box-sizing: border-box;
  color: #1f2d52;
}
.lds-hourglass {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-hourglass:after {
  content: ' ';
  display: block;
  border-radius: 50%;
  width: 0;
  height: 0;
  margin: 8px;
  box-sizing: border-box;
  border: 32px solid currentColor;
  border-color: currentColor transparent currentColor transparent;
  animation: lds-hourglass 1.2s infinite;
}

@keyframes lds-hourglass {
  0% {
    transform: rotate(0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  50% {
    transform: rotate(900deg);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  100% {
    transform: rotate(1800deg);
  }
}
</style>
