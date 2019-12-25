<template>
  <div class="index container">
    <div class="card" v-for="menu in menues" :key="menu.id">
      <div class="card-content">
        <h2 class="indigo-text"> {{ menu.title}}</h2>
        <ul class="ingredients">
          <li v-for="(ing, index) in menu.ingredients" :key="index">
            <span class="chip"> {{ ing }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      menues: [
        {title: 'avi brew', slug: 'avi-brew', ingredients: ['bananas','coffe','waffels'], id: '1'},
        {title: 'morning mood', slug: 'morning-mood', ingredients: ['Papaya','milk','toasted bread'], id: '2'},
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .index{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
    margin-top: 60px;
  }

  .index h2{
    font-size: 1.8em;
    text-align: center;
    margin-top: 0;

  }

  .index .ingredients{
    margin: 30px auto;
  }

  .index .ingredients li{
    display: inline-block;
  }
</style>
