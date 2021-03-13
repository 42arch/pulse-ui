<template>
  <div :class="classObj" @click="handleClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "PlSwitch",
  props: {
    value: {
      type: [ Boolean, Number, String ],
      // type: Boolean,
      default: false
    },
    disabled : {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classObj() {
      return [
        'pulse-switch',
        { 'disabled': this.disabled },
        { 'checked': this.value }
      ]
    }
  },
  methods: {
    handleClick() {
      console.log(this.value)
      this.value = !this.value
      this.$emit('change', this.value)
    }
  }
}
</script>