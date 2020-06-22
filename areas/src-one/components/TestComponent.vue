<template>
  <div>
    <h3>Area One - Props data </h3>
    <div>
      <p class="redText"><strong>Data:</strong>{{data.data}}</p>
      <p class="redText"><strong>Url: </strong>{{data.url}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TestComponent',
    props: ['data']
  }
</script>

<style scoped>
  .redText {
    color: red
  }
</style>
