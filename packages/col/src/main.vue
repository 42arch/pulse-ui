<template>
  <div :class="classObj" :style="styleObj">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'PlCol',
  props: {

    span: {
      type: [String, Number],
      default: 8
    },
    offset: {
      type: [String, Number],
      default: 0
    }
  },
  computed: {
    classObj() {
      return [
        'pulse-col',
        `span-${this.span}`
      ]
    },
    styleObj() {
      return ""
    }
  }
}
</script>