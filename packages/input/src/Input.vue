<template>
  <div>
    <!-- $attrs  是将原本集成到父元素的，集成到这个元素上 -->
    <input v-bind="$attrs" :type="type" :value="value" @input="handle" />
  </div>
</template>

<script>
export default {
  name: "LgInput",
  inheritAttrs: false,
  props: {
    value: {
      type: String,
    },
    type: {
      type: String,
      default: "text",
    },
  },
  methods: {
    handle(evt) {
      this.$emit("input", evt.target.value);
      console.dir(evt.target);
      const findParent = (parent) => {
        while (parent) {
          if (parent.$options.name === "LgFormItem") {
            break;
          } else {
            parent = parent.$parent;
          }
        }
        return parent;
      };
      const parent = findParent(this.$parent);
      if (parent) {
        parent.$emit("validate");
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
