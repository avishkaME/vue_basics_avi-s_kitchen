<template>
    <div class="add-menu container">
        <h2 class="center-align indigo-text">Add new menu</h2>
        <form @submit.prevent="AddMenu">
            <div class="field title">
                <label for="title">Menu title:</label>
                <input type="text" name="title" id="" v-model="title">
            </div>
            <div class="field add-ingredient">
                <label for="add-ingredient">Add an ingredient:</label>
                <input type="text" name="add-ingredient">
            </div>
            <div class="field center-align">
                <button class="btn pink">Add Menu</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'AddMenu',
    data(){
        return {
            title: null
        }
    },
    methods: {
        AddMenu(){
            console.log(this.title)
        }
    }
}
</script>

<style>
    .add-menu{
        margin-top: 60px;
        padding: 20px;
        max-width: 500px;
    }

    .add-menu h2{
        font-size: 2em;
        margin: 20px auto;
    }
</style>