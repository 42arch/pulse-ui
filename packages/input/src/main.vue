<template>
  <div :class="classObj">
    <div class="prefix" v-if="prefix" v-html="prefix">

    </div>
    <div class="suffix">

    </div>
    <textarea v-if="type === 'textarea'" :value="value" @input="updateValue($event.target.value)"></textarea>
    <input v-else-if="type === 'text'" :type="type" :value="value" @input="updateValue($event.target.value)">
    <slot></slot>

  </div>
</template>

<script>
export default {
  name: 'PlInput',
  props: {
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classObj() {
      return [
        'pulse-input',
        { 'disabled': this.disabled }
      ]
    }
  },
  methods: {
    updateValue(val) {
      this.$emit('input', val)
    }
  }
}
</script>