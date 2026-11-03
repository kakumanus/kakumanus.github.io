<template>
  <div class="detail-view">
    <div class="detail-hero" :style="{ backgroundColor: color }">
      <a v-if="backHref" :href="backHref" class="back-button" aria-label="Back">⟵</a>
      <button v-else @click="$emit('close')" class="back-button" aria-label="Back">⟵</button>
      <div class="hero-content">
        <h2>{{ title }}</h2>
        <p v-for="line in subtitles" :key="line">{{ line }}</p>
        <p v-if="dates" class="dates">{{ dates }}</p>
      </div>
    </div>

    <div class="detail-content" :style="{ backgroundColor: color }">
      <div v-if="description" class="section about-section">
        <h3>About</h3>
        <p class="about">{{ description }}</p>
      </div>

      <div class="content-grid">
        <div class="left-column">
          <a
              v-if="action"
              :href="action.href"
              target="_blank"
              rel="noopener"
              class="action-button"
          >
            {{ action.text }}
          </a>

          <div v-if="tags?.length" class="section">
            <h3>Skills</h3>
            <div class="skills-tags">
              <span v-for="tag in tags" :key="tag" class="skill-tag">{{ tag }}</span>
            </div>
          </div>
        </div>

        <div v-if="$slots.media" class="right-column">
          <slot name="media" />
        </div>
      </div>

      <!-- Full-width content below the grid, e.g. an embedded report -->
      <div v-if="$slots.default" class="detail-footer">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  subtitles: { type: Array, default: () => [] },
  dates: String,
  description: String,
  tags: Array,
  action: Object, // { href, text }
  color: { type: String, default: '#073072' },
  backHref: String, // link back when rendered as a page; otherwise ⟵ emits close
});

defineEmits(['close']);
</script>

<style scoped>
.detail-view {
  animation: fadeIn 0.3s ease-out;
  scroll-margin-top: 5rem; /* clear the fixed header */
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
  text-decoration: none;
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

.detail-footer {
  margin-top: 3rem;
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
