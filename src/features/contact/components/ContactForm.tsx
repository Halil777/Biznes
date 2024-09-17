import React, { useState, useEffect } from "react";
import styles from "../styles/contact.form.module.css";
import { useFetchByType } from "../../../api/api";
import { useTranslation } from "react-i18next";

interface FormData {
  username: string;
  email: string;
  text: string;
  phone: string;
  theme: string;
}

const ContactForm: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { data: theme, error, isLoading } = useFetchByType("contact_theme");
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    text: "",
    phone: "",
    theme: "",
  });
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Handle form input change
  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Prepare the request body
    const requestBody = {
      to_mail: "microsoft7779@gmail.com", // Your recipient email
      username: formData.username,
      email: formData.email,
      phone: formData.phone,
      text: formData.text,
      theme: formData.theme,
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    };

    try {
      const response = await fetch(
        "https://ikmaslahat.com/send-mail",
        requestOptions
      );

      if (response.ok) {
        // If the response is successful
        setSuccessMessage("Message sent successfully!");
        setFormData({
          username: "",
          email: "",
          text: "",
          phone: "",
          theme: "",
        });
      } else {
        // Handle errors from the server
        const errorData = await response.json();
        setErrorMessage(
          `Error: ${errorData.message || "Failed to send message."}`
        );
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setErrorMessage(
        "There was an error sending your message. Please try again later."
      );
    }
  };

  const subjectTitleKey = `title_${i18n.language}`;

  // Automatically hide success or error messages after 3 seconds
  useEffect(() => {
    if (successMessage || errorMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage(null);
        setErrorMessage(null);
      }, 3000);

      return () => clearTimeout(timer); // Cleanup the timer
    }
  }, [successMessage, errorMessage]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={styles.contact_form_container}>
          <div className={styles.form_container}>
            <label>{t("contact.name")}</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.form_container}>
            <label>{t("contact.number")}</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.form_container}>
            <label>{t("contact.mail")}</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.form_container}>
            <label>{t("contact.thema")}</label>
            <select
              name="theme"
              value={formData.theme}
              onChange={handleChange}
              required
            >
              <option value="">{t("contact.thema")}</option>
              {isLoading && <option>Loading...</option>}
              {error && <option>Error loading subject</option>}
              {theme?.map((theme: any) => (
                <option key={theme.id} value={theme[subjectTitleKey]}>
                  {theme[subjectTitleKey]}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className={styles.form_container}>
          <label>{t("contact.message")}</label>
          <textarea
            rows={6}
            name="text"
            value={formData.text}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.submit_container}>
          <button className={styles.submit_btn} type="submit">
            {t("contact.send")}
          </button>
        </div>
      </form>
      {successMessage && (
        <p className={`${styles.success_message} ${styles.notification}`}>
          {successMessage}
        </p>
      )}
      {errorMessage && (
        <p className={`${styles.error_message} ${styles.notification}`}>
          {errorMessage}
        </p>
      )}
    </>
  );
};

export default ContactForm;
