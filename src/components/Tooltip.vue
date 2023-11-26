<template>
  <div class="tooltip-container">
    <div class="tooltip-trigger">
      <slot />
    </div>
    <div class="tooltip">
      <div class="tooltip-content">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    text: {
      type: String,
      required: true
    }
  }
})
</script>

<style scoped>
.tooltip-container {
  position: relative;
}

.tooltip-container:hover .tooltip {
  opacity: 1;
  visibility: visible;
}

.tooltip-trigger {
  cursor: pointer;
}

.tooltip {
  position: absolute;
  left: 50%;
  bottom: 100%;
  min-width: 250px;
  margin-left: -125px;
  text-align: center;
  padding: 24px 16px;
  border-radius: 4px;
  background: var(--white);
  opacity: 0;
  visibility: hidden;
  box-shadow:
    0px 0.77778px 2.99074px 0px rgba(0, 0, 0, 0.01),
    0px 3.42222px 6.19259px 0px rgba(0, 0, 0, 0.02),
    0px 8.4px 12.35px 0px rgba(0, 0, 0, 0.03),
    0px 16.17778px 24.20741px 0px rgba(0, 0, 0, 0.03),
    0px 27.22222px 44.50926px 0px rgba(0, 0, 0, 0.04),
    0px 42px 76px 0px rgba(0, 0, 0, 0.05);
  transition: opacity 300ms ease-in-out;
  z-index: 1;
}

.tooltip-content {
  font-size: 14px;
  color: var(--black);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}
</style>
