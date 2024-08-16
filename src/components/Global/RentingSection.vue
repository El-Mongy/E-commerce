<template>
  <div class="renting">
    <div class="container">
    <h4 class="my-5 p-0  text-start">There's more<br>to renting</h4>
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-sm-6 text-start single-part">
          <fa style="font-size: 40px; color: #1dbdbc; margin-bottom: 30px;" icon="bed"></fa>
          <h5>Finest-quality products</h5>
          <p class="text-secondary">Quality matters to you, and us! That's why we do a strict quality-check for every product.</p>
        </div>
        <div class="col-md-4 col-sm-6 text-start single-part">
          <fa style="font-size: 40px; color: #1dbdbc; margin-bottom: 30px;" icon="location-dot"></fa>
          <h5>Free relocation</h5>
          <p class="text-secondary">Changing your house or even your city? We'll relocate your rented products for free.</p>
        </div>
        <div class="col-md-4 col-sm-6 text-start single-part">
          <fa style="font-size: 40px; color: #1dbdbc; margin-bottom: 30px;" icon="gears"></fa>
          <h5>Free maintenance</h5>
          <p class="text-secondary">Keeping your rented products in a spick and span condition is on us, so you can sit back and relax.</p>
        </div>
        <div class="col-md-4 col-sm-6 text-start single-part">
          <fa style="font-size: 40px; color: #1dbdbc; margin-bottom: 30px;" icon="filter-circle-xmark"></fa>
          <h5>Cancel anytime</h5>
          <p class="text-secondary">Pay only for the time you use the product and close your subscription without any hassle.</p>
        </div>
        <div class="col-md-4 col-sm-6 text-start single-part">
          <fa style="font-size: 40px; color: #1dbdbc; margin-bottom: 30px;" icon="person-walking-arrow-loop-left"></fa>
          <h5>Easy return on delivery</h5>
          <p class="text-secondary">If you don't like the product on delivery, you can return it right away—no questions asked.</p>
        </div>
        <div class="col-md-4 col-sm-6 text-start single-part">
          <fa style="font-size: 40px; color: #1dbdbc; margin-bottom: 30px;" icon="arrow-up-right-dots"></fa>
          <h5>Keep upgrading</h5>
          <p class="text-secondary">Bored of the same product? Upgrade to try another, newer design and enjoy the change!</p>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "RentingSection"
}
</script>
<style scoped>
  .renting{
    padding: 100px 0;
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
  .single-part{
    margin-bottom: 40px;
  }
  @media (max-width: 767px) {
    .single-part{
      text-align: center !important;
      margin: 10px auto;
  }
  }
  p{
    font-size: 15px;
  }
</style>