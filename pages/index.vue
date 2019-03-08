<template>
    <div class="page">
    </div>
</template>

<script>
export default {
    mounted() {
        if (!process.client) return;

        this.$router.push('/1');
    },
};
</script>

<style lang="postcss" scoped>
</style>
