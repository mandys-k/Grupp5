<template>
    <DarkMode />
    <Hero msg="Your next adventure begins with the next word."/>
    <GroupInfoCard />
    <BusinessSection />
    <CustomerReview />
    <TheFooter />
    
</template>

<script>
  import CustomerReview from "../components/CustomerReview.vue";
  import Hero from "../components/Hero.vue";
  import GroupInfoCard from "../components/GroupInfoCard.vue";
  import BusinessSection from "../components/BusinessSection.vue";
  import DarkMode from "../components/DarkMode.vue";
  import TheFooter from "../components/TheFooter.vue";

  export default {
    components: {
      CustomerReview,
      Hero,
      GroupInfoCard,
      BusinessSection,
      DarkMode,
      TheFooter
    }
  }
</script>