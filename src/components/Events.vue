<template>
    
    <div>
    <h2 class="text-uppercase mb-0 mt-5 eveH">Events</h2>

    <div class="row ng-star-inserted HideSliderDestop EventDiv">
      <div v-for="event in events" :key="event.id" class="col-md-12 pt-3 ng-star-inserted">
        <a :href="event.RouteURL" target="_blank">
          <img :src="event.ImageUrl" class="resources-img-h pb-2 pr-5 GcSuiteImg" alt="Event Image">
          <h4 class="text-uppercase Reso_Event_Title">{{ event.Name }}</h4>
        </a>
        <p class="para-3 text-channelize">{{ event.EventType }}</p>
      </div>
    </div>
  </div>

</template>
<script>
import axios from 'axios';
export default{
    name:'MyEvents',
    data() {
    return {
      events: [],
    };
  },
  mounted() {
    
    axios.get('https://newapi.nathanark.com/api/GlobalCompanies/GetGlobalCompanyTOP3Events?siteName=humanresources.report')
      .then(response => {
        
        this.events = response.data;
      })
      .catch(error => {
    
        console.error('Error fetching events:', error);
      });
  },
}
</script>