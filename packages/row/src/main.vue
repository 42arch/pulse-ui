<template>
  <div :class="classObj">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'PlRow',
  props: {
    align: {
      type: [String, Number],
      default: 'top'
    },
    justify: {
      type: [String, Number],
      default: 'start'
    }
  },
  computed: {
    classObj() {
      return [
        'pulse-row',
        this.align,
        this.justify
      ]
    }
  }
}
</script>