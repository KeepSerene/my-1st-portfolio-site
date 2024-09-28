/*=============== EmailJS: https://dashboard.emailjs.com/ ===============*/

const contactFormEl = document.querySelector("[data-contact-form]");
const contactStatusMsgEl = contactFormEl.querySelector(
  "[data-contact-status-msg]"
);

export default function sendEmail(event) {
  event.preventDefault();

  // serviceID - templateID - form (DOMElement) - publicKey
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

      // Clear the entry fields
      contactFormEl.reset();
    })
    .catch((err) => {
      // Notify the user if something goes wrong
      contactStatusMsgEl.innerText =
        "Message failed to send (service error!) ❌";

      console.log(err);
    });
}
