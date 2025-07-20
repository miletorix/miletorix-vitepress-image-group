<template>
  <div :class="containerClass">
    <img
      v-for="(src, index) in sources"
      :key="index"
      :src="src"
      :alt="`${alt || 'ImageGroup'} - ${type}`"
      :class="imageClass"
      loading="lazy"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  sources: string[]
  type?: string
  alt?: string
}>()

const imageClass = computed(() => {
  return `image-preview-${props.type ?? 'icon'}`
})

const containerClass = computed(() => {
  return `image-preview-div-for-${props.type ?? 'icon'}`
})
</script>


<style scoped>
.image-preview-div-for-icon {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px;
}

.image-preview-div-for-big {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px;
}

.image-preview-div-for-double {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
}

.image-preview-icon {
  width: 64px;
  height: 64px;
  border-radius: 12px;
  /* background-color: white; */
  padding: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  object-fit: contain;
  transition: transform 0.2s ease-in-out;
}

.image-preview-big {
  width: 800px;
  height: auto;
  border-radius: 12px;
  /* background-color: white; */
  padding: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  object-fit: contain;
  transition: transform 0.2s ease-in-out;
}
.image-preview-double {
  box-sizing: border-box;
  /* margin-top: 20px; */
  width: 47%;
  padding: 8px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  object-fit: contain;
  transition: transform 0.2s ease-in-out;
}
</style>