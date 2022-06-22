//mutations是用来触发事件，相当于方法，用户需要通过触发这个方法，
//借此来保存数据，参数的话，第二个参数就是用户传入的值，然后在方法中赋值给state中的变量
//state状态的改变需要调用mutations中的相应方法来改变
export const changeLogin = (state,data) =>{
        //设置登陆状态
        state.isLogin = data;
        window.sessionStorage.setItem("user",data);
        console.log("data=",data);
    };