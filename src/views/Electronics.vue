<template>
  <div class="electronics">
    <RoutesHeader></RoutesHeader>
    <div v-if="thePhone=='' && theDevice==''" class="container py-4">
      <div class="head py-4 my-4 d-flex align-items-center justify-content-start">
        <fa style="font-size: 50px; color: aquamarine;" icon="mobile-screen-button"></fa>
        <div class="d-flex align-items-start justify-content-start flex-column gap-1 mx-3">
          <h3 class="m-0 text-start">Electronics on rent</h3>
          <p class="m-0 text-start text-secondary">Checkout our huge collection of electronics on rent</p>
        </div>
      </div>
      <h4>Browse by Electronics type</h4>
      <div class="row my-4">
        <div class="col-sm-6 col-md-3 position-relative one-package" @click="thePhone='GO'">
          <img src="../components/Global/imgs/elec1.webp" width="100%" alt="">
          <div class="info d-flex align-items-center justify-content-center gap-2">
            <p class="m-0">Smartphones</p>
          </div>
        </div>
        <div class="col-sm-6 col-md-3 position-relative one-package" @click="theDevice='GO'">
          <img src="../components/Global/imgs/elec2.webp" width="100%" alt="">
          <div class="info d-flex align-items-center justify-content-center gap-2">
            <p class="m-0">Smart Devices</p>
          </div>
        </div>
        <div class="col-sm-6 col-md-3 position-relative one-package" @click="theDevice='GO'">
          <img src="../components/Global/imgs/elec3.webp" width="100%" alt="">
          <div class="info d-flex align-items-center justify-content-center gap-2">
            <p class="m-0">Laptops</p>
          </div>
        </div>
        <div class="col-sm-6 col-md-3 position-relative one-package" @click="theDevice='GO'">
          <img src="../components/Global/imgs/elec4.webp" width="100%" alt="">
          <div class="info d-flex align-items-center justify-content-center gap-2">
            <p class="m-0">Tablets</p>
          </div>
        </div>
      </div>
    </div>
    <div v-if="thePhone!='' && theDevice==''" class="container">
      <div class="head py-4 my-4 d-flex align-items-center justify-content-start">
        <fa style="font-size: 40px; color: #1dbdc0;" icon="mobile-screen-button"></fa>
        <div class="d-flex align-items-start justify-content-start flex-column gap-1 mx-3">
          <h6 class="m-0 text-start">Smartphones on rent</h6>
          <p class="m-0 text-start text-secondary">Checkout our huge collection of smartphones on rent</p>
        </div>
      </div>
      <div class="row my-4">
        <div class="col-12 col-md-4 p-3 d-flex flex-column align-items-center justify-content-start" @click="viewlog()">
          <div class="border p-4 rounded-4">
            <div class="image position-relative rounded-4 border overflow-hidden">
              <span class="heart-span border position-absolute bg-light">
                <fa class="the-heart" icon="heart" @click="viewlog()"></fa>
              </span>
              <img class="imagepho" src="../components/Global/imgs/phone1.webp" width="100%" alt="">
            </div>
            <p class="my-4 text-start fs-6 fw-normal">Samsung Galaxy S10 (Prism Black)</p>
            <div class="d-flex align-items-center justify-content-between py-1 border-top">
              <span class="d-block fs-6">$1950/mo</span>
              <span class="d-block fs-6">
                <fa style="font-size: 15px; color: #4581e1;" icon="truck-moving"></fa>
                3-5 Days
                <fa style="font-size: 15px; color: #4581e1;" icon="circle-info"></fa>
              </span>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4 p-3 d-flex flex-column align-items-center justify-content-start" @click="viewlog()">
          <div class="border p-4 rounded-4">
            <div class="image position-relative rounded-4 border overflow-hidden">
              <span class="heart-span border position-absolute bg-light">
                <fa class="the-heart" icon="heart" @click="viewlog()"></fa>
              </span>
              <img class="imagepho" src="../components/Global/imgs/phone2.webp" width="100%" alt="">
            </div>
            <p class="my-4 text-start fs-6 fw-normal">Samsung Galaxy S10 (Prism Black)</p>
            <div class="d-flex align-items-center justify-content-between py-1 border-top">
              <span class="d-block fs-6">$1750/mo</span>
              <span class="d-block fs-6">
                <fa style="font-size: 15px; color: #4581e1;" icon="truck-moving"></fa>
                3-5 Days
                <fa style="font-size: 15px; color: #4581e1;" icon="circle-info"></fa>
              </span>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4 p-3 d-flex flex-column align-items-center justify-content-start" @click="viewlog()">
          <div class="border p-4 rounded-4">
            <div class="image position-relative rounded-4 border overflow-hidden">
              <span class="heart-span border position-absolute bg-light">
                <fa class="the-heart" icon="heart" @click="viewlog()"></fa>
              </span>
              <img class="imagepho" src="../components/Global/imgs/phone3.webp" width="100%" alt="">
            </div>
            <p class="my-4 text-start fs-6 fw-normal">Samsung Galaxy S10 (Prism Black)</p>
            <div class="d-flex align-items-center justify-content-between py-1 border-top">
                <span class="d-block fs-6">$3300/mo</span>
                <span class="d-block fs-6">
                  <fa style="font-size: 15px; color: #1dbdc0;" icon="truck-moving"></fa>
                  3-5 Days
                  <fa style="font-size: 15px; color: #1dbdc0;" icon="circle-info"></fa>
                </span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 nomore mx-auto my-5 text-center">
          <h2><fa style="color: #1dbdc0;" icon="circle-xmark"></fa></h2>
          <h3>No more products in stock</h3>
    </div>
    <div v-if="viewLogin" class="main-login">
      <div class="d-flex bg-body justify-content-center rounded-4 position-sticky overflow-hidden logsub">
        <div class="col-6 d-none p-5 d-lg-flex align-items-center justify-content-center">
          <img style="max-width: 150%;" src="../components/Global/imgs/landing-image.png" alt="">
        </div>
        <div class="login col-lg-6 col-md-12 text-start py-5 px-2">
          <div class="modal-body">
            <label class="fshead position-relative">
              <span class="exiticon" @click="dislog()"><fa icon="xmark"></fa></span>
              Enter your number to<br>
              Signup or Login
              <input type="text" name="number" placeholder="Enter Your Phone Number*">
            </label>
            <input class="mx-2" type="checkbox" name="agree" id="agree">
            <label class="d-inline agreement" for="#agree">I agree to the <span>terms and conditions</span> & <span>privacy and policies</span></label>
            <button class="btn btn-warning d-block mx-auto my-4 text-light col-12 fw-bold" @click="dislog()">Continue</button>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div v-if="theDevice!=''" class="col-12 my-5 mx-auto nomore text-center">
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
        viewLogin: '',
        thePhone: '',
        theDevice: ''
      }
    },
    components: {
      Footer,
      RoutesHeader
    },
    methods: {
    viewlog(){
      this.viewLogin=true;
    },
    dislog(){
      this.viewLogin="";
    }
  },
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
  .imagepho{
    transition: 1s;
  }
  .image:hover .imagepho{
    transform: scale(1.2) rotate(15deg);
  }
  .heart-span{
    z-index: 10;
    top: 10px;
    right: 10px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .the-heart{
    cursor: pointer;
    color: #c4c4c4;
    transition: 1S;
  }
  .heart-span:hover .the-heart{
    color: red;
  }
  .main-login{
    z-index: 100;
  }
  .nomore{
    width: fit-content;
  }
</style>