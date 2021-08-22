<template>
  <div class="container">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
          <img
            src="../assets/img/logo.png"
            width="150"
            height="150"
          />
        </router-link>

        <!-- React to clicks here -->
        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true">  
          </span>
          <span aria-hidden="true">
          </span>
          <span aria-hidden="true"></span>
        </a>

      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/"> Home </router-link>
          <router-link class="navbar-item" to="/services"> Services </router-link>
          <a class="navbar-item"> Portfolio </a>
          <router-link class="navbar-item" to="/contact"> Contact </router-link>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link"> More </a>

            <div class="navbar-dropdown">
              <a class="navbar-item"> About </a>
              <hr class="navbar-divider" />
              <a class="navbar-item"> Report an issue </a>
            </div>
          </div>
        </div>

       
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
  .navbar-brand .navbar-item {
    margin-top: 2px;
  }
</style>
