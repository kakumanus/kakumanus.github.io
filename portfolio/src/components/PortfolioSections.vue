<template>
  <div>
    <ProjectsSection v-show="!experienceExpanded" />
    <ExperienceSection
        @expand="experienceExpanded = true"
        @collapse="experienceExpanded = false"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ProjectsSection from './sections/ProjectsSection.vue';
import ExperienceSection from './sections/ExperienceSection.vue';

const experienceExpanded = ref(false);
</script>
