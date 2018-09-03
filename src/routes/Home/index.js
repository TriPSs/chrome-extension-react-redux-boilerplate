import HomeComponent from './HomeComponent'

export * as HomeConstants from './HomeConstants'
export { default as homeReducer } from './HomeReducer'

export default {
  path     : '/',
  component: HomeComponent,
}
