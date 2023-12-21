<template>
  <el-aside width="auto" style="overflow-y: hidden;">
    <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        :collapse="props.isCollapse"
        router
    >
      <el-menu-item index="/chooseIcon">
        <el-icon-aim />
        <span>图标选择器</span>
      </el-menu-item>
      <el-menu-item index="/chooseArea">
        <el-icon-check />
        <span>省市县镇选择器</span>
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
svg{
  width: 1.5em;
  height: 1.5em;
}
</style>