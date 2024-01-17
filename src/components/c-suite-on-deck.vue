<template>
    <Header></Header>

    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="HideSliderDestop BannerAD">
                    <iframe src="https://abm.report/adcodefile/GlobalCsuiteTopAD.html"
                        style="width: 736px;height:99px;border:0" scrolling="no"></iframe>
                </div>
            </div>
            <div class="">
                <div class="col-md-9">
      <h1 class="text-uppercase mb-0 mt-0 GTitle">C-SUITE ON DECK</h1>
      <div class="row d-md-flex mt-3 HideSliderDestop">
        <div class="" id="jar">
          <div ID="maindiv" runat="server" Style="height: auto; margin-bottom: 0px; margin-top: 15px;">
            <div v-if="loading">Loading...</div>
            <div v-else>
              <div class="col-md-6 mb-5 content otherAdiv" v-for="(item, index) in paginatedData" :key="index">
                <a :href="item.RouteURL" target="_blank">
                  <img class="img-fluid pb-2" :src="item.InterviewImage" style="border-width: 0px;">
                  <h4 class="text-height-4 card-header-height-1 text-uppercase OTitle">{{ item.InterviewTitle }}</h4>
                </a>
                <p class="para-2 mb-2 Adate">{{ item.Name }} | {{ item.InterviewDate }}</p>
                <p class="para-1 text-justify mb-1 text-height-4 text-justify ddescription">{{ item.InterviewDetails }}</p>
                <a :href="item.RouteURL" target="_blank" class="para-2 para-2-c-2 otherReadm">Read More</a>
              
              </div>
              
              <div v-if="index % 2 === 0 && index !== paginatedData.length - 1" class="clearfix"></div>
            </div>
          </div>
          <div class="clearfix"></div>
          <div class="pagination pagiMob" id="pageN">

  <button @click="prevPage" :disabled="currentPage === 1" class="pagination-button">Previous</button>
  <span class="pagination-info">Page {{ currentPage }} of {{ totalPages }}</span>
  <button @click="nextPage" :disabled="currentPage === totalPages" class="pagination-button">Next</button>
</div>

        </div>
      </div>
    </div>
                <div class="col-md-3">
                    <Spotlight></Spotlight>
                    <Events></Events>
                </div>

            </div>
        </div>
    </div>
    <Footer></Footer>
</template>

<script>
import Header from "./Header.vue"
import Footer from "./Footer.vue"
import Spotlight from "./spotlight.vue"
import Events from "./Events.vue"
import axios from 'axios'
export default {
    name: 'c-suite-on-deck',
    components: {
        Header,
        Footer,
        Spotlight,
        Events
    },
    data() {
    return {
      apiData: [],       
      loading: true,     
      currentPage: 1,    
      itemsPerPage: 6,   
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.apiData.length / this.itemsPerPage);
    },
    paginatedData() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.apiData.slice(start, end);
    },
  },
  methods: {
    shouldAddClearfix(index) {
    return index % 2 === 0; // Returns true for every second iteration (even index)
  },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    
  
 
  
  },
    mounted() {
       
        axios.get('https://newapi.nathanark.com/api/GlobalCompanies/GetAllGlobalCompanyCSuiteOnDeckData?siteName=humanresources.report')
            .then(response => {
                
                this.apiData = response.data;
                this.loading = false;
            })
            .catch(error => {
               
                console.error('Error fetching data:', error);
                this.loading = false;
            });
    },
}


</script>

<style scoped>
h2.text-uppercase.mb-0.mt-5.GcSuiteEve {
    margin: 30px 0 15px 0 !important;
}
</style>

<style scoped>
.pagination {
  text-align: center;
  margin-top: 10px;
}

.pagination-button {
  background-color: #0C566A;
  color: #fff;
  padding: 8px 12px;
  margin: 0 5px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}

.pagination-button:disabled {
  background-color: #ccc;
  color: #666;
  cursor: not-allowed;
}

.pagination-info {
  margin: 0 10px;
  font-size: 14px;
  color: #333;
}
</style>
