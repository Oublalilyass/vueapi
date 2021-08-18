<template>
<div id="app">
  <h1>Bitcoin Price Index</h1>

{{ currency }}
  
</div>
</template>

<script>

 console.log(1);

import axios from 'axios';
import Vue from 'vue';

new Vue({
  el: '#app',
  data () {
    return {
      info: null,
      loading: true,
      errored: false
    }
  },
  
  method () {
    console.log('2');
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => {
        this.info = response.data.bpi
        console.log('Here' + + this.info);
      })
      .catch(error => {
        console.log(error)   
      }) 
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
