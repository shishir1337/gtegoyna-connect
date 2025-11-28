import Link from "next/link"
import { Facebook, Instagram, Globe, MessageCircle } from "lucide-react"
import Image from "next/image"
import logo from "../public/logo.svg"

const links = [
  {
    title: "ওয়েবসাইট",
    subtitle: "Visit Our Website",
    href: "https://gtegoyna.com.bd",
    icon: Globe,
  },
  {
    title: "ফেসবুক",
    subtitle: "Follow on Facebook",
    href: "https://www.facebook.com/gtegoyna/",
    icon: Facebook,
  },
  {
    title: "ইনস্টাগ্রাম",
    subtitle: "Follow on Instagram",
    href: "https://www.instagram.com/gtegoyna/",
    icon: Instagram,
  },
  {
    title: "হোয়াটসঅ্যাপ",
    subtitle: "Chat with Us",
    href: "https://wa.me/+8801798127029",
    icon: MessageCircle,
  },
]

export default function Home() {
  return (
    <main className="h-screen bg-[#010101] flex flex-col items-center px-4 py-4 sm:py-6 font-sans overflow-hidden">
      {/* Decorative top border */}
      <div className="w-full max-w-md">
        <div className="h-px bg-gradient-to-r from-transparent via-[#fbd463]/50 to-transparent" />
      </div>

      {/* Header Section */}
      <header className="flex flex-col items-center mt-2 sm:mt-4 mb-2 sm:mb-4 flex-shrink-0">
        {/* Logo */}
        <div className="relative w-32 h-32 sm:w-36 sm:h-36 mb-4 sm:mb-5 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-[#fbd463]/10 blur-2xl" />
          <Image
            src={logo}
            alt="গ তে গয়না Logo"
            width={128}
            height={128}
            className="relative z-10 object-contain w-full h-full"
            priority
          />
        </div>

        {/* Brand Name */}
        <h1 className="text-3xl sm:text-3xl font-semibold text-[#fbd463] tracking-wide text-balance text-center font-[family-name:var(--font-anek-bangla)]">
          গ তে গয়না
        </h1>

        {/* Tagline */}
        <p className="text-[#fbd463]/70 text-sm sm:text-sm mt-2 text-center max-w-xs leading-relaxed text-pretty">
          দেশি কারিগরের হাতে তৈরি অনন্য এবং চিরন্তন গয়নার সমাহার
        </p>

        {/* Decorative element */}
        <div className="flex items-center gap-3 mt-3 sm:mt-4">
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#fbd463]/60" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#fbd463]" />
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#fbd463]/60" />
        </div>
      </header>

      {/* Links Section */}
      <section className="w-full max-w-md space-y-2 sm:space-y-3 px-2 flex-1 overflow-y-auto min-h-0">
        {links.map((link, index) => (
          <Link key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="group block">
            <div className="relative overflow-hidden rounded-2xl border border-[#fbd463]/30 bg-[#fbd463]/5 p-4 sm:p-5 transition-all duration-300 hover:border-[#fbd463]/60 hover:bg-[#fbd463]/10 hover:scale-[1.02] active:scale-[0.98]">
              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-[#fbd463]/10 to-transparent" />

              <div className="relative flex items-center gap-4">
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#fbd463]/10 border border-[#fbd463]/20 flex items-center justify-center group-hover:bg-[#fbd463]/20 transition-colors duration-300">
                  <link.icon className="w-5 h-5 text-[#fbd463]" />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <h2 className="text-[#fbd463] font-medium text-lg sm:text-xl">{link.title}</h2>
                  <p className="text-[#fbd463]/50 text-sm mt-0.5">{link.subtitle}</p>
                </div>

                {/* Arrow */}
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#fbd463]/10 flex items-center justify-center group-hover:bg-[#fbd463] transition-colors duration-300">
                  <svg
                    className="w-4 h-4 text-[#fbd463] group-hover:text-[#010101] transition-colors duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>

      {/* Footer */}
      <footer className="mt-auto pt-4 sm:pt-6 pb-3 sm:pb-4 text-center flex-shrink-0">
        <div className="flex items-center justify-center gap-3 mb-2 sm:mb-3">
          <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#fbd463]/40" />
          <div className="w-1 h-1 rounded-full bg-[#fbd463]/60" />
          <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#fbd463]/40" />
        </div>
        <p className="text-[#fbd463]/40 text-xs sm:text-sm">Premium Handcrafted Bangladeshi Jewelry</p>
        <p className="text-[#fbd463]/30 text-xs mt-1 sm:mt-1.5">© {new Date().getFullYear()} গ তে গয়না • All Rights Reserved</p>
      </footer>
    </main>
  )
}
