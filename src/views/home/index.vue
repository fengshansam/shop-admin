<template>
  <div>home</div>
  <div>{{ $store.state.count }}</div>
</template>
<script setup lang="ts">
import { getLoginInfo } from '@/api/common'
import { onMounted } from '@vue/runtime-core'

onMounted(() => {
  console.log('44')
  getLoginInfo().then(res => {
    console.log(res)
  })
})
</script>
<style lang="scss" scoped>
div{
  color: $color;
}
</style>
