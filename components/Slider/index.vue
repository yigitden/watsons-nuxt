<template>
<div id="default-carousel" class="relative" data-carousel="static">
    <!-- Carousel wrapper -->
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96 bg-titan">
         <!-- Item 1 -->
        <div class=" duration-700 ease-in-out " data-carousel-item>
             <div class="grid grid-cols-2">
                <div >
                    <p class="text-grey font-bold text-sm ">Naturals By Watsons</p>
                     <p class="text-coal font-bold text-4xl	 ">The new 2021 collection</p>
                     <p class="text-graphene mt-4 ">Known as "the miracle plant", Aloe Vera helps to nourish, moisturize and keep the hair looking smooth. Let your hair be flexible and fresh.</p>
                </div>
                <div>            
                 <img src="/images/right.png" alt="...">
                </div>
            </div>
        </div>
        <!-- Item 2 -->
        <div class=" duration-700 ease-in-out" data-carousel-item>
            <div class="grid grid-cols-2">
                <div>

                </div>
                <div>            
                 <img src="/images/right.png"  alt="...">
                </div>
            </div>
        </div>
        <!-- Item 3 -->
        <div class=" duration-700 ease-in-out " data-carousel-item>
        <div class="grid grid-cols-2">
                <div></div>
                <div>            
                 <img src="/images/right.png"  alt="...">
                </div>
            </div>
             </div>
    </div>
    <!-- Slider indicators -->
    <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
    </div>
    <!-- Slider controls -->
    <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30  group-hover:bg-white/50  group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
            <svg  class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30  group-hover:bg-white/50  group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
            <svg  class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>
</template>

<script>
export default {
    name:'Slider',
    mounted() {
      let sliderScript = document.createElement('script')
      sliderScript.setAttribute('src', 'https://unpkg.com/flowbite@1.4.0/dist/flowbite.js')
      document.head.appendChild(sliderScript )
    },
}
</script>

<style>

</style>