<template>
    <div>
        <div id="screen" :class="state" @click="onClickScreen">{{message}}</div><!--v-bind:-->
        <template v-if="result.length"><!--div와 같은 역할, v-show와 v-if/else 차이 구분해서 사용!-->
            <div>평균시간⏰ {{average}}ms</div><!--reduce 배열의 값을 다 더해줌, 평균 구하는코드{{}}-->
            <button @click="onReset">리셋</button><!--v-on:click-->
        </template>
    </div>
</template>

<script>
    export default {
        name: "ResponseCheck",
        data (){
            return{
                result: [],
                state: 'waiting',
                message: '클릭해서 시작하세요',
                startTime: 0,
                endTime: 0,
                timeOut: null,
            }
        },
        computed: {
            average() {
                return this.result.reduce((a, c) => a + c, 0) / this.result.length || 0;
            }
        },
        methods: {
            onReset() {
                this.result = [];
            },
            onClickScreen() {
                if(this.state === 'waiting'){
                    this.state = 'ready';
                    this.message = '초록색이 되면 클릭하세요';
                    this.timeOut = setTimeout(() => {
                        this.state = 'now';
                        this.message = '지금 클릭!';
                        this.startTime = new Date();
                    }, Math.floor(Math.random() * 1000) + 2000); //2~3초
                }else if(this.state ==='ready'){
                    clearTimeout(this.timeOut);
                    this.state = 'waiting';
                    this.message = '너무 성급하시군요! 초록색이 되면 클릭하세요';
                }else if(this.state ==='now'){
                    this.endTime = new Date();
                    this.state = 'waiting';
                    this.message = '클릭해서 시작하세요';
                    this.result.push(this.endTime - this.startTime);
                }
            }
        }
    }
</script>

<style scoped>

#screen{
    width: 300px;
    height: 200px;
    text-align: center;
    user-select: none;
}

#screen.waiting{
    background-color: #9cc;
}

#screen.ready{
    background-color: #fcc;
}

#screen.now{
    background-color: #9c9;
}
</style>
