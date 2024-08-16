<template>
  <div class="container">
    <ul class="list-unstyled d-flex flex-wrap align-items-center justify-content-between gap-20px my-2">
      <li>
        <router-link to="/rentomojo/src/views/Package.vue">
          <a href="#" class="moving">
            <fa icon='box'></fa>
            <span>Package</span>
          </a>
        </router-link>
      </li>
      <li>
        <router-link to="/rentomojo/src/views/Furniture.vue">
          <a href="#" class="moving">
            <fa icon='couch'></fa>
            <span>Furniture</span>
          </a>
        </router-link>
      </li>
      <li>
        <router-link to="/rentomojo/src/views/Appliances.vue">
          <a href="#" class="moving">
            <fa icon='blender-phone'></fa>
            <span>Appliances</span>
          </a>
        </router-link>
      </li>
      <li>
        <router-link to="/rentomojo/src/views/Electronics.vue">
          <a href="#" class="moving">
            <fa icon='mobile-screen-button'></fa>
            <span>Electronics</span>
          </a>
        </router-link>
      </li>
      <li>
        <router-link to="/rentomojo/src/views/Bikes.vue">
          <a href="#" class="moving">
            <fa icon='bicycle'></fa>
            <span>Bikes</span>
          </a>
        </router-link>
      </li>
      <li>
        <router-link to="/rentomojo/src/views/Baby.vue">
          <a href="#" class="moving">
            <fa icon='baby-carriage'></fa>
            <span>Baby & Kids</span>
          </a>
        </router-link>
      </li>
      <li>
        <router-link to="/rentomojo/src/views/Fitness.vue">
          <a href="#" class="moving">
            <fa icon='dumbbell'></fa>
            <span>Fitness</span>
          </a>
        </router-link>
      </li>
    </ul>
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


export default{
  name: "SectionRoute",
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
  ul > li{
    width: 150px;
    height: 108px;
    margin-bottom: 20px;
  }
  ul > li a{
    text-decoration: none;
  }
  ul > li .moving{
    font-size: 25px;
    text-decoration: none;
    padding: 20px;
    border-radius: 5px;
    border: 1px solid #eeeeeea2;
    box-shadow: 0 0 10px #eee;
    color: #1dbdbc;
    display: flex;
    gap: 20px;
    flex-direction: column;
    align-items: center;
    transition: 0.5s;
  }
  ul > li .moving:hover{
    transform: scale(1.1) translateY(-5px);
    box-shadow: 2px 0px 15px rgba(128, 128, 128, 0.621);
  }
  ul > li .moving > span{
    color: #777;
    font-size: 13px;
  }
  @media (max-width: 767px) {
    ul{
      flex-direction: column;
      gap: 20px;
    }
    ul > li{
      width: 100%;
      margin-bottom: 0;
    }
    ul > li .moving:hover{
      transform: scale(1) translateY(-5px);
    }
  }
</style>