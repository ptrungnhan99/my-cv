"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const accessKey = process.env.NEXT_PUBLIC_ACCESS_KEY_WEB3FORM
  // Auto hide notification after 5 seconds
  useEffect(() => {
    if (submitStatus === 'success' || submitStatus === 'error') {
      const timer = setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000) // 5 giây

      // Cleanup timer khi component unmount or submitStatus changed
      return () => clearTimeout(timer)
    }
  }, [submitStatus])
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    // Handle form submission here
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          from_name: `My Portfolio`,
          subject: `Tin nhắn mới từ ${formData.name}`,
        })
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus('success')
        // Reset form
        setFormData({ name: "", email: "", message: "" })
        console.log("Form submitted successfully:", result)
      } else {
        setSubmitStatus('error')
        console.error("Form submission failed:", result)
      }
    } catch (error) {
      setSubmitStatus('error')
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Liên hệ</h2>
          <p className="md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Hãy liên hệ với tôi để thảo luận về dự án của bạn
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Thông tin liên hệ</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-muted-foreground">john.doe@example.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Điện thoại</p>
                  <p className="text-muted-foreground">+84 123 456 789</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Địa chỉ</p>
                  <p className="text-muted-foreground">Hồ Chí Minh, Việt Nam</p>
                </div>
              </div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Gửi tin nhắn</CardTitle>
              <CardDescription>Điền thông tin bên dưới và tôi sẽ phản hồi sớm nhất có thể</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="mb-4">Họ tên</Label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} required disabled={isSubmitting} />
                </div>

                <div>
                  <Label htmlFor="email" className="mb-4">Email</Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required disabled={isSubmitting} />
                </div>

                <div>
                  <Label htmlFor="message" className="mb-4">Tin nhắn</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <Button type="submit" className="w-full">
                  {isSubmitting ? "Đang gửi..." : "Gửi tin nhắn"}
                </Button>
              </form>
              {submitStatus === 'success' && (
                <div className="mt-8 mb-4 p-4 bg-green-50 border border-green-200 rounded-md">
                  <p className="text-green-800">Tin nhắn đã được gửi thành công! Tôi sẽ phản hồi sớm nhất có thể.</p>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="mt-8 mb-4 p-4 bg-red-50 border border-red-200 rounded-md">
                  <p className="text-red-800">Có lỗi xảy ra khi gửi tin nhắn. Vui lòng thử lại sau.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
