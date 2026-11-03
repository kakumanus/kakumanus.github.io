import { nextTick } from 'vue';

// Waits for the DOM to update, then centers el in the viewport.
// If el is taller than the viewport, aligns its top instead so the header stays visible.
export async function scrollToCenter(getEl, behavior = 'smooth') {
  await nextTick();
  const el = getEl();
  if (!el) return;
  const fitsInView = el.offsetHeight < window.innerHeight;
  el.scrollIntoView({ behavior, block: fitsInView ? 'center' : 'start' });
}
