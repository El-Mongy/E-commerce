<template>
  <div class="header position-sticky top-0 start-0">
    <div class="bg-body p-2 container d-flex justify-content-between align-items-center">
    <a href="/" class=" logo text-decoration-none fs-4 text-secondary fw-bold">mrentomojo</a>
    <div class="d-flex justify-content-center flex-gap-4 align-items-center">
      <fa style="color: #777; cursor: pointer;" icon="cart-shopping"></fa>
      <span class="d-block mx-1  fs-6">Cart</span>
      <button type="button" class="btn btn-danger text-light fs-6" @click="viewlog()">Login / Signup</button>
      <div v-if="viewLogin" class="main-login">
        <div class="d-flex bg-body justify-content-center rounded-4 position-sticky overflow-hidden logsub">
          <div class="col-6 d-none p-5 d-lg-flex align-items-center justify-content-center">
            <img style="max-width: 150%;" src="../Global/imgs/landing-image.png" alt="">
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
  </div>
  </div>
</template>

<script>

export default ({
  data: function(){
    return{
      viewLogin: ""
    }
  },
  name: "AppHeader",
  methods: {
    viewlog(){
      this.viewLogin=true;
    },
    dislog(){
      this.viewLogin="";
    }
  },
});
</script>

<style>
  .header{
    background-color: white;
    box-shadow: 0 0 10px #a4a4a4;
    z-index: 100;
  }
  button{
    transition: 1s !important;
  }
  button:hover{
    border: 1px solid red !important;
    color: red !important;
    background-color: white !important;
  }
  .logo::first-letter{
    padding: 0 3px 2px;
    background-color: red;
    color: white;
    border-radius: 5px;
    font-size: 30px;
    margin-right: 10px;
  }
  label > span{
    color: rgb(8, 229, 163);
  }
  .main-login{
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    float: left;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100vh;
    background-color: #00000049;
  }
  .login{
    background-color: #e5e5e546;
  }
  input[type="text"]{
    width: 100%;
    padding: 10px;
    margin: 20px 0;
    border: none;
    outline: none;
    border-radius: 3px;
    border-bottom: 2px solid #dfdbdb;
    transition: 1s;
  }
  input[type="text"]:hover,
  input[type="text"]:focus{
    border-bottom-color:black;
  }
  input[type="text"]::placeholder{
    font-size: 12px;
    color: #777;
  }
  .agreement{
    font-size: 12px;
  }
  .fshead{
    width: 100%;
    font-size: 13px;
  }
  .logsub{
    width: 40%;
    height: 60%;
    margin: auto;
  }
  @media (max-width: 991px) {
    input[type="text"]{
      padding: 5px;
      margin: 10px 0;
    }
    input[type="text"]::placeholder{
      font-size: 10px;
    }
    .agreement{
      font-size: 10px;
    }
    .fshead{
      font-size: 11px;
    }
    .logsub{
    width: 50%;
    height: 60%;
    margin: auto;
    }
  }
  @media (max-width: 400px){
    .logsub{
    width: 65%;
    margin: auto;
    }
  }
  .exiticon{
    cursor: pointer;
    display: block;
    font-size: 20px;
    position: absolute;
    top: -35px;
    right: 10px;
  }
</style>