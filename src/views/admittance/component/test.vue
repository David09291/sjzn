<template>
  <div :class="$style.equReal">
    <h1>组件</h1>

    <div></div>
  </div>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  // components: {
  // 	test
  // },
  props: {},
  setup() {
    return {}
  }
})
</script>

<style lang="scss" module>
.equReal {
  color: rgb(67, 15, 209);
}
</style>
