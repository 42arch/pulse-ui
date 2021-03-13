<template>
  <div :class="classObj" @click.stop="clickHandler">
    <input type="hidden" :name="name" :value="currentValue">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "PlSwitch",
  props: {
    value: {
      type: [ Boolean, Number, String ],
      default: false
    },
    name: {
      type: String
    },
    trueValue: {
      type: [String, Number, Boolean],
      default: true
    },
    falseValue: {
      type: [String, Number, Boolean],
      default: false
    },
    disabled : {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      currentValue: this.value
    }
  },
  computed: {
    classObj() {
      return [
        'pulse-switch',
        { 'disabled': this.disabled },
        { 'checked': this.value  }
      ]
    }
  },
  watch: {
    value(val) {
      if(val !== this.trueValue && val !== this.falseValue) {
        throw 'Value should'
      }
      this.currentValue = val
    }
  },
  methods: {
    clickHandler() {
      const checked = this.currentValue === this.trueValue ? this.falseValue : this.trueValue;
      this.currentValue = checked
      this.$emit('input', checked)
      this.$emit('change', checked)
    }
  }
}
</script>