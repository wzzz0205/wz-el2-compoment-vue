<template>
  <div class="wz-header">
    <span @click="collapseHandle">
      <el-icon-expand v-if="props.isCollapse" style="margin: 0 10px"></el-icon-expand>
      <el-icon-fold v-else></el-icon-fold>
    </span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  isCollapse: boolean
}>()
const emits = defineEmits(['update:isCollapse'])
const collapseHandle = () => {
  emits('update:isCollapse',!props.isCollapse)
}
</script>

<style lang="scss" scoped>
.wz-header{
  height: 60px;
  display: flex;
  align-items: center;
}
</style>