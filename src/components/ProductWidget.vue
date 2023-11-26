<script setup lang="ts">
import { computed } from 'vue'

import type { IProductWidget, ProductWidgetColor } from '@/types/product'
import { useProductStore } from '@/stores/products'

import IconInfo from '@/components/icons/IconInfo.vue'
import IconLogo from '@/components/icons/IconLogo.vue'
import ToggleSwitch from '@/components/ToggleSwitch.vue'
import BaseCheckbox from '@/components/BaseCheckbox.vue'
import Tooltip from '@/components/Tooltip.vue'

interface ProductListItemProps {
  product: IProductWidget
}

const { product } = defineProps<ProductListItemProps>()

const store = useProductStore()

const colors: ProductWidgetColor[] = ['blue', 'green', 'beige', 'white', 'black']

const mainColor = computed(() => {
  return ['beige', 'white'].includes(product.selectedColor) ? 'green' : 'white'
})
</script>

<template>
  <div class="product-widget">
    <div
      class="product-widget-header"
      :style="{ backgroundColor: `var(--${product.selectedColor})` }"
    >
      <IconLogo :color="mainColor" />
      <div>
        <h4 class="product-widget-sub-heading" :style="{ color: mainColor }">
          This product {{ product.action }}
        </h4>
        <h3 class="product-widget-heading" :style="{ color: mainColor }">
          {{ product.amount }}<span v-if="product.type === 'carbon'">kgs</span>
          {{ product.type }}
        </h3>
      </div>
    </div>
    <div class="product-widget-body">
      <div class="product-widget-feature">
        <span>
          Link to Public Profile
          <Tooltip text="I am button">
            <IconInfo />
            <template v-slot:content>
              <p>
                This widget links directly to your public profile so that you can easily share your
                impact with your customers. Turn it off here if you do not want the badge to link to
                it.
              </p>
              <a href="#">View Public Profile</a>
            </template>
          </Tooltip>
        </span>
        <BaseCheckbox
          :id="`public-profile-${product.id}`"
          label="Link to Public Profile"
          :value="product.linked"
          @change="(value: boolean) => store.setLinked(product.id, value)"
        />
      </div>
      <div class="product-widget-feature">
        <span :id="`widget-color-${product.id}`">Badge colour</span>
        <ul
          class="product-widget-colors"
          role="listbox"
          :aria-labelledby="`widget-color-${product.id}`"
        >
          <li
            v-for="(color, index) in colors"
            :key="index"
            role="option"
            class="product-widget-color"
            :class="{ selected: product.selectedColor === color }"
            :aria-selected="product.selectedColor === color"
            :style="{ backgroundColor: `var(--${color})` }"
            @click="store.setSelectedColor(product.id, color)"
          >
            <span class="sr-only">{{ color }}</span>
          </li>
        </ul>
      </div>
      <div class="product-widget-feature">
        <span>Active badge</span>
        <ToggleSwitch
          :id="`active-${product.id}`"
          label="Active badge"
          :value="product.active"
          @change="(value: boolean) => store.setActive(product.id, value)"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-widget {
  flex: 1;
}

.product-widget-header {
  display: flex;
  padding: 10px 12px;
  align-items: center;
  gap: 12px;
  border-radius: 6px;
  margin-bottom: 10px;
}

.product-widget-sub-heading {
  color: var(--white);
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 4px;
}

.product-widget-heading {
  color: var(--white);
  font-size: 18px;
  font-weight: 700;

  span {
    font-weight: 700;
  }
}

.product-widget-feature {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 0;

  span {
    color: var(--green);
    font-size: 14px;
    display: flex;
    gap: 2px;
  }
}

.product-widget-colors {
  display: flex;
  gap: 4px;
  list-style: none;
  padding: 0;
}

.product-widget-color {
  width: 16px;
  height: 16px;
  cursor: pointer;

  &:not(.selected):hover {
    opacity: 0.8;
  }

  &.selected {
    border: 2px solid var(--gray);
  }
}
</style>
