import { createStore, Store } from 'vuex';

export type State = {
  test: string;
};

export const state: State = {
  test: '12345',
};

export default createStore<State>({
  state,
});

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
