import { Briefcase, GraduationCap, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen py-12">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">About Me</h1>

          <section className="mb-12">
            <p className="text-lg mb-4">
              I&apos;m Allan (AJ) King, a Computer Science student at the University of Minnesota, Twin Cities, passionate
              about building innovative solutions with modern tech stacks. I&apos;m constantly expanding my skills and knowledge in the tech industry.
            </p>
            <p className="text-lg">
              When I&apos;m not coding, you can find me participating in the Social Coding Club, competing with the Big 10
              Esports team, or playing pickle ball. I believe in continuous learning and applying my skills to solve
              real world problems.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <GraduationCap className="mr-2 h-6 w-6" />
              Education
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200">
              <h3 className="text-xl font-medium">University of Minnesota, Twin Cities</h3>
              <p className="text-slate-600">Bachelor of Science in Computer Science</p>
              <p className="text-slate-600 mb-4">Expected Graduation: May 2026</p>

              <div className="space-y-2">
                <p>
                  <span className="font-medium">GPA:</span> 3.5 - Dean's List x4
                </p>
                <div>
                  <p className="font-medium">Relevant Coursework:</p>
                  <ul className="list-disc list-inside ml-4 text-slate-600">
                    <li>Algorithms and Data Structures</li>
                    <li>Program Design and Development</li>
                    <li>Machine Architecture & Organization</li>
                    <li>Internet Programming</li>
                    <li>Operating Systems</li>
                    <li>Networking</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium">Involvement:</p>
                  <ul className="list-disc list-inside ml-4 text-slate-600">
                    <li>Social Coding Club</li>
                    <li>Big 10 Esports team</li>
                    <li>Pickle ball Club</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Briefcase className="mr-2 h-6 w-6" />
              Professional Experience
            </h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-medium">Teacher</h3>
                  <p className="text-slate-600">April 2024 – Present</p>
                </div>
                <p className="text-slate-700 mb-3">Tech Academy, Eden Prairie, MN</p>
                <ul className="list-disc list-inside space-y-1 text-slate-600">
                  <li>
                    Taught programming concepts such as Python, Java, Game Development, and Robotics to 30+ students
                  </li>
                  <li>Instructed students on basic artificial intelligence concepts</li>
                  <li>Created Minecraft scripts to keep students entertained</li>
                  <li>
                    Led and engaged with up to 4 other STEM instructors, providing individualized support to students
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-medium">Web Developer Intern</h3>
                  <p className="text-slate-600">Feb. 2025 – Present</p>
                </div>
                <p className="text-slate-700 mb-3">HireMeg, Remote, Contract</p>
                <ul className="list-disc list-inside space-y-1 text-slate-600">
                  <li>
                    Made content and layout updates on a small business website to improve visibility and branding
                    consistency
                  </li>
                  <li>Helped increase site engagement by optimizing homepage structure and simplifying navigation</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-medium">Early Work Experience</h3>
                  <p className="text-slate-600">2020 – 2023</p>
                </div>
                <p className="text-slate-700 mb-3">City of Eagan & Jersey Mike's Subs, Eagan, MN</p>
                <ul className="list-disc list-inside space-y-1 text-slate-600">
                  <li>
                    Maintained and improved park grounds across 1,370 acres, enhancing the experience for daily visitors
                  </li>
                  <li>Resolved citizen concerns with efficiency, ensuring a positive environment</li>
                  <li>
                    Worked collaboratively with team members on food and other preparations to deliver superior customer
                    service
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Users className="mr-2 h-6 w-6" />
              Personal Interests
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200">
              <p className="text-slate-600 mb-4">Beyond my academic and professional pursuits, I enjoy:</p>
              <ul className="list-disc list-inside space-y-1 text-slate-600 ml-4">
                <li>Participating in competitive esports</li>
                <li>Playing pickle ball</li>
                <li>Exploring new programming languages and frameworks</li>
                <li>Collaborating on open-source projects</li>
                <li>Attending tech meetups and conferences</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
