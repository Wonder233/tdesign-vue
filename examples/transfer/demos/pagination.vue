<template>
  <div>
    <t-transfer
      theme="primary"
      :data="list"
      v-model="targetValue"
      :checked-value="checkedValue"
      :pagination="pagination"
      :onPageChange="handlePageChange"
    />
  </div>
</template>
<script>
const list = [];
for (let i = 0; i < 20; i++) {
  list.push({
    value: i.toString(),
    label: `内容${i + 1}`,
  });
}
export default {
  data() {
    return {
      list,
      targetValue: [],
      checkedValue: [],
      pagination: [
        {
          pageSize: 10,
          defaultCurrent: 1,
        },
        {
          pageSize: 5,
          defaultCurrent: 1,
        },
      ],
    };
  },
  methods: {
    handlePageChange(...args) {
      console.log('handlePageChange', args);
    },
  },
};
</script>
