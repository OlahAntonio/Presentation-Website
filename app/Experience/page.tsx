import Footer from "../Components/Footer/Footer";

const projects = [
  {
    title: "University Projects",
    text: "Built projects while studying Computer Science, focusing on web development, programming fundamentals, databases and software engineering.",
  },
  {
    title: "Internship Experience",
    text: "Completed my first internship at Plexus Corp, gaining real-world experience in a professional technical environment.",
  },
  {
    title: "License Project",
    text: "Created my university graduation project, applying the knowledge gained during my Computer Science degree.",
  },
];

const timeline = [
  {
    date: "October 2022",
    text: "Started studying Computer Science at University of Oradea",
  },
  {
    date: "August 2023",
    text: "First internship experience at Plexus Corp",
  },
  {
    date: "June 2024",
    text: "IT job as a Field Technician at FCC",
  },
  {
    date: "Summer 2025",
    text: "University Graduation and License Project",
  },
  {
    date: "October 2025 - July 2027",
    text: "Master’s degree student",
  },
];

export default function Experience() {
  return (
    <div>
      <main className="relative min-h-screen overflow-hidden bg-[#0b0f10] px-8 py-20 text-white">
        <BackgroundEffects />

        <section className="relative z-10 mx-auto max-w-7xl">
          <PageTitle before="My top" highlighted="projects" />

          <section className="mb-24 grid grid-cols-1 gap-8 md:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </section>

          <PageTitle before="Time" highlighted="line" />

          <Timeline />
        </section>
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

function PageTitle({
  before,
  highlighted,
}: {
  before: string;
  highlighted: string;
}) {
  return (
    <h1 className="mb-16 text-center text-6xl font-light">
      {before} <span className="font-bold text-cyan-300">{highlighted}</span>
    </h1>
  );
}

function ProjectCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="flex min-h-[360px] flex-col justify-between rounded-3xl border border-cyan-400/30 bg-white/10 p-8 shadow-[0_0_40px_rgba(34,211,238,0.12)] backdrop-blur-xl transition duration-300 hover:-translate-y-2">
      <div>
        <div className="mb-10 text-center text-6xl text-cyan-300">★</div>

        <h2 className="mb-5 text-3xl font-bold">{title}</h2>

        <p className="text-lg leading-8 text-gray-300">{text}</p>
      </div>

      <button className="text-left text-lg font-bold text-cyan-300 transition hover:text-white cursor-pointer">
        VIEW DETAILS
      </button>
    </div>
  );
}

function Timeline() {
  return (
    <section className="relative mx-auto max-w-5xl pb-10">
      <div className="absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 bg-cyan-400/50 shadow-[0_0_20px_rgba(34,211,238,0.8)]" />

      <div className="flex flex-col gap-14">
        {timeline.map((item, index) => (
          <TimelineItem key={item.date} {...item} index={index} />
        ))}
      </div>
    </section>
  );
}

function TimelineItem({
  date,
  text,
  index,
}: {
  date: string;
  text: string;
  index: number;
}) {
  const isLeft = index % 2 === 0;

  return (
    <div
      className={`relative flex items-center ${
        isLeft ? "justify-start" : "justify-end"
      }`}
    >
      <div className="absolute left-1/2 z-10 h-16 w-16 -translate-x-1/2 rounded-full border-4 border-[#0b0f10] bg-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.8)]" />

      <div className="w-[42%] rounded-2xl border border-cyan-400/30 bg-white/10 p-7 shadow-[0_0_30px_rgba(34,211,238,0.12)] backdrop-blur-xl">
        <h3 className="mb-4 text-3xl font-bold text-cyan-300">{date}</h3>

        <p className="text-lg leading-8 text-gray-300">{text}</p>
      </div>
    </div>
  );
}
