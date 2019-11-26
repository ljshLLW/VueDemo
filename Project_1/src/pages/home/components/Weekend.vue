<template>
    <div>
        <div class="recommend-title">周末去哪</div>
        <ul>
            <li class="item boreder-bottom" v-for="item of recommendList" :key="item.id" >
                <div class="item-img-warpper">
                    <img class="item-img" :src="item.imgUrl" />
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>

</template>

<script>
export default {
    name: 'HomeWeekend',
    data () {
        return {
            recommendList: [{
                id: '0001',
                imgUrl: '//imgs.qunarzz.com/p/p70/1809/e7/4941057a6aae702.jpg_256x160_9fee6ccb.jpg',
                title: '成都+重庆+峨乐〈豪华川渝6日游〉',
                desc: '成都+重庆+峨乐〈豪华川渝6日游〉高端酒店&游船夜览两江+变脸晚会+川味美食'
            }, {
                id: '0002',
                imgUrl: '//imgs.qunarzz.com/p/p70/1809/e7/4941057a6aae702.jpg_256x160_9fee6ccb.jpg',
                title: '成都+重庆+峨乐〈豪华川渝6日游〉',
                desc: '成都+重庆+峨乐〈豪华川渝6日游〉高端酒店&游船夜览两江+变脸晚会+川味美食'
            }, {
                id: '0003',
                imgUrl: '//imgs.qunarzz.com/p/p70/1809/e7/4941057a6aae702.jpg_256x160_9fee6ccb.jpg',
                title: '成都+重庆+峨乐〈豪华川渝6日游〉',
                desc: '成都+重庆+峨乐〈豪华川渝6日游〉高端酒店&游船夜览两江+变脸晚会+川味美食'
            } ]
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/mixins.styl'
    .recommend-title
        line-height .8rem
        background #ccc
        text-indent .2rem
    .item-img-warpper
        overflow hidden
        height 0
        padding-bottom 33.9%
        .item-img
            width 100%
    .item-info
        padding .1rem
        .item-title
            line-height .54rem
            font-size .32rem
            ellipsis()
        .item-desc
            line-height .4rem
            color #ccc
            ellipsis()
</style>
