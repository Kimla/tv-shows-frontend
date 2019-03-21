<template>
    <div class="page">
        <div class="hero flex items-end">
            <div>
                <h1 class="heading">
                    Stranger Things
                </h1>
                <p class="text">
                    Season 3 will arrive on Netflix on 4 July 2019
                </p>
            </div>
        </div>
        <div class="shows">
            <ScrollingShows
                :shows="shows"
                heading="Upcoming"
            />
            <ScrollingShows
                :shows="shows"
                heading="Trending"
            />
            <ScrollingShows
                :shows="shows"
                heading="Popular"
            />
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import ScrollingShows from '../components/ScrollingShows.vue';

export default {
    components: {
        ScrollingShows,
    },
    data: () => ({
        shows: [],
    }),
    async created() {
        const res = await axios('http://tv-show-api.test/api/shows/ids?ids=1,2,3,4,5,6,7,8,9,10');
        this.shows = res.data;
    },
};
</script>

<style lang="postcss" scoped>
.hero {
    padding: 30px 20px;
    position: relative;
    background: url("https://www.thetvdb.com/banners/fanart/original/305288-10.jpg")
        no-repeat center;
    background-size: cover;
    height: 300px;
    margin-bottom: 40px;
    color: #fff;
}
.heading {
    font-size: 26px;
    margin-bottom: 6px;
}
.text {
    font-weight: 400;
    font-size: 15px;
}
.scrollingShows {
    margin-bottom: 30px;
}
</style>
