<template>
    <div
        v-if="page"
        class="page"
    >
        <div class="container">
            <div class="inner shadow">
                <img
                    v-if="page.image"
                    :src="page.image"
                    class="image w-full"
                >
                <h1 class="my-6">
                    {{ page.name }}
                </h1>
                <p v-if="page.genres">
                    <b>Genres: </b> {{ page.genres }}
                </p>
                <p v-if="page.premiered">
                    <b>Premiered: </b> {{ page.premiered }}
                </p>
                <p v-if="page.status">
                    <b>Status: </b> {{ page.status }}
                </p>
                <p v-if="page.runtime">
                    <b>Runtime: </b> {{ page.runtime }}
                </p>
                <p v-if="page.language">
                    <b>Language: </b> {{ page.language }}
                </p>
                <div
                    v-if="page.summary"
                    class="content"
                    v-html="page.summary"
                ></div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { getBaseUrl } from '../../utils/helpers';
import pageMixin from '../../mixins/page';

export default {
    mixins: [pageMixin],
    data: () => ({
        page: null,
        type: 'page',
    }),
    async asyncData({ route, isDev }) {
        try {
            const res = await axios.get(`${getBaseUrl(isDev)}/json/${route.params.id}.json`, {
                timeout: 60000,
            });
            return { page: Object.assign({}, res.data) };
        } catch (error) {
            return false;
        }
    },
};
</script>

<style lang="postcss" scoped>
.inner {
    width: 500px;
    max-width: 100%;
    padding: 50px;
    margin: 0 auto;
    background-color: #fff;
    @media (--mobile) {
        padding: 30px;
    }
}
</style>
