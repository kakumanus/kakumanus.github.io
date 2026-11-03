<template>
  <DetailView
      :title="experience.title"
      :subtitles="[experience.organization, experience.department].filter(Boolean)"
      :dates="experience.dates"
      :description="experience.description"
      :tags="experience.skills"
      :action="experience.buttonLink ? { href: experience.buttonLink, text: experience.buttonText || 'Learn More' } : null"
      :color="experience.color || '#073072'"
      @close="$emit('close')"
  >
    <template v-if="experience.images?.length" #media>
      <div class="carousel-container">
        <div class="carousel">
          <img
              :src="experience.images[currentImageIndex]"
              :alt="`${experience.title} image ${currentImageIndex + 1}`"
              class="carousel-image"
          />
          <div v-if="experience.images.length > 1" class="carousel-controls">
            <button @click="previousImage" class="carousel-arrow">←</button>
            <button @click="nextImage" class="carousel-arrow">→</button>
          </div>
          <div v-if="experience.images.length > 1" class="carousel-tracker">
            <span
                v-for="(img, idx) in experience.images"
                :key="idx"
                @click="currentImageIndex = idx"
                :class="['tracker-line', { active: idx === currentImageIndex }]"
            ></span>
          </div>
        </div>
      </div>
    </template>
  </DetailView>
</template>

<script setup>
import { ref } from 'vue';
import DetailView from './DetailView.vue';

const props = defineProps({
  experience: {
    type: Object,
    required: true
  }
});

defineEmits(['close']);

const currentImageIndex = ref(0);

const nextImage = () => {
  if (props.experience.images && props.experience.images.length > 0) {
    currentImageIndex.value = (currentImageIndex.value + 1) % props.experience.images.length;
  }
};

const previousImage = () => {
  if (props.experience.images && props.experience.images.length > 0) {
    currentImageIndex.value =
        currentImageIndex.value === 0
            ? props.experience.images.length - 1
            : currentImageIndex.value - 1;
  }
};
</script>

<style scoped>
.carousel-container {
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.carousel {
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  overflow: hidden;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel-controls {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  pointer-events: none;
}

.carousel-arrow {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.4);
  font-size: 1.5rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.2s ease-out;
  pointer-events: auto;
}

.carousel-arrow:hover {
  background: rgba(255, 255, 255, 0.3);
}

.carousel-tracker {
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 20px;
}

.tracker-line {
  width: 30px;
  height: 3px;
  background: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: all 0.2s ease-out;
  border-radius: 2px;
}

.tracker-line.active {
  background: #fff;
  width: 40px;
}

.tracker-line:hover {
  background: rgba(255, 255, 255, 0.6);
}

@media (max-width: 968px) {
  .carousel-container {
    max-width: 500px;
  }
}

@media (max-width: 768px) {
  .carousel-container {
    max-width: 100%;
  }
}
</style>
