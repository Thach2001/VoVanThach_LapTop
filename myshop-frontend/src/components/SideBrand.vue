<template>
  <div class="container">
    <div class="box-container">
        <h3 class="title">Thương hiệu nổi bật</h3>
        <Splide :options="options" aria-label="My Favorite Images">
            <SplideSlide>
                <img src="../images/brands/Asus.webp" alt="Sample 1">
            </SplideSlide>
            <SplideSlide>
                <img src="../images/brands/Acer.webp" alt="Sample 2">
            </SplideSlide>
            <SplideSlide>
                <img src="../images/brands/Dell.webp" alt="Sample 3">
            </SplideSlide>
            <SplideSlide>
                <img src="../images/brands/Macbook.webp" alt="Sample 4">
            </SplideSlide>
            <SplideSlide>
                <img src="../images/brands/Gigabyte.webp" alt="Sample 5">
            </SplideSlide>
            <SplideSlide>
                <img src="../images/brands/MSI.webp" alt="Sample 6">
            </SplideSlide>
            <SplideSlide>
                <img src="../images/brands/HP.webp" alt="Sample 7">
            </SplideSlide>
            <SplideSlide>
                <img src="../images/brands/Lenovo.webp" alt="Sample 8">
            </SplideSlide>
            <SplideSlide>
                <img src="../images/brands/LG.webp" alt="Sample 9">
            </SplideSlide>
        </Splide>
    </div>
  </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    Splide,
    SplideSlide,
  },
  setup() {
    const options = {
        perPage: 6,
        perMove: 1,
        gap: 2,
        height: 160,
        rewind: true,
        autoplay: true,
    };

    return { options };
  },
});
</script>

<style scoped>
.container {
    margin: 0 auto;
}
.box-container {
    height: 150px;
    padding: 0 0;
}
.title {
    font-size: 22px;
    font-weight: normal;
    border-bottom: 3px solid #eee;
    margin-bottom: 30px;
    padding: 10px 0;
}
.splide__slide {
    height: 45px !important;
    text-align: center;
}
</style>