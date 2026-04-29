<template>
  <section class="section projects" id="projects">
    <div v-if="!selectedProject">
      <h2>Here are some projects I want to share with you.</h2>

      <div class="filter-row" ref="dropdownRef">
        <span class="filter-label">Filter by</span>
        <div class="filter-dropdown">
          <button class="dropdown-trigger" @click="dropdownOpen = !dropdownOpen">
            <span class="trigger-text">{{ triggerLabel }}</span>
            <span class="trigger-arrow" :class="{ open: dropdownOpen }">▾</span>
          </button>
          <div v-if="dropdownOpen" class="dropdown-panel">
            <label v-for="tag in allTags" :key="tag" class="checkbox-item">
              <input type="checkbox" :value="tag" v-model="activeTags" class="checkbox" />
              <span class="checkbox-label">{{ tag }}</span>
            </label>
          </div>
        </div>
      </div>

      <div class="projects-grid">
        <div
            v-for="project in filteredProjects"
            :key="project.id"
            @click="selectProject(project)"
            class="project-tile-wrapper"
        >
          <ProjectTile :project="project" />
        </div>
      </div>
    </div>
    <ProjectDetail
        v-else
        :project="selectedProject"
        @close="selectedProject = null"
    />
  </section>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue';
import ProjectTile from '../ui/ProjectTile.vue';
import ProjectDetail from '../ui/ProjectDetail.vue';
import { projects } from '../../constants.js';

const emit = defineEmits(['expand', 'collapse']);

const selectedProject = ref(null);
const activeTags = ref([]);
const dropdownOpen = ref(false);
const dropdownRef = ref(null);

const allTags = computed(() => [...new Set(projects.flatMap(p => p.tags))]);

const triggerLabel = computed(() => {
  if (activeTags.value.length === 0) return 'all projects';
  if (activeTags.value.length > 2) return `${activeTags.value.length} selected`;
  return activeTags.value.join(', ');
});

const filteredProjects = computed(() =>
    activeTags.value.length === 0
        ? projects
        : projects.filter(p => activeTags.value.some(tag => p.tags.includes(tag)))
);

const selectProject = (project) => {
  selectedProject.value = project;
  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
};

const handleClickOutside = (e) => {
  if (dropdownRef.value && !dropdownRef.value.contains(e.target)) {
    dropdownOpen.value = false;
  }
};

onMounted(() => document.addEventListener('click', handleClickOutside));
onUnmounted(() => document.removeEventListener('click', handleClickOutside));

watch(selectedProject, (val) => emit(val ? 'expand' : 'collapse'));
</script>

<style scoped>
.projects {
  background: #f5f5f5;
}

.filter-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 1.5rem 0 2rem 0;
  position: relative;
}

.filter-label {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.9rem;
  color: #555;
}

.filter-dropdown {
  position: relative;
}

.dropdown-trigger {
  background: none;
  border: none;
  cursor: pointer;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.9rem;
  color: #073072;
  text-decoration: underline;
  text-decoration-color: #073072;
  text-decoration-thickness: 2px;
  text-underline-offset: 3px;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  transition: opacity 0.2s ease-out;
}

.dropdown-trigger:hover {
  opacity: 0.7;
}

.trigger-arrow {
  display: inline-block;
  transition: transform 0.2s ease-out;
  line-height: 1;
}

.trigger-arrow.open {
  transform: rotate(180deg);
}

.dropdown-panel {
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 0;
  background: #fff;
  border: 1px solid rgba(7, 48, 114, 0.15);
  border-radius: 10px;
  padding: 0.5rem;
  z-index: 10;
  min-width: 200px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.checkbox-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.15s ease-out;
}

.checkbox-item:hover {
  background: rgba(7, 48, 114, 0.05);
}

.checkbox {
  accent-color: #073072;
  width: 14px;
  height: 14px;
  cursor: pointer;
  flex-shrink: 0;
}

.checkbox-label {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.85rem;
  color: #333;
  cursor: pointer;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.project-tile-wrapper {
  cursor: pointer;
  transition: filter 0.3s ease-out;
}

.project-tile-wrapper:hover {
  filter: drop-shadow(0 0 20px rgba(7, 48, 114, 0.6));
}

@media (max-width: 968px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .projects {
    padding: 2.5rem 3rem;
  }
}

@media (max-width: 768px) {
  .projects {
    padding: 2rem 1.5rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>
