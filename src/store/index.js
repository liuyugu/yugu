import Vue from "vue";
import Vuex from "vuex"
import state from "./state"     //状态
import * as mutations from './mutations'    //触发方法
import * as actions from './actions'        //简介调用方法

Vue.use(Vuex);  //使用Vuex

/**
 *拆分state、mutations后，可通过以下两种方式触发方法来保存数据。
 *方式一：(dispatch)
 *      this.$store.dispatch("methodName",data);
 * 方式二：（映射）
 *      1、先在要使用store管理状态的.vue文件中导入 {mapActions}
 *          import {mapActions} from 'vuex';
 *      2、通过methods方法添加映射,多个映射可添加到数组中
 *          methods: {
 *              ...maapActions(["changeLogin",xxx1,xxx2])
 *          }
 *      3、使用,在需要用的地方世界使用 this.methodName 调用即可。
 *         也可以直接绑定到HTML中的发某个事件上
 *          this.changeLogin
 * **********************************************************
 * 
 */


//第一步，定义状态和触发方法，并导出。接下来在 main.js中引入
export default new Vuex.Store({
    state,
    actions,
    mutations
});


