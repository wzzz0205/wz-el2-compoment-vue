<template>
  <el-aside width="auto" style="overflow-y: hidden;">
    <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        :collapse="props.isCollapse"
    >
      <el-menu-item index="1">
        <el-icon-menu/>
        <span>导航1</span>
      </el-menu-item>
      <el-menu-item index="2">
        <el-icon-menu/>
        <span>导航2</span>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon-menu/>
        <span>导航3</span>
      </el-menu-item>
    </el-menu>
    >
  </el-aside>
</template>

<script setup lang="ts">
const props = defineProps<{
  isCollapse: boolean
}>()
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>