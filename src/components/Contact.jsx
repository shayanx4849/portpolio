import { useState } from "react";
import {
  FiArrowRight,
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
} from "react-icons/fi";

const FIELD =
  "mt-1.5 w-full rounded-lg bg-white/5 border border-line px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-soft";

export default function Contact() {
  const [status, setStatus] = useState("");
  const API_URL = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const values = Object.fromEntries(new FormData(form));

    setStatus("Sending...");

    const formData = {
      ...values,
      subject: `Portfolio contact from ${values.name}`,
    };

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && data.success) {
        setStatus("Message sent successfully!");
        form.reset();
      } else {
        setStatus(data.message || "Could not send your message.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Could not connect to the contact server.");
    }
  };

  return (
    <div id="contact" className="relative lg:pl-10 lg:border-l lg:border-line">
      <div
        className="hidden xl:flex absolute -top-2 right-0 flex-col items-end text-purple-soft font-display italic text-sm -rotate-6"
        aria-hidden
      >
        Open to new opportunities
        <FiSend size={22} className="mt-2" />
      </div>

      <span className="text-xs tracking-widest text-accent">GET IN TOUCH</span>
      <h2 className="font-display text-2xl sm:text-3xl font-semibold mt-3 mb-3">
        Let's Work Together
      </h2>
      <p className="text-muted text-sm mb-6 leading-relaxed max-w-[46ch]">
        Have a project in mind? I'd love to hear from you. Feel free to reach
        out for collaborations or just a friendly chat.
      </p>

      <form
        onSubmit={handleSubmit}
        className="glass rounded-xl p-5 flex flex-col gap-4"
      >
        <div>
          <label htmlFor="name" className="text-xs font-mono text-muted">
            NAME
          </label>
          <input
            id="name"
            name="name"
            required
            type="text"
            placeholder="Your name"
            className={FIELD}
          />
        </div>
        <div>
          <label htmlFor="email" className="text-xs font-mono text-muted">
            EMAIL
          </label>
          <input
            id="email"
            name="email"
            required
            type="email"
            placeholder="you@example.com"
            className={FIELD}
          />
        </div>
        <div>
          <label htmlFor="message" className="text-xs font-mono text-muted">
            MESSAGE
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={3}
            placeholder="What are you looking to build?"
            className={`${FIELD} resize-y`}
          />
        </div>
        <button
          type="submit"
          className="self-start inline-flex items-center gap-2 rounded-lg bg-gradient-brand px-6 py-3 font-medium shadow-glow hover:brightness-110 transition"
        >
          Send Message <FiArrowRight aria-hidden />
        </button>
        {status && <p className="text-xs text-accent">{status}</p>}
      </form>

      <ul className="grid sm:grid-cols-3 gap-4 mt-6 text-sm">
        <li className="flex items-center gap-2.5">
          <FiMail className="text-purple-soft shrink-0" aria-hidden />{" "}
          shayanx4849@gmail.com
        </li>
        <li className="flex items-center gap-2.5">
          <FiPhone className="text-purple-soft shrink-0" aria-hidden /> +92
          3429572514
        </li>
        <li className="flex items-center gap-2.5">
          <FiMapPin className="text-purple-soft shrink-0" aria-hidden /> Swabi,
          Pakistan
        </li>
      </ul>
    </div>
  );
}
