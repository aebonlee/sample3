<template>
    <b-container>
        <b-row class="text-center">
            <b-col md="12">
                <h2 class="m-3 font-weight-bold">틱택토(삼목)</h2>
            </b-col>
            <b-col md="12" class="border-top p-3">
                <table-component :table-data="tableData" class="m-auto"></table-component>
                <h4 class="p-3">{{turn}}님의 턴입니다.</h4>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import Vue from 'vue';
    import TableComponent from "./component/TableComponent";

    export default {
        name: "TicTacToe",
        data() {
            return{
                tableData: [
                    //2차원 배열
                    ['', '', ''],
                    ['', '', ''],
                    ['', '', '']
                ],
                turn: 'O',
            }
        },
        components: {
            TableComponent,
        },
        methods: {
            //주의! 뷰에서 배열의 값을 인덱스로 바꾸면 화면에 반영이 안됩니다...ㅜ_ㅜ - 뷰의 구조적 한계(js의 한계) ex)this.tableData[0][1] = 'O'; 작동하지않음
            //아래는 한계벗어날 수 있는 방법 Vue.set = this.$set     참고 : https://vuejs.org/v2/api/#vm-set
            onChangeData() {
                this.$set(this.tableData[1], 0, 'X'); //1, 0 의 좌표에 X를 넣는다
            }
        },
        mounted() {
        },
        beforeDestroy() {
        },
        watch: {
        }
    }
</script>

<style>
    table{
        border-collapse: collapse;
    }
    td{
        border: 1px solid #ccc;
        width: 100px;
        height: 100px;
        text-align: center;
    }
</style>
