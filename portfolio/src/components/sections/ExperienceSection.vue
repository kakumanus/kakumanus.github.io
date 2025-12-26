<template>
  <section class="section experience" id="experience">
    <div v-if="!selectedExperience">
      <h2>Click below to explore my experience.</h2>
      <div class="experience-grid">
        <div
            v-for="exp in experiences"
            :key="exp.id"
            @click="selectExperience(exp)"
            class="experience-tile-wrapper"
        >
          <ExperienceTile :experience="exp" />
        </div>
      </div>
    </div>
    <ExperienceDetail
        v-else
        :experience="selectedExperience"
        @close="selectedExperience = null"
    />
  </section>
</template>

<script setup>
import { ref } from 'vue';
import ExperienceTile from '../ui/ExperienceTile.vue';
import ExperienceDetail from '../ui/ExperienceDetail.vue';
import { experiences } from '../../constants.js'

const selectedExperience = ref(null);

const selectExperience = (exp) => {
  selectedExperience.value = exp;
  document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
};
</script>

<style scoped>
.experience {
  margin: 0 auto;
  background: #f5f5f5;
}

.experience-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.experience-tile-wrapper {
  cursor: pointer;
  transition: filter 0.3s ease-out;
}

.experience-tile-wrapper:hover {
  filter: drop-shadow(0 0 20px rgba(7, 48, 114, 0.6));
}

@media (max-width: 968px) {
  .experience-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .experience {
    padding: 2.5rem 3rem;
  }
}

@media (max-width: 768px) {
  .experience {
    padding: 2rem 1.5rem;
  }

  .experience-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>