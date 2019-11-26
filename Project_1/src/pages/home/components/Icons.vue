<template>
    <div class="icons">
        <swiper>
            <swiper-slide v-for="(page,index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl" >
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'HomeIcons',
    data () {
        return {
            iconList: [{
                id: '001',
                imgUrl: '//s.qunarzz.com/homenode/images/touchheader/bus.png',
                desc: '汽车票船票'
            }, {
                id: '002',
                imgUrl: '//s.qunarzz.com/homenode/images/touchheader/tuan.png',
                desc: '旅游团购'
            }, {
                id: '003',
                imgUrl: '//s.qunarzz.com/homenode/images/touchheader/freeTravel.png',
                desc: '自由行'
            }, {
                id: '004',
                imgUrl: '//s.qunarzz.com/homenode/images/touchheader/car.png',
                desc: '专车自驾'
            }, {
                id: '005',
                imgUrl: '//s.qunarzz.com/homenode/images/touchheader/aroundtravel.png',
                desc: '周边短途'
            }, {
                id: '006',
                imgUrl: '//picbed.qunarzz.com/b8bc00a84142f52d21824d5ebeba29a3.png',
                desc: '赚钱信用卡'
            }, {
                id: '007',
                imgUrl: '//picbed.qunarzz.com/8bb259c54352f32ebcfc3df189eb3afa.png',
                desc: '借钱'
            }, {
                id: '008',
                imgUrl: '//s.qunarzz.com/homenode/images/touchheader/travel.png',
                desc: '攻略'
            }, {
                id: '009',
                imgUrl: '//s.qunarzz.com/homenode/images/touchheader/youlun.png',
                desc: '邮轮'
            }, {
                id: '010',
                imgUrl: '//picbed.qunarzz.com/c983101ec3fc6b3c6c93ccffea08965c.png',
                desc: '白金卡'
            }]
        }
    },
    computed: {
        pages () {
            const pages = []
            this.iconList.forEach((item, index) => {
                const page = Math.floor(index / 8)
                if (!pages[page]) {
                    pages[page] = []
                }
                pages[page].push(item)
            })
            return pages
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    @import '~styles/mixins.styl'
        .icons >>> .swiper-container
            height: 0
            padding-bottom: 50%
        .icons
            margin-bottom: .2rem
            .icon
                position: relative
                overflow: hidden
                float: left
                width: 25%
                height: 0
                padding-bottom: 25%
                .icon-img
                    position: absolute
                    top: 0
                    left: 0
                    right: 0
                    bottom: .44rem
                    box-sizing: border-box
                    padding: .1rem
                    .icon-img-content
                        display: block
                        margin: 0 auto
                        height: 100%
                .icon-desc
                    position: absolute
                    left: 0
                    right: 0
                    bottom: 0
                    height: .44rem
                    line-height: .44rem
                    text-align: center
                    color: $darkTextColor
                    ellipsis()

</style>
