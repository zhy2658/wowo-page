<template>
    <div class="btn">
        <button>click点击</button>
        
    </div>
</template>

<script lang="ts">
    export default{
        name: "Mybutton"
    }

</script>

<style>
    .btn>button{
        width: 100px;
        height: 30px;
        background-color: #b31a40;
        border: none;
        color: #fff;
        border-radius: 10px;
    }
    .btn>button:hover{
        background-color: #ad2447;
    }
    .btn>button:active{
        background-color: #660f25;
    }
</style>