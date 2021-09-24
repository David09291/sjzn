<template>
  <div class="header-wrapper">
    <div class="logo-wrapper">
      <img src="~@/assets/logo.png" alt="">
      <span class="logo-text">安全生产风险管控平台</span>
    </div>
    <div>
      <el-dropdown>
        <span style="cursor: pointer;">皮肤</span>
        <i class="el-icon-arrow-down el-icon--right"></i>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="tabStyle(co)" v-for="co in style">{{ co.label }}</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-dropdown>
        <!-- <el-button type="primary"> -->
        <span style="cursor: pointer;">admin</span>
        <i class="el-icon-arrow-down el-icon--right"></i>
        <!-- </el-button> -->
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="logOut">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent, watch, computed, toRefs, reactive} from 'vue';
import router from '@/router/index'

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
      style: [
        {
          label: '默认',
          value: 'base'
        },
        {
          label: '红色',
          value: 'red'
        },
        {
          label: '绿色',
          value: 'green'
        },
        {
          label: '黑色',
          value: 'black'
        }
      ]
    })
    watch(() => router.currentRoute.value.matched, (n) => {
      state.routeMatched = router.currentRoute.value.matched
    }, {deep: true, immediate: true})
    const logOut = () => {
      window.localStorage.clear()
      router.push({path: '/login'})
    }
    const handleLink = (item: any) => {
      console.log(item)
      router.push({path: item.path})
    }
    const changeIsCollapse = (): void => {
      emit('changeIsCollapse')
    }
    let el: any = document.querySelector('html')
    el.setAttribute('class', localStorage.getItem('v3-element-plus-style') || 'base')
    const tabStyle = (co: any) => {
      localStorage.setItem('v3-element-plus-style', co.value)
      el.setAttribute('class', co.value)
    }
    return {
      changeIsCollapse,
      logOut,
      handleLink,
      ...toRefs(state),
      tabStyle
    }
  }
})
</script>
<style scoped>
.header-wrapper {

  display: flex;
  justify-content: space-between;
  align-items: center;
}


.logo-wrapper {
  height: 62px;
  display: flex;
  align-items: center;
  justify-content: center;
  /*background-color: var(--menuBg);*/
  overflow: hidden;
  opacity: 1;
  background: #ffffff;

}

.logo-wrapper img {
  width: 37px;
  padding: 0 16px 0 20px;
}

.logo-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  opacity: 1;
  font-size: 22px;
  font-family: SourceHanSansCN, SourceHanSansCN-Bold;
  font-weight: 700;
  text-align: left;
  color: #277f7b;
}
</style>