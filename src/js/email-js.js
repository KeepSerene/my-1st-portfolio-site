/*=============== EmailJS: https://dashboard.emailjs.com/ ===============*/

const contactFormEl = document.querySelector("[data-contact-form]");
const contactStatusMsgEl = contactFormEl.querySelector(
  "[data-contact-status-msg]"
);
const contactSubmitBtnEl = contactFormEl.querySelector(
  "[data-contact-submit-btn]"
);

export default function sendEmail(event) {
  event.preventDefault();

  // Disable the submit button
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
      // Show message sent confirmation
      contactStatusMsgEl.innerText = "Message successfully sent ✅";

      // Remove the confirmation after 5 seconds
      setTimeout(() => (contactStatusMsgEl.innerText = ""), 5000);

      // Re-enable the submit button
      contactSubmitBtnEl.disabled = false;
      contactSubmitBtnEl.innerHTML =
        '<i class="ri-send-plane-line"></i> Send Message';

      // Clear the entry fields
      contactFormEl.reset();
    })
    .catch((err) => {
      // Notify the user if something goes wrong
      contactStatusMsgEl.innerText =
        "Message failed to send (service error!) ❌";

      // Re-enable the submit button
      contactSubmitBtnEl.disabled = false;
      contactSubmitBtnEl.innerHTML =
        '<i class="ri-send-plane-line"></i> Send Message';

      console.log(err);
    });
}
