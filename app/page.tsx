
import Image from "next/image";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "PHP",
  "MySQL",
  "TypeScript",
  "Next.js",
  "Supabase",
  "Git & GitHub",
  "Database Management",
  "IT Support",
  "Network Troubleshooting",
];

const projects = [
  {
    name: "BloodCare",
    type: "Central Blood Management System",
    description:
      "A web-based system for donor registration, hospital blood requests, inventory management, and coordinating blood availability.",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/vic-tor22/Blood-care",
    live: "https://bloodcare.freehosting.dev/",
  },
  {
    name: "ElectroMart",
    type: "Electronics E-commerce Platform",
    description:
      "An online electronics shop with product management, seller accounts, sales processing, and reporting features.",
    technologies: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    github: "https://github.com/vic-tor22/ElectroMart-shop",
    live: "https://bloodcare.freehosting.dev/electromart/ElectroMart/ElectroMart/frontend/",
  },
  {
    name: "OpinionHub",
    type: "Online Opinion Polling Platform",
    description:
      "A polling platform where users can create polls, share options, and collect votes.",
    technologies: ["Next.js", "TypeScript", "Supabase"],
    github: "https://github.com/vic-tor22/opinionhub",
    live: "https://opinionhub-two.vercel.app/",
  },
];

const emailLink =
  "https://mail.google.com/mail/?view=cm&fs=1&to=victormurkomen14@gmail.com";

const linkedInLink =
  "https://www.linkedin.com/in/victor-murkomen-a7567226b/";

export default function Home() {
  return (
    <main>
      <header className="navbar">
        <a className="logo" href="#home">
          Victor<span>.</span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero section" id="home">
        <div className="hero-content">
          <p className="eyebrow">SOFTWARE ENGINEER</p>
          <h1>
            Hello, I’m <span>Victor Murkomen</span>
          </h1>
          <h2>Software Engineer</h2>
          <p className="hero-description">
            I build practical web applications and data-driven systems. I’m
            interested in software development, technology, and solving
            everyday problems through digital solutions.
          </p>

          <div className="hero-actions">
            <a className="button primary-button" href="#projects">
              View My Projects
            </a>
            <a className="button secondary-button" href="#contact">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-image">
          <Image
            src="/images/vm.jpeg"
            alt="Portrait of Victor Murkomen"
            width={180}
            height={180}
            priority
            className="profile-photo"
          />
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="section-heading">
          <p className="eyebrow">GET TO KNOW ME</p>
          <h2>About Me</h2>
        </div>

        <div className="about-content">
          <p>
            I am a Software Engineering graduate from Kirinyaga University
            with an interest in building useful, reliable, and user-friendly
            software. My experience includes web development, database
            management, troubleshooting, and ICT support.
          </p>
          <p>
            I enjoy learning new technologies, working through technical
            challenges, and turning ideas into practical digital solutions.
            I am open to graduate trainee, internship, and entry-level
            opportunities in software engineering and IT.
          </p>
        </div>
      </section>

      <section className="section" id="skills">
        <div className="section-heading">
          <p className="eyebrow">WHAT I WORK WITH</p>
          <h2>Skills</h2>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill}>
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="experience">
        <div className="section-heading">
          <p className="eyebrow">PRACTICAL EXPERIENCE</p>
          <h2>Experience</h2>
        </div>

        <article className="experience-card">
          <div className="experience-header">
            <div>
              <h3>ICT / Software Engineering Attachment</h3>
              <p className="experience-organization">
                Ministry of Lands, Public Works, Housing and Urban Development,2024.
              </p>
            </div>
            <span className="experience-type">Attachment</span>
          </div>

          <p>
            Supported day-to-day ICT operations and gained practical
            experience in computer troubleshooting, software installation,
            equipment maintenance, network support, digitization, and data
            management.
          </p>
        </article>
      </section>

      <section className="section" id="education">
        <div className="section-heading">
          <p className="eyebrow">ACADEMIC BACKGROUND</p>
          <h2>Education</h2>
        </div>

        <article className="education-card">
          <h3>Bachelor of Science in Software Engineering,graduated in the year 2025.</h3>
          <p>Kirinyaga University</p>
          <p>Second Class Honours, Lower Division</p>
        </article>
      </section>

      <section className="section" id="projects">
        <div className="section-heading">
          <p className="eyebrow">SELECTED WORK</p>
          <h2>Featured Projects</h2>
          <p className="section-description">
            A selection of software projects I have worked on.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <p className="project-type">{project.type}</p>
              <h3>{project.name}</h3>
              <p>{project.description}</p>

              <div className="project-technologies">
                {project.technologies.map((technology) => (
                  <span className="technology-tag" key={technology}>
                    {technology}
                  </span>
                ))}
              </div>

              {(project.github || project.live) && (
                <div className="project-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Website
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="section-heading">
          <p className="eyebrow">LET’S CONNECT</p>
          <h2>Contact Me</h2>
          <p className="section-description">
            Actively seeking employment and internship opportunities in software development and IT.
          </p>
        </div>

        <div className="contact-details">
          <p>
            <strong>Email:</strong>{" "}
            <a href={emailLink} target="_blank" rel="noopener noreferrer">
              victormurkomen14@gmail.com
            </a>
          </p>

          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+254712991420">
              +254 712 991 420
            </a>
          </p>

          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href={linkedInLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              View My LinkedIn Profile
            </a>
          </p>

          <p>
            <strong>Location:</strong> Nairobi, Kenya
          </p>
        </div>

        <a
          className="button primary-button"
          href={`${emailLink}&su=Portfolio%20Enquiry`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Email Me
        </a>
      </section>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Victor Murkomen. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
