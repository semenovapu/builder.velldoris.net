import { useEffect, useRef } from "react";
import "./FormBitrix.css";

function FormBitrix() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptAdded = useRef(false);

  useEffect(() => {
    if (scriptAdded.current) return;
    scriptAdded.current = true;

    const script = document.createElement("script");
    script.src = `https://cdn-ru.bitrix24.ru/b10916060/crm/form/loader_686.js?${(Date.now() / 180000) | 0}`;
    script.async = true;
    script.dataset.b24Form = "inline/686/e92lrz";
    script.dataset.skipMoving = "true";

    const container = containerRef.current;
    if (container) container.appendChild(script);

    const observer = new MutationObserver(() => {
      const nameInput = container?.querySelector<HTMLInputElement>(".b24-form-field-name input");
      const phoneInput = container?.querySelector<HTMLInputElement>(".b24-form-field-phone input");
      if (nameInput && phoneInput) {
        nameInput.placeholder = "Имя";
        phoneInput.placeholder = "Номер телефона";
        observer.disconnect();
      }
    });

    if (container) observer.observe(container, { childList: true, subtree: true });
  }, []);

  return <div ref={containerRef}></div>;
}

export default FormBitrix;
