<template>
    <div
        v-if="show"
        class="show"
    >
        <img
            :src="show.image_medium"
            class="image"
        >
        <div class="body">
            <h1>{{ show.name }}</h1>
            <div
                class="content"
                v-html="show.summary"
            ></div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data: () => ({
        show: null,
    }),
    async created() {
        const res = await axios(`https://tvshows.kimlarsson.se/api/shows/ids?ids=${this.$route.params.id}`);
        [this.show] = res.data;
    },
};
</script>

<style lang="postcss" scoped>
.show {
    padding: 40px 20px;
}
.image {
    width: 210px;
    margin-bottom: 30px;
}
h1 {
    margin-bottom: 10px;
}
</style>
