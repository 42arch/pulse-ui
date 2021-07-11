<template>
  <div :class="classObj" @click="clickHandler" v-clickoutside="away">

    <template>
      <div :class="['text']">
        {{ selectedItems.length > 0 ? selectedItems[0].value : '' }}
      </div>
    </template>
    <ul class="pulse-select-dropdown" v-show="active && $slots.default"
      @click.stop="menuClickHandler($event)">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
import clickoutside from "../../../directives/clickoutside";
export default {
  name: 'PlSelect',
  props: {
    value: [Number, String, Array]
  },
  data () {
    return {
      active: false,
      selectedItems: []
    }
  },
  computed: {
    classObj() {
      return [
        'pulse-select',
        {'active': this.active}
      ]
    }
  },
  directives: { clickoutside },
  mounted () {
    
  },
  methods: {
    init() {
      this.selectedItems = []

    },
    clickHandler() {
      this.active = !this.active
    },
    menuClickHandler(evt) {
      this.selectedItems.splice(0, 1, evt.target.__vue__)
      this.$emit('input', evt.target.__vue__.value)
      this.$emit('change', evt.target.__vue__.value)

      console.log(this.selectedItems)
      
    },
    away() {
      this.active = false
    }
  }
}
</script>