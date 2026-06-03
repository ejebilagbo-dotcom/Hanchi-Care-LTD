import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Hanchi Care LTD - Premium Care Services",
  description: "Professional care services platform connecting families with vetted caregivers",
  keywords: ["care services", "babysitting", "elderly care", "disability support"],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        {children}
      </body>
    </html>
  )
}
