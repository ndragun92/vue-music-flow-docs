<template>
  <h2>Installation</h2>
  <div class="w-full">
    <ElTerminal :commands="['npm install npm install', 'npm run dev']">
      <template #file>Terminal</template>
    </ElTerminal>
  </div>
</template>
<script setup lang="ts"></script>
