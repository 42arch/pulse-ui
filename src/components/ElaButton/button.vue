<template>
    <button class="ela_button" @click="handleClick">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'ElaButton',
    methods: {
        handleClick(evt){
            this.$emit('click', evt)
        }
    }
}
</script>

<style>

</style>