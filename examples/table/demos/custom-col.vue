<template>
  <div class="tdesign-demo-block-column-large">
    <!-- 按钮操作区域 -->
    <div>
      <t-button @click="columnControllerVisible = true">显示列配置弹窗</t-button>
    </div>

    <!-- 1. defaultDisplayColumns = ['platform'] 设置默认显示哪些列，仅第一次有效 -->
    <!-- 2. displayColumns 动态设置显示哪些列，受控属性，支持 displayColumns.sync 语法糖 -->
    <!-- 3. onDisplayColumnsChange 当前显示列发生变化时触发 -->
    <!-- 受控用法，示例代码有效，勿删  -->
    <t-table
      rowKey="index"
      :data="data"
      :columns="columns"
      :displayColumns.sync="displayColumns"
      :columnControllerVisible.sync="columnControllerVisible"
      :columnController="{
        fields: ['platform', 'type', 'default'],
        dialogProps: { preventScrollThrough: true },
        hideTriggerButton: true,
      }"
      :pagination="{ defaultPageSize: 5, defaultCurrent: 1, total: 100 }"
      tableLayout="auto"
      stripe
      @column-change="onColumnChange"
    ></t-table>
  </div>
</template>
<script lang="jsx">
const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    index: i,
    platform: i % 2 === 0 ? '共有' : '私有',
    type: ['String', 'Number', 'Array', 'Object'][i % 4],
    default: ['-', '0', '[]', '{}'][i % 4],
    detail: {
      position: `读取 ${i} 个数据的嵌套信息值`,
    },
    needed: i % 4 === 0 ? '是' : '否',
    description: '数据源',
  });
}

const staticColumn = ['index', 'needed', 'detail.position'];
export default {
  data() {
    return {
      data,
      columnControllerVisible: false,
      displayColumns: staticColumn.concat(['platform', 'type', 'default']),
      columns: [
        {
          align: 'center',
          className: 'row',
          colKey: 'index',
          title: '序号',
        },
        {
          colKey: 'platform',
          title: '平台',
        },
        {
          colKey: 'type',
          title: '类型',
        },
        {
          colKey: 'default',
          title: '默认值',
        },
        {
          colKey: 'needed',
          title: '是否必传',
        },
        {
          colKey: 'detail.position',
          title: '详情信息',
          ellipsis: true,
        },
      ],
    };
  },

  methods: {
    onColumnChange(params) {
      console.log(params);
    },
  },
};
</script>
