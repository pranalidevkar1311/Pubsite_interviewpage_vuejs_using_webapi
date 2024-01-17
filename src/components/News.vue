<template>
    <h2 class="text-uppercase mt-0 mt-md-4 mb-0">News</h2>
    <ul class="nav nav-tabs nav-tabs-width mobTab mb-3" id="myTab" role="tablist">
        <li class="nav-item">
            <a class="nav-link text-center" :class="{ active: activeTab === 'FEATURED' }" @click="changeTab('FEATURED')"
                role="tab" aria-controls="home" aria-selected="true">FEATURED</a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-center" :class="{ active: activeTab === 'TRENDING' }" @click="changeTab('TRENDING')"
                role="tab" aria-controls="profile" aria-selected="false">TRENDING</a>
        </li>
    </ul>
    <div class="tab-content" id="myTabContent">
        <h1>Hiii</h1>
        <div class="tab-pane fade show active" id="news-tab1" role="tabpanel" aria-labelledby="home-tab">
            <div class="col-12 d-block d-md-none pt-3 p-0">
                <div v-for="featureNewsData in featureNewsDatas" :key="featureNewsData.id" class="slide">
                    <router-link class="para-2 para-2-c-2" :to="'featured-news/' + featureNewsData.RouteURL"
                        target="_blank">
                        <img class="img-fluid pb-2 image-hight-news" :src="featureNewsData.ImageUrl" alt="news image">
                    </router-link>
                    <p class="para-2 mb-0 CatTag height40 line2">{{ featureNewsData.Tag }}</p>

                    <router-link class="para-2 para-2-c-2" :to="'featured-news/' + featureNewsData.RouteURL"
                        target="_blank">
                        <h4 class="text-height-4 card-header-height-1 text-uppercase TagTitle"
                            v-html="featureNewsData.Title"></h4>
                    </router-link>
                    <p class="para-2 mb-md-2 sponDate height40 line2">
                        {{ featureNewsData.CompanyName }} <span
                            v-if="featureNewsData.CompanyName !== '' && featureNewsData.PublishingDate !== ''">|</span> {{
                                featureNewsData.PublishingDate }}
                    </p>
                    <p class="para-1 text-justify text-height-4 DescPara" v-html="featureNewsData.Description"></p>
                    <router-link class="para-2 para-2-c-2 Read_More" :to="'featured-news/' + featureNewsData.RouteURL"
                        target="_blank">Read More</router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'MyNews',

    data() {
        return {
            activeTab: 'FEATURED', // Set the default active tab
            featureNewsDatas: []
        };
    },
    methods: {
        changeTab(tabName) {
            this.activeTab = tabName;
            // Additional logic for handling tab change, if needed
            if (tabName === 'TRENDING') {
                this.trendingNews();
            }
        },
        trendingNews() {

        },
    },
    mounted() {
        // Make the API request when the component is mounted
        axios.get('https://newapi.nathanark.com/api/Home/GetTop6FutureNewsDetails?siteName=humanresources.report')
            .then(response => {

                this.featureNewsDatas = response.data;
            })
            .catch(error => {

                console.error('Error fetching events:', error);
            });
    },
}
</script>

<style scoped>
.nav-tabs-width {
    width: 100% !important;
}

@media screen and (min-width: 768px) {

    .nav-tabs-width,
    .nav-item {

        text-align: center;
    }
}

.sponDate {
    margin-bottom: 10px !important;

}
</style>
