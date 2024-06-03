<template>
    <table>
        <tr-component v-for="(rowData, index) in tableData" :key="index" :row-data="rowData" :row-index="index"></tr-component>
    </table>
<!--    table component, tr component v-for 때문에 :key값 묶어줬는데...왜?...오류?...ㅠㅠ....
구글링 키워드 :   Errors compiling template: Cannot use v-for on stateful component root element because it renders multiple elements.
https://forum.vuejs.org/t/vue-js-components-cannot-use-v-for-on-stateful-component-root-element-because-it-renders-multiple-elements/25621
-->
</template>

<script>
    import TrComponent from "./TrComponent";

    export default {
        name: "TableComponent",
        props: {
            tableData: Array,
        },
        components: {
            TrComponent,
        },
    }
</script>

<style scoped>

</style>