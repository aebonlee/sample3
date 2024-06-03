<template>
    <tr>
        <td-component v-for="(cellData, index) in rowData"
                      :key="index" :row-index="rowIndex" :cell-data="cellData" :cell-index="index"></td-component>
    </tr>
</template>

<script>
    import TdComponent from "./TdComponent";

    export default {
        name: "TrComponent",
        data() {
          return{
              parent: 'td 아빠왔다',
          }
        },
        props: {
            rowData: Array,
            rowIndex: Number,
        },
        components: {
            TdComponent,
        }
    }
</script>

<style scoped>

</style>