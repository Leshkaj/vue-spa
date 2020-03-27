<template>
    <div class="lightbox__timer lightbox__container">
         <p>{{ counter }}</p>
    </div>
</template>
 
<script>
  export default {
    props: ['counter'],
    data: function () {
        return {
        }
    },
}
</script>

<style scoped>
</style>