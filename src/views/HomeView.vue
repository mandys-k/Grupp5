<script>
  import CustomerReview from "../components/CustomerReview.vue"
  import Hero from "../components/Hero.vue"
  import GroupInfoCard from "../components/GroupInfoCard.vue"
  import DarkMode from "../components/DarkMode.vue"

  export default {
    components: {
      CustomerReview,
      Hero,
      GroupInfoCard,
      DarkMode
    }
  }
</script>

<template>
  <Hero msg="Your next adventure begins with the next word." />
  <DarkMode />
  <GroupInfoCard />
  <CustomerReview />
</template>
