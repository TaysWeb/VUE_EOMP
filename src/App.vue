<template>
  <navbarComp/>
 
  <router-view/>
   <footerComp/>

</template>
<script>
<<<<<<< HEAD
import navbarComp from './components/navbar-comp'
import footerComp from './components/footer-comp'
=======
import navbarComp from './components/navbar-comp';
import footerComp from './components/footer-comp';


>>>>>>> 733a47ba70a1f53d19005957c37c49b001e6c587
export default {
  components:{navbarComp,footerComp}
}
</script>
<style>
#app {
  font-family: Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background: scroll;
} 
::-webkit-scrollbar {
    display: none;
}
 body {
  overflow-x: hidden;
} 
li {
list-style:none;
}

</style>
