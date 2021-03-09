<template>
  <a :class="classes">
    <slot />
  </a>
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
    size: {
      type: String,
      default: '',
    },
  },
  name: 'Button',
})
export default class Button extends Vue {
  // --- props

  public type!: '' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text';
  public size!: '' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

  // --- computed

  get class(): string {
    return `x-${this.$options.name?.toLowerCase()}`;
  }

  get classSize(): string {
    return [this.class, this.size].filter(Boolean).join('--');
  }

  get classType(): string {
    return [this.class, this.type].filter(Boolean).join('--');
  }

  get classes(): string[] {
    return [...new Set<string>([this.class, this.classSize, this.classType])];
  }

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

<style scoped lang="scss">
.x-button {
  display: inline-flex;
  align-items: center;
}
</style>
