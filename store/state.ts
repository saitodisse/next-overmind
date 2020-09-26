export interface State {
  page: any
  title: string
  menuOpened: boolean
}

export const state: State = {
  page: 'index',
  title: '',
  menuOpened: false,
}
