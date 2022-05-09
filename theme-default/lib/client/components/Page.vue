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

</script>

<template>
  <main class="page">
    
    <slot name="top" />
    
    <div class="theme-default-content" style="margin-top:30px;">
      <div class="page-bar" style="padding-top:1rem;">
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
