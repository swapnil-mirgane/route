<template>
<router-link to="/">home</router-link>
<router-link to="/about"> about</router-link><br>
<router-link to="abc">404</router-link>
  <router-view> </router-view>
</template>
<script>
export default {
  name:'App',
}
</script>