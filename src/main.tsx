import { createRoot } from "react-dom/client";
import App from "./app/App";
import "./styles/globalStyle.css";
import "./utils/language/i18n";

createRoot(document.getElementById("root")!).render(<App />);
