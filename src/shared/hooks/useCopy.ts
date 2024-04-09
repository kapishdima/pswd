import { ref } from "vue";

export const useCopy = (value: string) => {
  const copied = ref<boolean>(false);

  const copy = () => {
    navigator.clipboard.writeText(value);
    copied.value = true;

    setTimeout(() => {
      copied.value = false;
    }, 1000);
  };

  return {
    copied,
    copy,
  };
};
