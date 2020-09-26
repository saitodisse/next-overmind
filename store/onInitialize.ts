import { OnInitialize } from 'overmind'

export const onInitialize: OnInitialize = async ({ effects, state }) => {
  state.title = `${state.title} + onInitialize`
}
