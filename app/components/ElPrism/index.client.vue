<template>
  <ElTerminal>
    <template #file><slot name="file"></slot></template>
    <template #content>
      <div class="whitespace-pre-wrap" v-html="html" />
    </template>
  </ElTerminal>
</template>

<script lang="ts" setup>
import "prismjs/themes/prism-okaidia.min.css";
import Prism from "prismjs";

type Props = {
  code: string;
};

const props = defineProps<Props>();

// Returns a highlighted HTML string
const html = Prism.highlight(props.code || "", Prism.languages.html, "html");
</script>
