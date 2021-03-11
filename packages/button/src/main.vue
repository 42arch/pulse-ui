<template>
  <button :class="classObj"
    @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'pluse-button',
  props: {
    active: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    size: {
      type: String
    },
    type: {
      type: String
    },
    shape: {
      type: String
    }
  },
  computed: {
    classObj() {
      return [
        'pulse button',
        { 'active': this.active },
        { 'disabled': this.disabled },
        { 'loading': this.loading },
        this.type,
        this.shape,
        this.size
      ]
    }
  },
  methods: {
    handleCLick(evt) {
      this.$emit('cilck', evt)
    }
  }
}
</script>