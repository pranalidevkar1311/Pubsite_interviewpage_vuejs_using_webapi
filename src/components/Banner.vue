<template>
 
    <div v-if="loaded" class="cursor-p HideBannerDestop">
    <a :href="bData.RouteURL" target="_blank">
      <img v-if="loaded" :src="bData.MainImage" class="img-fluid" alt="Responsive image">
    </a>
  </div>
  <div v-if="loaded" class="cursor-p HideBannerMobile">
    <a :href="bData.RouteURL" target="_blank">
      <img v-if="loaded" :src="bData.MobileImage" class="img-fluid" alt="Responsive image">
    </a>
  </div>
</template>
<script>
export default{
    name:'MyBanner',
    data() {
    return {
      loaded: true, // Set this value based on your condition
      bData: {
        RouteURL: 'https://humanresources.report/c-suite-on-deck/interview-with-hrcap-stella-h-kim',
        MainImage: 'https://humanresources.report/images/Interview/f3e6cabe-fa9b-4694-b1c9-fe03d94fb96d_Interview-Image--Stella-H.-Kim_11zon.jpg',
        MobileImage: 'https://humanresources.report/images/Interview/9e552754-ea95-458f-96e0-1d3c2688458a_Mobile-view-banner-Stella-H.-Kim_11zon.jpg',
      },
    };
  },
}
</script>

<style scoped>
.HideBannerMobile {
    display: none;
}

.HideBannerDestop {
    display: block;
}

@media screen and (max-width:991px) {

    .HideBannerMobile {
        display: block;
    }

    .HideBannerDestop {
        display: none;
    }
}
</style>