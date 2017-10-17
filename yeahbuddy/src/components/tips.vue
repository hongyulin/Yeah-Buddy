<template>
    <transition name="up-fade" :durating="durating">
        <span id="tips" v-show="show">{{message}}</span>
    </transition>
</template>

<script>
export default {
    name: 'tips',
    data: function() {	
        return {
            message: "",
            durating: 1000,
            show: true,
        }
    },
    props: {
        message: String;
    },
    methods: {

    }
}
</script>

<style lang = "scss" scoped>
#tips {
    position: fixed;
    top: 0;
    left: 0;
    height: 1rem;
    weight: 100vw;
    color: white;
    background-color: red;
}
.up-fade-enter-active {
    -webkit-transition: all .5s line;
    -moz-transition: all .5s line;
    transition: all .5s line;
}
.up-fade-leave-active {
    -webkit-transition: all .8s line ;
    -moz-transition: all .8s line ;
    transition: all .8s line ;
}
.up-fade-enter, .up-fade-leave-to {
    transform: translateY(10px);
    opacity: 0;
}
</style>