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
      <div v-if="experience.description" class="section">
        <h3>About</h3>
        <p>{{ experience.description }}</p>
      </div>

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

defineEmits(['close']);
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
  padding: 0rem 6rem;
  color: #fff;
  min-height: 300px;
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
}

.back-button:hover {
  opacity: 0.7;
}

.dates {
  font-weight: 500;
}

.detail-content {
  padding: 1rem 6rem 4rem 6rem;
  color: #fff;
}

.section {
  margin-bottom: 4rem;
}

.section:last-child {
  margin-bottom: 0;
}

.section p {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 1rem;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  padding-left: 2rem;
  margin-bottom: 1rem;
  position: relative;
  font-size: 1.05rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.9);
}

li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: #fff;
  font-weight: 600;
}

@media (max-width: 768px) {
  .detail-hero {
    padding: 3rem 2rem;
    min-height: 250px;
  }

  .back-button {
    top: 1.5rem;
    left: 2rem;
    font-size: 1.25rem;
  }

  .detail-content {
    padding: 3rem 2rem;
  }

  .section {
    margin-bottom: 3rem;
  }
}
</style>