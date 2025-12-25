<template>
  <div class="experience-tile">
    <img :src="experience.image.src" :alt="experience.imageAlt" class="background-image" />
    <div class="overlay"></div>

    <div class="content">
      <h3>{{ experience.title }}</h3>
      <p class="organization">{{ experience.organization }}</p>
      <p v-if="experience.department" class="department">{{ experience.department }}</p>
      <p class="dates">{{ experience.dates }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  experience: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
.experience-tile {
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
}

h3 {
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
}

.organization{
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.80rem;
}

.department {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.80rem;
}

.dates {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 1rem;
  font-weight: 500;
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