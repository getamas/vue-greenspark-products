<script setup lang="ts">
import { onMounted } from 'vue'
import ProductList from '@/components/ProductList.vue'
import { useProductStore } from '@/stores/products'

const store = useProductStore()

onMounted(store.fetchProducts)
</script>

<template>
  <div class="page-container">
    <div class="wrapper">
      <h1>Per product widgets</h1>
      <div v-if="store.error">{{ store.error }}</div>
      <ProductList
        v-if="!store.isLoading && store.products.length > 0"
        :products="store.products"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-container {
  min-height: 100vh;

  @media (min-width: 992px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.wrapper {
  padding: 36px;
  margin: 48px 22px;
  border-radius: 8px;
  box-shadow:
    0px 0.77778px 2.99074px 0px rgba(0, 0, 0, 0.01),
    0px 3.42222px 6.19259px 0px rgba(0, 0, 0, 0.02),
    0px 8.4px 12.35px 0px rgba(0, 0, 0, 0.03),
    0px 16.17778px 24.20741px 0px rgba(0, 0, 0, 0.03),
    0px 27.22222px 44.50926px 0px rgba(0, 0, 0, 0.04),
    0px 42px 76px 0px rgba(0, 0, 0, 0.05);
  background-color: var(--color-background);

  @media (min-width: 992px) {
    width: 850px;
    height: 420px;
    margin: 0;
  }
}

h1 {
  font-size: 30px;
  font-weight: 700;
  line-height: 36px;
  padding-bottom: 12px;
  border-bottom: 2px solid var(--color-border);
  text-align: center;

  @media (min-width: 992px) {
    text-align: left;
  }
}
</style>
