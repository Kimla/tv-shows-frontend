<template>
    <div class="scrollingShows">
        <h3 class="heading">
            {{ heading }}
        </h3>
        <div class="shows">
            <router-link
                v-for="show in shows"
                :key="show.id"
                :to="`/shows/${show.id}`"
                class="show"
            >
                <img
                    :src="show.image_medium"
                    class="image"
                >
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        heading: {
            type: String,
            required: true,
        },
        shows: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style lang="postcss" scoped>
.heading {
    color: #fff;
    margin-bottom: 10px;
    padding: 0 20px;
    font-weight: 600;
    font-size: 22px;
}
.shows {
    overflow-x: auto;
    white-space: nowrap;
    padding: 10px;
    line-height: 0;
}
.show {
    display: inline-block;
    width: 220px;
    padding: 0 10px;
}
.image {
    border-radius: 8px;
}
</style>
