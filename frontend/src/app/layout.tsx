import type { Metadata } from "next";
import { ToastProvider } from "@/components/ui/Toast";
import "./globals.css";

export const metadata: Metadata = {
  title: "TechCorp - 科技创新 驱动未来",
  description: "我们致力于为企业提供全方位的数字化解决方案，助力企业实现智能化转型升级",
  keywords: "数字化转型, 云计算, 人工智能, 大数据, 企业服务",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        <ToastProvider>
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}
