 //定义公共状态
 export default {    
    //初始时给一个 isLogin='0' 表示用户没有登录
    isLogin: window.sessionStorage.getItem("user") === null ? '0' : window.sessionStorage.getItem("user"),
}