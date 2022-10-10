import * as yup from "yup";

const createCategory = yup.object().shape({
  id: yup.number().notRequired(),
  name: yup.string().required(),
});

export { createCategory };
