<template>
    <Header></Header>




    <div class="text-center add-center">
    </div>
    <div class="row">
        <div class="col-md-9 mt-3 mt-md-0 mb-0 mb-md-0">
            <Banner></Banner>
        </div>
        <div class="col-md-3">
            <Spotlight></Spotlight>
        </div>
    </div>
    <div class="row">
        <div class="col-md-9">
            <News></News>
            <Events></Events>
        </div>
        <div class="col-md-3">
            <Resources></Resources>


        </div>
    </div>
    <Footer></Footer>
</template>

<script>
import Header from "./Header.vue"
import Footer from "./Footer.vue"
import Banner from "./Banner.vue"
import Spotlight from "./spotlight.vue"
import News from "./News.vue"
import Events from "./Events.vue"
import Resources from "./Resources.vue"
export default {
    name: 'MyHome',
    components: {
        Header,
        Footer,
        Banner,
        Spotlight,
        News,
        Events,
        Resources

    }
}
</script>