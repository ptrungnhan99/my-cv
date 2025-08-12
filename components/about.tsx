import { Code, Palette, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
export function About(){
    const features = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Viết code sạch, dễ bảo trì và có thể mở rộng",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Thiết kế giao diện đẹp mắt và trải nghiệm người dùng tốt",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Tối ưu hóa hiệu suất và tốc độ tải trang",
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Giới thiệu</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tôi là một developer đam mê công nghệ với hơn 3 năm kinh nghiệm trong việc phát triển ứng dụng web hiện đại.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">Câu chuyện của tôi</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Bắt đầu hành trình lập trình từ năm 2021, tôi đã không ngừng học hỏi và phát triển kỹ năng trong lĩnh
                vực web development. Từ những dòng code HTML/CSS đầu tiên đến việc xây dựng những ứng dụng full-stack
                phức tạp.
              </p>
              <p>
                Tôi tin rằng công nghệ có thể thay đổi cuộc sống và luôn cố gắng tạo ra những sản phẩm có ý nghĩa, mang
                lại giá trị thực sự cho người dùng.
              </p>
              <p>
                Ngoài coding, tôi còn yêu thích việc chia sẻ kiến thức thông qua blog và tham gia các cộng đồng
                developer Việt Nam.
              </p>
            </div>
          </div>

          <div className="grid gap-6">
            {features.map((feature, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}