组件公共函数放在这边
export.install = function(Vue, options) {
    Vue.prototype.whichShowFn = functoin(name) {
        this.whichShow = name;
        // 解决keep-alive中多组件记录同一个滚动位置问题
        document.documentElement.scrollTop = 0;
    }
    
}