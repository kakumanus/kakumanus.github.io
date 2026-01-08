<template>
  <div class="projects-grid">
    <a
        v-for="project in projects"
        :key="project.id"
        :href="project.link"
        target="_blank"
        class="project-card"
    >
      <img :src="project.image" :alt="project.title" class="project-image" />
      <div class="project-info">
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <div v-if="project.tags" class="project-tags">
          <span v-for="tag in project.tags" :key="tag" class="project-tag">{{ tag }}</span>
        </div>
      </div>
    </a>
  </div>
</template>

<script setup>
defineProps({
  projects: {
    type: Array,
    required: true
  }
});
</script>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
}

.project-card {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease-out;
  text-decoration: none;
  color: #fff;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.4);
}

.project-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.project-info {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.project-info h3 {
  margin: 0;
  font-size: 1.25rem;
}

.project-info p {
  margin: 0;
  font-size: 0.95rem;
  opacity: 0.9;
  line-height: 1.5;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: auto;
}

.project-tag {
  background: rgba(255, 255, 255, 0.15);
  font-family: 'IBM Plex Mono', monospace;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .project-image {
    height: 180px;
  }
}
</style>