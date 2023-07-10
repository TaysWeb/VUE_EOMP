<template>
    <div style="background: #a9a8a6;">
        <div class="container-fluid">

        <div class="row gap-4 justify-content-evenly">

         <div class="col-auto ms-1 mt-5 align-self-center ">
        <font-awesome-icon :icon="['fas', 'angle-left']" size="2xl" class="fs-1 " style="color: #31302e;" />
        </div> 

        <div class="col-auto">
        <figure class="figure rounded-5 mt-5">
         
       </figure>
       </div>

        <div class="col-auto">
        <figure class="figure rounded-5 mt-5">
         
       </figure>
       </div>

        <div class="col-auto">
        <figure class="figure rounded-5 mt-5">
         
       </figure>
       </div>

       <div class="col-auto ms-1 mt-5 align-self-center " >
        <font-awesome-icon :icon="['fas', 'angle-right']" size="2xl" class="fs-1  " style="color: #31302e;" />
        </div> 
 
       </div>
        </div>
    </div>
</template>
<script>
export default {
     name: 'testimonal',
}
</script>
<style >

   font-awesome-icon {
    font-weight:bold;
     
    }
    figure {
     border-style: solid;
     width:300px;
     height:450px;
     background:#af8d74;
    }
    
   
</style>