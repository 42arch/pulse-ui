<template>
  <div :class="classObj" @click="clickHandler" @mouseover="mouseOverHandler" @mouseout="mouseOutHandler" v-clickoutside="away">

    <template>
      <i class="fa fa-times-circle" v-if="clear" @click.stop="clearHandler"></i>
      <i class="fa fa-angle-down" v-else></i>
      <!-- <i class="fa fa-search"></i> -->
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
      clear: false,
      selectedItems: []
    }
  },
  computed: {
    classObj() {
      return [
        'pulse-select',
        {'active': this.active}
      ]
    },
    // valueEmpty() {
    //   return this.values.length === 0
    // }
  },
  directives: { clickoutside },
  mounted () {
    
  },
  methods: {
    init() {
      this.selectedItems = []

    },
    mouseOverHandler () {
      this.clear = true
    },
    mouseOutHandler () {
      this.clear = false
    },
    clickHandler() {
      this.active = !this.active
    },
    clearHandler() {
      this.selectedItems = []
      this.away()
      this.emitChange([])
    },
    menuClickHandler(evt) {
      this.selectedItems.splice(0, 1, evt.target.__vue__)
      this.emitChange(evt.target.__vue__.value)

      console.log(this.selectedItems)
      
    },
    emitChange(v) {
      this.$emit('input', v)
      this.$emit('change', v)
    },
    away() {
      this.active = false
    }
  }
}
</script>