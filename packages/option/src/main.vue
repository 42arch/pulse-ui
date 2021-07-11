<template>
  <li :class="classObj" @click="clickHandler">
    <slot>{{ value }}</slot>
  </li>
</template>

<script>
export default {
  name: 'PlOption',
  props: {
    disabled: { type: Boolean, default: false },
    index: { type: [String, Number], required: true },
    value: { type: String }
  },
  data () {
    return {
      active: false
    }
  },
  computed: {
    classObj() {
      return [
        'pulse-option',
        { 'active': this.active },
        { 'disabled': this.disabled }
      ]
    }
  },
  methods: {
    clickHandler(evt) {
      console.log(11, evt)
      evt.index = this.index
      this.$emit('click', evt)
      
    }
  }
}
</script>