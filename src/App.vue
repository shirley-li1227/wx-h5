<template>
  <div id="app" class="app">
    <router-view />
  </div>
</template>
<script>
import esAxios from './utils/esAxios'
export default {
  mounted() {
    esAxios('/api/v1/third/user/login', { thirdIdentityId: 'h5-test' }, 'POST').then(res => {
      console.log('res :>> ', res);
    })
  }
}
</script>
<style>
body {
  font-size: 16px;
  background-color: #f8f8f8;
  -webkit-font-smoothing: antialiased;
}
</style>
