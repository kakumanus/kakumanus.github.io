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
import ExperienceTile from './ExperienceTile.vue';
import ExperienceDetail from './ExperienceDetail.vue';
import pennImg from '../../assets/penn.jpg';
import jpmcImg from '../../assets/jpmc.jpg';
import aaoImg from '../../assets/AAO.png';
import blockOImg from '../../assets/block_o.png';

const selectedExperience = ref(null);

const experiences = [
  {
    id: 1,
    image: pennImg,
    color:'#990000',
    imageAlt: 'University of Pennsylvania',
    title: 'Master of Urban Spatial Analytics',
    organization: 'University of Pennsylvania',
    department: 'Weitzman School of Design',
    dates: 'Class of 2026',
    description: 'DESCRIPTION',
  },
  {
    id: 2,
    color:'#996c48',
    image: jpmcImg,
    imageAlt: 'JPMorgan Chase',
    title: 'Software Engineer I & II',
    organization: 'JPMorgan Chase',
    department: 'Consumer Bank Sales, Incentives, & Growth',
    dates: '2022-25',
    description: 'DESCRIPTION',
  },
  {
    id: 3,
    color:'#388cbb',
    image: aaoImg,
    imageAlt: 'All Aboard Ohio',
    title: 'Board Member & Secretary',
    organization: 'All Aboard Ohio',
    department: 'Board of Directors, Executive Committee',
    dates: '2023-25',
    description: 'DESCRIPTION',
  },
  {
    id: 4,
    color: '#70071c',
    image: blockOImg,
    imageAlt: 'The Ohio State University',
    title: 'B.S Computer Science & Engineering',
    organization: 'The Ohio State University',
    department: 'College of Engineering',
    dates: 'Class of 2021',
    description: 'DESCRIPTION',
  }
];

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