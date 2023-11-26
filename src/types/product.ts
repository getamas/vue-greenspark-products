export type ProductWidgetColor = 'white' | 'black' | 'blue' | 'green' | 'beige'

export interface IProductWidget {
  id: number
  type: 'carbon' | 'plastic bottles' | 'trees'
  amount: number
  action: 'collects' | 'plants' | 'offsets'
  active: boolean
  linked: boolean
  selectedColor: ProductWidgetColor
}
