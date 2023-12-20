<template>
  <el-container>
    <el-container>
      <nav-aside :isCollapse="isCollapse"></nav-aside>
      <el-container>
        <el-header>
          <nav-header v-model:isCollapse="isCollapse"></nav-header>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import navHeader from './navHeader/index.vue'
import navAside from './navAside/index.vue'
import {ref} from 'vue'

const isCollapse = ref<boolean>(false)

</script>

<style scoped>

</style>