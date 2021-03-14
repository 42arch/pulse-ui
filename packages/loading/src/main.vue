<template>
  <div :class="classObj">

  </div>
</template>

<script>
export default {
  name: 'PlLoading',
  props: {
    active: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classObj() {
      return [
        'pulse-loading',
        { 'active': this.active }
      ]
    }
  }
}
</script>