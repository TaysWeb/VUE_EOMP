<template>
    <div class="container-fluid">
        <div class="container">
   <div class="row row-cols-2 py-5">
      <div class="col">
        <div class="contact-title text-center">
              <h3 class="fw-bolder mb-5 fs-1 text-decoration-underline"> Contact T J  </h3>
            </div>
      </div>
    <div class="col">

        <div class="col-lg-8">
        <label for="inputName" class="form-label">Name</label>
       <input type="name" class="form-control" id="inputName">
        </div>

        <div class="col-md-6">
        <label for="inputEmail4" class="form-label text-white">Email</label>
       <input type="email" class="form-control rounded-3" id="inputEmail4" style="background:#b3b1b1">
        </div>

    <div class="mb-2">
    <label for="validationTextarea" class="form-label">Textarea</label>
    <textarea class="form-control" id="validationTextarea" placeholder="Required example textarea" required></textarea>
    <div class="invalid-feedback">
      Please enter a message in the textarea.
    </div>
    </div>

    </div>
      <div class="col">  
        <img src="https://i.postimg.cc/65vpkqV2/24-hours-customer-service-icon-24-7-support-icon-sign-button-customer-service-icon-vector.jpg"
                 alt="24-hours" width="450">
       </div>

    </div> <!--end of main row row-->
</div>

     

    </div>
</template>
<script>
export default {
    name :'contact',
}
</script>
<style >
   .contact-title h3 {
    letter-spacing: 3px;
    font-style:italic ;
    font-size:30px;
    font-weight: bolder;
   } 

</style>