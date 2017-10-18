<template>
    <transition name="fade" :duration="duration">
        <span id="tips" v-if="tips">{{message}}</span>
    </transition>
</template>

<script>
export default {
    name: 'tips',
    data: function() {	
        return {
            duration: 1000,
        }
    },
    props: {
        message: String,
        tips: Boolean
    },
    methods: {
        // showMess(timer){
        //     console.log(this.props.tips)
        //     this.props.tips = true;
        //     // setTimeout(() => {
        //     //     self.tips = false;
        //     // }, timer);
        // }
    }
}
</script>

<style lang = "scss" scoped>
#tips {
    position: fixed;
    top: 0;
    left: 0;
    height: .5rem;
    width: 100vw;
    color: white;
    text-align: center;
    line-height: .5rem;
    font-size: .25rem;
    background-color: red;
}
.fade-enter-active {
    -webkit-animation: tipsMoveIn 1s ease;
    -moz-animation: tipsMoveIn 1s ease;
    transition: tipsMoveIn 1s ease;
}
.fade-leave-active {
    -webkit-animation: tipsMoveOut 1s linear ;
    -moz-animation: tipsMoveOut 1s linear ;
    animation: tipsMoveOut 1s linear ;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
    translateY: -0.5rem;
}
@keyframes tipsMoveIn {
    0% {
        opacity: 0;
        translateY: -0.5rem;
    }
    50% {
        opacity: 1;
        translateY: 0;
    }
}
@keyframes tipsMoveOut {
    0% {
        opacity: 1;
        translateY: 0;
    }
    100% {
        opacity: 0;
        translateY: -0.5rem;
    }
}
</style>