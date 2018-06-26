<template>
<div>
  <el-table
    :data="tableData3"
    style="width: 100%"
    border 
    height="650">
    <el-table-column
      fixed
      prop="date"
      label="日期"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      label="机台"
      width="120">
    </el-table-column>
    <el-table-column
      prop="province"
      label="班次"
      width="120">
    </el-table-column>
    <el-table-column
      prop="city"
      label="姓名1"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="姓名2"
      width="300">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="验布类型"
      width="120">
    </el-table-column>
    <el-table-column
      prop="name"
      label="机台"
      width="120">
    </el-table-column>
    <el-table-column
      prop="province"
      label="班次"
      width="120">
    </el-table-column>
    <el-table-column
      prop="city"
      label="姓名1"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="姓名2"
      width="300">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="验布类型"
      width="120">
    </el-table-column>
     <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
</div>
</template>

<script>
export default {
  data() {
    return {
      tableData3: [
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        }
      ]
    };
  },
  methods: {
    handleClick(row) {
      console.log(row);
    }
  }
};
</script>
