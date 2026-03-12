<script>
  export default {
    props: {
      msg: String
    }
  };
</script>

<template>
  <div class="hero-image-container d-flex align-items-center justify-content-center text-white text-center">
    <b-container>
      
          <b-img src="/assets/Logo.png" fluid alt="Responsive image"></b-img>
          <h1>{{ msg }}</h1>
          <b-button to="login" variant="success">Log in</b-button><br><br>
          <p>New User?</p>
          <b-button to="register" variant="success">Register Here</b-button>
          

    </b-container>
    
  </div>
</template>

<style scoped>
.hero-image-container {
  background-image:
    linear-gradient(
      rgba(37, 127, 201, 0.85),
      rgba(7, 213, 241, 0.85)
    );
  min-height: 60vh;
  padding-bottom: 80px;
  margin-bottom: 40px;
}
</style>


