<template>
  <div id="app">
    <ToolBar></ToolBar>
    <router-view></router-view>
  </div>
</template>

<script>
import ToolBar from '@/components/ToolBar.vue';
export default {
  components: {
    ToolBar,
  },
};
</script>
<style>
@import '@/css/main.css';
</style>
