<template>
  <div class="landing">
        <div id="banner" >
        <div id="carouselExampleInterval" class="carousel slide " data-bs-ride="carousel">
            <div class="carousel-inner mb-2">
              <div class="carousel-item active" data-bs-interval="10000">
                <img src="https://i.postimg.cc/sXp8kc1W/Banners-1-BIG-SCREEN.jpg" class="d-block w-100" alt="Banners-1-BIG-SCREEN">
                
              </div>
              <div id="banner-2" class="carousel-item" data-bs-interval="2000">
                <img src="https://i.postimg.cc/HxfmXgLC/Banners-2-BIG-SCREEN.jpg" class="d-block w-100"  alt="Banners-2-BIG-SCREEN">
              </div>
              <div id="banner-3"  class="carousel-item">
                <img src="https://i.postimg.cc/TwQm3t2m/Banners-3-BIG-SCREEN.jpg" class="d-block w-100"  alt="Banners-3-BIG-SCREEN">
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>

        </div> 
  </div>
 <aboutHComp/>
 <menuComp/>
 <moreComp/>
 <testComp/>
 <contactComp/>
</template>

<script>
// @ is an alias to /src
import aboutHComp from '../components/about-comp'
import menuComp from '../components/Menu-comp'
import moreComp from '../components/more-comp'
import testComp from '../components/testimonial-comp'
import contactComp from '../components/contact-comp'

export default {
  name: 'HomeView',
  components: {
    aboutHComp,menuComp,moreComp,testComp,contactComp
  }
}
</script>

<style>
.landing {
 height:105vh;
  background-color:#CBAC8D !important;
} 

.carousel {
    margin-top: 122px;
    height: 500px;
    background-color:#CBAC8D !important; 
  }
  
  .carousel-item,
  .carousel-inner {
    height: 100%;
   
  }
  .carousel-inner img {
    width: 100%;
    height: auto ;
  }
  .carousel-item:active {
      background-color:#CBAC8D !important; 
  }

@media (min-width:991px) and (max-width:1180px ) {
 
 .landing {
   height:90vh;
 }
   .carousel {
        width: 100%;
     }
 .about-home {
  margin-top:1.2rem;
  height:95vh;
 }
   .about-home .row {
  margin: 2.2rem;
}
 .about-home .about-title h3 {
    font-weight:260;
}
.about-home .circle p {

    font-weight:90;
    margin-top:3%;
  }
  .about-home .circle .curve { 
    width: 400px; height: 400px;
    min-width: 40%;
    margin-right:9rem;  
   
  } 
.about-home .row button {
    margin-top:2%;
}
}
  @media (min-width:312px) and (max-width:990px){
 .landing {
  width:100%;
 }
   .navbar .navbar-nav { 
      padding:2rem 3rem 4rem 2rem;
    }
   .navbar .navbar-brand img  { 
      padding:  12rem 2rem 5rem 4rem  ;
    } 
    .carousel {
        height: 90%;
        width:100%;
     }
      
    .carousel-item,
    .carousel-inner {
        height: 100%;
    }
      
    .carousel-inner img {
        width: 100%;
        height: auto ;
    }
   
    .about-title h3 {
      font-weight: 240;
  }
  .circle {
    width: 250px;
    height: 255px;
    position: absolute;

    }
   
}
@media (min-width:250px) and (max-width:311px){
   
  .landing{
  height: 70vh;
  
  }
  .carousel {
    width:315px;
  }
.carousel-inner img {
  width: 100%;
  height: auto ;
}
.about-title h3 {
   margin-top: 250px;
   font-weight: 160;
}
.circle {
width: 220px;
height: 225px;
margin: auto;
}

}
</style>