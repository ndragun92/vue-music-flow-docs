<template>
  <ElTerminal :code="props.code">
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
  css?: boolean;
};

const props = defineProps<Props>();

let prismLanguage = {
  name: Prism.languages.html,
  extension: "html",
};

if (props.ts) {
  prismLanguage = {
    name: Prism.languages.javascript,
    extension: "javascript",
  };
} else if (props.css) {
  prismLanguage = {
    name: Prism.languages.css,
    extension: "css",
  };
}

// Returns a highlighted HTML string
const html = Prism.highlight(
  props.code || "",
  prismLanguage.name,
  prismLanguage.extension,
);
</script>
