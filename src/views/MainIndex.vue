<template>
  <div class='common-layout'>
    <el-container>
      <el-header>
        <div>
          <img src='#' alt='' />
          <span>安全生产风险管控平台</span>
        </div>
        <div>11</div>
      </el-header>
      <el-container>
        <el-aside @click='showmenu'>menu</el-aside>
        <el-main> 1</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang='ts'>
// import { ref } from 'vue'

export default {
  setup() {

    function showmenu() {
      console.log('showmenu')
    }

    return {
      showmenu
    }
  }
}
</script>

<style lang='scss'>
body {
  margin: 0;
}

.el-container {
  background-color: #f2f7f6;

  .el-header {
    background-color: #fff;
    color: var(--el-text-color-primary);
    line-height: 1.5rem;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    color: #277f7b;

    img {
      width: 20px;
    }
  }

  .el-aside {
    background-color: #277f7b;
    color: var(--el-text-color-primary);
    text-align: center;
    line-height: 200px;
    width: 100px;
  }

  .el-main {
    color: var(--el-text-color-primary);
    text-align: center;
    line-height: 160px;
  }
}
</style>
