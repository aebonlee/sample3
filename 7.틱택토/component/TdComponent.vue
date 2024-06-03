<template>
    <td @click="onClickTd">{{cellData}}</td>
</template>

<script>
    export default {
        name: "TdComponent",
        props: {
            cellData: String,
            cellIndex: Number,
            rowIndex: Number
        },
        methods: {
            onClickTd() {
                const rootData = this.$root.$data;
                //최상위 부모에게 한번에 접근하는방법 = root, 배열에서 인덱스 쓰는방법 숙지
                //가로 행 수 x 세로 행 수 = 현재의 턴으로 바꿔준다(O, X 번걸아 가면서 넣어주기), 좌표찍히게하기![0,1]
                // this.$root.$data.tableData[this.rowIndex][this.cellIndex] = this.$root.$data.turn;
                this.$set(rootData.tableData[this.rowIndex], this.cellIndex, rootData.turn);
                rootData.turn = rootData.turn === 'O' ? 'X' : 'O';
            }
        }
    }
</script>

<style scoped>

</style>