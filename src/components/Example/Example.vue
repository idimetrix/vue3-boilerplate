<template>
  <div class="x-example">
    <slot />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import log from '@/log';

@Options({
  props: {
    type: {
      type: String,
      default: '',
    },
  },
  name: 'Example',
})
export default class Button extends Vue {
  // --- props

  public type!: string;

  // --- hooks

  public beforeCreate?(): void {
    this.$log(`beforeCreate`);
  }

  public created?(): void {
    this.$log(`created`);
  }

  public async serverPrefetch(): Promise<unknown> {
    this.$log(`serverPrefetch`);

    return null;
  }

  public beforeMount(): void {
    this.$log(`beforeMount`);
  }

  public mounted(): void {
    this.$log(`mounted`);
  }

  public beforeUpdate(): void {
    this.$log(`beforeUpdate`);
  }

  public updated(): void {
    this.$log(`updated`);
  }

  public beforeUnmount(): void {
    this.$log(`beforeUnmount`);
  }

  public unmounted(): void {
    this.$log(`unmounted`);
  }

  public activated(): void {
    this.$log(`activated`);
  }

  public deactivated(): void {
    this.$log(`deactivated`);
  }

  public errorCaptured?(err: Error, vm: Vue, info: string): boolean | undefined {
    log.error(`errorCaptured`, { err, vm, info });

    return true;
  }
}
</script>

<!-- Add `scoped` attribute to limit CSS to this component only -->
<style scoped lang="scss">
.x-example {
  //
}
</style>
