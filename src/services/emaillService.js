import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_un7jqek";
const TEMPLATE_ID = "template_q7a85g8";
const PUBLIC_KEY = "JRkXjsbZPO89NPJKo";

export const sendEmail = async (formData) => {
  return emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    },
    PUBLIC_KEY
  );
};