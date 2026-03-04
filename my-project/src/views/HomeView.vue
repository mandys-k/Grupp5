


<template>
    <Hero msg="Your next adventure begins with the next word."/>
    <GroupInfoCard />
    <CustomerReview />
</template>

<script>
  import CustomerReview from "../components/CustomerReview.vue";
  import Hero from "../components/Hero.vue";
  import GroupInfoCard from "../components/GroupInfoCard.vue";

  export default {
    components: {
      CustomerReview,
      Hero,
      GroupInfoCard,

    }
  };
</script>

