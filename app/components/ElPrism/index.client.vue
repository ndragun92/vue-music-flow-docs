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
  ts?: boolean;
};

const props = defineProps<Props>();

// Returns a highlighted HTML string
const html = Prism.highlight(
  props.code || "",
  props.ts ? Prism.languages.javascript : Prism.languages.html,
  props.ts ? "javascript" : "html",
);
</script>
