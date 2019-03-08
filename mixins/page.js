export default {
    head() {
        return this.getMeta(this.page);
    },
    methods: {
        getMeta(page) {
            if (!page) {
                return false;
            }

            return {
                title: page.name,
            };
        },
    },
};
