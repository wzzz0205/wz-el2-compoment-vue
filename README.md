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