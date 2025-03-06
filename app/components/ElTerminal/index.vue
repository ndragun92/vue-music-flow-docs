<template>
  <div
    class="shadow-lg shadow-zinc-950/25 text-zinc-100 text-sm font-mono subpixel-antialiased bg-zinc-800 rounded-lg leading-normal overflow-hidden"
  >
    <div class="flex items-center gap-2 mb-2 bg-zinc-950 px-4 py-2">
      <div class="flex space-x-2">
        <div class="size-3 bg-red-500 rounded-full" />
        <div class="size-3 bg-orange-300 rounded-full" />
        <div class="size-3 bg-green-500 rounded-full" />
      </div>
      <div class="flex-1 text-center min-w-0">
        <slot name="file" />
      </div>
    </div>
    <div class="mt-4 flex flex-col px-5 pb-6 pt-4">
      <slot name="content">
        <div
          v-for="(command, commandIndex) in prop.commands"
          :key="`${command}-${commandIndex}`"
          class="flex items-baseline gap-1 flex-wrap"
        >
          <span class="text-emerald-500">computer:~$</span>
          <p class="flex-1 pl-2 flex items-center">
            {{ command }}
            <Icon
              v-if="prop.commands.length === commandIndex + 1"
              name="ph:line-vertical"
              class="text-white animate-blink"
            />
          </p>
        </div>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
type Props = {
  commands: string[];
};

const prop = withDefaults(defineProps<Props>(), {
  commands: () => [],
});
</script>
