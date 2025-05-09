"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Phone } from "lucide-react"
import Link from "next/link"
import { useForm } from "react-hook-form"

export default function ContactPage() {
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async () => {
    setIsSubmitting(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSubmitStatus({ success: true, message: "Thank you for your message! I'll get back to you soon." })
    } catch {
      setSubmitStatus({ success: false, message: "There was an error sending your message. Please try again." })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen py-12">
      <div className="container px-4 md:px-6">
        <h1 className="text-4xl font-bold mb-8">Contact Me</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg mb-8">
              I&apos;m always open to any inquiries. Feel free to reach out using the contact form or through any of the channels below.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="h-6 w-6 mr-4 text-slate-700" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <a href="mailto:ajking5153@gmail.com" className="text-slate-600 hover:text-slate-900">
                    ajking5153@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-6 w-6 mr-4 text-slate-700" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <a href="tel:6513413095" className="text-slate-600 hover:text-slate-900">
                    (651) 341-3095
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Linkedin className="h-6 w-6 mr-4 text-slate-700" />
                <div>
                  <h3 className="font-semibold">LinkedIn</h3>
                  <Link
                    href="https://www.linkedin.com/in/allan-king-477917172"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-slate-900"
                  >
                    linkedin.com/in/allan-king-477917172
                  </Link>
                </div>
              </div>

              <div className="flex items-start">
                <Github className="h-6 w-6 mr-4 text-slate-700" />
                <div>
                  <h3 className="font-semibold">GitHub</h3>
                  <Link
                    href="https://github.com/AJ-King-5153"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-slate-900"
                  >
                    github.com/AJ-King-5153
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200">
            <h2 className="text-2xl font-semibold mb-6">Send Me a Message</h2>

            {submitStatus && (
              <div
                className={`p-4 mb-6 rounded-md ${submitStatus.success ? "bg-green-50 text-green-700 border border-green-200" : "bg-red-50 text-red-700 border border-red-200"}`}
              >
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <Input
                  id="name"
                  {...register("name", { required: true })}
                  placeholder="Your name"
                />
                {errors.name && <span className="text-red-500 text-sm">Name is required</span>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Your email address"
                />
                {errors.email && <span className="text-red-500 text-sm">Email is required</span>}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  Subject
                </label>
                <Input
                  id="subject"
                  {...register("subject", { required: true })}
                  placeholder="Subject of your message"
                />
                {errors.subject && <span className="text-red-500 text-sm">Subject is required</span>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  {...register("message", { required: true })}
                  placeholder="Your message"
                  rows={5}
                />
                {errors.message && <span className="text-red-500 text-sm">Message is required</span>}
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
