import { useState, useCallback } from 'react'
import { PATTERN_ERROR_MESSAGE } from "../utils/validation";

const DEFAULT_ERRORS = {};

export function useFormWithValidation(initialFormData) {
  const [form, setForm] = useState(initialFormData);
  const [errors, setErrors] = useState(DEFAULT_ERRORS);
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    const error = target.validity.patternMismatch
      ? PATTERN_ERROR_MESSAGE
      : target.validationMessage

    setForm({...form, [name]: value});
    setErrors({...errors, [name]: error });
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