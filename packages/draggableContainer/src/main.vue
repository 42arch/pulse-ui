<template>
  <div class="pul-draggable-container" :style="{width: width + 'px', height: height + 'px'}" v-drag>
    <div class="header" id="header" ref="header">
      <span class="title">
        {{title}}
      </span>
      <span class="close-icon" @click="handleCloseEvt">&#215;</span>
    </div>
    <div class="content">
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
    handleCloseEvt(evt){
      this.$emit("close", evt)
    }
  },
  mounted() {
    
  },
  directives: {
    drag(el) {
      setTimeout(()=> {
        let oDiv = el
        console.log(233, el)
        let headerDiv = el.querySelector('#header')
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