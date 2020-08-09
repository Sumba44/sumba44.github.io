<template>
  <div
    class="divider"
    v-bind:style="{ height: height + 'px', width: width + 'px', margin: margin + 'px' + ' ' + (center ? 'auto' : '0')}"
  />
  <!-- <div v-bind:style="height ? 'height:' + height + 'px' : 'height: 1px;' && width ? 'width:' + width + 'px' : 'width: 30px;'" class="divider" /> -->
</template>

<script>
export default {
  props: {
      height: {
        type: String,
        default: '1'
      },
      width: {
        type: String,
        default: '30'
      },
      margin: {
        type: String,
        default: '20'
      },
      center: Boolean
    }
  
};
</script>

<style lang="scss">
.divider {
  width: 30px;
  background-color: $primary;
  margin: 20px 0;
}
</style>