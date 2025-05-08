import Link from "next/link"
import { ArrowRight, Code, FileText, Github, Linkedin, Mail, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface SkillCardProps {
  title: string;
  skills: string[];
}

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  icon: React.ReactNode;
}

interface QuickLinkCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-28 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1 space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">Allan (AJ) King</h1>
              <p className="text-xl md:text-2xl text-slate-200">Computer Science Student</p>
              <p className="text-slate-300 max-w-[600px]">
                Passionate about building innovative solutions with modern tech and problem solving. Currently pursuing a Bachelor&apos;s
                degree in Computer Science at the University of Minnesota.
              </p>
              <div className="flex flex-wrap gap-3">
              </div>
              <div className="flex gap-4 pt-2">
                <Link
                  href="https://www.linkedin.com/in/allan-king-477917172"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-slate-300"
                >
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link
                  href="https://github.com/AJ-King-5153"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-slate-300"
                >
                  <Github className="h-6 w-6" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link href="mailto:ajking5153@gmail.com" className="text-white hover:text-slate-300">
                  <Mail className="h-6 w-6" />
                  <span className="sr-only">Email</span>
                </Link>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-full overflow-hidden border-4 border-white/20">
                <Image 
                  src="/headshot.jpg" 
                  alt="Allan King" 
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-slate-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SkillCard
              title="Programming Languages"
              skills={["Java", "Python", "C/C++", "PostgreSQL", "JavaScript", "HTML/CSS", "OCaml"]}
            />
            <SkillCard title="Web & Cloud" skills={["React", "Node.js", "JUnit", "Express.js", "AWS ECS"]} />
            <SkillCard
              title="Developer Tools"
              skills={["Git", "Docker", "Linux", "Visual Studio", "PyCharm", "IntelliJ", "Unix"]}
            />
            <SkillCard
              title="Libraries & Methods"
              skills={["Scikit-learn", "pandas", "NumPy", "Matplotlib", "Agile", "Scrum", "DevOps"]}
            />
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            <Button asChild variant="outline">
              <Link href="/projects">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="Personal Portfolio Website"
              description="Developed a personal portfolio website showcasing my skills, projects, and experience. Its Built with Next.js and React for a modern, fast user experience. Styled using Tailwind CSS and Shadcn UI components for a clean design."
              tags={["Next.js", "React", "TypeScript", "Tailwind CSS", "Shadcn UI"]}
              icon={<Code className="h-10 w-10 text-slate-700" />}
            />
            <ProjectCard
              title="Drone Simulation of College Campus"
              description="Utilized design patterns and implemented pathfinding algorithms for autonomous drone movement in a simulated environment."
              tags={["C++", "Docker", "Algorithms"]}
              icon={<Code className="h-10 w-10 text-slate-700" />}
            />
            <ProjectCard
              title="Customer Segmentation Model"
              description="Built and evaluated clustering models using Python and machine learning techniques to segment customers effectively."
              tags={["Python", "Scikit-learn", "KMeans", "PCA"]}
              icon={<Code className="h-10 w-10 text-slate-700" />}
            />
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-slate-100">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Quick Links</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <QuickLinkCard
              title="About Me"
              description="Learn more about my background, education, and interests."
              href="/about"
              icon={<User className="h-8 w-8" />}
            />
            <QuickLinkCard
              title="Projects"
              description="Explore my portfolio of technical projects and applications."
              href="/projects"
              icon={<Code className="h-8 w-8" />}
            />
            <QuickLinkCard
              title="Resume"
              description="View and download my resume."
              href="/resume"
              icon={<FileText className="h-8 w-8" />}
            />
            <QuickLinkCard
              title="Contact"
              description="Get in touch with me."
              href="/contact"
              icon={<Mail className="h-8 w-8" />}
            />
          </div>
        </div>
      </section>
    </main>
  )
}

function SkillCard({ title, skills }: SkillCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-slate-700 mr-2"></div>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  )
}

function ProjectCard({ title, description, tags, icon }: ProjectCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200 hover:shadow-lg transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-slate-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span key={index} className="px-2 py-1 bg-slate-100 text-slate-700 text-sm rounded-md">
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

function QuickLinkCard({ title, description, href, icon }: QuickLinkCardProps) {
  return (
    <Link href={href}>
      <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200 hover:shadow-lg transition-shadow h-full flex flex-col">
        <div className="mb-4 text-slate-700">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-slate-600">{description}</p>
      </div>
    </Link>
  )
}
