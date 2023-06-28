<template>
    <div class="container-fluid">
    <nav class="navbar navbar-expand-lg fixed-top">
        <div class="container-fluid">

        <!-- NAV BUTTON  -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasResponsive"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <!-- OFFCANVAS MAIN CONTAINER START -->
        <section
          class="offcanvas offcanvas-end"
          id="offcanvasResponsive"
          tabindex="-1"
        >
          <div class="offcanvas-header">
           
            <button
              class="btn-close"
              type="button"
              aria-label="Close"
              data-bs-dismiss="offcanvas"
            ></button>
          </div>
          <!-- OFF CANVAS MENU LINKS  START-->
          <div
            class="offcanvas-body d-flex flex-column justify-content-between px-0"
          >
            <ul class="navbar-nav fs-5 p-3 justify-content-evenly">
              <li class="nav-item active p-3 py-md-1">
                <router-link to="/" class="nav-link">HOME</router-link>
              </li>
              <li class="nav-item p-3 py-md-1">
                <router-link to="/" class="nav-link">PRODUCTS</router-link>
              </li>
              <li>
                <img src="https://i.postimg.cc/6Q14zm7z/EOMP-LOGO-Recovered.png" alt="EOMP-LOGO-Recovered" width="130" class="navbar-brand">
              </li>
           
              <li class="nav-item p-3 py-md-1">
                <router-link to="/" class="nav-link">ADMIN</router-link>
              </li>
              <li class="nav-item p-3 py-md-1">
                <router-link to="/" class="nav-link">CONTACT</router-link>
              </li>
           
            
                 <!-- Right elements -->
                 <div class="d-flex align-items-end p-3 " >
                  <!-- Icon -->
                  <a class="link-secondary fs-1 m-3" >
                    <!-- Add Icons using Array format -->
                   <font-awesome-icon :icon="['fas', 'shopping-cart']" style="color:#D97212;"/>
                  </a>
              </div>
            </ul>
          </div>
        </section>
        <!-- OFFCANVAS MAIN CONTAINER END  -->
      </div>
    </nav>
    </div>
</template>

<script>
export default {
  name: 'navbar',
  props: {
    msg: String
  }
}
</script>


<style >
  nav, .offcanvas {
   background-color:#CBAC8D !important;
}
.navbar {
    height:8rem ;
}
.navbar-toggler {
    border: none;
}
.navbar-toggler:focus {
    outline: none;
}
.navbar .navbar-nav { 
    padding:2rem 3rem 0 0;
}
 .navbar .navbar-brand img  { 
    padding:  10rem 0 3rem 2rem  ;
} 
 .navbar .nav-item  .nav-link {
    display: inline-block;
    justify-content: space-between;
    padding: 30px;
    font-size: 20px;
    font-weight: 550;
}
</style>
