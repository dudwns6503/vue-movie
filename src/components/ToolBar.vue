<template>
  <header>
    <a href="/" class="logo">Vue<span>Movie</span></a>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/search">Search</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
  </header>
</template>

<script>
export default {};
</script>

<style>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 30px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
}

header .logo {
  color: #42b883;
  font-weight: 700;
  text-decoration: none;
  font-size: 2em;
  letter-spacing: 0.2px;
}

header .logo span {
  color: #fff;
}

header ul {
  display: flex;
  justify-content: center;
  align-items: center;
}

header ul li {
  list-style: none;
  margin-left: 20px;
}

header ul li a {
  text-decoration: none;
  padding: 6px 15px;
  color: #fff;
  border-radius: 20px;
}

header ul li a:hover {
  background: #fff;
  color: #2b1055;
}

.router-link-exact-active {
  background: #fff;
  color: #2b1055;
}
</style>
