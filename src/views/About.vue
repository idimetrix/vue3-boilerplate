<template>
  <div class="about">
    <h1>This is an about page {{ count }}</h1>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { getModule } from 'vuex-module-decorators';

import ModuleA from '@/store/moduleA';
import ModuleB from '@/store/moduleB';

import { Button } from '@/components/Button';

@Options({
  components: {
    Button,
  },
})
export default class About extends Vue {
  // ---

  get count(): number {
    return ModuleA.getCount;
  }

  // ---
  created(): void {
    //
  }

  mounted(): void {
    ModuleA.increment(1);

    // console.log(this.);
  }
}
</script>
