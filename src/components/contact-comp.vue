<template>
      <div class="contact">
    <div class="container-fluid">
        <div class="container">
   <div class="row row-cols-2 py-5">
      <div class="col">
        <div class="contact-title text-center">
              <h3 class="fw-bolder mb-5 fs-1 text-decoration-underline"> Contact T J  </h3>
            </div>
      </div>
    <div class="col">

        <div class="col-md-8">
        <label for="inputName" class="form-label fs-3">Name</label>
       <input type="name" class="form-control" id="inputName" placeholder="eg.John " style="background:#b3b1b1">
        </div>

        <div class="col-md-8">
        <label for="inputEmail4" class="form-label fs-3">Email</label>
       <input type="email" class="form-control rounded-2" id="inputEmail4" placeholder="eg.John@gmail.com" style="background:#b3b1b1">
        </div>

    <div class="col-md-8">
    <label for="validationTextarea" class="form-label fs-3">Comment</label>
    <textarea class="form-control" id="validationTextarea" style="background:#b3b1b1" placeholder="Insert any comments You may have !" required></textarea>
    <div class="invalid-feedback">
      Please enter a message in the textarea.
    </div>
    </div>
     
   

    </div>
         <div class="cont-img">
      <div class="col-md-4 mx-2 " >  
        <img src="https://i.postimg.cc/65vpkqV2/24-hours-customer-service-icon-24-7-support-icon-sign-button-customer-service-icon-vector.jpg"
                 alt="24-hours" width="400" height="400">
       </div>
      

    </div> <!--end of main row row-->

         <div class="row justify-content-center ms-auto" >
    <div class="col-lg-6-md-6 g-5 m-auto">
    <button type="submit" class="btn btn-primary mb-3  border-0 text-white fs-2" style="background:#8f7179;">Send</button>
  </div>
    </div>
     </div>
           
</div>

     

    </div>
    </div>
</template>
<script>
export default {
    name :'contact',
}
</script>
<style >
   .contact{
     height:104vh;
   }
   .contact-title h3 {
    letter-spacing: 3px;
    font-style:italic ;
    font-size:30px;
    font-weight: bolder;
   } 
   input {
    height:55px;
   }

</style>