<script setup lang="ts">
interface CustomCheckboxProps {
  value: boolean
  id: string
  label: string
}

const { value, id } = defineProps<CustomCheckboxProps>()
const emit = defineEmits<{
  (e: 'change', value: boolean): void
}>()

const onChange = (event: Event) => {
  const checked = (event.target as HTMLInputElement).checked
  emit('change', checked)
}
</script>

<template>
  <div class="custom-checkbox-wrapper">
    <input class="custom-checkbox" :id="id" type="checkbox" :checked="value" @click="onChange" />
    <label :for="id">
      <span class="sr-only">{{ label }}</span>
    </label>
  </div>
</template>

<style scoped lang="scss">
.custom-checkbox-wrapper {
  position: relative;
}

.custom-checkbox {
  position: absolute;
  opacity: 0;
  width: 18px;
  height: 18px;
  cursor: pointer;
}

.custom-checkbox + label {
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.custom-checkbox + label::before {
  content: '';
  display: inline-block;
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  flex-grow: 0;
  border: 2px solid var(--black);
  border-radius: 3px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 20px 20px;
}

.custom-checkbox + label::after {
  content: '';
  display: inline-block;
  position: absolute;
  left: -50%;
  width: 35px;
  height: 35px;
  z-index: -1;
  border-radius: 50%;
  background-color: rgba(175, 198, 189, 0.5);
}

.custom-checkbox:checked + label::before {
  border-color: var(--green);
  background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzhfNjMyKSI+CjxwYXRoIGQ9Ik0zNS42MjUxIDUuNjI1SDkuMzc1MDZDNy4zMTI1NiA1LjYyNSA1LjYyNTA2IDcuMzEyNSA1LjYyNTA2IDkuMzc1VjM1LjYyNUM1LjYyNTA2IDM3LjY4NzUgNy4zMTI1NiAzOS4zNzUgOS4zNzUwNiAzOS4zNzVIMzUuNjI1MUMzNy42ODc2IDM5LjM3NSAzOS4zNzUxIDM3LjY4NzUgMzkuMzc1MSAzNS42MjVWOS4zNzVDMzkuMzc1MSA3LjMxMjUgMzcuNjg3NiA1LjYyNSAzNS42MjUxIDUuNjI1Wk0yMC4wODEzIDMwLjU0MzhDMTkuMzUwMSAzMS4yNzUgMTguMTY4OCAzMS4yNzUgMTcuNDM3NiAzMC41NDM4TDEwLjcwNjMgMjMuODEyNUM5Ljk3NTA2IDIzLjA4MTIgOS45NzUwNiAyMS45IDEwLjcwNjMgMjEuMTY4N0MxMS40Mzc2IDIwLjQzNzUgMTIuNjE4OCAyMC40Mzc1IDEzLjM1MDEgMjEuMTY4N0wxOC43NTAxIDI2LjU2ODhMMzEuNjUwMSAxMy42Njg3QzMyLjM4MTMgMTIuOTM3NSAzMy41NjI2IDEyLjkzNzUgMzQuMjkzOCAxMy42Njg3QzM1LjAyNTEgMTQuNCAzNS4wMjUxIDE1LjU4MTIgMzQuMjkzOCAxNi4zMTI1TDIwLjA4MTMgMzAuNTQzOFoiIGZpbGw9IiMzQjc1NUYiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF84XzYzMiI+CjxyZWN0IHdpZHRoPSI0NSIgaGVpZ2h0PSI0NSIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K');
}

.custom-checkbox:not(:disabled):not(:checked):hover + label::before {
  background-color: rgba(175, 198, 189, 0.5);
  border-color: var(--green);
}

.custom-checkbox:not(:disabled):not(:checked):hover + label::after {
  z-index: 0;
}

.custom-checkbox:not(:disabled):active + label::before {
  background-color: var(--green);
}

.custom-checkbox:focus:not(:checked) + label::before {
  border-color: var(--black);
}
</style>
