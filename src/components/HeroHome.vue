<script>
    export default {}
</script>

<template>
    <div
        class="hero-image-container d-flex align-items-center justify-content-center text-white text-center"
    >
        <b-container>
            <b-img src="@/assets/Logo.png" fluid alt="Responsive image" class="mb-4 d-block mx-auto"></b-img>
            <b-button to="login" variant="success" class="mt-2">Log in</b-button><br /><br />
            <p>cd
                New User?
                <RouterLink class="register-link" to="register"
                    >Register Here</RouterLink
                >
            </p>
        </b-container>
    </div>
</template>

<style scoped>
    .hero-image-container {
        background-image: linear-gradient(
            rgba(37, 127, 201, 0.85),
            rgba(7, 213, 241, 0.85)
        );
        min-height: 60vh;
        padding-bottom: 80px;
        margin-bottom: 40px;
    }

    .register-link {
        color: #fff;
    }

    .register-link:hover {
        color: #dedede;
    }
</style>
