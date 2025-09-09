/*=============== EmailJS: https://dashboard.emailjs.com/ ===============*/

import { validateForm, displayErrors, clearErrors } from "./form-validation.js";

const contactFormEl = document.querySelector("[data-contact-form]");
const contactStatusMsgEl = contactFormEl.querySelector(
  "[data-contact-status-msg]"
);
const contactSubmitBtnEl = contactFormEl.querySelector(
  "[data-contact-submit-btn]"
);

export default function sendEmail(event) {
  event.preventDefault();
  clearErrors(); // clear any previous errors or status msgs
  contactStatusMsgEl.innerText = "";
  const formData = new FormData(contactFormEl);
  const data = Object.fromEntries(formData);
  const validation = validateForm(data);

  if (!validation.isValid) {
    displayErrors(validation.errors);
    contactStatusMsgEl.innerText = "Please fix the errors above";
    contactStatusMsgEl.style.color = "var(--clr-error)";
    setTimeout(() => {
      contactStatusMsgEl.innerText = "";
    }, 5000);

    return;
  }

  // clear any existing errors
  clearErrors();

  // disable the submit button
  contactSubmitBtnEl.disabled = true;
  contactSubmitBtnEl.innerHTML =
    '<i class="ri-send-plane-line"></i> Sending Message...';

  // serviceID - templateID - form (DOM-element) - publicKey
  emailjs
    .sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      "[data-contact-form]",
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      // onfirmation
      contactStatusMsgEl.innerText = "Message successfully sent ✅";
      contactStatusMsgEl.style.color = "#10b981";
      setTimeout(() => (contactStatusMsgEl.innerText = ""), 5000);
      // re-enable the submit button
      contactSubmitBtnEl.disabled = false;
      contactSubmitBtnEl.innerHTML =
        '<i class="ri-send-plane-line"></i> Send Message';
      // clear the entry fields
      contactFormEl.reset();
    })
    .catch((err) => {
      // notify the user if something goes wrong
      contactStatusMsgEl.innerText =
        "Message failed to send (service error!) ❌";
      contactStatusMsgEl.style.color = "var(--clr-error)";
      // re-enable the submit button
      contactSubmitBtnEl.disabled = false;
      contactSubmitBtnEl.innerHTML =
        '<i class="ri-send-plane-line"></i> Send Message';

      console.log(err);
    });
}
