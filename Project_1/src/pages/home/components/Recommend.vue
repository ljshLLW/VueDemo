<template>
    <div>
        <div class="recommend-title">热销推荐</div>
        <ul>
            <li class="item boreder-bottom" v-for="item of recommendList" :key="item.id" >
                <img class="item-img" :src="item.imgUrl" />
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>

</template>

<script>
export default {
    name: 'HomeRecommend',
    data () {
        return {
            recommendList: [{
                id: '0001',
                imgUrl: '//imgs.qunarzz.com/vs_ceph_vs_tts/7ed922df-3fa2-4baa-a266-d1cfa973d225.jpg_r_480x320x90_8959eca4.jpg',
                title: '成都+重庆+峨乐〈豪华川渝6日游〉',
                desc: '成都+重庆+峨乐〈豪华川渝6日游〉高端酒店&游船夜览两江+变脸晚会+川味美食'
            }, {
                id: '0002',
                imgUrl: '//imgs.qunarzz.com/vs_ceph_vs_tts/7ed922df-3fa2-4baa-a266-d1cfa973d225.jpg_r_480x320x90_8959eca4.jpg',
                title: '成都+重庆+峨乐〈豪华川渝6日游〉',
                desc: '成都+重庆+峨乐〈豪华川渝6日游〉高端酒店&游船夜览两江+变脸晚会+川味美食'
            }, {
                id: '0003',
                imgUrl: '//imgs.qunarzz.com/vs_ceph_vs_tts/7ed922df-3fa2-4baa-a266-d1cfa973d225.jpg_r_480x320x90_8959eca4.jpg',
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
    .item
        overflow hidden
        display flex
        height 1.9rem
    .item-img
        width 1.7rem
        height 1.7rem
        padding .1rem
    .item-info
        felx 1
        padding .1rem
        min-width 0
        .item-title
            line-height .54rem
            font-size .32rem
            ellipsis()
        .item-desc
            line-height .4rem
            color #ccc
            ellipsis()
        .item-button
            line-height .44rem
            margin-top .16rem
            background  #ff9300
            padding 0 .2rem
            boreder-radius .06rem
            color #ffffff
</style>
