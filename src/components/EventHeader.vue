<template>
  <header class="d-flex justify-content-between w-100 align-items-center">
      <div class = "d-flex align-items-center">
            <h2 class = "d-flex align-items-center m-0">
                <b>Events</b>
            </h2>
      </div>
      <div class="d-flex user-option">
          <div class="avatar-container">
              <img src="logo.png" alt="">
          </div>
          <div class = "ml-3 d-flex align-items-center mr-3">Eunice</div>
          <div class = "chevron-toggle d-flex align-items-center">
              <i class="bi bi-chevron-down"></i>
          </div>
      </div>  
  </header>
</template>

<script>
export default {
  name: 'EventHeader'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    header{
        margin-top: 20px;
    }

    .avatar-container{
        width:40px; 
        height: 40px;
        border-radius: 10px;
        background-color: grey;
    }

    .m-0{
        margin: 0px;
    }

    .bi.bi-chevron-down{
        padding: 5px;
        padding-top: 2px;
        padding-bottom: 2px;
        background-color: rgb(197 197 197 / 38%);
        border-radius: 10px
    }

    
</style>
