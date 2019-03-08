<template>
    <div class="app">
        <TheHeader />
        <div class="app__inner">
            <main class="main w-full py-8">
                <nuxt />
            </main>
        </div>
    </div>
</template>

<script>
import TheHeader from '../components/layout/TheHeader.vue';

export default {
    components: {
        TheHeader,
    },
};
</script>

<style lang="postcss" scoped>
.app {
    padding-top: 80px;
    @media (--mobile) {
        padding-top: 67px;
    }
}
</style>
