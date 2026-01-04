import * as React from "react";
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
  useFormContext,
} from "react-hook-form";
import { FormFieldContext, FormItemContext } from "./formContext";

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: TName;
};

// FormFieldContext and FormItemContext are defined in ./formContext

export const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({ ...props }: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider
      value={{ name: props.name as unknown as TName }}
    >
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

export default {};
