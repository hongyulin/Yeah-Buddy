// 组件公共函数放在这边
exports.install = function(Vue, options) {
    Vue.prototype.whichShowFn = function(name){
        this.whichShow = name;
        // 解决keep-alive中多组件记录同一个滚动位置问题
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };
    
};