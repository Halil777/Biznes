import { FC } from "react";
import ContactHeader from "../components/ContactHeader";
import styles from "../styles/contact.module.css";
import ContactForm from "../components/ContactForm";

const Contact: FC = () => {
  return (
    <div className={styles.contact_container} id="contact">
      <ContactHeader />
      <ContactForm />
    </div>
  );
};

export default Contact;
