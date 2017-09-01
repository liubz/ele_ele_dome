<template>
<div>
		<div class="com-wrap">
			<li>111</li>
		</div>
	</div>
</template>

<script>
 export default {
    components: {
      VuePerfectScrollbar
    },
    data () {
      return {
        listData: [],
        settings: {
          maxScrollbarLength: 400
        }
      }
    },
//  created () {
//  //ajax
//    getNav({}).then(res => {
//      this.listData = res.data.datalist
//      console.log(this.listData)
//    })
//  }
  }
</script>

<style>
</style>

 