<template>
    <div>
        <!-- <my-button></my-button> -->
        <Account></Account>
    </div>
</template>

<script lang="ts">
import person from './components/Person.vue'
import Car from './components/Car.vue'
import Goods from './components/Goods.vue'
import AnimalWatch2 from './components/AnimalWatch2.vue'
import AnimalWatch3 from './components/AnimalWatch3.vue'
import Account from './components/Account.vue'
export default {
    name: 'MyApp',
    components: {
        Car,
        person,
        Goods,
        AnimalWatch2,
        AnimalWatch3,
        Account
    }
}
</script>

<style>
body {
    /* background-color: #292a37;
    p,
    div {
        color: #fff;
    } */
}
.demo-box {
    /* width: 800px; */
    /* border-radius: 10px; */
    /* border: 1px solid rgb(231, 120, 153); */
    /* margin: 0 auto; */
    padding: 20px 20px;
    /* box-shadow: 0 0 10px 2px rgb(245, 184, 201); */

    /* p {
        line-height: 25px;
        span {A212
            color: rgb(209, 35, 87);
            font-weight: bold;
        }
    }
    button {
        background-color: rgba(58, 129, 187, 0.5);
        border: 1px solid rgb(231, 120, 153);
        color: #fff;
        padding: 5px 10px;
        border-radius: 3px;
        cursor: pointer;
        transition: 0.2s all linear;
        font-size: 16px;
    }
    button:hover {
        background-color: #6a96be;
    }
    button:active {
        background-color: #154674;
    } */
}
</style>
