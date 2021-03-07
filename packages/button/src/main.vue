<template>
  <button class="puz-button"
    @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'PuzButton',
  methods: {
    handleCLick(evt){
      this.$emit('cilck', evt)
    }
  }
}
</script>