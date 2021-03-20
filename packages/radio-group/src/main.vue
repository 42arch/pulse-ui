<template>
  <div :class="classObj" @click="clickHandler">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "PlRadioGroup",
  props: {
    value: {
      type: [Number, String]
    },
    mode: {
      type: String,
      default: 'horizontal'
    }
  },
  computed: {
    classObj() {
      return [
        'pulse-radio-group',
        this.mode
      ]
    }
  },
  mounted () {
    this.reRender()
  },
  updated () {
    this.reRender()
  },
  methods: {
    clickHandler(evt) {
      this.$emit('input', evt.index)
      this.$emit('change', evt.index)
    },
    reRender () {
      this.$children.forEach((ele) => {
        if (this.value === ele.index) {
          ele.active = true
        } else {
          ele.active = false
        }
      })
    }
  }
}
</script>