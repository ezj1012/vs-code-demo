<script setup lang="ts">
import { onMounted } from 'vue';
import { loaderLocale } from './vscode/loader';

onMounted(async () => {
  await loaderLocale()
  await import("@/vscode/main.workbench")
  // await import("@/app/editor/main.view")
})
</script>

<template>

</template>

<style scoped></style>
