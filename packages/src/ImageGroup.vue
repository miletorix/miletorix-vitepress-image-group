<template>
  <div :class="containerClass">
    <div v-if="computedType === 'icon'" class="image-group-images icon-group">
      <img
        v-for="(src, index) in sources"
        :key="index"
        :src="src"
        :alt="`${alt || 'ImageGroup'} - ${computedType}`"
        class="image-preview-icon"
        loading="lazy"
      />
    </div>

    <div v-else class="image-group-images">
      <img
        v-for="(src, index) in sources"
        :key="index"
        :src="src"
        :alt="`${alt || 'ImageGroup'} - ${computedType}`"
        :class="imageClass"
        :style="imageStyle"
        loading="lazy"
      />
    </div>

    <p v-if="caption" class="image-group-caption">
      {{ caption }}
    </p>
  </div>
</template>


<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  sources: string[]
  type?: 'icon' | 'big' | 'double' | 'auto' | 'manual'
  width?: string 
  alt?: string
  caption?: string
}>()

const computedType = computed(() => {
  if (props.type && props.type !== 'auto') return props.type
  const count = props.sources.length
  if (count === 1) return 'big'
  if (count === 2) return 'double'
  return 'icon'
})

const imageClass = computed(() =>
  computedType.value === 'manual' ? 'image-preview-manual' : `image-preview-${computedType.value}`
)

const containerClass = computed(() => `image-preview-div-for-${computedType.value}`)

const imageStyle = computed(() => {
  if (computedType.value === 'manual' && props.width) {
    return { width: props.width, height: 'auto' }
  }
  return {}
})
</script>

<style scoped>

.image-preview-div-for-icon,
.image-preview-div-for-big,
.image-preview-div-for-double,
.image-preview-div-for-manual {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 12px;
}

.image-group-images {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px; 
}

.image-group-images.icon-group {
  justify-content: space-evenly;
  gap: 0; 
  width: 100%;
}


.image-preview-icon {
  width: 70px;
  height: 70px;
  border-radius: 12px;
  padding: 8px;
  object-fit: contain;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease-in-out;
}

.image-preview-big {
  width: 800px;
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  padding: 8px;
  object-fit: contain;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease-in-out;
}

.image-preview-double {
  width: 47%;
  height: auto;
  padding: 8px;
  border-radius: 12px;
  object-fit: contain;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease-in-out;
}


.image-preview-manual {
  padding: 8px;
  border-radius: 12px;
  object-fit: contain;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease-in-out;
}


.image-group-caption {
  margin-top: 8px;
  font-size: 0.9rem;
  text-align: center;
  color: var(--vp-c-text-2, #666);
  line-height: 1.4;
  font-style: italic;
}
</style>
