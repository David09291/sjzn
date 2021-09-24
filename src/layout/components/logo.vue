<template>
  <div>
    <span :class="!isCollapse ? 'el-icon-s-fold' : 'el-icon-s-unfold'" @click="changeIsCollapse"></span>
  </div>
</template>
<script lang="ts">
import {defineComponent, reactive, watch} from 'vue';
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
    watch(() => router.currentRoute.value.matched, (n) => {
      state.routeMatched = router.currentRoute.value.matched
    }, {deep: true, immediate: true})
    const changeIsCollapse = (): void => {
      emit('changeIsCollapse')
    }
    return {
      changeIsCollapse,

    }
  }
})
</script>
<style scoped>
/*.el-icon-s-fold, .el-icon-s-unfold {*/
/*  cursor: pointer;*/
/*  font-size: 30px;*/
/*  padding: 15px;*/
/*  background-color: #1b2735;*/
/*}*/
</style>