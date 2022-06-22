//actions.js 暴露给用户使用，借此触发mutations中的方法，保存数据（可执行异步操作）
//触发登录状态修改的方法
//方式一
export const changeLogin = ({commit},data) => {
    commit("changeLogin",data);
}

/*
    //方式二
    export const changeLogin = (context,data) => {
        context.commit("changeLogin",data);
    };
*/