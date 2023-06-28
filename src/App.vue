<template>
  <navbarComp/>
  <router-view/>
   

</template>
<script>
import navbarComp from './components/navbar-comp';
export default {
  components:{navbarComp}
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
    margin: 0%;
    padding: 0;
    background: scroll;
} 
::-webkit-scrollbar {
    display: none;
}
 body {
  overflow-x: hidden;
} 

</style>
