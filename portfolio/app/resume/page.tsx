import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Image from "next/image"

export default function ResumePage() {
  return (
    <main className="min-h-screen py-12">
      <div className="container px-4 md:px-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Resume</h1>
          <Button className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            <a href="/Resume.pdf" download>Download PDF</a>
          </Button>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-white p-4 rounded-lg shadow-md border border-slate-200 max-w-4xl mx-auto mb-8">
            <Image 
              src="/resumess.png" 
              alt="Allan King's Resume" 
              width={800} 
              height={1100} 
              className="w-full h-auto"
              priority
            />
          </div>
          
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Professional Experience</h2>
            <p className="text-slate-600 mb-6">
              Feel free to download my resume or contact me for more information.
            </p>
            <Button asChild className="mt-2">
              <a href="/contact">Contact Me</a>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
