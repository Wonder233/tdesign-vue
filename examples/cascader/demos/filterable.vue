<template>
  <div class="tdesign-demo-block-row">
    <t-cascader v-model="value" :options="options" filterable clearable />
    <t-cascader v-model="value2" :options="options" filterable clearable multiple :min-collapsed-num="2" />
    <t-cascader v-model="value3" :filter="filterMethod" :options="options" clearable :min-collapsed-num="2" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      options: [
        {
          label: '当选项一数据展示文本过长时',
          value: '1',
          children: [
            {
              label: '子选项一',
              value: '1.1',
            },
            {
              label: '子选项二',
              value: '1.2',
            },
            {
              label: '当选项数据展示文本过长时',
              value: '1.3',
            },
          ],
        },
        {
          label: '选项二',
          value: '2',
          children: [
            {
              label: '子选项一',
              value: '2.1',
            },
            {
              label: '当选项数据展示文本过长时',
              value: '2.2',
            },
          ],
        },
      ],
      value: '',
      value2: ['1.1'],
      value3: '',
    };
  },
  methods: {
    filterMethod(search, node) {
      console.log('filter:', search, node.label);
      return node.label.indexOf(search) !== -1;
    },
  },
};
</script>
