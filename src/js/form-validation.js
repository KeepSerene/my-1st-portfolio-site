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

export function clearErrors() {
  document.querySelectorAll(".field-error").forEach((error) => error.remove());
  document.querySelectorAll(".contact__entry-field").forEach((field) => {
    field.style.borderColor = "";
  });
}
