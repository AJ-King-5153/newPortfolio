import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function ProjectsPage() {
  return (
    <main className="min-h-screen py-12">
      <div className="container px-4 md:px-6">
        <h1 className="text-4xl font-bold mb-8">Projects</h1>
        <p className="text-lg mb-12 max-w-3xl">
          Here&apos;s some of the key projects I&apos;ve worked on, showcasing my skills in various technologies and
          problem solving approaches.
        </p>

        <div className="grid grid-cols-1 gap-8">
          <ProjectCard
            title="Personal Portfolio Website"
            date="Dec. 2024 – Feb. 2025"
            description={`Developed a personal portfolio website showcasing my skills, projects, and experience. Its Built with Next.js and React for a modern, fast user experienceStyled using Tailwind CSS and Shadcn UI components for a clean designImplemented it with TypeScript for type safety and better code quality. Created a contact form with client side validation.Optimized for performance and SEO`}
            technologies={["Next.js", "React", "TypeScript", "Tailwind CSS", "Shadcn UI", "Vercel"]}
            image="/placeholder.svg?height=400&width=600"
            githubLink="https://github.com/AJ-King-5153/portfolio"
          />

          <ProjectCard
            title="Drone Simulation of College Campus"
            date="Oct. 2024 – Jan. 2025"
            description="Created a sophisticated drone simulation system modeling the University of Minnesota campus. Utilized design patterns such as Factory, Decorator, and Singleton to ensure clean, maintainable code. Collaborated in an Agile environment with daily stand-ups and sprint planning to ensure proper development. Implemented pathfinding algorithms for autonomous drone movement, allowing for efficient navigation around campus buildings and obstacles. Used Docker for containerized deployment and testing, ensuring consistent behavior across different environments."
            technologies={["C++", "Docker", "Design Patterns", "Agile", "Pathfinding Algorithms"]}
            image="/DroneSim.png?height=400&width=600"
            liveLink="https://docs.google.com/document/d/1CSOGmGkqWsGJTfF7eSvpBfzbQT_IJhROjhO6wBSmrTc/edit?usp=sharing"
          />

          <ProjectCard
            title="Customer Segmentation Model"
            date="Jan. 2025 – April 2025"
            description="Built and evaluated clustering models like KMeans and DBSCAN using PCA to segment customers based on purchasing behavior and demographics. Evaluated clustering performance using Silhouette Score and Davies Bouldin Index to assess model cohesion and separation. Visualized cluster separation in 2D and interpreted results to inform targeted marketing strategies. Compared algorithm performance with metrics to select the most reliable model for real-world deployment."
            technologies={["Python", "Scikit-learn", "KMeans", "PCA", "EDA", "DBSCAN", "Data Visualization"]}
            image="/CustomerSeg.png?height=400&width=600"
          />
        </div>
      </div>
    </main>
  )
}

interface ProjectCardProps {
  title: string
  date: string
  description: string
  technologies: string[]
  image: string
  githubLink?: string
  liveLink?: string
}

function ProjectCard({ title, date, description, technologies, image, githubLink, liveLink }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-slate-200">
      <div className="md:flex">
        <div className="md:w-1/3">
          <Image 
            src={image || "/placeholder.svg"} 
            alt={title} 
            width={600}
            height={400}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-6 md:w-2/3">
          <div className="flex justify-between items-start mb-2">
            <h2 className="text-2xl font-bold">{title}</h2>
            <span className="text-slate-500 text-sm">{date}</span>
          </div>
          <p className="text-slate-600 mb-4">{description}</p>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Technologies Used:</h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span key={index} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {githubLink && (
              <Button asChild variant="outline" size="sm">
                <Link href={githubLink} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub Repository
                </Link>
              </Button>
            )}
            {liveLink && (
              <Button asChild size="sm">
                <Link href={liveLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
