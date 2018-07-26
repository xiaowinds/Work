<template>
<div>
  <el-table
    :data="tableData"
    style="width: 100%"
    max-height="100%">
    <el-table-column
      fixed
      prop="date"
      label="日期"
      width="120">
    </el-table-column>
    <el-table-column
      prop="name"
      label="机台"
      width="100">
    </el-table-column>
    <el-table-column
      prop="province"
      label="班次"
      width="100">
    </el-table-column>
    <el-table-column
      prop="city"
      label="姓名1"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="姓名2"
      width="120">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="验布类型"
      width="100">
    </el-table-column>
    <el-table-column
      prop="date"
      label="产量标准*H"
      width="100">
    </el-table-column>
    <el-table-column
      prop="name"
      label="特殊情况标准产量"
      width="100">
    </el-table-column>
    <el-table-column
      prop="province"
      label="万码标准"
      width="100">
    </el-table-column>
    <el-table-column
      prop="city"
      label="加工单"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="颜色"
      width="120">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="产量"
      width="240">
      <el-table-column
        prop="date"
        label="好布"
        width="80">
      </el-table-column>
      <el-table-column
        prop="name"
        label="次布"
        width="80">
      </el-table-column>
      <el-table-column
        prop="name"
        label="退回"
        width="80">
      </el-table-column>
    </el-table-column>    
    <el-table-column
      prop="province"
      label="总产量"
      width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="120">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData4)"
          type="text"
          size="small">
          移除
        </el-button>
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData4)"
          type="text"
          size="small">
          移除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
import "@/mock/index.js";

export default {
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    }
  },
  data() {
    return {
      tableData: []
    };
  },
  created() {
    var $this = this;
    this.$axios({
      url: "getTestData1",
      method: "GET"
    }).then(res => {
      $this.tableData = res.data.data.tableData;
    });
  }
};
</script>
