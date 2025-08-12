import { Button } from "./ui/button"
import { Github, Linkedin, Mail, Heart  } from "lucide-react"
import Link from "next/link"
export function Footer() {
    const d = new Date();
    let year = d.getFullYear();
    let myname = "Trung Nhan";
    return (
        <footer className="bg-muted/50 border-t">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">{myname}</h3>
                        <p className="text-muted-foreground mb-4">Web Developer tạo ra những trải nghiệm web tuyệt vời</p>
                        <div className="flex space-x-4">
                            <Button variant="ghost" size="icon" asChild>
                                <Link href="https://github.com" target="_blank">
                                    <Github className="h-5 w-5" />
                                </Link>
                            </Button>
                            <Button variant="ghost" size="icon" asChild>
                                <Link href="https://linkedin.com" target="_blank">
                                    <Linkedin className="h-5 w-5" />
                                </Link>
                            </Button>
                            <Button variant="ghost" size="icon" asChild>
                                <Link href="mailto:john@example.com">
                                    <Mail className="h-5 w-5" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Liên kết nhanh</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#home" className="text-muted-foreground hover:text-primary transition-colors">
                                    Trang chủ
                                </Link>
                            </li>
                            <li>
                                <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                                    Giới thiệu
                                </Link>
                            </li>
                            <li>
                                <Link href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                                    Dự án
                                </Link>
                            </li>
                            <li>
                                <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                                    Liên hệ
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Dịch vụ</h3>
                        <ul className="space-y-2 text-muted-foreground">
                            <li>Web Development</li>
                            <li>Mobile App Development</li>
                            <li>UI/UX Design</li>
                            <li>Consulting</li>
                        </ul>
                    </div>
                </div>
                <div className="border-t mt-8 pt-8 text-center">
                    <p className="text-muted-foreground flex items-center justify-center gap-2">© {year} {myname}. Made with <Heart className="h-4 w-4 text-red-500" /> in Vietnam</p>
                </div>
            </div>
        </footer>
    )
}