<!--  -->
<template>
  <div class="common-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">
          <app-menu></app-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang='ts'>
import AppMenu from './components/AppMenu.vue'
</script>
<style lang='scss' scoped>
.el-header {
  background: #B3C0D1;
}
.el-aside {
  background: #545c64;
}
.el-main{
  background: #E9EEF3;
}
.common-layout{
  height: 100vh;
  .el-container{
    height: 100%;
  }
}
</style>
