import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { createTestingPinia } from '@pinia/testing'
import { render } from '@testing-library/vue'
import { userEvent } from '@testing-library/user-event'
import '@testing-library/jest-dom/vitest'

import ProductWidget from '@/components/ProductWidget.vue'
import type { IProductWidget, ProductWidgetColor } from '@/types/product'

const product: IProductWidget = {
  id: 1,
  type: 'plastic bottles',
  amount: 100,
  action: 'collects',
  active: false,
  linked: false,
  selectedColor: 'green'
}

const setup = () =>
  render(ProductWidget, {
    props: {
      product
    },
    global: {
      plugins: [createTestingPinia()]
    }
  })

describe('ProductWidget.vue', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('renders product widget with the correct data', () => {
    const { getByText, getByLabelText } = setup()

    expect(getByText(`This product ${product.action}`)).toBeInTheDocument()
    expect(getByText(`${product.amount} ${product.type}`)).toBeInTheDocument()
    expect(getByLabelText(/Link to public profile/i)).toBeInTheDocument()
    expect(getByText(product.selectedColor)).toBeInTheDocument()
    expect(getByLabelText(/Active badge/i)).toBeInTheDocument()
  })

  it('allows changing widget colors', async () => {
    const { getByRole, getByText } = setup()
    const selectedColor: ProductWidgetColor = 'blue'

    await userEvent.click(getByText(selectedColor))
    expect(getByRole('option', { selected: true })).toHaveTextContent(product.selectedColor)
  })

  it('allows linking widgets to public profiles', async () => {
    const { getByText, getByLabelText } = setup()
    const linkToPublicProfile = getByLabelText(/Link to Public Profile/i)

    await userEvent.click(linkToPublicProfile)

    expect(linkToPublicProfile).toBeChecked()
    expect(getByText(/View public profile/i)).toBeInTheDocument()
  })
})
