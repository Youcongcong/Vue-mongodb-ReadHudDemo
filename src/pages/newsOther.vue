<template>
<div ref="content" id="scroll">
    <div id="itemlist" v-for="(item,index) in listData" :key="index">
        <div class="timelineItem___1T6m9">
            <h2 class="enableVisited"><a class="" :href="'http://www.bishijie.com/home/newsflashpc/detail?id='+item.id" target="_blank">{{item.title}}</a></h2>
            <div class="summary___2wW8Q">
                <div class="bp-pure___3xB_W">
                    <div class="bp-beauty-line___3EG0Z clamp3" style="letter-spacing: 0.175267px;">
                        {{item.summary}}
                    </div>
    
                </div>
            </div>
            <div class="meta___1ARPK"><span>{{item.siteName}} <span v-if="item.authorName">/ {{item.authorName}}</span><i class="split___2Hoin"></i>{{new Date(item.publishDate).getTime() | formatTime}}<i class="split___2Hoin"></i></span></div>
        </div>
    </div>
    </div>
</template>

<script>
    import bindScrollAction from '../utils/bindScrollAction';

    export default {
        data() {
            return {
                page: 1,
                pageSize: 10,
                listData: [],
                load: true,
            }
        },
        methods: {
            getList(){
                var that = this;
                if(!that.load) return false;
                this.http.get('/api/news/list?pageSize=10&page='+that.page).then(function(data) {
    
                    let datas = data.data.result.list
                    //console.log(datas)
					if(datas.length == 0) {
						this.load = false;
						return false;
					}
                    that.page += 1;
                    
                    
                    that.listData  = that.listData.concat(datas);
                })
                .catch(function(response) {
                    console.log(response);
                });
            }
        },
        created() {
			// this.getList();
		},
        mounted() {
            this.getList();
            bindScrollAction(this.$refs.content, this.getList)

        }
    }
</script>

<style lang="less" scoped>
#scroll{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        overflow: auto
    }
    @media screen and (-webkit-min-device-pixel-ratio: 2) {
        .timelineItem___1T6m9 {
            border-bottom: none !important;
        }
        .timelineItem___1T6m9:after {
            content: "";
            pointer-events: none;
            box-sizing: border-box;
            border-bottom: 1px solid #e6e6e6;
            height: 200%;
            width: 200%;
            -webkit-transform: scale(.5);
            transform: .5;
            transform-origin: 0 0;
            -webkit-transform: 0 0;
            position: absolute;
            top: 0;
            left: 0;
        }
    }
    #itemlist:first-child .timelineItem___1T6m9{
        padding-top: 0;
    }
    .timelineItem___1T6m9:first-child .enableVisited {
    }
    .timelineItem___1T6m9 {
        display: block;
        padding:  1.5rem 2rem;
        border-bottom: 1px solid #e6e6e6;
        position: relative;
        h2 {
            padding-top: 27px;
            font-size: 17px;
            line-height: 1.78em;
            margin-bottom: 8px;
            a {
                font-weight: 500;
                color: #333;
                text-decoration: none;
            }
            a:hover {
                color: #10579e;
                text-decoration: underline;
            }
        }
        .summary___2wW8Q {
            color: #737373;
            font-size: 15px;
            line-height: 1.8em;
            margin-bottom: 10px;
        }
        .meta___1ARPK {
            color: #999;
            font-size: 14px;
            line-height: 1.2em;
            .split___2Hoin {
                width: 12px;
                display: inline-block;
            }
            i {
                font-family: icomoon!important;
                speak: none;
                font-style: normal;
                font-weight: 400;
                font-variant: normal;
                text-transform: none;
                line-height: 1;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
            }
            .split___2Hoin {
                width: 12px;
                display: inline-block;
            }
        }
    }
</style>

