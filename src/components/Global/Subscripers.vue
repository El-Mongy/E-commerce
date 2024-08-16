<template>
  <div class="subscriper bg-body-tertiary d-none d-md-block">
    <div class="container">
      <div class="row">
        <div class="col-md-5 z-3">
          <h4 class="text-start">Over 1.5 lac<br>happy subscribers</h4>
          <p class="text-secondary text-start fs-5 my-4">Here's what they have <br>to say about their<br> RentoMojo experience.</p>
          <div class="buttons d-flex gap-2 mx-4">
            <button class="p-3 border border-secondary-subtle bg-body d-flex  align-items-center justify-content-between rounded-circle" @click="goRight()"><fa icon="angle-left"></fa></button>
            <button class="p-3 border border-secondary-subtle bg-body d-flex  align-items-center justify-content-between rounded-circle" @click="goLeft()"><fa icon="angle-right"></fa></button>
          </div>
      </div>
      <div class="col-md-7 overflow-x-hidden">
        <div id="the-subscriper" class="d-flex flex-nowrap z-1" >
          <div class="subs p-5 rounded-4">
          <span class="position-absolute top-0 right-0"><fa icon="quote-right"></fa></span>
          <div class="d-flex gap-4 align-items-center justify-content-start">
            <img class="my-4 rounded-circle" src="../Global/imgs/ava1.jpg" alt="">
            <h6 class="fw-bold">Marwan Mousa</h6>
          </div>
          <p class="text-start text-body-tertiary">
            Marriage comes with a lot of unavoidable expenses in India and spending a big chunk of your 
            savings on furniture and white goods could be a big challenge. RentoMojo not just took away all 
            our worries but in fact went to the extent of spoiling us. Where I could have owned just some bare 
            essentials after making a huge hole in my pocket or paid unnecessary EMIs, I could smartly own 
            a lot of stuff which would have come much later on my list. Heartfelt thanks to  the whole Rentomojo 
            team for making our renting experience completely hassle-free. It has been two great years and I am sure 
            there are many more to come.
          </p>
        </div>
        <div class="subs p-5 rounded-4">
          <span class="position-absolute top-0 right-0"><fa icon="quote-right"></fa></span>
          <div class="d-flex gap-4 align-items-center justify-content-start">
            <img class="my-4 rounded-circle" src="../Global/imgs/ava1.jpg" alt="">
            <h6 class="fw-bold">Osama Mohamed</h6>
          </div>
          <p class="text-start text-body-tertiary">
            When I moved to Bangalore from Chennai, I went to multiple websites to get a bed until I found out about Rentomojo. 
            I rented a bed and mattress, just to try it out. They delivered it within a day and set it up at my place without any hassle. 
            Now I sleep so peacefully that I always end up being late for work :D
          </p>
        </div>
        <div class="subs p-5 rounded-4">
          <span class="position-absolute top-0 right-0"><fa icon="quote-right"></fa></span>
          <div class="d-flex gap-4 align-items-center justify-content-start">
            <img class="my-4 rounded-circle" src="../Global/imgs/ava5.jpg" alt="">
            <h6 class="fw-bold">Salma Ahmed</h6>
          </div>
          <p class="text-start text-body-tertiary">
            I got to know about RentoMojo through a friend and looked up for AC on their website and finally rented one. 
            The delivery guys installed the AC in 2 days. And with a such a low deposit and rent, I didn't have to spend a 
            whole lot for my comfort. Thank you RentoMojo, for being so easy breezy on my pocket.
          </p>
        </div>
        <div class="subs p-5 rounded-4">
          <span class="position-absolute top-0 right-0"><fa icon="quote-right"></fa></span>
          <div class="d-flex gap-4 align-items-center justify-content-start">
            <img class="my-4 rounded-circle" src="../Global/imgs/ava1.jpg" alt="">
            <h6 class="fw-bold">Ali Reda</h6>
          </div>
          <p class="text-start text-body-tertiary">
            Rentomojo was unbelievably helpful. Never thought that setting up a new place would be just few clicks away. 
            The customer support staff was on their toes to help me. Anytime I need something for my house, Rentomojo has it. :)
          </p>
        </div>
        <div class="subs p-5 rounded-4">
          <span class="position-absolute top-0 right-0"><fa icon="quote-right"></fa></span>
          <div class="d-flex gap-4 align-items-center justify-content-start">
            <img class="my-4 rounded-circle" src="../Global/imgs/ava5.jpg" alt="">
            <h6 class="fw-bold">Ola Sayed</h6>
          </div>
          <p class="text-start text-body-tertiary">
            The thought of renting the furniture had never occurred to me. 
            When I saw Rentomojo's affordable range, I was super excited to try and it was really amazing. 
            From service to product quality, everything was superb. I don’t have to carry the same 
            furniture to every house I move to and can change the look of my home whenever I want 😬
          </p>
        </div>
        <div class="subs p-5 rounded-4">
          <span class="position-absolute top-0 right-0"><fa icon="quote-right"></fa></span>
          <div class="d-flex gap-4 align-items-center justify-content-start">
            <img class="my-4 rounded-circle" src="../Global/imgs/ava1.jpg" alt="">
            <h6 class="fw-bold">Mahmoud Magdy</h6>
          </div>
          <p class="text-start text-body-tertiary">
            I was suddenly asked to move to Chennai from Bengaluru in couple of days. 
            Everything was garbled for me and huge tension of getting apartment, buying furnitures, 
            selling while going back to Bangalore. Thanks to RentoMojo for excellent budgeted plans. 
            With few mouse clicks and nominal security deposit u are done ☺. No tension for delivery, 
            Rentomojo is a furniture wish wizard. Also takes care of relocation made my life easy. 
            Happy to be a customer for Rentomojo. It made my house a happy home!
          </p>
        </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function (){
    return {
      theCounter: 0,
    }
  },
  name:"Subscripers",
  methods: {
    goRight(){
      if (this.theCounter < 0){
        this.theCounter += 580;
        document.getElementById('the-subscriper').style.cssText = `transform: translateX(${this.theCounter}px);`
      }
    },
    goLeft(){
      if (this.theCounter >= -2320){
              this.theCounter -= 580;
      document.getElementById('the-subscriper').style.cssText = `transform: translateX(${this.theCounter}px);`
      }
    }
  },
}
</script>

<style scoped>
  #the-subscriper{
    transition: 1s;
  }
  .subscriper{
    position: relative;
    padding: 100px 0;
    background-color: #e1e5e9;
  }
  .subscriper::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0%;
    width: 41.666%;
    height: 100%;
    background-color: #f8f9fa;
    z-index: 2;
  }
  h4{
    position: relative;
    line-height: 1.3;
  }
  h4::before{
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    background-color: red;
    width: 60px;
    height: 2px;
  }
  .subs{
    position: relative;
    background-color: #e1e5e9;
    min-width: 500px;
    margin-right: 80px;
  }
  .subs > span{
    font-size: 150px;
    transform: translate(100px,-40px);
    color: #b5e2f1;
  }
  img{
    width: 70px;
  }
</style>