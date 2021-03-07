<template>
  <div class="pul-draggable-container" :style="{width: width + 'px', height: height + 'px'}" v-drag>
    <div class="pul-draggable-container-header" id="pul-draggable-container-header">
      <span class="pul-draggable-container-title">
        {{title}}
      </span>
      <span class="pul-draggable-container-close">x</span>
    </div>
    <div class="pul-draggable-container-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "PulDraggableContainer",
  props: {
    title: {
      type: String,
      default: "默认标题"
    },
    width: {
      type: Number,
      default: 360
    },
    height: {
      type: Number,
      default: 480
    }
  },
  methods: {
    
  },
  mounted() {
    
  },
  directives: {
    drag(el) {
      setTimeout(()=> {
        let oDiv = el
        let headerDiv = document.getElementById('pul-draggable-container-header')
        headerDiv.onmousedown = function(e){
          let disX = e.clientX - oDiv.offsetLeft
          let disY = e.clientY - oDiv.offsetTop
          document.onmousemove = function(e){
            let l = e.clientX - disX
            let t = e.clientY - disY
            oDiv.style.left = l + "px"
            oDiv.style.top = t + "px"
          }
          document.onmouseup = function(e){
            document.onmousemove = null
            document.onmouseup = null
          }
          return false
        }
      }, 500)
    }
  }
}
</script>