<template>
<div class="text">
    <textarea placeholder="按 Ctrl + Enter 发送" v-model="content" ></textarea>
</div>
</template>


<script>


export default {
    data () {
        return {
            content: ''
        };
    }
};
</script>



<style lang="less" scoped>
.text {
    position: fixed;
    width: 100%;
    bottom:0;
    border-top: solid 1px #ddd;
    textarea {
        padding: 10/50rem;
        height: 100%;
        width: 100%;
        border: none;
        outline: none;
        font-family: "Micrsofot Yahei";
        resize: none;
    }
}
</style>