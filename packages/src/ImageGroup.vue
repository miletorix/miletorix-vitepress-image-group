<template>
  <div :class="containerClass">
    <!-- для big и double обёртка, для icon — без неё -->
    <div v-if="type !== 'icon'" class="image-group-images">
      <img
        v-for="(src, index) in sources"
        :key="index"
        :src="src"
        :alt="`${alt || 'ImageGroup'} - ${type}`"
        :class="imageClass"
        loading="lazy"
      />
    </div>
    <template v-else>
      <img
        v-for="(src, index) in sources"
        :key="index"
        :src="src"
        :alt="`${alt || 'ImageGroup'} - ${type}`"
        :class="imageClass"
        loading="lazy"
      />
    </template>
    <p v-if="caption" class="image-group-caption">
      {{ caption }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  sources: string[]
  type?: string
  alt?: string
  caption?: string
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
  justify-content: space-evenly; /* ключевой момент */
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px;
}

.image-preview-div-for-big,
.image-preview-div-for-double {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px;
}

.image-group-images {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}

.image-preview-icon {
  width: 64px;
  height: 64px;
  border-radius: 12px;
  padding: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  object-fit: contain;
  transition: transform 0.2s ease-in-out;
}

.image-preview-big {
  width: 800px;
  height: auto;
  border-radius: 12px;
  padding: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  object-fit: contain;
  transition: transform 0.2s ease-in-out;
}

.image-preview-double {
  box-sizing: border-box;
  width: 47%;
  padding: 8px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  object-fit: contain;
  transition: transform 0.2s ease-in-out;
}

.image-group-caption {
  margin-top: 8px;
  font-size: 0.9rem;
  text-align: center;
  color: var(--vp-c-text-2, #666);
  max-width: 100%;
  line-height: 1.4;
  font-style: italic;
}
</style>
