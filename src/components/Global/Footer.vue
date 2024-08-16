<template>
  <div class="the-foot">
    <div class="container">
    <div class="row">
      <div class="col-12 my-4">
        <h6 class="m-0 p-0">RentoMojo Pune: The Budget Way To A Better Lifestyle!</h6>
        <p>
          RentoMojo is a leading Indian rental brand. We offer top-quality furniture, appliances, 
          and electronics on rent in Pune at a budget monthly price. It’s cheaper to rent what your home needs from us, 
          instead of spending a huge amount purchasing it from a store. We provide great deals and benefits with our rental products.
        </p>
        <p>
          You can rent any furniture, appliance, or gadget from us for a few weeks or a few years, 
          based on your needs and budget. If you subscribe long-term, you get the most savings. 
          We provide multiple added advantages with a top-notch rental experience. 
          Our benefits include free maintenance, free relocation, and damage waiver.
        </p>
        <p>
          All the products in our inventory are in mint condition. We provide furniture, electronics, 
          and appliances made by the best brands in the market. You can rent from us within 5 minutes online. 
          We offer free doorstep delivery and installation all over Pune, including localities such as Camp, 
          Koregaon Park, Hinjewadi, Yerawada, and Kothrud.
        </p>
      </div>
    </div>
    <div class="row py-4">
      <div class="col-md-3 col-sm-6">
        <h6 class="text-uppercase">rentomojo</h6>
        <ul class="list-unstyled">
          <li>About Us</li>
          <li>Culture</li>
          <li>Investors</li>
          <li>Careers</li>
          <li>Contact</li>
          <li>Our Benefits</li>
          <li>Sitemap</li>
          <li>Landlords</li>
        </ul>
      </div>
      <div class="col-md-3 col-sm-6">
        <h6 class="text-uppercase">information</h6>
        <ul class="list-unstyled">
          <li>Blog</li>
          <li>Support Home</li>
          <li>Documents Required</li>
          <li>Annual Returns</li>
        </ul>
      </div>
      <div class="col-md-3 col-sm-6">
        <h6 class="text-uppercase">policies</h6>
        <ul class="list-unstyled">
          <li>Shipping Policy</li>
          <li>Cancellation & Return</li>
          <li>Privacy Policy</li>
          <li>Rental Terms & Conditions</li>
          <li>Referral Terms & Conditions</li>
        </ul>
      </div>
      <div class="col-md-3 col-sm-6">
        <h6 class="text-uppercase">need help ?</h6>
        <ul class="list-unstyled">
          <li class="d-flex align-items-center justify-content-center gap-2">
            <fa style="padding: 0; margin: 0;" :icon="['fab', 'telegram']" />
            <p class="p-0 m-0">jo@rentomojo.com</p>
          </li>
        </ul>
      </div>
      <div class="row last-footer">
        <p id="par" class="col-12 col-md-4 my-1">&copy; Made with love by <span class="text-uppercase">el-mongy</span></p>
        <div class="col-12 col-md-4 my-1 d-flex align-items-center justify-content-center gap-4">
          <span class="p-2 text-secondary border border-secondary rounded-circle pointer bg-secindary fs-6"><fa :icon="['fab', 'facebook']" /></span>
          <span class="p-2 text-secondary border border-secondary rounded-circle pointer bg-secindary fs-6"><fa :icon="['fab', 'twitter']" /></span>
          <span class="p-2 text-secondary border border-secondary rounded-circle pointer bg-secindary fs-6"><fa :icon="['fab', 'linkedin']" /></span>
          <span class="p-2 text-secondary border border-secondary rounded-circle pointer bg-secindary fs-6"><fa :icon="['fab', 'youtube']" /></span>
          <span class="p-2 text-secondary border border-secondary rounded-circle pointer bg-secindary fs-6"><fa :icon="['fab', 'instagram']" /></span>
        </div>
        <div class="col-12 col-md-4 my-1 but">
          <span class="to-up" @click="goUp()">Go UP <fa icon="angle-up"></fa></span>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  name: "Footer",
  methods: {
    goUp(){
      window.scrollTo(0,0);
    }
  }
}
</script>

<style scoped>
  .the-foot{
    padding: 100px 0 0;
    background-color: #e9e9e9;
    text-align: start;
    font-size: 12px;
  }
  p{
    color: #777;
    font-weight: 100;
  }
  ul li {
    width: fit-content;
    margin: 10px 0;
    color: #777;
    font-size: 12px;
    border-bottom: 1px solid transparent;
    transition: 1s;
  }
  ul li:hover{
    border-bottom: 1px solid gray;
  }
  .last-footer{
    padding: 20px 0 0;
    border-top: 1px solid #777;
  }
  .pointer{
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .to-up{
    cursor: pointer;
    border-bottom: 1px solid transparent;
    transition: 1s;
  }
  .to-up:hover{
    border-bottom: 1px solid gray;
  }
  .but{
    text-align: end;
  }
  @media (max-width: 780px) {
    .but{
      text-align: center;
    }
    #par{
      text-align: center;
    }
  }
</style>