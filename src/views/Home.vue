<template>
  <div class="home">
    <Button>Test 123</Button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import { Button } from '@/components/Button';

@Options({
  components: {
    Button,
  },
})
export default class Home extends Vue {}
</script>
