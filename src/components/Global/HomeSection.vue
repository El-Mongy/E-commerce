<template>
  <div class="home-page bg-body-tertiary">
    <div class="container text-start">
      <h4 class="m-0 p-0">You'll love to</h4>
      <div class="d-flex align-items-center justify-content-between m-0 p-0">
        <p class="parag fs-4">take these home</p>
        <div class="buttons d-flex gap-2 mx-4">
          <button class="p-3 border border-secondary-subtle bg-body d-flex  align-items-center justify-content-between rounded-circle" @click="goRight()"><fa icon="angle-left"></fa></button>
          <button class="p-3 border border-secondary-subtle bg-body d-flex  align-items-center justify-content-between rounded-circle" @click="goLeft()"><fa icon="angle-right"></fa></button>
        </div>
      </div>
    </div>
    <div class="container overflow-x-hidden text-start">
      <div id="fath-elem" class="container d-flex flex-nowrap align-items-center my-4">
      <div class="card the-card">
        <div class="image p-3 text-center ">
          <img src="../Global/imgs/home1.webp" class="card-img-top" alt="...">
        </div>
        <div class="card-body">
          <h5 class="card-title m-0 text-start">Single Door Fridge ...</h5>
          <div class="d-flex align-items-center justify-content-between my-4">
            <div class="d-flex flex-column text-start">
              <p>Rent</p>
              <span class="cost">$ 599/mo</span>
            </div>
            <a href="#" class="border border-danger px-4 py-2 text-danger text-decoration-none more">See More</a>
          </div>
        </div>
      </div>
      <div class="card the-card">
        <div class="image p-3 text-center ">
          <img src="../Global/imgs/home2.webp" class="card-img-top" alt="...">
        </div>
        <div class="card-body">
          <h5 class="card-title m-0 text-start">Single Door Fridge ...</h5>
          <div class="d-flex align-items-center justify-content-between my-4">
            <div class="d-flex flex-column text-start">
              <p>Rent</p>
              <span class="cost">$ 599/mo</span>
            </div>
            <a href="#" class="border border-danger px-4 py-2 text-danger text-decoration-none more">See More</a>
          </div>
        </div>
      </div>
      <div class="card the-card">
        <div class="image p-3 text-center ">
          <img src="../Global/imgs/home3.webp" class="card-img-top" alt="...">
        </div>
        <div class="card-body">
          <h5 class="card-title m-0 text-start">Single Door Fridge ...</h5>
          <div class="d-flex align-items-center justify-content-between my-4">
            <div class="d-flex flex-column text-start">
              <p>Rent</p>
              <span class="cost">$ 599/mo</span>
            </div>
            <a href="#" class="border border-danger px-4 py-2 text-danger text-decoration-none more">See More</a>
          </div>
        </div>
      </div>
      <div class="card the-card">
        <div class="image p-3 text-center ">
          <img src="../Global/imgs/home4.webp" class="card-img-top" alt="...">
        </div>
        <div class="card-body">
          <h5 class="card-title m-0 text-start">Single Door Fridge ...</h5>
          <div class="d-flex align-items-center justify-content-between my-4">
            <div class="d-flex flex-column text-start">
              <p>Rent</p>
              <span class="cost">$ 599/mo</span>
            </div>
            <a href="#" class="border border-danger px-4 py-2 text-danger text-decoration-none more">See More</a>
          </div>
        </div>
      </div>
      <div class="card the-card">
        <div class="image p-3 text-center ">
          <img src="../Global/imgs/home5.webp" class="card-img-top" alt="...">
        </div>
        <div class="card-body">
          <h5 class="card-title m-0 text-start">Single Door Fridge ...</h5>
          <div class="d-flex align-items-center justify-content-between my-4">
            <div class="d-flex flex-column text-start">
              <p>Rent</p>
              <span class="cost">$ 599/mo</span>
            </div>
            <a href="#" class="border border-danger px-4 py-2 text-danger text-decoration-none more">See More</a>
          </div>
        </div>
      </div>
      <div class="card the-card">
        <div class="image p-3 text-center ">
          <img src="../Global/imgs/home6.webp" class="card-img-top" alt="...">
        </div>
        <div class="card-body">
          <h5 class="card-title m-0 text-start">Single Door Fridge ...</h5>
          <div class="d-flex align-items-center justify-content-between my-4">
            <div class="d-flex flex-column text-start">
              <p>Rent</p>
              <span class="cost">$ 599/mo</span>
            </div>
            <a href="#" class="border border-danger px-4 py-2 text-danger text-decoration-none more">See More</a>
          </div>
        </div>
      </div>
      <div class="card the-card">
        <div class="image p-3 text-center ">
          <img src="../Global/imgs/home7.webp" class="card-img-top" alt="...">
        </div>
        <div class="card-body">
          <h5 class="card-title m-0 text-start">Single Door Fridge ...</h5>
          <div class="d-flex align-items-center justify-content-between my-4">
            <div class="d-flex flex-column text-start">
              <p>Rent</p>
              <span class="cost">$ 599/mo</span>
            </div>
            <a href="#" class="border border-danger px-4 py-2 text-danger text-decoration-none more">See More</a>
          </div>
        </div>
      </div>
      <div class="card the-card">
        <div class="image p-3 text-center ">
          <img src="../Global/imgs/home1.webp" class="card-img-top" alt="...">
        </div>
        <div class="card-body">
          <h5 class="card-title m-0 text-start">Single Door Fridge ...</h5>
          <div class="d-flex align-items-center justify-content-between my-4">
            <div class="d-flex flex-column text-start">
              <p>Rent</p>
              <span class="cost">$ 599/mo</span>
            </div>
            <a href="#" class="border border-danger px-4 py-2 text-danger text-decoration-none more">See More</a>
          </div>
        </div>
      </div>
      <div class="card the-card">
        <div class="image p-3 text-center ">
          <img src="../Global/imgs/home2.webp" class="card-img-top" alt="...">
        </div>
        <div class="card-body">
          <h5 class="card-title m-0 text-start">Single Door Fridge ...</h5>
          <div class="d-flex align-items-center justify-content-between my-4">
            <div class="d-flex flex-column text-start">
              <p>Rent</p>
              <span class="cost">$ 599/mo</span>
            </div>
            <a href="#" class="border border-danger px-4 py-2 text-danger text-decoration-none more">See More</a>
          </div>
        </div>
      </div>
      <div class="card the-card">
        <div class="image p-3 text-center ">
          <img src="../Global/imgs/home3.webp" class="card-img-top" alt="...">
        </div>
        <div class="card-body">
          <h5 class="card-title m-0 text-start">Single Door Fridge ...</h5>
          <div class="d-flex align-items-center justify-content-between my-4">
            <div class="d-flex flex-column text-start">
              <p>Rent</p>
              <span class="cost">$ 599/mo</span>
            </div>
            <a href="#" class="border border-danger px-4 py-2 text-danger text-decoration-none more">See More</a>
          </div>
        </div>
      </div>
      <div class="card the-card">
        <div class="image p-3 text-center ">
          <img src="../Global/imgs/home4.webp" class="card-img-top" alt="...">
        </div>
        <div class="card-body">
          <h5 class="card-title m-0 text-start">Single Door Fridge ...</h5>
          <div class="d-flex align-items-center justify-content-between my-4">
            <div class="d-flex flex-column text-start">
              <p>Rent</p>
              <span class="cost">$ 599/mo</span>
            </div>
            <a href="#" class="border border-danger px-4 py-2 text-danger text-decoration-none more">See More</a>
          </div>
        </div>
      </div>
      <div class="card the-card">
        <div class="image p-3 text-center ">
          <img src="../Global/imgs/home5.webp" class="card-img-top" alt="...">
        </div>
        <div class="card-body">
          <h5 class="card-title m-0 text-start">Single Door Fridge ...</h5>
          <div class="d-flex align-items-center justify-content-between my-4">
            <div class="d-flex flex-column text-start">
              <p>Rent</p>
              <span class="cost">$ 599/mo</span>
            </div>
            <a href="#" class="border border-danger px-4 py-2 text-danger text-decoration-none more">See More</a>
          </div>
        </div>
      </div>
      <div class="card the-card">
        <div class="image p-3 text-center ">
          <img src="../Global/imgs/home6.webp" class="card-img-top" alt="...">
        </div>
        <div class="card-body">
          <h5 class="card-title m-0 text-start">Single Door Fridge ...</h5>
          <div class="d-flex align-items-center justify-content-between my-4">
            <div class="d-flex flex-column text-start">
              <p>Rent</p>
              <span class="cost">$ 599/mo</span>
            </div>
            <a href="#" class="border border-danger px-4 py-2 text-danger text-decoration-none more">See More</a>
          </div>
        </div>
      </div>
      <div class="card the-card">
        <div class="image p-3 text-center ">
          <img src="../Global/imgs/home7.webp" class="card-img-top" alt="...">
        </div>
        <div class="card-body">
          <h5 class="card-title m-0 text-start">Single Door Fridge ...</h5>
          <div class="d-flex align-items-center justify-content-between my-4">
            <div class="d-flex flex-column text-start">
              <p>Rent</p>
              <span class="cost">$ 599/mo</span>
            </div>
            <a href="#" class="border border-danger px-4 py-2 text-danger text-decoration-none more">See More</a>
          </div>
        </div>
      </div>
      <div class="card the-card">
        <div class="image p-3 text-center ">
          <img src="../Global/imgs/home1.webp" class="card-img-top" alt="...">
        </div>
        <div class="card-body">
          <h5 class="card-title m-0 text-start">Single Door Fridge ...</h5>
          <div class="d-flex align-items-center justify-content-between my-4">
            <div class="d-flex flex-column text-start">
              <p>Rent</p>
              <span class="cost">$ 599/mo</span>
            </div>
            <a href="#" class="border border-danger px-4 py-2 text-danger text-decoration-none more">See More</a>
          </div>
        </div>
      </div>
      <div class="card the-card">
        <div class="image p-3 text-center ">
          <img src="../Global/imgs/home2.webp" class="card-img-top" alt="...">
        </div>
        <div class="card-body">
          <h5 class="card-title m-0 text-start">Single Door Fridge ...</h5>
          <div class="d-flex align-items-center justify-content-between my-4">
            <div class="d-flex flex-column text-start">
              <p>Rent</p>
              <span class="cost">$ 599/mo</span>
            </div>
            <a href="#" class="border border-danger px-4 py-2 text-danger text-decoration-none more">See More</a>
          </div>
        </div>
      </div>
      <div class="card the-card">
        <div class="image p-3 text-center ">
          <img src="../Global/imgs/home3.webp" class="card-img-top" alt="...">
        </div>
        <div class="card-body">
          <h5 class="card-title m-0 text-start">Single Door Fridge ...</h5>
          <div class="d-flex align-items-center justify-content-between my-4">
            <div class="d-flex flex-column text-start">
              <p>Rent</p>
              <span class="cost">$ 599/mo</span>
            </div>
            <a href="#" class="border border-danger px-4 py-2 text-danger text-decoration-none more">See More</a>
          </div>
        </div>
      </div>
      <div class="card the-card">
        <div class="image p-3 text-center ">
          <img src="../Global/imgs/home4.webp" class="card-img-top" alt="...">
        </div>
        <div class="card-body">
          <h5 class="card-title m-0 text-start">Single Door Fridge ...</h5>
          <div class="d-flex align-items-center justify-content-between my-4">
            <div class="d-flex flex-column text-start">
              <p>Rent</p>
              <span class="cost">$ 599/mo</span>
            </div>
            <a href="#" class="border border-danger px-4 py-2 text-danger text-decoration-none more">See More</a>
          </div>
        </div>
      </div>
      <div class="card the-card">
        <div class="image p-3 text-center ">
          <img src="../Global/imgs/home5.webp" class="card-img-top" alt="...">
        </div>
        <div class="card-body">
          <h5 class="card-title m-0 text-start">Single Door Fridge ...</h5>
          <div class="d-flex align-items-center justify-content-between my-4">
            <div class="d-flex flex-column text-start">
              <p>Rent</p>
              <span class="cost">$ 599/mo</span>
            </div>
            <a href="#" class="border border-danger px-4 py-2 text-danger text-decoration-none more">See More</a>
          </div>
        </div>
      </div>
      <div class="card the-card">
        <div class="image p-3 text-center ">
          <img src="../Global/imgs/home6.webp" class="card-img-top" alt="...">
        </div>
        <div class="card-body">
          <h5 class="card-title m-0 text-start">Single Door Fridge ...</h5>
          <div class="d-flex align-items-center justify-content-between my-4">
            <div class="d-flex flex-column text-start">
              <p>Rent</p>
              <span class="cost">$ 599/mo</span>
            </div>
            <a href="#" class="border border-danger px-4 py-2 text-danger text-decoration-none more">See More</a>
          </div>
        </div>
      </div>
      <div class="card the-card">
        <div class="image p-3 text-center ">
          <img src="../Global/imgs/home7.webp" class="card-img-top" alt="...">
        </div>
        <div class="card-body">
          <h5 class="card-title m-0 text-start">Single Door Fridge ...</h5>
          <div class="d-flex align-items-center justify-content-between my-4">
            <div class="d-flex flex-column text-start">
              <p>Rent</p>
              <span class="cost">$ 599/mo</span>
            </div>
            <a href="#" class="border border-danger px-4 py-2 text-danger text-decoration-none more">See More</a>
          </div>
        </div>
      </div>
      <div class="card the-card">
        <div class="image p-3 text-center ">
          <img src="../Global/imgs/home1.webp" class="card-img-top" alt="...">
        </div>
        <div class="card-body">
          <h5 class="card-title m-0 text-start">Single Door Fridge ...</h5>
          <div class="d-flex align-items-center justify-content-between my-4">
            <div class="d-flex flex-column text-start">
              <p>Rent</p>
              <span class="cost">$ 599/mo</span>
            </div>
            <a href="#" class="border border-danger px-4 py-2 text-danger text-decoration-none more">See More</a>
          </div>
        </div>
      </div>
      <div class="card the-card">
        <div class="image p-3 text-center ">
          <img src="../Global/imgs/home2.webp" class="card-img-top" alt="...">
        </div>
        <div class="card-body">
          <h5 class="card-title m-0 text-start">Single Door Fridge ...</h5>
          <div class="d-flex align-items-center justify-content-between my-4">
            <div class="d-flex flex-column text-start">
              <p>Rent</p>
              <span class="cost">$ 599/mo</span>
            </div>
            <a href="#" class="border border-danger px-4 py-2 text-danger text-decoration-none more">See More</a>
          </div>
        </div>
      </div>
      <div class="card the-card">
        <div class="image p-3 text-center ">
          <img src="../Global/imgs/home3.webp" class="card-img-top" alt="...">
        </div>
        <div class="card-body">
          <h5 class="card-title m-0 text-start">Single Door Fridge ...</h5>
          <div class="d-flex align-items-center justify-content-between my-4">
            <div class="d-flex flex-column text-start">
              <p>Rent</p>
              <span class="cost">$ 599/mo</span>
            </div>
            <a href="#" class="border border-danger px-4 py-2 text-danger text-decoration-none more">See More</a>
          </div>
        </div>
      </div>
      <div class="card the-card">
        <div class="image p-3 text-center ">
          <img src="../Global/imgs/home4.webp" class="card-img-top" alt="...">
        </div>
        <div class="card-body">
          <h5 class="card-title m-0 text-start">Single Door Fridge ...</h5>
          <div class="d-flex align-items-center justify-content-between my-4">
            <div class="d-flex flex-column text-start">
              <p>Rent</p>
              <span class="cost">$ 599/mo</span>
            </div>
            <a href="#" class="border border-danger px-4 py-2 text-danger text-decoration-none more">See More</a>
          </div>
        </div>
      </div>
      <div class="card the-card">
        <div class="image p-3 text-center ">
          <img src="../Global/imgs/home5.webp" class="card-img-top" alt="...">
        </div>
        <div class="card-body">
          <h5 class="card-title m-0 text-start">Single Door Fridge ...</h5>
          <div class="d-flex align-items-center justify-content-between my-4">
            <div class="d-flex flex-column text-start">
              <p>Rent</p>
              <span class="cost">$ 599/mo</span>
            </div>
            <a href="#" class="border border-danger px-4 py-2 text-danger text-decoration-none more">See More</a>
          </div>
        </div>
      </div>
      <div class="card the-card">
        <div class="image p-3 text-center ">
          <img src="../Global/imgs/home6.webp" class="card-img-top" alt="...">
        </div>
        <div class="card-body">
          <h5 class="card-title m-0 text-start">Single Door Fridge ...</h5>
          <div class="d-flex align-items-center justify-content-between my-4">
            <div class="d-flex flex-column text-start">
              <p>Rent</p>
              <span class="cost">$ 599/mo</span>
            </div>
            <a href="#" class="border border-danger px-4 py-2 text-danger text-decoration-none more">See More</a>
          </div>
        </div>
      </div>
      <div class="card the-card">
        <div class="image p-3 text-center ">
          <img src="../Global/imgs/home7.webp" class="card-img-top" alt="...">
        </div>
        <div class="card-body">
          <h5 class="card-title m-0 text-start">Single Door Fridge ...</h5>
          <div class="d-flex align-items-center justify-content-between my-4">
            <div class="d-flex flex-column text-start">
              <p>Rent</p>
              <span class="cost">$ 599/mo</span>
            </div>
            <a href="#" class="border border-danger px-4 py-2 text-danger text-decoration-none more">See More</a>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      theCounter: 100,
    }
  },
  name: "HomeSection",
  methods: {
    goRight(){
      if (this.theCounter < 0){
        this.theCounter += 200;
        document.getElementById('fath-elem').style.cssText = `transform: translateX(${this.theCounter}px);`
      }
    },
    goLeft(){
      this.theCounter -= 200;
      document.getElementById('fath-elem').style.cssText = `transform: translateX(${this.theCounter}px);`
    }
  },
}

</script>

<style scoped>
  #fath-elem{
    transition: 1s;
  }
  .home-page{
    padding: 100px 0;
  }
  .parag{
    position: relative;
  }
  .parag::before{
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    background-color: red;
    width: 60px;
    height: 2px;
  }
  p:not(.parag){
    font-size: 14px;
    color: #777;
    margin: 0;
  }
  .cost{
    font-size: 15px;
  }
  .the-card{
    min-width: 260px;
    margin-right: 30px;
  }
  .more{
    font-size: 13px;
    font-weight: 400;
    transition: 1s;
  }
  .more:hover{
    background-color: red;
    border-color: white;
    color: white !important;
  }
</style>