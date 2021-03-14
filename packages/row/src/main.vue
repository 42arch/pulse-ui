<template>
  <div :class="classObj" :style="styleObj">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'PlRow',
  props: {
    gutter: {
      type: {
        type: [String, Number],
        default: 0
      }
    },
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
    },
    styleObj() {
      const ret = {}
      if(this.gutter) {
        ret.marginLeft = `-${this.gutter / 2}em`
        ret.marginRight = ret.marginLeft
      }
      return ret
    }
  }
}
</script>