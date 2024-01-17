<template>
  <div>
   
    <div>
    <h2 class="text-uppercase text-center mb-0 mt-2 DspotlH">Spotlight</h2>
    <div class="text-center SpotDiv cursor-p">
      <a :href="spotlight?.RouteURL || '#' " target="_blank">
        <img :src="spotlight?.ImageUrl || 'https://humanresources.report/images/Company_Details/2f302fc0-9001-450a-9da1-1f6bf440f523_HRCap.png'" alt="Responsive image" class="img-fluid" />
        <h4 class="text-uppercase mt-2 text-center">{{ spotlight?.Name || 'HRCap, Inc.' }}</h4>
      </a>
      <p class="text-justify para-1 spotlight-text-height">{{ spotlight?.Description || 'HRCap is the largest Asian-American executive search firm in the world. Founded in 2000 and privately owned, we provide total HR consulting services to a robust clientele ranging from medium-sized businesses to Global Fortune 500 companies across various industries. Our mission is to partner with our clients to effectively localize and globalize with top talent. Our unique teams specialize in Executive Search, Global Expatriate Recruiting' }}</p>
    </div>

    <div class="MobAdd">
      <iframe src="https://abm.report/adcodefile/GlobalCsuiteADAfterSpotlight.html"
        style="width: 310px;height:250px;border:0" scrolling="no"></iframe>
    </div>
  </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
  name: 'MySpotlight',
  data() {
    return {
      spotlight: [],
    };
  },
  mounted() {
  axios.get('https://newapi.nathanark.com/api/GlobalCompanies/GetGlobalCompanyTOP1SpotLight?siteName=humanresources.report')
    .then(response => {
      // Handle the successful response and update the component state
      this.spotlight = response.data || {}; // Set default value as an empty object
    })
    .catch(error => {
      // Handle errors
      console.error('Error fetching spotlight data:', error);
    });
},

}
</script>