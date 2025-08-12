import Link from "next/link"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "./ui/button"
export function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-4xl mx-auto">
                    <div className="mb-8">
                        <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary to-primary/60 flex items-center justify-center text-4xl font-bold text-primary-foreground">
                            JD
                        </div>
                    </div>

                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
                        Xin chào, tôi là <span className="text-primary">Nhan</span>
                    </h1>

                    <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Full-stack Developer chuyên về React, Next.js và Node.js. Tôi tạo ra những ứng dụng web hiện đại và trải
                        nghiệm người dùng tuyệt vời.
                    </p>

                    <div className="flex gap-4 justify-center items-center mb-12">
                        <Button size="lg" asChild className="min-w-[120px]">
                            <Link href="#projects">Xem dự án</Link>
                        </Button>
                        <Button variant="outline" size="lg" asChild className="min-w-[120px]">
                            <Link href="#contact">Liên hệ</Link>
                        </Button>
                    </div>

                    <div className="flex justify-center space-x-6 mb-12">
                        <Button variant="ghost" size="icon" asChild>
                            <Link href="https://github.com" target="_blank">
                                <Github className="h-6 w-6" />
                            </Link>
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                            <Link href="https://linkedin.com" target="_blank">
                                <Linkedin className="h-6 w-6" />
                            </Link>
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                            <Link href="mailto:john@example.com">
                                <Mail className="h-6 w-6" />
                            </Link>
                        </Button>
                    </div>

                    <div className="animate-bounce">
                        <ArrowDown className="h-6 w-6 mx-auto text-muted-foreground" />
                    </div>
                </div>
            </div>
        </section>
    )
}