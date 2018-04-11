<template>
    <header class="header___1vcPj">
        <div class="content___2NWFu">
            <a class="logo___2xdXa" href="/"><img src="https://cdn.readhub.me/static/assets/png/readhub_logo@2x.c5c683e7.png" alt="logo" srcset="https://cdn.readhub.me/static/assets/png/readhub_logo@2x.c5c683e7.png 1x, https://cdn.readhub.me/static/assets/png/readhub_logo@2x.c5c683e7.png 2x"></a>
            <nav class="nc_clearfix">
                <a  :class="{active:active==index}" v-for="(item,index) in title" @click="toggle(index ,item)" :key="item.index">{{item.name}}
                </a>
            </nav>
            <span class="labEntrance___1QKsR">
                <a href="lab">
                    <div class="labLogo___3Dum4 labLogout___3fPRt"></div>
                    <span class="labText___2eOmI">实验室</span></a>
            </span>
        </div>
    </header>
</template>

<script>
export default {
  data() {
    return {
        active:0,
        title:[
            {
                name:'热门话题',
                router:'/',
                isActive:false
            },
            {
                name:'科技动态',
                router:'/news',
                isActive:false
            },
            {
                name:'开发者资讯',
                router:'/',
                isActive:false
            },{
                name:'区块链快讯',
                router:'/',
                isActive:false
            }
        ]
    };
  },
  methods: {
      toggle(index,item){
          this.active = index;
          this.$router.push(item.router)
      }
  },
  mounted() {}
};
</script>

<style lang="less" scoped>
    .header___1vcPj{
        height: 80px;
        background-color: #fff;
        border-bottom: 1px solid #dcdcdc;
        position: fixed;
        z-index: 2;
        top: 0;
        left: 0;
        right: 0;
        .content___2NWFu{
            width: 960px;
            margin: 0 auto;
            .logo___2xdXa{
                float: left;
                margin-right: 30px;
                margin-top: 23px;
                img{
                    width: 130px;
                    height: 34px;
                }
            }
        }
        nav {
            clear: left;
            height: 80px;
            line-height: 80px;
            display: inline-block;
            a {
                text-decoration: none;
                font-size: 16px;
                margin-right: 40px;
                color: #737373;
            }
        }

        nav a:hover ,nav a.active{
            font-weight: 700;
            color: #246394;
        }
        .labEntrance___1QKsR {
            float: right;
            line-height: 80px;
            margin-right: 10px;
            position: relative;
            .labLogo___3Dum4 {
                width: 25px;
                height: 25px;
                vertical-align: middle;
                margin-right: 5px;
                display: inline-block;
                position: relative;
            }
            .labLogo___3Dum4.labLogout___3fPRt:before {
                background-image: url(https://cdn.readhub.me/static/assets/png/sprite.1e7e5975.png);
                background-position: -449px -126px;
                width: 50px;
                height: 50px;
            }
            .labLogo___3Dum4:before {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                transform: scale(.5);
                transform-origin: 0 0;
            }
            .labText___2eOmI {
                vertical-align: middle;
                color: #666;
                font-size: 15px;
            }
        }
    }
    @media screen and (-webkit-min-device-pixel-ratio: 2){
        .header___1vcPj:after {
            content: "";
            pointer-events: none;
            box-sizing: border-box;
            border-bottom: 1px solid #dcdcdc;
            -webkit-transform: scale(.5);
            transform: .5;
            transform-origin: 0 0;
            -webkit-transform: 0 0;
            position: absolute;
            top: 0;
            left: 0;
            width: 200%;
            height: 200%;
        }
        .header___1vcPj{
            border-bottom: none !important
        }
    }
</style>


