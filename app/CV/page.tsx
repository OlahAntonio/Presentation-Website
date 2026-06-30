import {
  Mail,
  MapPin,
  GraduationCap,
  Briefcase,
  Code,
  Trophy,
  GitBranch,
  BadgeCheck,
} from "lucide-react";
import Footer from "../Components/Footer/Footer";

const skills = [
  { name: "JavaScript", level: 2 },
  { name: "React", level: 2 },
  { name: "Next.js", level: 2 },
  { name: "TypeScript", level: 2 },
  { name: "HTML/CSS", level: 3 },
  { name: "Python", level: 1 },
  { name: "C#", level: 3 },
  { name: "SQL", level: 2 },
  { name: "Git", level: 2 },
];

const contacts = [
  {
    icon: Mail,
    text: "olahantonio@gmail.com",
    href: "mailto:olahantonio@gmail.com",
  },
  {
    icon: MapPin,
    text: "Oradea, Romania",
    href: "https://www.google.com/maps/place/Oradea,+Romania",
  },
  {
    icon: GitBranch,
    text: "GitHub",
    href: "https://github.com/OlahAntonio",
  },
  {
    icon: BadgeCheck,
    text: "LinkedIn",
    href: "https://www.linkedin.com/in/olah-mihai-antonio-8b8b7b263/",
  },
];

const dotClasses = "h-3 w-3 rounded-full";
const sectionTitleClasses =
  "mb-8 flex items-center gap-4 border-b border-gray-400 pb-3 text-3xl font-bold";

export default function CV() {
  return (
    <div>
      <main className="min-h-screen bg-[#1c1c1c] px-8 py-12 text-white">
        <section className="mx-auto max-w-7xl bg-[#191919] shadow-2xl">
          <header className="bg-[#0d4654] px-10 py-14">
            <h1 className="mb-6 text-5xl font-bold tracking-wider">
              OLAH ANTONIO
            </h1>

            <p className="text-xl font-semibold">
              Computer Science Student • Developer • IT Technician
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-[360px_1fr]">
            <aside className="bg-[#232d30] px-8 py-10">
              <h2 className="mb-6 border-b border-gray-400 pb-2 text-3xl font-bold">
                CONTACT
              </h2>

              {contacts.map(({ icon: Icon, text, href }) => (
                <div key={text} className="flex items-center gap-3">
                  <Icon size={22} />

                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-blue-300"
                    >
                      {text}
                    </a>
                  ) : (
                    <span>{text}</span>
                  )}
                </div>
              ))}

              <h2 className="mb-6 border-b border-gray-400 pb-2 text-3xl font-bold">
                SKILLS
              </h2>

              <div className="mb-10 space-y-3">
                {skills.map(({ name, level }) => (
                  <div key={name} className="flex items-center justify-between">
                    <p className="text-lg font-semibold">{name}</p>

                    <div className="flex gap-1">
                      {[0, 1, 2, 3, 4].map((dot) => (
                        <div
                          key={dot}
                          className={`${dotClasses} ${
                            dot < level ? "bg-blue-300" : "bg-gray-600"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="mb-6 border-b border-gray-400 pb-2 text-3xl font-bold">
                LANGUAGES
              </h2>

              <div className="space-y-3 text-lg">
                <p>
                  <b>Romanian</b> — Native
                </p>
                <p>
                  <b>English</b> — Advanced
                </p>
              </div>
            </aside>

            <section className="space-y-16 px-10 py-10">
              <div>
                <h2 className={sectionTitleClasses}>
                  <GraduationCap size={34} />
                  EDUCATION
                </h2>

                <CVItem
                  date="October 2022 - Summer 2025"
                  title="Bachelor’s in Computer Science"
                  place="University of Oradea"
                  bullets={[
                    "Studied programming, algorithms, databases and web development.",
                    "Completed practical university projects using modern technologies.",
                    "Graduated with a License Project.",
                  ]}
                />

                <CVItem
                  date="October 2025 - July 2027"
                  title="Master’s Degree Student"
                  place="University of Oradea"
                  bullets={[
                    "Continuing studies in a Master’s degree program focused on Distributed Systems.",
                  ]}
                />
              </div>

              <div>
                <h2 className={sectionTitleClasses}>
                  <Briefcase size={34} />
                  PROFESSIONAL EXPERIENCE
                </h2>

                <CVItem
                  date="August 2023"
                  title="Internship Experience"
                  place="Plexus Corp"
                  bullets={[
                    "First internship experience in a professional technical environment.",
                    "Improved teamwork, communication and problem-solving skills.",
                  ]}
                />

                <CVItem
                  date="June 2024 - April 2026"
                  title="Field Technician"
                  place="FCC"
                  bullets={[
                    "Provided IT and technical support as a Field Technician, addressing hardware failures and LAN/network connectivity issues.",
                    "Handled troubleshooting, maintenance and field operations.",
                    "Delivered IT support and troubleshooting services as a Field Technician, managing helpdesk requests and on-site interventions for approximately 40 end users.",
                  ]}
                />
              </div>

              <div>
                <h2 className={sectionTitleClasses}>
                  <Code size={34} />
                  PROJECTS
                </h2>

                <CVItem
                  date="2025"
                  title="License Project"
                  place="University Graduation Project"
                  bullets={[
                    `Built a Blackjack game as a final university project, applying concepts and skills acquired throughout the Computer Science degree.
Focused on practical software development, object-oriented programming, and problem-solving.
Developed a playable application that is available for viewing on my GitHub profile.`,
                  ]}
                />

                <CVItem
                  date="Present"
                  title="Portfolio Website"
                  place="Personal Project"
                  bullets={[
                    `Designed and developed a modern, responsive personal portfolio website using Next.js and Tailwind CSS.
Created dedicated About, Experience, Contact, and CV pages with intuitive navigation and a consistent user interface.
Implemented reusable React components to improve maintainability and scalability.
Optimized performance through Next.js features such as server-side rendering and image optimization.
Focused on responsive design, accessibility, and user experience across desktop and mobile devices.`,
                  ]}
                />
              </div>

              <div>
                <h2 className={sectionTitleClasses}>
                  <Trophy size={34} />
                  EXTRA CURRICULARS
                </h2>

                <ul className="ml-8 list-disc text-lg leading-8">
                  <li>Gym and fitness enthusiast.</li>
                  <li>
                    Passionate about continuous learning and self-improvement.
                  </li>
                  <li>
                    Interested in web development and software engineering.
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function CVItem({
  date,
  title,
  place,
  bullets,
}: {
  date: string;
  title: string;
  place: string;
  bullets: string[];
}) {
  return (
    <div className="mb-10">
      <div className="flex justify-between gap-6">
        <div>
          <p className="text-lg font-bold">{date}</p>
          <p className="text-lg">{place}</p>
        </div>

        <h3 className="text-right text-2xl">{title}</h3>
      </div>

      <ul className="ml-8 mt-5 list-disc text-lg leading-8">
        {bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
}
