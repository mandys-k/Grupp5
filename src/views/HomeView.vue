<script>
    import CustomerReview from "../components/CustomerReview.vue"
    import HeroHome from "../components/HeroHome.vue"
    import GroupInfoCard from "../components/GroupInfoCard.vue"
    import BusinessSection from "../components/BusinessSection.vue"
    import TheFooter from "../components/TheFooter.vue"

    export default {
        components: {
            CustomerReview,
            HeroHome,
            GroupInfoCard,
            BusinessSection,
            TheFooter
        }
    }
</script>

<template>
    <HeroHome />
    <GroupInfoCard />
    <BusinessSection />
    <CustomerReview />
    <TheFooter />
</template>
