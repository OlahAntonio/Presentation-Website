import Link from "next/link";
import { Mail, Phone, MessageCircle, type LucideIcon } from "lucide-react";
import Footer from "../Components/Footer/Footer";

type ContactMethod = {
  icon: LucideIcon;
  title: string;
  text: string;
  href: string;
  button: string;
};

const contactMethods: ContactMethod[] = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    text: "Send me a quick message and I'll reply as soon as possible.",
    href: "https://wa.me/40742199245",
    button: "Open WhatsApp",
  },
  {
    icon: Mail,
    title: "Email",
    text: "Send me an email for collaborations, questions or opportunities.",
    href: "mailto:olahantonio@gmail.com",
    button: "Send Email",
  },
  {
    icon: Phone,
    title: "Call Me",
    text: "Prefer talking directly? Call me and we can discuss faster.",
    href: "tel:+40742199245",
    button: "Call Now",
  },
];

export default function Contact() {
  return (
    <div>
      <main className="relative min-h-screen overflow-hidden bg-[#0b0f10] px-8 py-20 text-white">
        <BackgroundEffects />

        <section className="relative z-10 mx-auto mb-14 max-w-6xl text-center">
          <h1 className="mb-6 text-6xl font-light">
            Get in <span className="font-bold text-cyan-300">touch</span>.
          </h1>

          <p className="mx-auto max-w-2xl text-xl leading-8 text-gray-300">
            Want to get in touch? I'd love to hear from you. Choose one of the
            options below and contact me directly.
          </p>
        </section>

        <section className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
          {contactMethods.map((method) => (
            <ContactCard key={method.title} {...method} />
          ))}
        </section>

        <div className="relative z-10 mt-12 flex justify-center">
          <Link
            href="/Home"
            className="border border-cyan-400 px-6 py-3 text-cyan-300 transition duration-300 hover:bg-cyan-400 hover:text-black"
          >
            Go Back
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function BackgroundEffects() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(34,211,238,0.14),_transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.22)_2px,_transparent_2px)] bg-[size:150px_150px] opacity-35" />
    </>
  );
}

function ContactCard({ icon: Icon, title, text, href, button }: ContactMethod) {
  const isExternal = href.startsWith("http");

  return (
    <div className="flex min-h-[320px] flex-col items-center justify-between rounded-3xl border border-cyan-400/30 bg-white/10 p-10 text-center shadow-[0_0_40px_rgba(34,211,238,0.12)] backdrop-blur-xl transition duration-300 hover:-translate-y-2">
      <Icon size={46} className="text-cyan-300" />

      <div>
        <h2 className="mb-4 text-3xl font-bold">{title}</h2>
        <p className="leading-7 text-gray-300">{text}</p>
      </div>

      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="rounded-lg bg-cyan-400 px-6 py-3 font-bold text-black transition hover:bg-cyan-300"
      >
        {button}
      </a>
    </div>
  );
}
