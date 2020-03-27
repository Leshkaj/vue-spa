<template>
  <div class="lightbox__color" :class="{ lightbox__color_green : isGreen, lightbox__color_yellow : isYellow,
    lightbox__color_red : isRed, lightbox__color_active : active,  lightbox__color_blinking : isBlinking }">
  </div>
</template>
 
<script>
  export default {
    props: ['color', 'active', 'blinking'],
    data: function () {
        return {
            isGreen: false,
            isYellow: false,
            isRed: false,
        }
    },
    created() {
        switch (this.color){
            case 'green':
                this.isGreen = true;
                break;
            case 'yellow':
                this.isYellow = true;
                break;
            case 'red':
                this.isRed = true;
                break;
        }
    },
    computed: {
        isBlinking() {
            if (this.blinking){
                return true;
            }
            else{
                return false;
            }
        }
    },
}
</script>