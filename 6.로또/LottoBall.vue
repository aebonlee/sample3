<template>
    <div class="ball" :style="styleObject">
        {{number}}
    </div>
</template>

<script>
    export default {
        name: "LottoBall",
        computed: {
            styleObject() {//기존값을 수정해서 새로운값을 도출해내야하기때문에 data가 아닌 computed
                let background;

                if(this.number <= 10){
                    background = '#9c9';
                }else if(this.number <= 20){
                    background = '#fc9';
                }else if(this.number <= 30){
                    background = '#c9c';
                }else if(this.number <= 45){
                    background = '#9cc';
                }

                return{
                    background,
                }
            }
        },
        props: {
            number: {
                number: Number,
            }
        }
    }
</script>

<style scoped>
    .ball{
        display: inline-block;
        -webkit-border-radius: 100%;
        -moz-border-radius: 100%;
        border-radius: 100%;
        width: 50px;
        height: 50px;
        line-height: 50px;
        font-weight: 800;
        font-size: 20px;
        text-align: center;
        margin-right: 20px;
        transition: all 0.2s ease-in-out;
    }
    .ball:hover, .ball:active, .ball:focus{
        transform: translateY(-5px);
        box-shadow: 1px 1px 1px 1px #ccc;
    }
</style>