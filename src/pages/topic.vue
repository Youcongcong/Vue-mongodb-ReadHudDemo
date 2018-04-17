<template>
    <div>
        <div id="itemlist" v-for="(item,index) in listData">
            <div class="topicItem___3YVLI">
                <h2 class="topicTitle___1M353 first___3bOFm"><a :href="'https://readhub.me/topic/'+item.id" target="__blank" class="content___2vSS6">{{item.title}}</a><span class="time___3JO2c">{{new Date(item.createdAt).getTime() |  formatTime}}</span></h2>
                <div class="summary___1i4y3">
                    <div class="bp-pure___3xB_W">
                        <div class="bp-beauty-line___3EG0Z clamp3" style="letter-spacing: 0.0915819px;">
                            {{item.summary}}
                        </div>
    
                    </div>
                </div>
    
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                page: 1,
                pageSize: 10,
                listData: null
            }
        },
        methods: {
    
        },
        mounted() {
            var that = this;
            this.http.get('/api/topics/list?page= 1&pageSize=10').then(function(data) {
    
                    that.listData = data.data.result.list
                })
                .catch(function(response) {
                    console.log(response);
                });
        }
    }
</script>

<style lang="less" scoped>
    @media screen and (-webkit-min-device-pixel-ratio: 2) {
        .topicItem___3YVLI {
            border-bottom: none !important;
        }
        .topicItem___3YVLI:after {
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
    
    #itemlist:first-child .topicItem___3YVLI {
        padding-top: 0;
    }
    
    .topicItem___3YVLI:first-child .topicTitle___1M353 {
        padding-top: 0;
    }
    
    .topicItem___3YVLI {
        padding: 1.5rem 2rem;
        border-bottom: 1px solid #e6e6e6;
        position: relative;
        .topicTitle___1M353 {
            font-weight: 500;
            color: #333;
            font-size: 17px;
            line-height: 1.78em;
            padding-bottom: 8px;
            padding-top: 30px;
            cursor: pointer;
            position: relative;
            .content___2vSS6 {
                margin-right: 15px;
                color: #333;
                cursor: pointer;
            }
            .content___2vSS6:hover {
                color: #10579e;
                text-decoration: underline;
            }
            .time___3JO2c {
                font-size: 14px;
                color: #999;
                font-weight: 400;
                display: inline-block;
            }
        }
        .summary___1i4y3 {
            color: #737373;
            font-size: 15px;
            line-height: 1.8em;
            cursor: pointer;
        }
    }
</style>

