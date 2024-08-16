<template>
  <div class="home">
    <!-- <AppHeader></AppHeader> -->
    <DynamicSection></DynamicSection>
    <h4 class=" text-center my-3 fw-normal">Rent Furniture & Appliances</h4>
    <SectionRoute></SectionRoute>
    <HomeSection></HomeSection>
    <RentingSection></RentingSection>
    <Subscripers></Subscripers>
    <Footer></Footer>
  </div>
</template>

<script>


import AppHeader from '../components/Global/AppHeader.vue';
import DynamicSection from '../components/Global/DynamicSection.vue';
import SectionRoute from '../components/Global/SectionsRoute.vue';
import HomeSection from '../components/Global/HomeSection.vue';
import RentingSection from '../components/Global/RentingSection.vue';
import Subscripers from '../components/Global/Subscripers.vue';
import Footer from '../components/Global/Footer.vue';

export default {
  name: 'HomeView',
  components: {
    AppHeader,
    DynamicSection,
    SectionRoute,
    HomeSection,
    RentingSection,
    Subscripers,
    Footer
  },
}
</script>
