<template>
  <div
      class="project-tile"
      :class="{ featured: project.featured }"
      :style="{ backgroundColor: project.color || '#073072' }"
  >
    <img v-if="project.image" :src="project.image.src" :alt="project.imageAlt" class="background-image" />
    <div class="overlay"></div>
    <div class="content">
      <h3>{{ project.title }}</h3>
      <p class="subtitle">{{ project.subtitle }}</p>
      <p v-if="project.featured" class="description">{{ project.description }}</p>
      <div class="tags">
        <span v-for="tag in project.tags.slice(0, 3)" :key="tag" class="tag">{{ tag }}</span>
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
</script>

<style scoped>
.project-tile {
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  border-radius: 24px;
  overflow: hidden;
  color: #fff;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(3px);
  transform: scale(1.1);
  z-index: 1;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 2;
}

.content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

h3 {
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
  margin: 0;
}

.subtitle {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.80rem;
  margin: 0;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.25rem;
}

.description {
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 0.25rem 0 0 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Featured: fills its larger grid area and lets the visual show through */
.featured {
  aspect-ratio: auto;
  height: 100%;
  min-height: 16rem; /* fallback if filtered into a row by itself */
}

@media (max-width: 968px) {
  .featured {
    aspect-ratio: 2 / 1;
    height: auto;
  }
}

.featured .background-image {
  filter: blur(1px);
}

.featured .overlay {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.85) 30%, rgba(0, 0, 0, 0.3));
}

.featured h3 {
  font-size: 1.5rem;
}

.tag {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.7rem;
  padding: 0.2rem 0.55rem;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
}

@media (max-width: 768px) {
  .content {
    padding: 2rem;
  }

  .featured {
    aspect-ratio: 1;
    height: auto;
  }

  .featured .description {
    display: none;
  }

  h3 {
    font-size: 1.25rem;
  }
}
</style>
