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
    },
    push: {
      type: [String, Number],
      default: 0 
    },
    pull: {
      type: [String, Number],
      default: 0
    }
  },
  computed: {
    gutter() {
      let parent = this.$parent
      return parent ? parent.gutter : 0
    },
    classObj() {
      return [
        'pulse-col',
        `span-${this.span}`,
        `offset-${this.offset}`,
        `pull-${this.pull}`,
        `push-${this.push}`
      ]
    },
    styleObj() {
      const ret = {}
      if(this.gutter) {
        ret.paddingLeft = this.gutter / 2 + 'em'
        ret.paddingRight = ret.paddingLeft
      }
      return ret
    }
  }
}
</script>