import { render as VTLrender, RenderOptions } from '@testing-library/vue'

export const render = (component: unknown, options?: RenderOptions) => {
  return VTLrender(component, {
    ...options
  })
}
