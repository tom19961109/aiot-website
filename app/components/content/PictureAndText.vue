<template>
  <div class="grid items-center gap-8 md:grid-cols-2">
    <div class="min-w-0">
      <slot />
    </div>
    <div class="min-w-0 [&_img]:mx-auto [&_img]:h-auto [&_img]:max-w-full">
      <slot name="image" />
    </div>
  </div>
</template>