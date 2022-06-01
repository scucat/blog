<template>
  <div
    class="theme-container"
    :class="containerClass"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <slot name="navbar">
      <ToggleMenu @toggle="toggleSidebar2" />
      <Navbar v-if="shouldShowNavbar" @toggle-sidebar="toggleSidebar">
        <template #before>
          <slot name="navbar-before" />
        </template>
        <template #after>
          <slot name="navbar-after" />
        </template>
      </Navbar>
    </slot>

    <!-- <div class="sidebar-mask" @click="toggleSidebar(false)" /> -->

    <slot name="sidebar">
      <Sidebar>
        <template #top>
          <slot name="sidebar-top" />
        </template>
        <template #bottom>
          <slot name="sidebar-bottom" />
        </template>
      </Sidebar>
    </slot>

    <slot name="page">
      <Home v-if="frontmatter.home" />

      <Transition
        v-else
        name="fade-slide-y"
        mode="out-in"
        @before-enter="onBeforeEnter"
        @before-leave="onBeforeLeave"
      >
        <Page :key="page.path">
          <template #top>
            <slot name="page-top" />
          </template>
          <template #bottom>
            <slot name="page-bottom" />
          </template>
        </Page>
      </Transition>
    </slot>
  </div>
</template>

<script setup lang="ts">
import Home from '@theme/Home.vue'
import Navbar from '@theme/Navbar.vue'
import Page from '@theme/Page.vue'
import Sidebar from '@theme/Sidebar.vue'
import ToggleMenu from '@theme/ToggleMenu.vue'
import { usePageData, usePageFrontmatter } from '@vuepress/client'
import { computed, onMounted, onUnmounted, ref, Transition } from 'vue'
import { useRouter } from 'vue-router'
import type { DefaultThemePageFrontmatter } from '../../shared'
import {
  useScrollPromise,
  useSidebarItems,
  useThemeLocaleData,
} from '../composables'

const page = usePageData()
const frontmatter = usePageFrontmatter<DefaultThemePageFrontmatter>()
const themeLocale = useThemeLocaleData()

// navbar
const shouldShowNavbar = computed(
  () => frontmatter.value.navbar !== false && themeLocale.value.navbar !== false
)

// sidebar
const sidebarItems = useSidebarItems()
const isSidebarOpen = ref(false)
const toggleSidebar = (to?: boolean): void => {
  isSidebarOpen.value = typeof to === 'boolean' ? to : !isSidebarOpen.value
}

// 处理toggleSidebar2 width过小时不美观的问题
window.onresize = function(){
  var body_width = document.body.clientWidth
  if (body_width<=718) {
    var page = document.getElementsByClassName('page')[0]
    var side = document.getElementsByClassName('sidebar')[0]
    var side_width = side.clientWidth
    if (side_width==0) {
      side.style.display = "translateX(-100%);"
      side.style.transform = "translateX(-100%);"
      side.style.width = "20rem"
      
    }
    page.style.paddingLeft = 0
  }
}

const toggleSidebar2 = () => {
  
  var side = document.getElementsByClassName('sidebar')[0]
  var side_width = side.clientWidth
  var page = document.getElementsByClassName('page')[0]
  var style = window.getComputedStyle(page,null)
  var body_width = document.body.clientWidth
  if (side_width>0) {
    toggleSidebar(false)
    side.style.width = "0"
    page.style.paddingLeft = 0
  } else {
    toggleSidebar(true)
    
    side.style.width = "20rem"
    if (body_width>719) {
      page.style.paddingLeft = "20rem"
    }
  }
}
const touchStart = { x: 0, y: 0 }
const onTouchStart = (e): void => {
  touchStart.x = e.changedTouches[0].clientX
  touchStart.y = e.changedTouches[0].clientY
}
const onTouchEnd = (e): void => {
  const dx = e.changedTouches[0].clientX - touchStart.x
  const dy = e.changedTouches[0].clientY - touchStart.y
  if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
    if (dx > 0 && touchStart.x <= 80) {
      toggleSidebar(true)
    } else {
      toggleSidebar(false)
    }
  }
}

// classes
const containerClass = computed(() => [
  {
    'no-navbar': !shouldShowNavbar.value,
    'no-sidebar': !sidebarItems.value.length,
    'sidebar-open': isSidebarOpen.value,
  },
  frontmatter.value.pageClass,
])

// close sidebar after navigation
let unregisterRouterHook
onMounted(() => {
  const router = useRouter()
  unregisterRouterHook = router.afterEach(() => {
    toggleSidebar(false)
  })
})
onUnmounted(() => {
  unregisterRouterHook()
})

// handle scrollBehavior with transition
const scrollPromise = useScrollPromise()
const onBeforeEnter = scrollPromise.resolve
const onBeforeLeave = scrollPromise.pending
</script>


