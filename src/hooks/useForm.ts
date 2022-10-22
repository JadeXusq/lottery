import type { FormInstance } from "vant";
import type { Ref } from "vue";

interface IFormProp {
  form?: Ref<FormInstance | undefined> | undefined;
  submitCallback: () => void;
}

export default function useForm({
  form,
  submitCallback = () => {},
}: IFormProp) {
  const formRef = form || ref<FormInstance>();

  /**
   * 表单校验
   */
  function submit() {
    formRef.value
      ?.validate()
      .then(() => {
        formRef.value?.submit();
        submitCallback();
      })
      .catch((err) => {
        if (Array.isArray(err)) {
          Toast(err[0].message);
        }
      });
  }

  return {
    formRef,
    submit,
  };
}
