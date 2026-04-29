<template>
  <div>
    <ProjectsSection
        v-show="!experienceExpanded"
        @expand="projectsExpanded = true"
        @collapse="projectsExpanded = false"
    />
    <ExperienceSection
        v-show="!projectsExpanded"
        @expand="experienceExpanded = true"
        @collapse="experienceExpanded = false"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ProjectsSection from './sections/ProjectsSection.vue';
import ExperienceSection from './sections/ExperienceSection.vue';

const projectsExpanded = ref(false);
const experienceExpanded = ref(false);
</script>
