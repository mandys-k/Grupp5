<script>
    export default {
        methods: {
            scrollToTop() {
                window.scrollTo(0, 0)
            }
        }
    }
</script>

<template>
    <div class="arrow-up-container">
        <span @click="scrollToTop" class="material-symbols-outlined arrow-up">
            arrow_upward
        </span>
    </div>

    <div
        class="footer-container d-flex align-items-center justify-content-center text-white text-left"
    >
        <b-container class="bv-example-row">
            <b-row>
                <b-col sm="4">
                    <h2><b>TripLingo</b></h2>
                    <p>
                        Your partner in language learning and global adventures.
                        We make communication simple — wherever you are in the
                        world.
                    </p>
                </b-col>
                <b-col sm="4">
                    <h2>About us</h2>
                    <p>contact</p>
                </b-col>
                <b-col sm="4">
                    <h2>Follow us</h2>
                    <p>Instagram</p>
                    <p>Facebook</p>
                    <p>LinkedIn</p>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<style scoped>
    .footer-container {
        background-color: rgba(11, 11, 98, 0.85);
        min-height: 20vh;
        padding-top: 80px;
        padding-bottom: 80px;
    }
    p {
        font-size: large;
    }

    h2 {
        font-weight: bold;
        margin-bottom: 10%;
    }
    p {
        font-size: large;
        margin-right: 5%;
    }

    .arrow-up-container {
        text-align: center;
        margin-bottom: 0.5em;
    }

    .arrow-up {
        font-size: 3em;
        transition: transform 0.2s;
    }

    .arrow-up:hover {
        transform: scale(1.3, 1.3);
    }
</style>
