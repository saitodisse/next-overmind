import { AsyncAction, Action, rehydrate } from 'overmind'

export const changePage = ({ state }, mutations) => {
  rehydrate(state, mutations || [])

  switch (state.page) {
    case 'index':
      // Do some additional logic
      break
    case 'other-page':
      // Do some additional logic
      break
    case 'change-title-on-server':
      // Do some additional logic
      break
    default:
      break
  }
}

export const titleChanged: Action<string | void> = ({ state }, newTitle) => {
  state.title = newTitle || ''
}

export const menuToggled: Action = ({ state }) => {
  state.menuOpened = !state.menuOpened
}
