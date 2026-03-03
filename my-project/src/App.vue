<script>
import NavbarHome from './components/NavbarHome.vue';

export default {
    components: {
        NavbarHome
    },
};
</script>

<template>
    <header>
        <NavbarHome />
    </header>
    <main>
        <RouterView />
    </main>
</template>
