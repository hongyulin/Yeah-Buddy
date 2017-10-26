<template>
  <section>
  
      <swiper :options="swiperOption">
        <swiper-slide v-for="item in list">Slide{{item}}</swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </section>
</template>

<script>
  export default {
  	data() {
  	  return {
        list:[1,2,3,3,4,5,6,7],
    		swiperOption: {
    		  pagination: '.swiper-pagination',
          paginationClickable: true,
          spaceBetween: 30,
          centeredSlides: true,
          autoplay: 2500,
          autoplayDisableOnInteraction: false
    		}
  	  }
  	}
  }
</script>