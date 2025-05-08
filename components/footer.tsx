import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-slate-50">
      <div className="container px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Allan (AJ) King</h3>
            <p className="text-slate-600 mb-4">Computer Science Student & Web Developer based in Minneapolis, MN.</p>
            <div className="flex gap-4">
              <Link
                href="https://linkedin.com/in/ajking"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-slate-900"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://github.com/ajking"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-slate-900"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="mailto:ajking5153@gmail.com" className="text-slate-600 hover:text-slate-900">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-600 hover:text-slate-900">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-600 hover:text-slate-900">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-slate-600 hover:text-slate-900">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/resume" className="text-slate-600 hover:text-slate-900">
                  Resume
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-600 hover:text-slate-900">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-slate-600 mb-2">
              <span className="font-medium">Email:</span> ajking5153@gmail.com
            </p>
            <p className="text-slate-600 mb-2">
              <span className="font-medium">Phone:</span> 651-341-3095
            </p>
            <p className="text-slate-600">
              <span className="font-medium">Location:</span> Minneapolis, MN
            </p>
          </div>
        </div>
        <div className="border-t mt-8 pt-6 text-center text-slate-600">
          <p>&copy; {new Date().getFullYear()} Allan (AJ) King. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
