<template>
  <div :class="classObj">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "PlButtonGroup",
  props: {
    type: {
      type: String
    },
    size: {
      type: String
    }
  },
  computed: {
    classObj() {
      return [
        'pulse-button-group',
        this.type,
        this.size
      ]
    }
  }
}
</script>