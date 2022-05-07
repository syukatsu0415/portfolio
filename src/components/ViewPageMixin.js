export const Mixin =  {
    computed: {
        page0() {return this.$store.state.page0},
        page1() {return this.$store.state.page1},
        page2() {return this.$store.state.page2},
        page3() {return this.$store.state.page3},
        page4() {return this.$store.state.page4},
    },
    methods: {
        // 全頁のz-indexの値を初期化
        init: function () {
            this.$store.commit('changePage0', 5)
            this.$store.commit('changePage1', 4)
            this.$store.commit('changePage2', 3)
            this.$store.commit('changePage3', 2)
            this.$store.commit('changePage4', 1)
        },
        // z-indexの値を999に変更し、最前面に表示
        mekuri: function (e) {
            this.init(e)
            this.$store.commit('changePage'+e, 999)
        },
    }
}