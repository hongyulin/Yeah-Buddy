<template>
    <transition name="up-fade" :durating="durating">
        <span id="tips">{{message}}</span>
    </transition>
</template>

<script>
export default {
    name: 'tips',
    data: function() {	
        return {
            durating: 1000,
        }
    },
    props: {
        message: String
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
    height: .5rem;
    width: 100vw;
    color: white;
    text-align: center;
    line-height: .5rem;
    font-size: .25rem;
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