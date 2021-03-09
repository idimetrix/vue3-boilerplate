<template>
  <a class="button" v-loader="false" @click="clickHandle">
    {{ msg }} {{ count }} {{ counted }}
    <slot></slot>
  </a>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import log from '@/log';

@Options({
  props: {
    msg: String,
  },
  watch: {
    count: { handler: 'countChanged', immediate: true },
  },
  name: 'Modal',
})
export default class Modal extends Vue {
  // --- props

  public msg!: string;

  // --- data

  public count = 1;

  // --- computed

  public get counted(): number {
    return this.count * 100;
  }

  // --- methods

  public countChanged(value: number, oldValue: number): void {
    this.$log(`countChanged`, { value, oldValue });
  }

  public clickHandle(): void {
    this.count++;

    this.$log(`clickHandle`);
  }

  // --- hooks

  // data?(): object;
  // render?(): VNode | void;

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

    // this.$store

    this.count++;
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
.button {
}
</style>
