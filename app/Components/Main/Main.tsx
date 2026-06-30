import { SocialIcon } from "react-social-icons";

export default function Main() {
  return (
    <main className="relative h-screen bg-[#0b0f10] text-white overflow-hidden flex items-center justify-center px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(34,211,238,0.12),_transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.22)_2px,_transparent_2px)] bg-[size:150px_150px] opacity-35" />
      <section className="relative z-10 flex flex-col items-center text-center translate-y-6">
        <img
          src="/ProfilePic.png"
          alt="Profile Picture"
          className="w-36 h-36 rounded-full object-cover mb-10 shadow-[0_0_35px_rgba(34,211,238,0.18)]"
        />

        <h1 className="text-[64px] md:text-[96px] leading-none font-light tracking-wide mb-8 drop-shadow-lg">
          Olah Antonio
        </h1>

        <h2 className="text-[28px] md:text-[38px] text-gray-300 font-light mb-14">
          Student, Developer & Gym Rat
        </h2>

        <div className="flex items-center justify-center gap-7">
          <SocialIcon
            url="https://github.com/OlahAntonio"
            style={{ height: 52, width: 52 }}
          />

          <SocialIcon
            url="https://www.instagram.com/mihaiantonioolah"
            style={{ height: 52, width: 52 }}
          />

          <SocialIcon
            url="https://www.facebook.com/profile.php?id=100009541749334"
            style={{ height: 52, width: 52 }}
          />

          <SocialIcon
            url="https://www.linkedin.com/in/olah-mihai-antonio-8b8b7b263/"
            style={{ height: 52, width: 52 }}
          />
        </div>
      </section>
    </main>
  );
}
