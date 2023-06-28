<template >
  <div class="about-home">
    <div class="container-fluid py-3">
    <div class="row justify-content-center">
        <div class="col-lg-6">
            <div class="about-title text-center">
              <h3 class="fw-bold mb-5 fs-1 text-decoration-underline">Why Choose T J  </h3>
            </div>
        </div>
    </div>
      <div class="row ">       
       <div class="circle">       
         <img src="https://i.postimg.cc/k5LVYS8Y/pexels-lukas-296287.png"  alt="pexels-lukas-296287" width="150" class="curve float-start">
         <p class="fs-3 me-2  align-content-between">T J  Cafe is the only Cafe that manufactures personalized  Coffee 
           Cups that <br> comes with a complimentary<br> coffee of your choice as well. </p>
          <button class="btn btn-dark fs-3 rounded-4 border-0 text-uppercase" style="background: #a96735;">Read More</button>
          </div>
      </div>
    </div>
    </div>
</template>
<script>
export default {
   name: 'aboutH',

}
</script>
<style >
 .about-home .row {
  margin: 2.5rem;
}
.about-home .about-title h3 {
    font-family:cursive;
    font-weight:300;
    font-style: italic;
}

  .about-home .circle p {
    font-family: cursive;
    line-height: 2;
    letter-spacing: 4px;
    font-style: italic;
    font-weight:200;
    margin-top:50px;
  }
  .about-home .circle .curve { 
    width: 410px; height: 415px;
    min-width: 150px;
    float: left ;
    margin-right:10rem;  
    border-radius: 50%;
    -webkit-shape-outside:circle();
    shape-outside:circle();
  } 
</style>