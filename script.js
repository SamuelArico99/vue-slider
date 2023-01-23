const { createApp } = Vue

createApp({
  data() {
    return {
        images: [ 
            'img/01.webp',
            'img/02.webp',
            'img/03.webp',
            'img/04.webp',
            'img/05.webp',
        ],
        activeIndex: 0
    }
  },
  methods: {
    nextImg(){
        if (this.activeIndex == this.images.length - 1) {
            this.activeIndex = 0;
        }
        else{
            this.activeIndex++;
        }
    },
    prevImg(){
        if (this.activeIndex == 0) {
            this.activeIndex = this.images.length - 1;
        }
        else{
            this.activeIndex--;
        }

    }
  }
}).mount('#app')