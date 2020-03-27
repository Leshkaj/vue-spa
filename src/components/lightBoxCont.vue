<template>
    <div class="lightbox__container">
        <lightBox color="green" :active="isGreen" :blinking="isBlinkingGreen"></lightBox>
        <lightBox color="yellow" :active="isYellow" :blinking="isBlinkingYellow"></lightBox>
        <lightBox color="red" :active="isRed" :blinking="isBlinkingRed"></lightBox>
    </div>
</template>
 
<script>
  import lightBox from './lightBox.vue'
  export default {
    components: {
        lightBox
    },
    props: ['activeColor', 'solidTime'],
    data: function () {
        return {
            isGreen: false,
            isYellow: false,
            isRed: false,
            isBlinkingGreen: false,
            isBlinkingYellow: false,
            isBlinkingRed: false,
        }
    },
    created() {
        switch (this.activeColor){
            case 'green':
                setTimeout(() => {
                    this.isBlinkingGreen = true;
                    this.isBlinkingYellow = false;
                    this.isBlinkingRed = false;
                }, this.solidTime*1000);
                this.isGreen = true;
                break;
            case 'yellow':
                setTimeout(() => {
                    this.isBlinkingGreen = false;
                    this.isBlinkingYellow = true;
                    this.isBlinkingRed = false;
                }, this.solidTime*1000);
                this.isYellow = true;
                break;
            case 'red':
                setTimeout(() => {
                    this.isBlinkingGreen = false;
                    this.isBlinkingYellow = false;
                    this.isBlinkingRed = true;
                }, this.solidTime*1000);
                this.isRed = true;
                break;
        }
    },
}
</script>