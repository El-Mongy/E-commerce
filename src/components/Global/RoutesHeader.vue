<template id="route-head">
  <div class="sec-head bg-light d-flex align-items-center justify-content-between">
    <div class="container container-2 d-flex flex-wrap align-items-center justify-content-between">
      <h6 class="tohome d-flex align-items-center justify-content-between m-0 p-0"><router-link to="/">Home</router-link></h6>
      <ul class="list-unstyled d-flex flex-nowrap align-items-center justify-content-end gap-4 m-0 p-0">
      <li>
        <router-link to="/rentomojo/src/views/Package.vue">Package</router-link>
      </li>
      <li>
        <router-link to="/rentomojo/src/views/Furniture.vue">Furniture</router-link>
      </li>
      <li>
        <router-link to="/rentomojo/src/views/Appliances.vue">Appliances</router-link>
      </li>
      <li>
        <router-link to="/rentomojo/src/views/Electronics.vue">Electronics</router-link>
      </li>
      <li>
        <router-link to="/rentomojo/src/views/Bikes.vue">Bikes</router-link>
      </li>
      <li>
        <router-link to="/rentomojo/src/views/Baby.vue">Baby & Kids</router-link>
      </li>
      <li>
        <router-link to="/rentomojo/src/views/Fitness.vue">Fitness</router-link>
      </li>
    </ul>
    </div>
  </div>
</template>
<script>
import Package from '@/views/Package.vue';
import Furniture from '@/views/Furniture.vue';
import Appliances from '@/views/Appliances.vue';
import Electronics from '@/views/Electronics.vue';
import Bikes from '@/views/Bikes.vue';
import Baby from '@/views/Baby.vue';
import Fitness from '@/views/Fitness.vue';


export default {
  name: "RoutesHeader",
  components: {
    Package,
    Furniture,
    Appliances,
    Electronics,
    Bikes,
    Baby,
    Fitness,
  }
}

</script>

<style scoped>
  .sec-head{
    padding: 10px;
    border-bottom: 1px solid #e1e5e9;
  }
  @media (max-width: 767px) {
    .sec-head,
    .container-2{
      justify-content: center !important;
      gap: 10px
    }
    ul{
      justify-content: center !important;
      gap: 10px !important;
      flex-wrap: wrap !important;
    }
    .tohome > a{
      margin: auto;
    }
  }
  ul > li,
  .tohome{
    width: 71px;
    font-size: 13px;
  }
  .tohome > a{
    font-size: 13px;
  }
  ul > li > a,
  .tohome > a{
    text-decoration: none;
    color: #aeaeae;
    transition: 1s;
  }
  ul > li > a:hover,
  .tohome > a:hover{
    color: rgb(17, 202, 215);
  }
</style>