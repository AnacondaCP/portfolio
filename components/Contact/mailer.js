import emailjs from "@emailjs/browser";

const mail = ({ name, email, message }) =>
  emailjs.send(
    process.env.NEXT_PUBLIC_SERVICE_ID, // Ambil dari variabel lingkungan
    process.env.NEXT_PUBLIC_TEMPLATE_ID, // Ambil dari variabel lingkungan
    {
      to_name: "Recipient Name", // Ganti dengan nama penerima jika diperlukan
      from_name: name, // Nama pengirim dari form
      from_email: email, // Email pengirim dari form
      message: message, // Pesan dari format
    },
    process.env.NEXT_PUBLIC_USER_ID // Ambil dari variabel lingkungan
  );

export default mail;
