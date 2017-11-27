<template>
  <div class="buy">
  	<Navshop/>
  		<router-view></router-view>

  </div>
</template>

<script>
import Navshop from './components/Navshop'

export default {
  name: 'Buycontent',
  components:{
    Navshop
  },
  data () {
    return {
    	
	}
	}
}
</script>

<style>

</style>