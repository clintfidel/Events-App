<template>
  <div class = "w-100 mt-3">
      <div class="form-control d-flex">
          <i class="bi bi-search mr-3"></i>
          <input @input="filterEvents" class = "w-100" type="text" placeholder="Search">
      </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  props: ['filter'],
  methods: {
      filterEvents(event){
          const value = event.target.value
          this.filter(value)
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .form-control{
        max-width: 350px;
        text-align:left;
        border-radius: 10px;
    }

    input{
        border: 0px;
        padding: 0px;
        outline: none;
    }
</style>
