import Router from './router'

import NProgress from 'nprogress';
import 'nprogress/nprogress.css'

NProgress.configure({showSpinner:false})

Router.beforeEach((to,from,next)=>{
    NProgress.start()
    next()//
    console.log(NProgress)    

})

Router.afterEach(() => {
    NProgress.done() 
})
