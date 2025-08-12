import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Nền tảng thương mại điện tử hoàn chỉnh với tính năng thanh toán, quản lý đơn hàng và dashboard admin.",
      image: "/images/ecommerce.webp",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/ecommerce",
    },
    {
      title: "Task Management App",
      description: "Ứng dụng quản lý công việc với tính năng real-time collaboration, drag & drop và notifications.",
      image: "/images/task.jpg",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Material-UI"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/taskapp",
    },
    {
      title: "Weather Dashboard",
      description: "Dashboard thời tiết với dự báo 7 ngày, bản đồ tương tác và lưu trữ địa điểm yêu thích.",
      image: "/images/weather.jpg",
      technologies: ["Vue.js", "Express.js", "OpenWeather API", "Chart.js"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/weather",
    },
    {
      title: "Social Media App",
      description: "Ứng dụng mạng xã hội với tính năng đăng bài, comment, like và chat real-time.",
      image: "/images/social-media.png",
      technologies: ["React Native", "Firebase", "Redux", "Expo"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/social",
    },
    {
      title: "Learning Management System",
      description: "Hệ thống quản lý học tập trực tuyến với video streaming, quiz và theo dõi tiến độ.",
      image: "/images/lms.jpg",
      technologies: ["Next.js", "Prisma", "AWS S3", "Stripe", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/lms",
    },
    {
      title: "Portfolio Website",
      description: "Website portfolio cá nhân với blog, dark mode và tối ưu SEO.",
      image: "/images/portfolio.PNG",
      technologies: ["Next.js", "MDX", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/portfolio",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Dự án</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Một số dự án nổi bật mà tôi đã thực hiện</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-video relative">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button size="sm" asChild>
                  <Link href={project.liveUrl} target="_blank">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Link>
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <Link href={project.githubUrl} target="_blank">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
