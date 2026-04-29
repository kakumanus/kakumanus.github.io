<template>
  <div class="project-detail">
    <div class="detail-hero" :style="{ backgroundColor: project.color || '#073072' }">
      <button @click="$emit('close')" class="back-button">⟵</button>
      <div class="hero-content">
        <h2>{{ project.title }}</h2>
        <p class="subtitle">{{ project.subtitle }}</p>
      </div>
    </div>

    <div class="detail-content" :style="{ backgroundColor: project.color || '#073072' }">
      <div v-if="project.description" class="section about-section">
        <h3>About</h3>
        <p class="about">{{ project.description }}</p>
      </div>

      <div class="content-grid">
        <div class="left-column">
          <a
              v-if="project.link"
              :href="project.link"
              target="_blank"
              class="action-button"
          >
            {{ project.linkText || 'View Project ⧉' }}
          </a>
          <div v-if="project.tags?.length" class="section">
            <h3>Skills & Methods</h3>
            <div class="tags-list">
              <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </div>
        </div>

        <div class="right-column">
          <img :src="project.image.src" :alt="project.imageAlt" class="project-image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  }
});

defineEmits(['close']);
</script>

<style scoped>
.project-detail {
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

.subtitle {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.95rem;
  margin: 0;
}

.detail-content {
  padding: 0 6rem 4rem 6rem;
  color: #fff;
}

.about-section {
  margin-bottom: 3rem;
  max-width: 800px;
}

.about {
  font-family: 'Inter', sans-serif;
  line-height: 1.7;
  margin: 0;
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

.section h3 {
  margin: 0 0 1rem 0;
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
  opacity: 1;
}

.tags-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.tag {
  background: rgba(255, 255, 255, 0.15);
  font-family: 'IBM Plex Mono', monospace;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.right-column {
  position: sticky;
  top: 2rem;
}

.project-image {
  width: 100%;
  border-radius: 12px;
  object-fit: cover;
  display: block;
}

@media (max-width: 968px) {
  .content-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .right-column {
    position: static;
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
}
</style>
