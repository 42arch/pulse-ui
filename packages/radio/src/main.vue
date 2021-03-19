<template>
  <div :class="classObj" @click="clickHandler">
    <input type="radio">
    <label></label>
    <span>
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'PlRadio',
  props: {
    index: {
      type: [String, Number],
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      active: false
    }
  },
  computed: {
    classObj() {
      return [
        'pulse-radio',
        { 'active': this.active },
        { 'disabled': this.disabled }
      ]
    }
  },
  methods: {
    clickHandler(evt) {
      if (this.disabled) {
        return
      }
      this.active = true
      evt.index = this.index
      // this.$emit('change', this.index)
    }
  }
}
</script>