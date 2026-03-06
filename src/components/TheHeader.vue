<template>
  <div class="header-navbar d-flex align-items-left justify-content-left text-white text-left">
    <b-container class="bv-example-row px=0" fluid >
    <b-row class="align-items-center">
        <b-col sm="6" class="triplingo">
          <RouterLink to="/"><h2>TripLingo</h2></RouterLink>
        </b-col>
        <b-col sm="6" class="d-flex justify-content-end nav-links">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/levels">Levelmap</RouterLink>
            <RouterLink to="/notepad">Notepad</RouterLink>
            <RouterLink to="/saved">Saved</RouterLink>
            <RouterLink to="/quiz">Quiz</RouterLink>
            <RouterLink to="/login">User</RouterLink>
        </b-col>
    </b-row>
    </b-container>
    
  </div>
</template>


<style>
.header-navbar {
    background-color:rgba(11, 11, 98, 0.85);
    color: white;
}

.triplingo a{
  color: white;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 30px;   
}

.nav-links a {
  color: white;
  text-decoration: none;
}

.nav-links a:hover {
  text-decoration: underline;
}
</style>