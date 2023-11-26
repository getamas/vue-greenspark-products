<script setup lang="ts">
import ProductWidget from '@/components/ProductWidget.vue'
import type { IProductWidget } from '@/types/product'

interface ProductListProps {
  products: IProductWidget[]
}

const { products } = defineProps<ProductListProps>()
</script>

<template>
  <div class="product-list">
    <ProductWidget v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>

<style lang="scss" scoped>
.product-list {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 30px;
  padding: 20px;

  @media (min-width: 992px) {
    flex-direction: row;
    gap: 55px;
    padding: 20px 0 0;
  }
}
</style>
