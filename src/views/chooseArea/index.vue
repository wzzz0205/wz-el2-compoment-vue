<template>
  <div>
    <wz-choose-area @change="change"/>
  </div>
</template>

<script setup lang="ts">
const change = (datas) => {
  console.log(datas)
}
</script>

<style lang="scss" scoped>

</style>