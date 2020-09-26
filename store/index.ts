import { createHook } from 'overmind-react'
import * as actions from './actions'
import * as effects from './effects'
import { state } from './state'
import { onInitialize } from './onInitialize'
import { IConfig } from 'overmind/lib/types'

export const config = { state, actions, onInitialize, effects }
export const useOvermind = createHook<typeof config>()

declare module 'overmind' {
  // tslint:disable:interface-name
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Config extends IConfig<typeof config> {}
}
