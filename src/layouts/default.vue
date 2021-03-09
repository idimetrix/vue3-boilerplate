<template>
  <div class="x-layout">
    <header data-aos="fade-down" data-aos-duration="500">Header</header>
    <transition mode="out-in" name="fade">
      <router-view />
    </transition>
    <footer data-aos="fade-up" data-aos-duration="500">Footer</footer>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  name: 'DefaultLayout',
})
export default class extends Vue {}
</script>

<style lang="scss" scoped>
.x-layout {
  //
}
</style>
