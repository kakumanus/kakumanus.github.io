<template>
  <div class="project-tile">
    <img :src="project.image.src" :alt="project.imageAlt" class="background-image" />
    <div class="overlay"></div>
    <div class="content">
      <h3>{{ project.title }}</h3>
      <p class="subtitle">{{ project.subtitle }}</p>
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
  padding-bottom: 100%;
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

  h3 {
    font-size: 1.25rem;
  }
}
</style>
