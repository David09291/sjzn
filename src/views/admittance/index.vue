<template>
  <div :class="$style.admittance">
    zhunru主页----1111
    <div>
      <test />
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import test from './component/test.vue'
// lmx模板

export default defineComponent({
  components: {
    test
  },
  props: {},
  setup() {
    return {}
  }
})
</script>

<style lang="scss" module>
.admittance {
  color: red;
  font-size: 100px;
  border: 1px solid red;
}
</style>
