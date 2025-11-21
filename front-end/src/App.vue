<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="app">
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/grid">Grid</RouterLink>
        </nav>
      </div>
    </header>
    <div class="content">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
header {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: var(--color-background);
  border-bottom: 1px solid var(--color-border);
  line-height: 1.5;
  width: 100%;
  height: 100px;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  padding: 1rem 0;
  margin: 0;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
    width: 100%;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 0;
  }
}

.app {
  width: 100%;
  height: 100%;
}
</style>
