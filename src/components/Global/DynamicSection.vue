<template>
  <div class=" container my-2 position-relative">
    <ul class="list-unstyled d-flex gap-2 bg-light p-2 rounded-4 position-absolute bottom-0 start-50 translate-middle">
      <li><a href="#"  @click.prevent="doChange('First')"></a></li>
      <li><a href="#"  @click.prevent="doChange('Second')"></a></li>
      <li><a href="#"  @click.prevent="doChange('Third')"></a></li>
      <li><a href="#"  @click.prevent="doChange('Last')"></a></li>
    </ul>
    <component :is="theTarget"></component>
    <button class="rounded-2 position-absolute top-50 translate-middle-y end-0" @click="theNext()"><fa icon="angle-right"></fa></button>
    <button class="rounded-2 position-absolute top-50 start-0 translate-middle-y" @click="thePre()"><fa icon="angle-left"></fa></button>
    </div>
</template>
<script>

import First from '../DynamicComponents/FirstOne.vue';
import Second from '../DynamicComponents/SecondOne.vue';
import Third from '../DynamicComponents/ThirdOneD.vue';
import Last from '../DynamicComponents/LastOne.vue';



export default {
  data: () =>({
    theTarget: 'First',
    targetsValue: ["First", "Second", "Third", "Last"],
  }),
  methods:{
    doChange(value){
      this.theTarget = value;
      
    },
    theNext(){
      if (this.targetsValue.indexOf(this.theTarget) < this.targetsValue.length -1){
        this.theTarget = this.targetsValue[this.targetsValue.indexOf(this.theTarget) + 1];
      }else{
        this.theTarget = this.targetsValue[0];
      }
    },
    thePre(){
      if (this.targetsValue.indexOf(this.theTarget) <= 0){
        this.theTarget = this.targetsValue[this.targetsValue.length -1];
      }else{
        this.theTarget = this.targetsValue[this.targetsValue.indexOf(this.theTarget) - 1];
      }
    },
  },
  name: 'DynamicSection',
  components:{
    First,
    Second,
    Third,
    Last,
  }
}

</script>

<style scoped>
  ul > li > a{
    display: block;
    background-color: #77777768;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    transition: 1s;
  }
  ul > li > a:hover{
    background-color: #777;
  }
  button{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 5px;
    border: none;
    outline: none;
    width: 40px;
    height: 40px;
    font-size: 15px;
    color: #c2b8b8;
    background-color: var(--bs-body-bg);
  }
</style>

<style>

</style>