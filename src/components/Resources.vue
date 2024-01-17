<template>
 <h1>Resources</h1>
    <div class="d-flex flex-column h-100">

<Whitepaper></Whitepaper>
<Article></Article>
       <button class="text-uppercase mt-auto thm-btn btn-theme-success w-100 pt-3 pb-3 MoreResobtn home_btn" routerLink="resources">more resources</button> 

  

</div>
</template>
<script>
import Article from "./Article.vue"
import Whitepaper from "./Whitepaper.vue"
export default{
    name:'MyResources',
    components:{
        Article,
        Whitepaper
    }
}
</script>

<style scoped>

@media only screen and(max-width:767px){
    .MoreResobtn{
        margin:30px 0 !important;    
    }
 }
</style>