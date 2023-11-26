import { defineStore } from 'pinia'
import type { IProductWidget, ProductWidgetColor } from '@/types/product'

interface State {
  products: IProductWidget[]
  activeProduct: number | null
  isLoading: boolean
  error: string
}

export const useProductStore = defineStore('products', {
  state: () =>
    ({
      products: [],
      activeProduct: null,
      isLoading: false,
      error: ''
    }) as State,
  getters: {},
  actions: {
    async fetchProducts() {
      this.isLoading = true

      try {
        const response = await fetch(import.meta.env.VITE_API_PRODUCTS_URL)

        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }

        const data: IProductWidget[] = await response.json()
        this.products = data

        const activeProduct = this.products.find((product) => product.active)

        if (activeProduct) {
          this.activeProduct = activeProduct.id
        }
      } catch (err) {
        this.error = 'Failed to load products'
      } finally {
        this.isLoading = false
      }
    },
    setSelectedColor(id: number, color: ProductWidgetColor) {
      const index = this.findIndexById(id)
      this.products[index].selectedColor = color
    },
    setLinked(id: number, value: boolean) {
      const index = this.findIndexById(id)
      this.products[index].linked = value
    },
    setActive(id: number, isActive: boolean) {
      const index = this.findIndexById(id)
      this.products[index].active = isActive

      if (isActive) {
        this.activeProduct = id
        this.products = this.products.map((product) => {
          if (product.id !== this.activeProduct) {
            product.active = false
          }

          return product
        })
      }
    },
    findIndexById(id: number) {
      return this.products.findIndex((item) => item.id === id)
    }
  }
})
