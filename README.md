<!--
 * @Author: Java-css
 * @Date: 2022-09-15 10:46:08
-->

# vue-context-menu

## 安装组件

```
npm i v-context
```

## 注册组件

## 使用

```
    <v-context
      :target="target"
      :show="userShow"
      :menu="menu"
      @update:show="(show) => (userShow = show)"
    />
```

## props 参数

```

 字段  | 说明  | 类型  | 默认值
 ---- | ----- | ------
 target  | 指定绑定右键的元素 | Element | null
 show  | 右键菜单显隐 | Boolean | false
 menuName  | 右键菜单列表名字 | String | menu
 menu  | 右键菜单显隐 | Array | []
 color  | 右键菜字体颜色 | String | #1a1a1a
```

## Events 事件

```

 名称  | 说明  | 参数
 ---- | ----- | ------
 update:show  | 显示/隐藏
 contextMenuHandler  | 显示/隐藏 | (e, data) 接收两个参数，1. 当前事件对象 2. 回调参数
```

## Tips

```
1、若target是指定元素，可以使用 $refs来访问，请在父组件mounted 之后获取。
2、若需在外部自主控制菜单使用时,target置为null,调取contextMenuHandler事件
```
