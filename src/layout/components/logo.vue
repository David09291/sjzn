<template>
  <div style="display: flex;align-items: center;">
    <span :class="!isCollapse ? 'el-icon-s-fold' : 'el-icon-s-unfold'" @click="changeIsCollapse"></span>
  </div>
</template>
<script lang="ts">
import {defineComponent, reactive, toRefs, watch} from 'vue';
import router from "@/router";

export default defineComponent({
  name: "",
  props: {
    isCollapse: {
      type: Boolean,
      default: true
    }
  },

  setup: (props, {emit}) => {
    const state: any = reactive({
      routeMatched: [],
      isCollapse: false  // 控制菜单展开 收起
    })
    const handleLink = (item: any) => {
      console.log(item)
      router.push({path: item.path})
    }
    const changeIsCollapse = (): void => {
      emit('changeIsCollapse')
    }
    return {
      handleLink,
      ...toRefs(state),
      changeIsCollapse
    }
  }
})
</script>
<style scoped>
.el-icon-s-fold, .el-icon-s-unfold {
  cursor: pointer;
  font-size: 30px;
  padding: 15px;
}
</style>