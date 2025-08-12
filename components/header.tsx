"use client"
import { useState } from "react"
import { ThemeToggle } from "./theme-toggle"
import Link from "next/link"
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react"
export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navItems = [
        { href: "#home", label: "Trang chủ" },
        { href: "#about", label: "Giới thiệu" },
        { href: "#skills", label: "Kỹ năng" },
        { href: "#projects", label: "Dự án" },
        { href: "#contact", label: "Liên hệ" }
    ]
    return (
        <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <Link href="#home" className="text-2xl font-bold text-primary">MyPortfolio</Link>
                    <nav className="hidden md:flex space-x-8">
                        {
                            navItems.map((item) => (
                                <Link key={item.href} href={item.href} className="text-muted-foreground hover:text-primary transition-colors">{item.label}</Link>
                            ))
                        }
                    </nav>
                    <div className="flex items-center space-x-4">
                        <ThemeToggle />
                        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </Button>
                    </div>
                </div>
                {isMenuOpen && (
                    <nav className="md:hidden py-4 border-t">
                        <div className="flex flex-col space-y-4">
                            {
                                navItems.map((item, index) => (
                                    <Link href={item.href} className="text-muted-foreground hover:text-primary transition-colors" key={index}
                                    onClick={() => setIsMenuOpen(false)}
                                    >{item.label}</Link>
                                ))
                            }
                        </div>
                    </nav>
                )}

            </div>
        </header>
    )
}