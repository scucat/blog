<script setup lang="ts">
import ColorPicker from 'colorpicker-v3'
import { ref } from 'vue'
import { Vue } from 'vue-demi';

var v = localStorage.getItem('themeColor')
var themeColor = ref([])
if (v==null) {
  var vars = [
    '--c-brand',
    '--c-bg',
    '--c-text',
    '--c-text-accent',
    '--c-text-quote',
    '--c-border',
    '--c-tip',
    '--c-warning',
    '--c-danger',
    '--code-bg-color',
    '--code-ln-color',
  ]

  var vars_object = []
  var styles = window.getComputedStyle(document.documentElement)

  for (let index = 0; index < vars.length; index++) {
    const t = vars[index];
    var t_color = styles.getPropertyValue(t)
    var item = {
      name:t,
      default_color:t_color,
      current_color:t_color
    }
    vars_object.push(item)
  }
  themeColor.value = vars_object
  localStorage.setItem('themeColor',JSON.stringify(vars_object))
} else {
  themeColor.value = JSON.parse(v)
}

//  颜色值改变
const change = (e) => {
}

// 颜色面板关闭
const close = (e) => {
}

const finish = (e,t) => {
  for (let index = 0; index < themeColor.value.length; index++) {
    const element = themeColor.value[index];
    if (element.name==t) {
      element.current_color = e.hex
      themeColor.value.splice(index,1,element)
      localStorage.setItem('themeColor',JSON.stringify(themeColor.value))
      break
    }
  }
  document.getElementsByTagName('body')[0].style.setProperty(t, e.hex);
}

const bColor = [
  '#c21401',
  '#ff1e02',
  '#ffc12a',
  '#ffff3a',
  '#90cf5b',
  '#00af57',
  '#00afee',
  '#0071be',
  '#00215f',
  '#72349d',
]




</script>

<template>
  <main class="config">
    <table class="color-table">
      <tr>
        <th>属性</th>
        <th>默认配色</th>
        <th>当前配色</th>
        <th>新建配色</th>
      </tr>
      <tr v-for="(item,index) in themeColor" :key="item.name">
        <td>{{ item.name}} </td>
        <td><span class="default-color" :style="{background:item.default_color}"> </span> {{ item.default_color }} </td>
        <td><span class="default-color" :style="{background:item.current_color}"> </span> {{ item.current_color }} </td>
        <td>        
          <color-picker
          :standard-color="bColor"
          @close="close"
          @finish="finish($event,item.name)"
        ></color-picker></td>
      </tr>
    </table>
    
  </main>
</template>
<style lang="scss">

@import 'colorpicker-v3/dist/style.css';
.color-table{
  height: 100%;
  overflow: visible;
}
</style>
