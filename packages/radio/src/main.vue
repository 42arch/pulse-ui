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
      this.active = true
    }
  }
}
</script>