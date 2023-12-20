<template>
  <el-button @click="handleShow" type="primary">
    <slot></slot>
  </el-button>
  <dvi class="wz-component-choose-icon-dialog">
    <el-dialog :title="title" v-model="visible">
      <div class="container">
        <div @click="copyIcon(item)" v-for="(item,index) in Object.keys(ElIcons)" :key="item" class="item">
          <div>
            <component :is="`el-icon-${toLine(item)}`"></component>
          </div>
          <div>{{ item }}</div>
        </div>
      </div>
    </el-dialog>
  </dvi>
</template>

<script setup lang="ts">
import {ref} from "vue";
import * as ElIcons from '@element-plus/icons-vue'
import {toLine} from "@/utils/index.ts";
import {useCopy} from "@/hooks/useCopy";

console.log(ElIcons)

const props = defineProps<{
  title: string,
  visible: boolean
}>()
const visible = ref<boolean>(false);
const handleShow = () => {
  visible.value = true
}
const copyIcon = (iconName:string) => {
  iconName = `<el-icon-${toLine(iconName)} />`
  useCopy(iconName)
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-wrap: wrap;

  svg {
    width: 2em;
    height: 2em;
  }

  .item {
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    cursor: pointer;
  }
}
</style>