import TpInput from "../";

export default {
  title: "TpInput",
  component: TpInput,
};

export const Input = () => ({
  components: { TpInput },
  template: "<tp-input v-model='value'></tp-input>",
  data() {
    return {
      value: "admin",
    };
  },
});

export const InputPassword = () => ({
  components: { TpInput },
  template: "<tp-input type='password' v-model='value'></tp-input>",
  data() {
    return {
      value: "admin",
    };
  },
});
