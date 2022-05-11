<script setup lang="ts">
import PageMeta from '@theme/PageMeta.vue'
import PageNav from '@theme/PageNav.vue'
import { usePageData, usePageFrontmatter } from '@vuepress/client'
import { computed, ComputedRef } from 'vue'
import type { 
  DefaultThemeNormalPageFrontmatter,
  DefaultThemePageFrontmatter,
  DefaultThemePageData,
   } from '../../shared'

const page = usePageData<DefaultThemePageData>()
console.log(page)

const frontmatter = usePageFrontmatter<DefaultThemePageFrontmatter>()
const author = frontmatter.value.author.name 
var date = frontmatter.value.date
date = date.toString().substring(0,10)

var beforePrint = function(){
  console.log('Functionality to run before printing.')
  // var dom = document.getElementsByClassName('theme-default-content')[0];
  // var win = window.open('');
  // win.document.write(dom.outerHTML);
  // win.print();
  // win.close();
}

var afterPrint = function(){
  console.log('Functionality to run after printing')
}

window.onbeforeprint = beforePrint
window.onafterprint = afterPrint
</script>

<template>
  <main class="page">
    
    <slot name="top" />
    
    <div class="theme-default-content">
      <div class="page-bar no-print" style="padding-top:1rem;">
        &nbsp;
        <span style="float:right;color:#999;"> 👤{{ author }}  &nbsp;&nbsp; 📅{{ date }}</span>
      </div>
      <Content />
    </div>
    <PageMeta />
    <PageNav />
    <slot name="bottom" />
  </main>
</template>
<style lang="scss" scoped>
.theme-default-content{
  margin-top: 1rem;
}

</style>
