export function validateForm(formData) {
  const errors = {};

  // name validation
  if (!formData.user_name.trim()) {
    errors.user_name = "Full name is required";
  } else if (formData.user_name.trim().length < 2) {
    errors.user_name = "Name must be at least 2 characters";
  }

  // email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.user_email.trim()) {
    errors.user_email = "Email address is required";
  } else if (!emailPattern.test(formData.user_email.trim())) {
    errors.user_email = "Please enter a valid email address";
  }

  // subject validation
  if (!formData.user_message_subject.trim()) {
    errors.user_message_subject = "Subject is required";
  } else if (formData.user_message_subject.trim().length < 3) {
    errors.user_message_subject = "Subject must be at least 3 characters";
  }

  // message validation
  if (!formData.user_message.trim()) {
    errors.user_message = "Message is required";
  } else if (formData.user_message.trim().length < 10) {
    errors.user_message = "Message must be at least 10 characters";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function validateField(fieldName, fieldValue) {
  let error = null;

  switch (fieldName) {
    case "user_name":
      if (!fieldValue.trim()) {
        error = "Full name is required";
      } else if (fieldValue.trim().length < 2) {
        error = "Name must be at least 2 characters";
      }
      break;

    case "user_email":
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!fieldValue.trim()) {
        error = "Email address is required";
      } else if (!emailPattern.test(fieldValue.trim())) {
        error = "Please enter a valid email address";
      }
      break;

    case "user_message_subject":
      if (!fieldValue.trim()) {
        error = "Subject is required";
      } else if (fieldValue.trim().length < 3) {
        error = "Subject must be at least 3 characters";
      }
      break;

    case "user_message":
      if (!fieldValue.trim()) {
        error = "Message is required";
      } else if (fieldValue.trim().length < 10) {
        error = "Message must be at least 10 characters";
      }
      break;
  }

  return error;
}

export function displayErrors(errors) {
  // clear previous errors
  document.querySelectorAll(".field-error").forEach((error) => error.remove());

  // display new errors
  Object.keys(errors).forEach((fieldName) => {
    const field = document.querySelector(`[name="${fieldName}"]`);
    if (field) {
      const errorElement = document.createElement("span");
      errorElement.className = "field-error";
      errorElement.textContent = errors[fieldName];
      field.parentNode.appendChild(errorElement);
      field.style.borderColor = "var(--clr-error)";
    }
  });
}

export function displayFieldError(fieldName, errorMessage) {
  const field = document.querySelector(`[name="${fieldName}"]`);
  if (!field) return;

  const existingError = field.parentNode.querySelector(".field-error");
  if (existingError) {
    existingError.remove();
  }

  if (errorMessage) {
    const errorElement = document.createElement("span");
    errorElement.className = "field-error";
    errorElement.textContent = errorMessage;
    field.parentNode.appendChild(errorElement);
    field.style.borderColor = "var(--clr-error)";
  } else {
    field.style.borderColor = "var(--clr-success)";
  }
}

export function clearFieldError(fieldName) {
  const field = document.querySelector(`[name="${fieldName}"]`);
  if (!field) return;

  const existingError = field.parentNode.querySelector(".field-error");
  if (existingError) {
    existingError.remove();
  }

  field.style.borderColor = "";
}

export function clearErrors() {
  document.querySelectorAll(".field-error").forEach((error) => error.remove());
  document.querySelectorAll(".contact__entry-field").forEach((field) => {
    field.style.borderColor = "";
  });
}

export function hasFieldError(fieldName) {
  const field = document.querySelector(`[name="${fieldName}"]`);
  if (!field) return false;

  return field.parentNode.querySelector(".field-error") !== null;
}
