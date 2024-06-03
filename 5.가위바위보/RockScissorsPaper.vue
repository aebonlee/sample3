<template>
    <div>
        <div id="computer" v-bind:style="computedStyleObject"></div>
        <!--:class, :style은 "{객체형식으로 작성가능, css표기는 카멜}", 캐싱을 자동으로 해주는 computed로 변경-->
        <div>
            <button @click="onClickButton('rock')">바위</button>
            <button @click="onClickButton('scissors')">가위</button>
            <button @click="onClickButton('paper')">보</button>
        </div>
        <div>{{result}}</div>
        <div>현재 {{score}}점</div>
    </div>
</template>

<script>
    //왜 바깥에 선언한 변수들 똑같이 data에 넣어지지않는가 ㅠ,,,,,,data로 집어넣어보려다 에러나서 포기 추후재도전..
    const rspCoords = {
        rock: '0',
        scissors: '-142px',
        paper: '-284px'
    };

    const scores = {
        rock: 0,
        scissors: 1,
        paper:-1
    };

    const computerChoice = (imgCoord) => {
      return Object.entries(rspCoords).find(function (v) {
        return v[1] === imgCoord;
      })[0];
    };

    export default {
        name: "RockScissorsPaper",
        data (){
            return{
                result: '',
                score: 0,
                imgCoord: rspCoords.rock,
                interval: null,
            }
        },
        computed: {
            computedStyleObject() {
                return {
                    background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${this.imgCoord} 0`,
                }
            }
        },
        methods: {
            changeHand(){
                this.interval = setInterval(()=>{
                    if(this.imgCoord === rspCoords.rock){
                        this.imgCoord = rspCoords.scissors;
                    }else if(this.imgCoord === rspCoords.scissors){
                        this.imgCoord = rspCoords.paper;
                    }else if(this.imgCoord === rspCoords.paper){
                        this.imgCoord = rspCoords.rock;
                    }
                },100);
            },
            onClickButton(choice) {
                clearInterval(this.interval); //움직이는 이미지 멈춤!
                const myScore = scores[choice];
                const cpuScore = scores[computerChoice(this.imgCoord)];
                const diff = myScore - cpuScore;
                if(diff === 0){
                    this.result = '비겼어용';
                }else if([-1, 2].includes(diff)){
                    this.result = '이겼따~~🎉';
                    this.score +=1;
                }else{
                    this.result = '졌쪄용';
                    this.score -=1;
                }
                setTimeout(()=>{
                    this.changeHand();
                }, 1000)
            }
        },
        beforeCreate() {
            //console.log('beforeCreated');
        },
        created() {
            //console.log('created'); 컴포넌트가 보여지게 될 때(보여지긴 하지만, 화면 나타나기 전)
        },
        beforeMount() {
            //console.log('beforeMounted');
        },
        mounted() {
            //console.log('mounted'); 컴포넌트가 화면에 나타난 후
            this.changeHand();
        },
        beforeUpdate() {
            //console.log('beforeUpdated');
        },
        updated() {
            //console.log('updated'); 화면에 데이터가 바뀌어서, 화면이 다시 그려질 때
        },
        beforeDestroy() {
            // console.log('beforeDestroyed');
            clearInterval(this.interval); //메모리 누수 방지용
        },
        destroyed() {
            //console.log('destroyed'); 화면에 있다가 없어져버렸을 때
        }
    }
</script>

<style scoped>
    #computer{
        width: 142px;
        height: 200px;
        background-position: 0 0;
    }
</style>
