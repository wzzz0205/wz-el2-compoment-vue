# 二次封装element-plus组件库

## 1.项目配置

vite.config.js

配置port

```
server: {
  port: 8080
}
```

配置路径别名

```
resolve: {
 alias: {
   '@': path.resolve(__dirname, './src'),
 },
},	
```

## 2.伸缩菜单

需要注意的地方

1.el-aside宽度设为auto

2.通过这个类控制没有伸缩时menu的宽度

```css
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
```

## 3.图标选择器

项目修改了原有的con使用方式，修改为**el-icon-bottom**这种形式。

使用命名空间，修改ui框架内组件样式
1.需要自定义一个类名空间

2.先在浏览器里面调试样式

3.把调试好的类名放在这个类名里面

4.在App .vue里面引入这个文件

5.在组件内需要该样式的元素的父元素加上这个类名

```scss
.wz-component-choose-icon-dialog{
  .el-dialog__body{
    height: 500px;
    overflow-y: scroll;
  }
}
```

## 4.省市区三级联动选择器

github 获取json数据 [modood/Administrative-divisions-of-China: 中华人民共和国行政区划：省级（省份）、 地级（城市）、 县级（区县）、 乡级（乡镇街道）、 村级（村委会居委会） ，中国省市区镇村二级三级四级五级联动地址数据。 (github.com)](https://github.com/modood/Administrative-divisions-of-China)

通过监听省级选择器获取市级数据，监听市级选择器获取区县级数据

``` vue
// 监听省数据  变动时 获取城市数据
watch(()=>province.value, val => {
  if(val){
    let citys = areas.value.find(item => item.code === province.value)!.children
    cityDatas.value =citys
  }
  city.value = ''
  area.value =''
})
// 监听城市数据  变动时 获取区域数据
watch(()=>city.value, val => {
  if(val){
    let area = cityDatas.value.find(item => item.code === city.value)!.children
    areaDatas.value = area
  }
  area.value =''
})
// 监听区域数据，有时派发数据给父组件
watch(()=> area.value,value => {
  if(value){
    let proviceEmitData:areaDataType = {
      code: province.value,
      name: areas.value.find(item => item.code === province.value).name
    }
    let cityEmitData:areaDataType = {
      code: city.value,
      name: cityDatas.value.find(item => item.code === city.value).name
    }
    let areaEmitData:areaDataType = {
      code: value,
      name: areaDatas.value.find(item => item.code === area.value).name
    }
    emits('change',{
      province: proviceEmitData,
      city: cityEmitData,
      area: areaEmitData
    })
  }
})
```

