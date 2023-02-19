import Joi from "joi";

export const validateSquemas = (schema: Joi.ObjectSchema<any>, data: any) => {
  const result = schema.validate(data, { abortEarly: false });
  const errorsList: any = {};
  if (result.error)
    for (let item of result.error.details)
      errorsList[item.path[0]] = item.message;

  return errorsList;
};

export const getLabelError = (name: string, errors: any) => {
  return <label style={{ color: "red" }}>{errors[name]} </label>;
};
