<template>
  <div class="container">
    <div class="fixed-container">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <!-- The Logo and the Menu Icon -->
        <div class="navbar-brand">
          <router-link to="/" class="navbar-item navbar-logo">
            <img src="../assets/img/logo.png" width="150" height="150" />
          </router-link>

          <!-- React to clicks here -->
          <a
            role="button"
            class="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            @click="handleMobileNav"
          >
            <span aria-hidden="true"> </span>
            <span aria-hidden="true"> </span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div
          :class="{
            'mobile-nav-container': true,
            container: true,
            'slide-in-left': mobileNavOn,
            'slide-out-left': !mobileNavOn,
          }"
        >
          <div class="mobile-nav-links">
            <router-link
              class="mobile-nav-link pl-6 row-l-col-c"
              @click="handleMobileNav"
              to="/"
              >Home</router-link
            >
            <router-link
              class="mobile-nav-link pl-6 row-l-col-c"
              @click="handleMobileNav"
              to="/services"
              >Services</router-link
            >
            <router-link
              class="mobile-nav-link pl-6 row-l-col-c"
              @click="handleMobileNav"
              to="/portfolio"
              >Portfolio</router-link
            >
            <router-link
              class="mobile-nav-link pl-6 row-l-col-c"
              @click="handleMobileNav"
              to="/contact"
              >Contact</router-link
            >
            <router-link
              class="mobile-nav-link pl-6 row-l-col-c"
              @click="handleMobileNav"
              to="/about"
              >About</router-link
            >
            <router-link
              class="mobile-nav-link pl-6 row-l-col-c"
              @click="handleMobileNav"
              to="/issue"
              >Report an issue</router-link
            >
          </div>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <router-link class="navbar-item" to="/"> Home </router-link>
            <router-link class="navbar-item" to="/services">
              Services
            </router-link>
            <a class="navbar-item"> Portfolio </a>
            <router-link class="navbar-item" to="/contact">
              Contact
            </router-link>

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
  </div>
</template>

<script>
import store from "../store";
import { computed } from "vue";
export default {
  setup() {
    const handleMobileNav = () => {
      store.commit("setMobileNavOn", !store.state.mobileNavOn);
    };

    return {
      mobileNavOn: computed({
        get: () => store.state.mobileNavOn,
      }),
      handleMobileNav,
    };
  },
};
</script>

<style scoped>
.container {
  height: 52px;
  width: 100vw;
}
.fixed-container {
  width: 100vw;
  position: fixed;
  left: 0;
  top: 0;
  background: white;
  z-index: 33;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}
.navbar {
  height: 52px;
  max-width: 1244px;
  margin: auto;
}
.navbar-brand .navbar-item {
  margin-top: 2px;
}

.mobile-nav-links {
  display: none;
}
@media (max-width: 1023px) {
  .navbar-brand {
    width: 100%;
    position: fixed;
    display: flex;
    background: white;
    justify-content: space-between;
    z-index: 4;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }
  .navbar-logo {
    border: none !important;
    box-shadow: none !important;
  }
  .mobile-nav-container {
    position: fixed;
    top: 52px;
    transition: transform 0.5s;
    /* animation: slide-in-left 0.5s; */
    background: white;
    height: calc(100vh - 52px);
  }
  .mobile-nav-links {
    display: block;
  }
  .mobile-nav-link {
    color: black;
    height: 60px;
    border-left: solid 6px transparent;
  }
  .active-nav-link {
    color: #00d1b2;
    border-left: solid 6px #00d1b2;
    box-shadow: rgb(204, 219, 232) 1px 1px 1px 0px inset,
      rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
  }
  .mobile-nav-link:hover {
    color: #00d1b2;
  }
}
</style>
