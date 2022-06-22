import router from "@/router";
// import store from "../store"

router.beforeEach((to,from,next)=>{
    if(to.meta.isLogin){
        let token = false //store.state.login.user.toKen;
        if(token){
            next()
        }else{
            next({
                name: "Login"
            })
        }
    }else{
        next();
    }
})