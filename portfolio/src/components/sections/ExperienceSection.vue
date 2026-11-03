<template>
  <section class="section experience" id="experience" ref="sectionRef">
    <div v-if="!selectedExperience">
      <h2>Explore my work and educational experience.</h2>
      <div class="experience-grid">
        <div
            v-for="exp in experiences"
            :key="exp.id"
            @click="selectExperience(exp)"
            :data-experience-id="exp.id"
            class="experience-tile-wrapper"
        >
          <ExperienceTile :experience="exp" />
        </div>
      </div>
    </div>
    <ExperienceDetail
        v-else
        ref="detailRef"
        :experience="selectedExperience"
        @close="closeExperience"
    />
  </section>
</template>

<script setup>
import { ref, watch } from 'vue';
import ExperienceTile from '../ui/ExperienceTile.vue';
import ExperienceDetail from '../ui/ExperienceDetail.vue';
import { experiences } from '../../constants.js'
import { scrollToCenter } from '../../utils/scroll.js';

const emit = defineEmits(['expand', 'collapse']);

const selectedExperience = ref(null);
const detailRef = ref(null);
const sectionRef = ref(null);

const selectExperience = (exp) => {
  selectedExperience.value = exp;
  scrollToCenter(() => detailRef.value?.$el);
};

// Return to the tile that was opened. Instant, because the Projects section
// reappears above and shifts the page; a smooth scroll would crawl past it.
const closeExperience = () => {
  const id = selectedExperience.value.id;
  selectedExperience.value = null;
  scrollToCenter(
      () => sectionRef.value?.querySelector(`[data-experience-id="${id}"]`),
      'instant'
  );
};

watch(selectedExperience, (val) => emit(val ? 'expand' : 'collapse'));
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

  /* Mobile: horizontal swipe carousel */
  .experience-grid {
    display: flex;
    gap: 1rem;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-padding-inline: 1.5rem;
    margin-inline: -1.5rem; /* bleed to screen edges */
    padding: 0.5rem 1.5rem 1rem;
  }

  .experience-tile-wrapper {
    flex: 0 0 82%; /* next card peeks in */
    scroll-snap-align: start;
  }
}
</style>