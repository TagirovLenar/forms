<template>
  <div id="app">

    <router-view />
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
nav ul {
  list-style-type: none;
  padding: 0;
}

nav li {
  display: inline;
  margin-right: 10px;
}

nav a {
  text-decoration: none;
  color: #007BFF;
}

nav a:hover {
  text-decoration: underline;
}
</style>
