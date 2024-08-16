<template>
  <div class="bikes">
    <RoutesHeader></RoutesHeader>
    <div v-if="theBike==''" class="container py-4">
      <div class="head py-4 my-4 d-flex align-items-center justify-content-start">
        <fa style="font-size: 50px; color: aquamarine;" icon="bicycle"></fa>
        <div class="d-flex align-items-start justify-content-start flex-column gap-1 mx-3">
          <h3 class="m-0 text-start">Bikes  on rent</h3>
          <p class="m-0 text-start text-secondary">Checkout our huge collection of bikes on rent</p>
        </div>
      </div>
      <h4>Browse by bikes type</h4>
      <div class="row">
        <div class="col-sm-6 col-md-3 position-relative one-package my-4" @click="theBike='GO'">
          <img src="../components/Global/imgs/bike.webp" width="100%" alt="">
          <div class="info d-flex align-items-center justify-content-center gap-2">
            <p class="m-0">Cycles</p>
          </div>
        </div>
      </div>
    </div>
    <div v-if="theBike!=''" class="col-12 my-5 mx-auto nomore text-center">
        <h2><fa style="color: #1dbdc0;" icon="circle-xmark"></fa></h2>
        <h3>sorry, no products in stock yet</h3>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/components/Global/Footer.vue';
import RoutesHeader from '@/components/Global/RoutesHeader.vue';

export default{
    name: "Package",
    data: function (){
      return{
        theBike:''
      }
    },
    components: {
      Footer,
      RoutesHeader
    }
  }
</script>

<style scoped>
  h4{
    text-align: center;
    position: relative;
  }
  h4::before{
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 2px;
    background-color: red;
  }
  .one-package{
    margin: 40px 0;
    cursor: pointer;
    transition: 1s;
  }
  .one-package:hover{
    transform: translateY(-10px);
  }
  .info{
    width: 70%;
    color: #777;
    background-color: white;
    padding: 10px 10px;
    font-size: 15px;
    font-weight: normal;
    border: 1px solid #e1e5e9;
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
  }
  .nomore{
    width: fit-content;
  }
</style>