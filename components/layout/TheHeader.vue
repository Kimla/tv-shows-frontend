<template>
    <header class="theHeader shadow">
        <div class="container flex justify-between">
            <button
                type="button"
                class="button"
                @click="prev"
            >
                Prev
            </button>
            <button
                type="button"
                class="button"
                @click="next"
            >
                Next
            </button>
        </div>
    </header>
</template>

<script>
export default {
    methods: {
        prev() {
            let prevId = this.$route.params.id - 1;

            if (!prevId || prevId < 1) {
                prevId = 1;
            }

            this.$router.push(`/${prevId}`);
        },
        next() {
            const nextId = this.$route.params.id ? Number(this.$route.params.id) + 1 : 1;
            this.$router.push(`/${nextId}`);
        },
    },
};
</script>

<style lang="postcss" scoped>
.container {
    width: 560px;
}
.theHeader {
    background-color: #fff;
    padding: 15px 0;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
}
.logoHolder {
    width: 40px;
    height: auto;
}
.button {
    background-color: var(--primaryColor);
    padding: 18px 30px;
    min-width: 180px;
    display: inline-block;
    text-align: center;
    position: relative;
    color: #fff;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    @media (--mobile) {
        min-width: 110px;
        font-size: 12px;
        padding: 12px 15px;
    }
}
</style>
