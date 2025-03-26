<template>
  <div class="container">
    <nav>
      <ul class="nav-list">
        <li><router-link to="/registration">Регистрация</router-link></li>
        <li><router-link to="/feedback">Обратная связь</router-link></li>
        <li><router-link to="/profile-settings">Настройки профиля</router-link></li>
      </ul>
    </nav>
    <h1>Главная страница</h1>
    <p>Добро пожаловать в генератор форм!</p>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh; /* Занимает всю высоту экрана */
  text-align: center;
}

h1 {
  color: #42b983;
}

nav {
  background-color: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 2rem;
}

.nav-list {
  list-style-type: none;
  padding: 0;
}

.nav-list li {
  display: inline;
  margin-right: 15px;
}

.nav-list li a {
  text-decoration: none;
  color: #42b983;
  font-weight: bold;
  transition: color 0.3s ease;
}

.nav-list li a:hover {
  color: #2c8f7f;
}

p {
  font-size: 1.2rem;
}
</style>
