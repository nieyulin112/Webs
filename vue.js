const app = new Vue({});
const store = new Vuex.Store({});
const router = new Router({
    routes: [
        { path: '/p1', component: Page1},
        { path: '/p2', component: Page2},
        { path: '/p3', component: Page3}
    ]
});
// 基本的代码处理
export default context = {
    router.push(context.url);
    return Promise.all(router.getMatchedComponents().map(
        component => {
            if (component.fetchServerData) {
                return component.fetchServerData(store);
            }
        }
    )).then(() => {
        context.state = store.state；
        return app;
    })
};
store.replaceState(window.__INITISL_STATA__);
app.$mount("#app");
