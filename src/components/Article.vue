
<template>

  <div class="row ng-star-inserted HideSliderDestop articleDiv">
      <div v-for="article in articles" :key="article.id" class="col-md-12 pt-3 ng-star-inserted">
        <a :href="article.RouteURL" target="_blank">
          <img :src="article.ImageURL" class="resources-img-h pb-2 pr-5 GcSuiteImg" alt="article Image">
          <h4 class="text-uppercase Reso_article_Title">{{ article.WhitePaperTitle }}</h4>
        </a>
        <p class="para-3 text-channelize">{{ article.ResourceType }}</p>
      </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
  name: 'MyArticle',
  data() {
    return {
      articles: [],
    };
  },
  mounted() {
   
    axios.get('https://newapi.nathanark.com/api/Home/GetHomeResourceArticles?siteName=humanresources.report')
      .then(response => {
    
        this.articles = response.data;
      })
      .catch(error => {
      
        console.error('Error fetching articles:', error);
      });
  },
}
</script>

