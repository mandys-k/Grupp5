


<template>
    <NavbarHome />
    <Hero msg="Your next adventure begins with the next word."/>
    <GroupInfoCard />
    <BusinessSection />
    <CustomerReview />
</template>

<script>
  import NavbarHome from "../components/NavbarHome.vue";
  import CustomerReview from "../components/CustomerReview.vue";
  import Hero from "../components/Hero.vue";
  import GroupInfoCard from "../components/GroupInfoCard.vue";
  import BusinessSection from "../components/BusinessSection.vue";

  export default {
    components: {
      NavbarHome,
      CustomerReview,
      Hero,
      GroupInfoCard,
      BusinessSection,

    }
  };
</script>

