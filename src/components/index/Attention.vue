<!-- 关注页面布局根据AttentionTemplate组件获取 -->
<template>
  <div class="container">
    <AttentionTemplate />
  </div>
</template>

<script>
import AttentionTemplate from "./common/AttenctionTemplate"
export default {
  name: 'Attenction',
  components:{
    AttentionTemplate
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>