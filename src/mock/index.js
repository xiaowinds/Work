import Mock from "mockjs";
let debug = 1;
if (debug) {
  Mock.mock(/getTestData1/, {
    data: {
      tableData: [
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
    },
    msg: "Success",
    status: "YQ-000"
  });
  Mock.mock(/getMenu/, {
    data: {
      menu: [
        {
          name: "庆茂煮漂间",
          name_en: "Scouring And Bleaching",
          icon: "el-icon-time",
          router: "/ScouringAndBleaching",
          children: []
        },
        {
          name: "庆茂染色间",
          name_en: "Dyeing",
          icon: "el-icon-document",
          router: "1",
          children: []
        },
        {
          name: "庆茂冷染间",
          name_en: "Cpb Dyeing",
          icon: "el-icon-picture-outline",
          router: "2",
          children: []
        },
        {
          name: "庆茂成品间",
          name_en: "Finishing",
          icon: "el-icon-menu",
          router: "/Finishing",
          children: [
            {
              name: "验布工",
              name_en: "验布工",
              icon: "el-icon-menu",
              router: "/Finishing/P1"
            },
            {
              name: "包装领班",
              name_en: "包装领班",
              icon: "el-icon-menu",
              router: "/Finishing/P2"
            }
          ]
        }
      ]
    },
    msg: "Success",
    status: "YQ-000"
  });
}
