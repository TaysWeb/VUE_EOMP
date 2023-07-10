<template >
    <div v-for="repo in repos" :key="repo.id">
         <div class="container-fluid">
        <div class="circle"> 
        <p>{{repo.id}}</p>      
         <h1>{{repo.name}}</h1>
         <h1>{{repo.content_url}}</h1>
         <h3>{{repo.homepage}}</h3>
        </div>
        </div>
     </div>   
</template>
<script>
import axios from 'axios';
export default {
  name :'Repository',
  data() {
    return {
        repos:null
    }
  }, 
  created: function() {
    axios.get("https://api.github.com/users/TaysWeb/repos").then((response) => {
      this.repos = response.data  ;
    });
  }
}
</script>
<style >
    
</style>