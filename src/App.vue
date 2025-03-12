<template>
  <!-- <div style="width:90%; margin: 20px auto" class=".box">
    <SFC />
  </div> -->
  <div class="wrap">
    <div class="left">
      <p class="content">aaaaaaa</p>
    </div>
    <div class="right">
      <p class="content">bbbbbbbbbbbbbbbbbbbbbbb</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted} from 'vue'
import SFC from './cmps/sfc/index.vue'

onMounted(() => {
})
</script>

<style lang="less" scoped>
.wrap {
  margin-left: 100px;
  margin-top: 100px;
  display: flex;
  width: 500px;
  outline: 1px solid red;
  .left {
    flex: 1 0 50%;
    background-color: aqua;
  }
  .right {
    flex: 1;
    background-color: bisque;
    height: 50px;
    word-wrap: break-word;
  }
}
</style>
