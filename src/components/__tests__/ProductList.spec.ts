import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { createTestingPinia } from '@pinia/testing'
import { render } from '@testing-library/vue'
import '@testing-library/jest-dom/vitest'
import { userEvent } from '@testing-library/user-event'

import ProductList from '@/components/ProductList.vue'
import type { IProductWidget } from '@/types/product'

const products: IProductWidget[] = [
  {
    id: 1,
    type: 'plastic bottles',
    amount: 100,
    action: 'collects',
    active: true,
    linked: true,
    selectedColor: 'green'
  },
  {
    id: 2,
    type: 'trees',
    amount: 10,
    action: 'plants',
    active: false,
    linked: false,
    selectedColor: 'black'
  },
  {
    id: 3,
    type: 'carbon',
    amount: 20,
    action: 'offsets',
    active: false,
    linked: false,
    selectedColor: 'blue'
  }
]

const setup = () =>
  render(ProductList, {
    props: {
      products
    },
    global: {
      plugins: [createTestingPinia()]
    }
  })

describe('ProductList.vue', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('renders a list of product widgets', () => {
    const { getAllByText } = setup()

    expect(getAllByText(/This product/i)).toHaveLength(3)
  })

  it('allows setting active state for widgets', async () => {
    const { getAllByLabelText } = setup()
    const activeToggles = getAllByLabelText(/Active badge/i)

    await userEvent.click(activeToggles[1])

    expect(activeToggles[1]).toBeChecked()
  })
})
