<template>
  <div class="layout___30l4Y">
    <div class="header-top">
      <header-top></header-top>
    </div>
      <div class="main___34Tlm">
          <div class="content___1qExG">
              <router-view></router-view>
              <!-- <topic></topic> -->
          </div>
          
      </div>
  </div>
</template>
<script>
    import headerTop from '../components/headerTop.vue'  
    // import topic from './topic.vue'  
    // import newOther from './newOther.vue'  
    
    
    export default{
        data(){
            return{

            }
        },
        components:{
            headerTop,
        },
        mounted(){
            
        }
    } 
</script>
<style lang="less">
    .layout___30l4Y{
        height: 100%;
        display: flex;
        flex-flow: column;
    }
    html{
        color: #333;
        background-color: #f4f5f5;
    }
    *{
        margin: 0;
        padding: 0;
    }
    a, abbr, acronym, address, applet, article, aside, audio, b, big, blockquote, body, canvas, caption, center, cite, code, dd, del, details, dfn, div, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hgroup, html, i, iframe, img, ins, kbd, label, legend, li, main, mark, menu, nav, object, ol, output, p, pre, q, ruby, s, samp, section, small, span, strike, strong, sub, summary, sup, table, tbody, td, tfoot, th, thead, time, tr, tt, u, ul, var, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        letter-spacing: .02em;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
    }
    a{
        text-decoration: none;
        cursor: pointer;
    }
    .header-top{
        position: relative;
        height: 80px;

    }
    .main___34Tlm {
        background: #fff;
        width: 960px;
        position: relative;
        margin: 0 auto ;
        display: flex;
        flex: 1;
        overflow: hidden;
        z-index: 1;
        justify-content: space-between;
        .content___1qExG{
            max-width: 960px;
            background: #fff;
            
            width: 100%;
        }
    }
    .clamp3{
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        word-break: break-word;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }
</style>
