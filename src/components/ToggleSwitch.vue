<script setup lang="ts">
interface ToggleSwitchProps {
  value: boolean
  id: string
  label: string
}

const { value, id } = defineProps<ToggleSwitchProps>()
const emit = defineEmits<{
  (e: 'change', value: boolean): void
}>()

const toggleSwitch = (event: Event) => {
  const checked = (event.target as HTMLInputElement).checked
  emit('change', checked)
}
</script>

<template>
  <div class="toggle-switch" :class="{ checked: value }">
    <input
      :id="id"
      type="checkbox"
      class="toggle-checkbox"
      :checked="value"
      @change="toggleSwitch"
    />
    <label :for="id" class="toggle-label">
      <span class="sr-only">{{ label }}</span>
      <span class="toggle-inner"></span>
      <span class="toggle-switch"></span>
    </label>
  </div>
</template>

<style lang="scss" scoped>
.toggle-switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
}

.toggle-checkbox {
  display: none;
}

.toggle-label {
  display: block;
  width: 100%;
  height: 100%;
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;

  &:hover .toggle-switch {
    box-shadow:
      0 0 0 5px rgba(175, 198, 189, 0.5),
      0 0 2px rgba(0, 0, 0, 0.2);
  }

  .toggle-switch {
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: var(--white-100);
    border: 1px solid var(--beige);
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
    transition: left 0.3s;
  }
}

.toggle-inner {
  display: block;
  width: 100%;
  height: 100%;
  background: var(--white-100);
  border-radius: 20px;
  border: 1px solid var(--light-green);
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2) inset;
  transition: background 0.3s;
}

.checked {
  .toggle-label {
    &:hover .toggle-switch {
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
    }
  }

  .toggle-inner {
    background: var(--green);
    border-color: var(--gray);
  }

  .toggle-switch {
    left: 20px;
    border-color: var(--green);
  }
}
</style>
