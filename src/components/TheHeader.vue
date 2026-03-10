<template>
  <header class="header-navbar text-white">
    <b-container fluid class="px-4">
      <b-row class="align-items-center">


        <b-col cols="6" md="4" class="triplingo">
          <RouterLink to="/"><img src="/assets/Logotext.png" alt="TripLingo" class="logo-img" /></RouterLink>
        </b-col>


        <b-col cols="6" class="d-md-none text-end">
          <button class="hamburger" @click="navbarmenu">
            ☰
          </button>
        </b-col>

        <b-col md="8" class="d-none d-md-flex justify-content-end nav-links">
          <RouterLink to="/UserDashboard">Dashboard</RouterLink>
          <RouterLink to="/levels">Levels</RouterLink>
          <RouterLink to="/notepad">Notepad</RouterLink>
          <RouterLink to="/saved">Saved</RouterLink>
        </b-col>

      </b-row>
    </b-container>


    <div v-if="hamburgerClicked" class="mobile-menu d-md-none">
      <RouterLink to="/UserDashboard" @click="navbarmenu">Dashboard</RouterLink>
      <RouterLink to="/levels" @click="navbarmenu">Levels</RouterLink>
      <RouterLink to="/notepad" @click="navbarmenu">Notepad</RouterLink>
      <RouterLink to="/saved" @click="navbarmenu">Saved</RouterLink>
    </div>

  </header>
</template>

<script>
export default {
  data() {
    return {
      hamburgerClicked:false
    }
  },
  methods:{
    navbarmenu(){
      this.hamburgerClicked = !this.hamburgerClicked
    }
  }
}
</script>

<style>

.header-navbar{
  background-color: rgba(11, 11, 98, 0.9);
  padding: 10px;
}

.triplingo a{
  color: white;
  text-decoration: none;
}

.logo-img {
  height: 32px;
  width: auto;
}

@media (min-width: 768px) {
  .logo-img {
    height: 44px;
  }
}

.nav-links{
  display:flex;
  gap:30px;
}

.nav-links a{
  color:white;
  text-decoration:none;
}

.nav-links a:hover{
  text-decoration:underline;
}


.hamburger{
  background:none;
  border:none;
  color:white;

}


.mobile-menu{
  display:flex;
  flex-direction:column;
  gap:15px;
  padding:15px;
  background-color:rgba(11,11,98,0.95);
}

.mobile-menu a{
  color:white;
  text-decoration:none;
 
}

.mobile-menu a:hover{
  text-decoration:underline;
}

</style>