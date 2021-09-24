<template>
  <el-container>
    <el-header>
      <VHeader :isCollapse="isCollapse"/>  <!-- header 头部 -->
    </el-header>
    <el-container>
      <el-aside style="transition: all .5s" :width="!isCollapse ? '200px' : '64px'">
        <VMenu :isCollapse="isCollapse"/>  <!-- 菜单 -->
        <VLogo :isCollapse="isCollapse" @click="changeIsCollapse"/>  <!-- logo -->
      </el-aside>
      <el-main>
        <el-breadcrumb separator-class="el-icon-arrow-right" style="display:inline-block;">
          <el-breadcrumb-item v-for="(item,index) in routeMatched" :key="item.path">
            <span v-if="item.name===undefined||index == routeMatched.length-1">{{ item.meta.title }}</span>
            <a v-else @click="handleLink(item)">{{ item.meta.title }}</a>
          </el-breadcrumb-item>
          <!-- <el-breadcrumb-item>活动管理</el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item> -->
        </el-breadcrumb>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>
<script lang="ts">
import {defineComponent, toRefs, reactive, watch} from 'vue';
import VMenu from './components/menu.vue'
import VLogo from './components/logo.vue'
import VHeader from './components/header.vue'
import router from "@/router";

export default defineComponent({
  name: "",
  components: {
    VMenu,
    VLogo,
    VHeader
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
      state.isCollapse = !state.isCollapse
    }
    const handleLink = (item: any) => {
      console.log(item)
      router.push({path: item.path})
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
.el-container {
  height: 100vh;
}

.e-main {
  background-color: #f1f5f5f5;
}

.el-breadcrumb {
  padding: 1em 0;

}
</style>