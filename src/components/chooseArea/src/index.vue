<template>
  <el-select clearable v-model="province" placeholder="请选择省份">
    <el-option v-for="item in areas" :key="item.code" :value="item.code" :label="item.name"></el-option>
  </el-select>
  <el-select clearable :disabled="!province" v-model="city" placeholder="请选择城市" style="margin: 0 10px">
    <el-option v-for="item in cityDatas" :key="item.code" :value="item.code" :label="item.name"></el-option>
  </el-select>
  <el-select clearable :disabled="!province || !city" v-model="area" placeholder="请选择区县" style="margin: 0 10px">
    <el-option v-for="item in areaDatas" :key="item.code" :value="item.code" :label="item.name"></el-option>
  </el-select>
  <el-select clearable :disabled="!province || !city || !area" v-model="towns" placeholder="请选择街道">
    <el-option v-for="item in townDatas" :key="item.code" :value="item.code" :label="item.name"></el-option>
  </el-select>
</template>

<script setup lang="ts">
import {ref, watch} from 'vue';
import allAreas from "../lib/pcas-code.json"

console.log(allAreas)

export interface AreaItem {
  name: string,
  code: string,
  children?: AreaItem[]
}

export interface areaDataType {
  name: string,
  code: string
}

// select绑定的值
let province = ref<string>('')
let city = ref<string>('')
let area = ref<string>('')
let towns = ref<string>('')
//所有数据
let areas = ref(allAreas)
// options data
let cityDatas = ref<AreaItem[]>([])
let areaDatas = ref<AreaItem[]>([])
let townDatas = ref<AreaItem[]>([])
let emits = defineEmits(['change'])
// 监听省数据  变动时 获取城市数据
watch(() => province.value, val => {
  if (val) {
    let citys = areas.value.find(item => item.code === province.value)!.children
    cityDatas.value = citys
  }
  city.value = ''
  area.value = ''
  towns.value = ''
})
// 监听城市数据  变动时 获取区域数据
watch(() => city.value, val => {
  if (val) {
    let area = cityDatas.value.find(item => item.code === city.value)!.children
    areaDatas.value = area
  }
  area.value = ''
  towns.value = ''
})
// 监听区县数据  变动时 获取镇数据
watch(() => area.value, val => {
  if (val) {
    let town = areaDatas.value.find(item => item.code === area.value)!.children
    townDatas.value = town
  }
  towns.value = ''
})

// 监听区域数据，有时派发数据给父组件
watch(() => towns.value, value => {
  if (value) {
    let proviceEmitData: areaDataType = {
      code: province.value,
      name: areas.value.find(item => item.code === province.value).name
    }
    let cityEmitData: areaDataType = {
      code: city.value,
      name: cityDatas.value.find(item => item.code === city.value).name
    }
    let areaEmitData: areaDataType = {
      code: value,
      name: areaDatas.value.find(item => item.code === area.value).name
    }
    let townEmitData: areaDataType = {
      code: value,
      name: townDatas.value.find(item => item.code === towns.value).name
    }
    emits('change', {
      province: proviceEmitData,
      city: cityEmitData,
      area: areaEmitData,
      town: townEmitData
    })
  }
})
</script>

<style lang="scss" scoped>

</style>