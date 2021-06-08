<template>
  <transition mode="out-in" name="fade">
    <component :is="layout" v-if="layout" />
  </transition>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Component } from 'vue';

import AOS from 'aos';

type IComponents = {
  [key: string]: Component;
};

const rc: { keys(): string[]; <T>(id: string): T } = require.context('./layouts', false, /.*\.vue$/);

const layouts: IComponents = rc.keys().reduce<IComponents>(
  (components: IComponents, file: string): IComponents => ({
    ...components,
    [file.replace(/(^.\/)|(\.vue$)/g, '')]: rc<IComponents>(file)?.default,
  }),
  {}
);

@Options({
  name: 'App',
})
export default class extends Vue {
  // --- computed

  get layout(): Component {
    return layouts[(this.$route as any)?.meta?.layout || 'default'];
  }

  // --- hooks

  mounted(): void {
    AOS.init({
      duration: 500,
      disable: true,
    });
  }

  destroyed(): void {
    //
  }
}
</script>

<style lang="scss" scoped></style>
