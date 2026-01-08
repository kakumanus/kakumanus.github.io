<template>
  <div class="experience-detail">
    <div class="detail-hero" :style="{ backgroundColor: experience.color || '#073072' }">
      <button @click="$emit('close')" class="back-button">
        ⟵
      </button>
      <div class="hero-content">
        <h2>{{ experience.title }}</h2>
        <p>{{ experience.organization }}</p>
        <p v-if="experience.department" class="department">{{ experience.department }}</p>
        <p class="dates">{{ experience.dates }}</p>
      </div>
    </div>

    <div class="detail-content" :style="{ backgroundColor: experience.color || '#073072' }">

      <!-- About: always shown, once -->
      <div v-if="experience.description" class="section about-section">
        <h3>About</h3>
        <p class="about">{{ experience.description }}</p>
      </div>

      <!-- Either Projects Grid OR Detailed Layout -->
      <ProjectsGrid
          v-if="experience.isProjectsGallery && experience.projects"
          :projects="experience.projects"
      />

      <div v-else class="content-grid">
        <div class="left-column">
          <a
              v-if="experience.buttonLink"
              :href="experience.buttonLink"
              target="_blank"
              class="action-button"
          >
            {{ experience.buttonText || 'Learn More' }}
          </a>

          <div v-if="experience.skills && experience.skills.length" class="section">
            <h3>Skills</h3>
            <div class="skills-tags">
              <span v-for="skill in experience.skills" :key="skill" class="skill-tag">
                {{ skill }}
              </span>
            </div>
          </div>
        </div>

        <div v-if="experience.images && experience.images.length" class="right-column">
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
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ProjectsGrid from './ProjectsGrid.vue';

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
.experience-detail {
  animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.detail-hero {
  position: relative;
  padding: 4rem 6rem 2rem 6rem;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.back-button {
  position: absolute;
  top: 2rem;
  left: 6rem;
  background: none;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem 0.5rem 0.5rem 0;
  transition: opacity 0.2s ease-out;
  z-index: 10;
}

.back-button:hover {
  opacity: 0.7;
}

.dates {
  font-weight: 500;
}

.detail-content {
  padding: 0 6rem 4rem 6rem;
  color: #fff;
}

.about-section {
  margin-bottom: 3rem;
  max-width: 800px;
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.left-column {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.right-column {
  display: flex;
  justify-content: center;
  position: sticky;
  top: 2rem;
}

.section h3 {
  margin: 0 0 1rem 0;
}

.section p {
  margin: 0;
  line-height: 1.7;
}

.about {
  font-family: 'Inter', sans-serif;
}

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

.action-button {
  font-family: 'IBM Plex Mono', monospace;
  padding: 0.75rem 2rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #fff;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.2s ease-out;
  width: fit-content;
}

.action-button:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.5);
}

.skills-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.skill-tag {
  background: rgba(255, 255, 255, 0.15);
  font-family: 'IBM Plex Mono', monospace;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

@media (max-width: 968px) {
  .content-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .right-column {
    position: static;
  }

  .carousel-container {
    max-width: 500px;
  }
}

@media (max-width: 768px) {
  .detail-hero {
    padding: 4rem 2rem 2rem 2rem;
  }

  .back-button {
    top: 1.5rem;
    left: 2rem;
    font-size: 1.25rem;
  }

  .detail-content {
    padding: 0 2rem 2rem 2rem;
  }

  .content-grid {
    gap: 2rem;
  }

  .carousel-container {
    max-width: 100%;
  }
}
</style>