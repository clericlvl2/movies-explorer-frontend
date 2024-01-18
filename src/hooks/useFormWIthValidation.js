import { useState, useCallback } from 'react'
import { isDefined } from "../utils/helpers";

const DEFAULT_ERRORS = {};

export function useFormWithValidation(initialFormData, options) {
  const [form, setForm] = useState(initialFormData);
  const [errors, setErrors] = useState(DEFAULT_ERRORS);
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    let errorMessage = target.validationMessage;

    const isPatternMismatch = target.validity.patternMismatch;
    const hasCustomMessage = isDefined(options[name])

    if (isPatternMismatch && hasCustomMessage) {
      errorMessage = options[name]
    }

    setForm({...form, [name]: value});
    setErrors({...errors, [name]: errorMessage });
    setIsValid(target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setForm(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setForm, setErrors, setIsValid]
  );

  return { form, handleChange, errors, isValid, resetForm };
}