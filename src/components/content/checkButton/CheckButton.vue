<template>
  <div class="check" :class="{act:check}"></div>
</template>

<script>
export default {
    props:{
        check:{
            type: Boolean,
            default: false
        }
    }
}
</script>

<style scoped>
.check{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border:1px solid gray
}
.check.act{
    background-color: aqua;
}
</style>