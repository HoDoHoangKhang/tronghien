"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const chambers = [
  {
    id: "sanctum",
    title: "The Sanctum",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A%CC%89nh%20bi%CC%80a%20cu%CC%89a%20The%20Sanctum-dMEy9bYkB4O14yh1qWP7Hk3rl4M2pF.jpg",
    thumbnailImage: "/images/design-mode/s4(1).png",
    description: [
      "The Sanctum is the heart of Luminara Haven, where I retreat to examine not the world's answers, but its questions. In this hall, I am the Castellan, the keeper of ideals. Here, I want to present a personal framework of my thoughts and who I am. Here lies the beginning of my journey, where every other chamber meets and draws its light.",
    ],
    galleryImages: [
      "/images/design-mode/1(2).jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A%CC%89nh%20bi%CC%80a%20cu%CC%89a%20The%20Sanctum-dMEy9bYkB4O14yh1qWP7Hk3rl4M2pF.jpg",
      "/images/design-mode/sanc%20%281%29.png",
    ],
    // </CHANGE>
  },
  {
    id: "forge",
    title: "The Crucible Forge",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/forge-3XFsP50De9qq6m3bt2cPvxYOqdisXv.png",
    thumbnailImage: "/images/design-mode/s5(1).png",
    description: [
      "The Crucible Forge is where science meets service and transformations dominate: from real-life observations to innovation, from ideas to theories, from research to tangible results, and from STEM products to applications.",
      'Here, I am the Alchemist. Within this chamber, I experiment science across disciplines through my passion project "House of Experiment".',
    ],
    galleryImages: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/forge-3XFsP50De9qq6m3bt2cPvxYOqdisXv.png",
      "/images/design-mode/foge.png",
    ],
    // </CHANGE>
  },
  {
    id: "garden",
    title: "The Garden of Eden",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/eden-WfyZ03blK4qFB6RLB7mJeDcaQ7YbIQ.png",
    thumbnailImage: "/images/design-mode/3.jpg%201(1).png",
    description: [
      "The Garden of Eden showcases my endeavors to restore the balance between humans' benefits and environmental health. In this space, creations born to solve one of the age-old problems, climate change, and innovation breathe with the rhythm of nature.Here, I am the Verdant Warden. More than just the garden's caretakers Adam and Eva, I strived to be the guardian of equilibrium, who studies not only how nature sustains us but how we sustain it in turn.",
    ],
    // </CHANGE>
    galleryImages: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-7LSv2SgusSPVFKMYlEPEEE0bwIJ2xg.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-mHIQwmmetT9lLmNDNhNhwh62toUfo6.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-ahj8z1GA58D0OEH65bBTdGxnVz3G1f.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-qcuWwPtpUCLhICgoNS8bdKLaPl0MmL.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-WX7I56PMlibpmhJrqdaqe08mV1iIu4.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-xkmg9U7PnLR019sy9OLP2Ynym9XD8K.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-VNEKoqN3Tmm2l3jcXXiwUqLVhdK1lQ.jpg",
      "/images/design-mode/eden%20%281%29.png",
    ],
    // </CHANGE>
  },
  {
    id: "hearth",
    title: "The Hearth",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/heatfh-ZrEHdbbXdXyvdbHToTfLiN5eNCMSXY.png",
    thumbnailImage: "/images/design-mode/s1(1).png",
    description: [
      "The Hearth kept all my cultural narratives, an enduring place where light, memory, and identity are woven together. This chamber speaks of the unseen ties between tradition and identity.",
      "Here, I am the Storyteller, not of words alone, but of origins. Not only maintain the warmth of my heritage, I want to preserve the past through creations of meaning and connection.",
    ],
    galleryImages: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-Yo3y6Apqg3ynqJgDdjneOyP56U9gyi.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.png-O5LUiGXX5tsujXaMK8hLlwijbvpcZb.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-tL7yIJ0Z1ChxcddFtOutKQljtQn2nU.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-ZjXhMVJztVrP1NV646z3Ld4x4MSl3a.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-FwPOL59GKLKKF2sn926XunPtG4itjW.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6.png-SZIEt9yTSU3m4oMx8H0cZF4MGgOaEe.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7.png-KdrhguVz3Af4jwQp7k3tRmruLwZ8Zo.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8.png-NyietPy4o5FbPnpAxkJZToyiman0NF.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9-5eTZ8x84cHHRzZ3PztooWiA7AAIlX1.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10.png-8ZMDXQRNqLaiLcWhY52pF8h8iNeflC.jpeg",
    ],
    // </CHANGE>
  },
  // </CHANGE>
  {
    id: "chapter",
    title: "The Chapter House",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chapter-YuFEyABPKxsyNGSFKkn4BIGkkuHuTD.png",
    thumbnailImage: "/images/design-mode/s3(1).png",
    description: [
      "The Chapter House is a hall of collaboration, shared purpose, heard voices, and strengthened sense of belonging. Its mission is simple but bold – ensure community's well-being.Here, I am the Welfare Steward, a custodian of people. This platform enables me to weave connection into action, to turn collective hopes and efforts into organized impact.",
    ],
    // </CHANGE>
    galleryImages: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chapter-YuFEyABPKxsyNGSFKkn4BIGkkuHuTD.png",
      "/images/design-mode/chap.png",
    ],
  },
]

export default function LumberaHavenPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedChamber, setSelectedChamber] = useState(0)
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [dongThapLightboxOpen, setDongThapLightboxOpen] = useState(false)
  const [dongThapLightboxIndex, setDongThapLightboxIndex] = useState(0)
  const [tutoringLightboxOpen, setTutoringLightboxOpen] = useState(false)
  const [tutoringLightboxIndex, setTutoringLightboxIndex] = useState(0)
  const [nursingHomeLightboxOpen, setNursingHomeLightboxOpen] = useState(false)
  const [nursingHomeLightboxIndex, setNursingHomeLightboxIndex] = useState(0)
  // </CHANGE>
  // </CHANGE>

  const [experimentLightboxOpen, setExperimentLightboxOpen] = useState(false)
  const [experimentLightboxIndex, setExperimentLightboxIndex] = useState(0)
  const [signatureOfClayLightboxOpen, setSignatureOfClayLightboxOpen] = useState(false)
  const [signatureOfClayLightboxIndex, setSignatureOfClayLightboxIndex] = useState(0)
  const [anhQuanLightboxOpen, setAnhQuanLightboxOpen] = useState(false)
  const [anhQuanLightboxIndex, setAnhQuanLightboxIndex] = useState(0)
  const [kokiLightboxOpen, setKokiLightboxOpen] = useState(false)
  const [kokiLightboxIndex, setKokiLightboxIndex] = useState(0)
  // </CHANGE>

  const [signatureOfClayIndex, setSignatureOfClayIndex] = useState(0)
  // </CHANGE>

  const [experimentGalleryIndex, setExperimentGalleryIndex] = useState(0)
  const experimentGalleryImages = [
    "/images/house-of-experiment/1.png",
    "/images/house-of-experiment/2.png",
    "/images/house-of-experiment/3.png",
    "/images/house-of-experiment/4.png",
    "/images/house-of-experiment/5.png",
    "/images/house-of-experiment/6.png",
    "/images/house-of-experiment/7.png",
    "/images/house-of-experiment/8.png",
    "/images/house-of-experiment/9.png",
    "/images/house-of-experiment/10.png",
    "/images/house-of-experiment/11.png",
    "/images/house-of-experiment/12.png",
    "/images/house-of-experiment/13.png",
    "/images/house-of-experiment/14.png",
    "/images/house-of-experiment/15.png",
    "/images/house-of-experiment/16.png",
    "/images/house-of-experiment/17.png",
    "/images/house-of-experiment/18.png",
    "/images/house-of-experiment/19.png",
    "/images/house-of-experiment/20.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/21-OC0Ky47pnkUp5oj5iiVOUPALCiIPwM.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/22-K1mFauIzdTe4IcWwChh6jmZV9CT6sq.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/23-AmyVRBSXUU7bBxvhBArUGiklmVNNfY.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/24-vhHN0ZTkjf458LMSLRIJcqks1jYCua.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/25-LhTOsGfL23rULldIgOqpMeNiZBtsMj.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/26.png-EKEwfhCoq0wgxCswDQSOk50ed612fu.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/27.png-1UfiIJ78btkM63WrRuPhG7SdfclvGI.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/28-8E6FFtOb4pFhtNsZjI8BacZB4mzBSU.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/29-wb0uysa79tr5U70U67iIU9dpFCJsL0.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/30-nHDCQMNOlXEOidhpgc8J5ebYUzvBnZ.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/31-OouXiu4ZbhKbAfnNBZdCtFR9mCpziS.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/32-6rtEBl64XsKDMZFwQJdia86IakdJB1.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/33-rDETvNWRU60mwVsXPXyreb1IKphr81.png",
  ]

  const nextExperimentSlide = () => {
    setExperimentGalleryIndex((prev) => (prev + 1) % experimentGalleryImages.length)
  }

  const prevExperimentSlide = () => {
    setExperimentGalleryIndex((prev) => (prev - 1 + experimentGalleryImages.length) % experimentGalleryImages.length)
  }
  // </CHANGE>

  const openExperimentLightbox = (index: number) => {
    setExperimentLightboxIndex(index)
    setExperimentLightboxOpen(true)
  }

  const nextExperimentLightboxImage = () => {
    setExperimentLightboxIndex((prev) => (prev + 1) % experimentGalleryImages.length)
  }

  const prevExperimentLightboxImage = () => {
    setExperimentLightboxIndex((prev) => (prev - 1 + experimentGalleryImages.length) % experimentGalleryImages.length)
  }
  // </CHANGE>

  const anhQuanGalleryImages = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-7LSv2SgusSPVFKMYlEPEEE0bwIJ2xg.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-mHIQwmmetT9lLmNDNhNhwh62toUfo6.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-ahj8z1GA58D0OEH65bBTdGxnVz3G1f.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-qcuWwPtpUCLhICgoNS8bdKLaPl0MmL.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-WX7I56PMlibpmhJrqdaqe08mV1iIu4.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-xkmg9U7PnLR019sy9OLP2Ynym9XD8K.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-VNEKoqN3Tmm2l3jcXXiwUqLVhdK1lQ.jpg",
  ]

  const [anhQuanGalleryIndex, setAnhQuanGalleryIndex] = useState(0)

  const nextAnhQuanImage = () => {
    setAnhQuanGalleryIndex((prev) => (prev + 1) % anhQuanGalleryImages.length)
  }

  const prevAnhQuanImage = () => {
    setAnhQuanGalleryIndex((prev) => (prev - 1 + anhQuanGalleryImages.length) % anhQuanGalleryImages.length)
  }
  // </CHANGE>

  const openAnhQuanLightbox = (index: number) => {
    setAnhQuanLightboxIndex(index)
    setAnhQuanLightboxOpen(true)
  }

  const nextAnhQuanLightboxImage = () => {
    setAnhQuanLightboxIndex((prev) => (prev + 1) % anhQuanGalleryImages.length)
  }

  const prevAnhQuanLightboxImage = () => {
    setAnhQuanLightboxIndex((prev) => (prev - 1 + anhQuanGalleryImages.length) % anhQuanGalleryImages.length)
  }
  // </CHANGE>

  const nextSignatureOfClayImage = () => {
    const galleryImages = chambers[3].galleryImages || []
    setSignatureOfClayIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevSignatureOfClayImage = () => {
    const galleryImages = chambers[3].galleryImages || []
    setSignatureOfClayIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }
  // </CHANGE>

  const openSignatureOfClayLightbox = (index: number) => {
    setSignatureOfClayLightboxIndex(index)
    setSignatureOfClayLightboxOpen(true)
  }

  const nextSignatureOfClayLightboxImage = () => {
    const galleryImages = chambers[3].galleryImages || []
    setSignatureOfClayLightboxIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevSignatureOfClayLightboxImage = () => {
    const galleryImages = chambers[3].galleryImages || []
    setSignatureOfClayLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }
  // </CHANGE>

  const dongThapGalleryImages = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-q78rgcZvMgiAAkIQdehr2k570md03g.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-uMIuJr3RMJmOEApLglHhhIB9bO0BdT.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-yW0WhUMCgbpLQih9GianIOFf4Sq8kD.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-4GrBNDDYPNAkiOm19L4D7CJVnjr0mk.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-5fGpZBg9cNAoUvVtLLWSQgNIBlEhsd.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-KkBc3wJw4lly4HOEWZMXzNFqU4s44P.jpg",
  ]

  const tutoringGalleryImages = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-LmMJKA3CToD5LtNAXFA0w6TfyTuemt.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-o1JQ0qCxobmIbFHYxNlTr7kHm01fU3.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-N9XNjLzfhtTmjx6eD7RjnSpKBveY53.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-QfYb14fAdQihvJC9SLw226Inwc3sIp.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-VwGciZkfXIPMoKwURMIUMgx0BRLEAQ.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-VM05nxtDzeoKeYDTLsZdN6uuzhtRyz.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-b4q78Roc9k3jizMLmlqHuE4I0jDeli.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-aMVVE5sUaP0yQOPC8aUksJo58670W4.jpg",
  ]
  const nursingHomeGalleryImages = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-5E7fL7Wx4GIjpx2kE3oRbYVaauXM0t.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-H38xZYGOUFal5tBdSyIadwR6eAZa2V.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-Z5F8x4UcEwpl1gaJRNvFhhNCtcpZa2.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-kRQZBNDariytx5B0mXXAE10cz2QwqZ.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-MeJ5gEYX4BkhwewC9z0RPYJOGydpO5.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-YxMbSUjz9pT2HD7TNUA8cayMFFXklo.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-qnKd88QVEq9PNuHqbietj5cROQhkfy.jpg",
  ]
  // </CHANGE>
  // </CHANGE>

  const nextDongThapImage = () => {
    setDongThapLightboxIndex((prev) => (prev + 1) % dongThapGalleryImages.length)
  }

  const prevDongThapImage = () => {
    setDongThapLightboxIndex((prev) => (prev - 1 + dongThapGalleryImages.length) % dongThapGalleryImages.length)
  }

  const openDongThapLightbox = (index: number) => {
    setDongThapLightboxIndex(index)
    setDongThapLightboxOpen(true)
  }

  const nextTutoringImage = () => {
    setTutoringLightboxIndex((prev) => (prev + 1) % tutoringGalleryImages.length)
  }

  const prevTutoringImage = () => {
    setTutoringLightboxIndex((prev) => (prev - 1 + tutoringGalleryImages.length) % tutoringGalleryImages.length)
  }

  const openTutoringLightbox = (index: number) => {
    setTutoringLightboxIndex(index)
    setTutoringLightboxOpen(true)
  }
  const nextNursingHomeImage = () => {
    setNursingHomeLightboxIndex((prev) => (prev + 1) % nursingHomeGalleryImages.length)
  }

  const prevNursingHomeImage = () => {
    setNursingHomeLightboxIndex(
      (prev) => (prev - 1 + nursingHomeGalleryImages.length) % nursingHomeGalleryImages.length,
    )
  }

  const openNursingHomeLightbox = (index: number) => {
    setNursingHomeLightboxIndex(index)
    setNursingHomeLightboxOpen(true)
  }
  // </CHANGE>
  // </CHANGE>

  const nextGalleryImage = () => {
    const currentGallery = chambers[selectedChamber].galleryImages || []
    setGalleryIndex((prev) => (prev + 1) % currentGallery.length)
  }

  const prevGalleryImage = () => {
    const currentGallery = chambers[selectedChamber].galleryImages || []
    setGalleryIndex((prev) => (prev - 1 + currentGallery.length) % currentGallery.length)
  }
  // </CHANGE>

  const openModal = (index: number) => {
    setSelectedChamber(index)
    setIsModalOpen(true)
    setGalleryIndex(0)
    setAnhQuanGalleryIndex(0) // Reset anhQuanGalleryIndex when opening a new modal
    setSignatureOfClayIndex(0)
    // </CHANGE>
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white scroll-smooth">
      {/* FixedNavbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-8 py-2 flex justify-end gap-6">
          <Link
            href="#hero"
            className="px-6 py-2 text-white hover:text-[#D4AF37] transition-all duration-300 font-cinzel text-sm tracking-wider"
          >
            Home
          </Link>
          <Link
            href="#journey"
            className="px-6 py-2 text-white hover:text-[#D4AF37] transition-all duration-300 font-cinzel text-sm tracking-wider"
          >
            My journey begin...
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen scroll-mt-16">
        <div className="absolute inset-0">
          <Image
            src="/images/design-mode/A%CC%89nh%20bi%CC%80a%20cu%CC%89a%20Homepage.jpg"
            alt="Luminara Haven Castle"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]" />
        </div>

        {/* Hero Content */}
        <div className="absolute bottom-32 left-8 max-w-md z-10 bg-black/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border-4 border-[#8B7355]">
          <div className="absolute inset-0 border-2 border-[#D4AF37] rounded-xl m-1"></div>
          <div className="relative z-10">
            <h1 className="font-semibold mb-4 text-center font-cinzel text-white tracking-wider">
              <span className="block text-xl text-[#D4AF37]">- WELCOME TO -</span>
              <span className="block text-4xl my-2">LUMINARA HAVEN</span>
            </h1>
            <p className="leading-relaxed text-gray-200 mb-3 text-base font-light font-[family-name:var(--font-utm-times)]">
              Test Hi! I am Nguyễn Đình Trọng Hiến and this platform is the journey of my growth, exploration, and hope.
            </p>
            <p className="leading-relaxed text-gray-200 text-base font-light font-[family-name:var(--font-utm-times)]">
              I believe that my entire story could be retold perfectly as an &quot;imagination&quot; castle titled
              Luminara Haven. The &quot;castle&quot; itself has gone through many life-changing hallmarks that I want to
              share.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 px-8 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-cinzel font-light text-white leading-tight text-balance mb-6">
          My castle holds five &quot;chambers&quot;, each revealing a different facet of myself:
        </h2>
      </section>

      {/* Content Sections - Alternating Layout */}
      <div className="max-w-7xl mx-auto px-8 space-y-32 pb-32">
        {/* The Sanctum */}
        <div className="grid md:grid-cols-2 gap-8 items-center justify-items-center group">
          <div className="relative max-w-[320px] max-h-[60vh] transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className="relative border-4 border-[#8B7355] rounded-sm shadow-2xl hover:shadow-[0_0_30px_rgba(212,175,55,0.6)]">
              <div className="absolute inset-0 border-2 border-[#D4AF37] rounded-sm m-1"></div>
              <Image
                src="/images/design-mode/sanc%20%281%29.png"
                alt="The Sanctum - Angel Statue"
                width={400}
                height={600}
                className="w-full h-full object-contain rounded-sm"
              />
            </div>
          </div>
          <div className="max-w-md relative">
            <div className="absolute -top-8 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-[#D4AF37] font-cinzel font-semibold tracking-widest uppercase text-4xl ml-[-74px] mt-[-27px]">
                ABOUT ME
              </p>
            </div>
            <p className="text-lg leading-relaxed text-white font-cinzel ml-[-75px] mr-[38px]">
              In The Sanctum, I define myself and my purpose as the Castellan.
            </p>
          </div>
        </div>

        {/* The Crucible Forge */}
        <div className="grid md:grid-cols-2 gap-8 items-center justify-items-center group">
          <div className="md:order-2 relative max-w-[320px] max-h-[60vh] transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className="relative border-4 border-[#8B7355] rounded-sm shadow-2xl hover:shadow-[0_0_30px_rgba(212,175,55,0.6)]">
              <div className="absolute inset-0 border-2 border-[#D4AF37] rounded-sm m-1"></div>
              <Image
                src="/images/design-mode/foge.png"
                alt="The Crucible Forge"
                width={400}
                height={600}
                className="w-full h-full object-contain rounded-sm"
              />
            </div>
          </div>
          <div className="md:order-1 max-w-md relative">
            <div className="absolute -top-8 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-[#D4AF37] font-cinzel font-semibold tracking-widest uppercase text-4xl mr-[-111px] mt-[-27px]">
                RESEARCH EXPERIENCES
              </p>
            </div>
            <p className="text-lg leading-relaxed text-white font-cinzel ml-92px mr-[-111px] ml-[49px]">
              In the Crucible Forge, I experiment with innovation and pursue real-life knowledge as the Alchemist.
            </p>
          </div>
        </div>

        {/* The Garden of Eden */}
        <div className="grid md:grid-cols-2 gap-8 items-center justify-items-center group">
          <div className="relative max-w-[320px] max-h-[60vh] transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className="relative border-4 border-[#8B7355] rounded-sm shadow-2xl hover:shadow-[0_0_30px_rgba(212,175,55,0.6)]">
              <div className="absolute inset-0 border-2 border-[#D4AF37] rounded-sm m-1"></div>
              <Image
                src="/images/design-mode/eden%20%281%29.png"
                alt="The Garden of Eden"
                width={400}
                height={600}
                className="w-full h-full object-contain rounded-sm"
              />
            </div>
          </div>
          <div className="max-w-md relative">
            <div className="absolute -top-8 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-[#D4AF37] font-cinzel font-semibold tracking-widest uppercase ml-[-87px] px-0 mr-[-100px] text-4xl mb-0 mt-[-55px]">
                INTERNSHIP &amp; OTHER ACTIVITIES
              </p>
            </div>
            <p className="text-lg leading-relaxed text-white font-cinzel ml-[-87px] mr-[124px] text-justify">
              {
                "In The Garden of Eden, I value environmental activism and preserve the harmony between humanity and nature as the Verdant Warden.\n"
              }
            </p>
          </div>
        </div>

        {/* The Meadow */}
        <div className="grid md:grid-cols-2 gap-8 items-center justify-items-center group">
          <div className="md:order-2 relative max-w-[320px] max-h-[60vh] transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className="relative border-4 border-[#8B7355] rounded-sm shadow-2xl hover:shadow-[0_0_30px_rgba(212,175,55,0.6)]">
              <div className="absolute inset-0 border-2 border-[#D4AF37] rounded-sm m-1"></div>
              <Image
                src="/images/design-mode/heatf.png"
                alt="The Meadow"
                width={400}
                height={600}
                className="w-full h-full object-contain rounded-sm"
              />
            </div>
          </div>
          <div className="md:order-1 max-w-md relative">
            <div className="absolute -top-8 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-[#D4AF37] font-cinzel font-semibold tracking-widest uppercase text-4xl mt-[-27px] text-right mr-[-105px]">
                CULTURAL VALUES
              </p>
            </div>
            <p className="text-lg leading-relaxed text-white font-cinzel ml-[154px] mr-[-118px]">
              In The Hearth, I celebrate my hometown’s heritage and my cultural identity as the Lore-tempered
              Storyteller.
            </p>
          </div>
        </div>

        {/* The Greater House */}
        <div className="grid md:grid-cols-2 gap-8 items-center justify-items-center group">
          <div className="relative max-w-[320px] max-h-[60vh] transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className="relative border-4 border-[#8B7355] rounded-sm shadow-2xl hover:shadow-[0_0_30px_rgba(212,175,55,0.6)]">
              <div className="absolute inset-0 border-2 border-[#D4AF37] rounded-sm m-1"></div>
              <Image
                src="/images/design-mode/chao3.png"
                alt="The Greater House"
                width={400}
                height={600}
                className="w-full h-full object-contain rounded-sm"
              />
            </div>
          </div>
          <div className="max-w-md relative">
            <div className="absolute -top-8 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-[#D4AF37] font-cinzel font-semibold tracking-widest uppercase mt-[-27px] text-4xl ml-[-83px] mr-[-30px]">
                LEADERSHIP EXPERIENCE
              </p>
            </div>
            <p className="text-lg leading-relaxed text-white font-cinzel ml-[-85px]">
              In The Chapter House, I serve local citizens and engage in community as the Welfare Steward.
            </p>
          </div>
        </div>
      </div>

      {/* Closing Section */}
      <section className="py-24 px-8 max-w-4xl mx-auto text-center">
        <p className="text-sm leading-relaxed text-gray-300 mb-2 font-cinzel">
          Together, these scenes form Luminara Haven. More than a castle, it is the living embodiment of my curiosity,
          empathy, and pursuit of light.
        </p>
        <p className="text-xl font-semibold font-cinzel">Let's Explore!</p>
      </section>

      {/* Staggered Columns Section */}
      <section id="journey" className="pb-32 px-8 scroll-mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center items-end gap-6">
            {/* Shortest - Left outer */}
            <div
              className="relative w-40 h-80 transition-transform duration-500 ease-out hover:-translate-y-8 cursor-pointer group"
              onClick={() => openModal(3)}
            >
              <div className="relative h-full border-4 border-[#8B7355] rounded-sm shadow-2xl mx-0 mt-[-68px] transition-shadow duration-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.6)]">
                <div className="absolute inset-0 border-2 border-[#D4AF37] rounded-sm m-1"></div>
                <Image
                  src={chambers[3].image || "/placeholder.svg"}
                  alt="Panel 1"
                  width={160}
                  height={320}
                  className="w-full h-full object-cover rounded-sm"
                />
                {/* </CHANGE> */}
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-4 rounded-sm m-1">
                  <div className="text-center">
                    <h3 className="text-[#D4AF37] font-cinzel font-semibold text-lg mb-2 tracking-wide">The Hearth</h3>
                    <p className="text-white text-xs font-cinzel leading-relaxed">Cultural Values </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Medium - Left middle */}
            <div
              className="relative w-40 h-[400px] transition-transform duration-500 ease-out hover:-translate-y-8 cursor-pointer group"
              onClick={() => openModal(2)}
            >
              <div className="relative h-full border-4 border-[#8B7355] rounded-sm shadow-2xl mt-[-36px] transition-shadow duration-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.6)]">
                <div className="absolute inset-0 border-2 border-[#D4AF37] rounded-sm m-1"></div>
                <Image
                  src={chambers[2].image || "/placeholder.svg"}
                  alt="Panel 2"
                  width={160}
                  height={400}
                  className="w-full h-full object-cover rounded-sm"
                />
                {/* </CHANGE> */}
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-4 rounded-sm m-1">
                  <div className="text-center">
                    <h3 className="text-[#D4AF37] font-cinzel font-semibold text-lg mb-2 tracking-wide">
                      The Garden of Eden
                    </h3>
                    <p className="text-white text-xs font-cinzel leading-relaxed">Internship &amp; Other Activities </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Tallest - Center */}
            <div
              className="relative w-40 h-[480px] transition-transform duration-500 ease-out hover:-translate-y-8 cursor-pointer group"
              onClick={() => openModal(0)}
            >
              <div className="relative h-full border-4 border-[#8B7355] rounded-sm shadow-2xl transition-shadow duration-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.6)]">
                <div className="absolute inset-0 border-2 border-[#D4AF37] rounded-sm m-1"></div>
                <Image
                  src={chambers[0].image || "/placeholder.svg"}
                  alt="Panel 3"
                  width={160}
                  height={480}
                  className="w-full h-full object-cover rounded-sm"
                />
                {/* </CHANGE> */}
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-4 rounded-sm m-1">
                  <div className="text-center">
                    <h3 className="text-[#D4AF37] font-cinzel font-semibold text-lg mb-2 tracking-wide">The Sanctum</h3>
                    <p className="text-white text-xs font-cinzel leading-relaxed">About Me</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Medium - Right middle */}
            <div
              className="relative w-40 h-[400px] transition-transform duration-500 ease-out hover:-translate-y-8 cursor-pointer group"
              onClick={() => openModal(1)}
            >
              <div className="relative h-full border-4 border-[#8B7355] rounded-sm shadow-2xl mt-[-36px] transition-shadow duration-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.6)]">
                <div className="absolute inset-0 border-2 border-[#D4AF37] rounded-sm m-1"></div>
                <Image
                  src={chambers[1].image || "/placeholder.svg"}
                  alt="Panel 4"
                  width={160}
                  height={400}
                  className="w-full h-full object-cover rounded-sm"
                />
                {/* </CHANGE> */}
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-4 rounded-sm m-1">
                  <div className="text-center">
                    <h3 className="text-[#D4AF37] font-cinzel font-semibold text-lg mb-2 tracking-wide">
                      The Crucible Forge
                    </h3>
                    <p className="text-white text-xs font-cinzel leading-relaxed">Research Experiences </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Shortest - Right outer */}
            <div
              className="relative w-40 h-80 transition-transform duration-500 ease-out hover:-translate-y-8 cursor-pointer group"
              onClick={() => openModal(4)}
            >
              <div className="relative h-full border-4 border-[#8B7355] rounded-sm shadow-2xl mt-[-68px] transition-shadow duration-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.6)]">
                <div className="absolute inset-0 border-2 border-[#D4AF37] rounded-sm m-1"></div>
                <Image
                  src={chambers[4].image || "/placeholder.svg"}
                  alt="Panel 5"
                  width={160}
                  height={320}
                  className="w-full h-full object-cover rounded-sm"
                />
                {/* </CHANGE> */}
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-4 rounded-sm m-1">
                  <div className="text-center">
                    <h3 className="text-[#D4AF37] font-cinzel font-semibold text-lg mb-2 tracking-wide">
                      The Chapter House
                    </h3>
                    <p className="text-white text-xs font-cinzel leading-relaxed">Leadership Experiences</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-8"
          onClick={closeModal}
        >
          <div className="relative w-full max-w-7xl h-[90vh] flex" onClick={(e) => e.stopPropagation()}>
            {/* Left side - Main content */}
            <div className="flex-1 relative overflow-hidden">
              {/* Content */}
              <div className="relative z-10 p-16 h-full overflow-y-auto">
                {chambers[selectedChamber].galleryImages &&
                  chambers[selectedChamber].galleryImages.length > 0 &&
                  selectedChamber !== 3 && <div className="mb-12 relative"></div>}
                {/* </CHANGE> */}

                <h2 className="text-6xl md:text-7xl font-cinzel font-light text-white mb-12 uppercase tracking-wider">
                  {chambers[selectedChamber].title}
                </h2>

                {/* Description */}
                <div className="space-y-4 max-w-2xl mb-12">
                  {chambers[selectedChamber].description.map((paragraph, idx) => (
                    <p key={idx} className="text-sm leading-relaxed text-gray-200 font-cinzel text-justify">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {selectedChamber === 1 && (
                  <div className="max-w-2xl space-y-8">
                    {/* Punch Line Quote */}
                    <div className="my-8 border-l-4 border-[#D4AF37] pl-6 py-2">
                      <p className="text-lg leading-relaxed text-gray-200 font-cinzel italic">
                        "Science is not just about finding answers—it's about asking the right questions and daring to
                        explore the unknown."
                      </p>
                    </div>

                    {/* House of Experiment Section with Gallery */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <svg className="w-6 h-6 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <h3 className="text-2xl font-cinzel font-semibold text-[#D4AF37] uppercase tracking-wide">
                          House of Experiment
                        </h3>
                      </div>

                      <div className="space-y-4 text-sm text-gray-200 font-cinzel ml-9 mb-6">
                        <p className="leading-relaxed">
                          Driven by a passion for scientific inquiry, I established a personal "lab studio" to tackle
                          local challenges in water quality, agriculture, and waste through 20+ small-scale experiments.
                        </p>
                        <p className="leading-relaxed my-0 py-[18px]">
                          {
                            '\n\nThis evolved into my solo startup "Eco Wine Lab" under my school ACES Program. This project is where I produced and sold homemade wine in a self-designed lab environment. I managed all operations, from creating eco-friendly, waterproof packaging from recycled materials and promoting products to analyzing fermentation processes. The venture successfully sold 80+ wine boxes at local festivals, generating VND 7.5 million to fund 64 free meals for homeless and low-income individuals.'
                          }
                        </p>
                        <div className="flex flex-wrap gap-4 pt-2">
                          <a
                            href="https://drive.google.com/drive/folders/1RHR4CTkOcaYy58HMu7xkBSTGayUhAt3l?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#FFD700] transition-colors duration-300 border border-[#D4AF37] hover:border-[#FFD700] px-4 py-2 rounded-md"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Portfolio PDF
                          </a>
                          <a
                            href="https://drive.google.com/drive/folders/1muxarAfCaKOPsHY8cov0GjkhP6ulpHdO?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#FFD700] transition-colors duration-300 border border-[#D4AF37] hover:border-[#FFD700] px-4 py-2 rounded-md"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                            Reference of Research Paper in the Portfolio Citation
                          </a>
                        </div>
                        {/* </CHANGE> */}
                      </div>

                      {/* Gallery Carousel */}
                      <div className="relative w-full mb-6">
                        {/* Main Image Container */}
                        <div
                          className="relative w-full aspect-video rounded-lg overflow-hidden border-4 border-[#8B7355] shadow-2xl cursor-pointer"
                          onClick={() => openExperimentLightbox(experimentGalleryIndex)}
                        >
                          <div className="absolute inset-0 border-2 border-[#D4AF37] rounded-md m-1 pointer-events-none z-10"></div>
                          <Image
                            src={experimentGalleryImages[experimentGalleryIndex] || "/placeholder.svg"}
                            alt={`House of Experiment slide ${experimentGalleryIndex + 1}`}
                            fill
                            className="object-contain bg-white"
                            priority
                          />
                          {/* Hover overlay */}
                          <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100 z-10">
                            <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                              />
                            </svg>
                          </div>
                          {/* </CHANGE> */}
                        </div>

                        {/* Navigation Arrows */}
                        <button
                          onClick={prevExperimentSlide}
                          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                          aria-label="Previous slide"
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button
                          onClick={nextExperimentSlide}
                          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                          aria-label="Next slide"
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>

                        {/* Slide Counter */}
                        <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-cinzel">
                          {experimentGalleryIndex + 1} / {experimentGalleryImages.length}
                        </div>

                        {/* Dot Indicators */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                          {experimentGalleryImages.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setExperimentGalleryIndex(index)}
                              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                                index === experimentGalleryIndex ? "bg-[#D4AF37] w-8" : "bg-white/50 hover:bg-white/80"
                              }`}
                              aria-label={`Go to slide ${index + 1}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    {/* </CHANGE> */}

                    {/* Closing Philosophy */}
                    <div className="pb-8 border-t border-white/20 pt-8 mt-8">
                      <p className="text-sm leading-relaxed text-gray-200 font-cinzel italic">
                        "Every work displayed is never truly complete, for each answer initiates new, more compelling
                        questions. For me, the ultimate objective of discoveries has never been the answer but the
                        process of creating, reframing or even contrasting with the basic ground."
                      </p>
                    </div>
                  </div>
                )}

                {selectedChamber === 2 && (
                  <div className="max-w-2xl space-y-8">
                    {/* Punch Line Quote */}
                    <div className="my-8 border-l-4 border-[#D4AF37] pl-6 py-2">
                      <p className="text-base italic text-gray-100 font-cinzel leading-relaxed">
                        "In nurturing this garden, I have learned that sustainability is about partnership, not just
                        preservation alone."
                      </p>
                    </div>

                    {/* Technical Internship - Han Viet */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <svg className="w-6 h-6 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <h3 className="text-2xl font-cinzel font-semibold text-[#D4AF37] uppercase tracking-wide">
                          Technical Intern at Han Viet
                        </h3>
                      </div>
                      <div className="space-y-3 text-sm text-gray-200 font-cinzel ml-9">
                        <p className="text-white">
                          <span className="font-semibold">Role:</span> Technical Intern |{" "}
                          <span className="font-semibold">Date:</span> June 2nd - July 27th, 2025
                        </p>
                        <p className="text-white">
                          <a
                            href="https://drive.google.com/drive/folders/1O_f5YvNLBLW1hPSyZfW6BqDli-pktnGR?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#F4BF37] transition-colors duration-300 font-semibold"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                                clipRule="evenodd"
                              />
                            </svg>
                            Certificate
                          </a>
                        </p>
                        <p className="leading-relaxed">
                          Through hands-on observation of industrial filter core and membrane manufacturing, I gained
                          practical insight into multi-layer filtration systems using materials like activated carbon
                          and polymer membranes. My responsibilities included testing and replacing filter cores,
                          measuring pressure and flow rates, and evaluating filtration efficiency. I further
                          strengthened my technical understanding of adsorption, ion exchange, and reverse osmosis (RO)
                          by collecting performance data and translating technical manuals to enhance both safety
                          protocols and customer comprehension.
                        </p>
                      </div>
                    </div>

                    {/* Technical Internship - Anh Quan */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <svg className="w-6 h-6 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <h3 className="text-2xl font-cinzel font-semibold text-[#D4AF37] uppercase tracking-wide">
                          Technical Intern at Anh Quan
                        </h3>
                      </div>
                      <div className="space-y-3 text-sm text-gray-200 font-cinzel ml-9">
                        <p className="text-white">
                          <span className="font-semibold">Role:</span> Technical Intern |{" "}
                          <span className="font-semibold">Date:</span> June 17th - August 11th, 2024
                        </p>
                        <p className="text-white">
                          <a
                            href="https://drive.google.com/drive/folders/1jBS6c5Zk1xIqBJx0WAKEYKKil42jbvi-?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#F4BF37] transition-colors duration-300 font-semibold"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                                clipRule="evenodd"
                              />
                            </svg>
                            Certificate
                          </a>
                        </p>
                        <p className="leading-relaxed">
                          I directly supported engineers in the installation and calibration of water treatment systems,
                          gaining hands-on experience operating industrial pH, ORP, and chlorine sensors. This provided
                          me with practical insight into how engineering provides tangible solutions for environmental
                          challenges. To enhance this work, I also applied my skills to translate and redesign technical
                          manuals and product catalogues, ensuring clarity and accessibility for a wider audience.
                        </p>

                        <div className="mt-6 relative">
                          <div className="grid grid-cols-2 gap-4">
                            {anhQuanGalleryImages.map((imageSrc, index) => (
                              <div
                                key={index}
                                className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border-4 border-[#8B7355] shadow-2xl cursor-pointer"
                                onClick={() => openAnhQuanLightbox(index)}
                              >
                                <div className="absolute inset-0 border-2 border-[#D4AF37] rounded-md m-1 pointer-events-none z-10"></div>
                                <Image
                                  src={imageSrc || "/placeholder.svg"}
                                  alt={`Anh Quan internship photo ${index + 1}`}
                                  fill
                                  className="object-cover"
                                />
                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100 z-10">
                                  <svg
                                    className="w-12 h-12 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={1.5}
                                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                                    />
                                  </svg>
                                </div>
                                {/* </CHANGE> */}
                              </div>
                            ))}
                          </div>
                          {/* </CHANGE> */}
                        </div>
                      </div>
                    </div>

                    {/* Organizations */}
                    <div className="mx-[-39px]">
                      <div className="space-y-4 text-sm text-gray-200 font-cinzel ml-9">
                        {/* GSC - Green Sustainable Community */}
                        <div className="mx-[-32px]">
                          <div className="flex items-center gap-3 mb-4"></div>
                          <div className="space-y-3 text-sm text-gray-200 font-cinzel ml-9">
                            {/* GSC - Green Sustainable Community */}
                            <div>
                              <div className="flex items-center gap-3 mb-4">
                                <svg className="w-6 h-6 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75 2.906A3.005 3.005 0 0119 15v3H1v-3a3 3 0 013.75-2.906z" />
                                </svg>
                                <h3 className="text-2xl font-cinzel font-semibold text-[#D4AF37] uppercase tracking-wide">
                                  GSC - Green Sustainable Community
                                </h3>
                              </div>
                              <div className="space-y-3 text-sm text-gray-200 font-cinzel ml-9">
                                <p className="text-white">
                                  <span className="font-semibold">Role:</span> Human Resource Member |{" "}
                                  <span className="font-semibold">Date:</span> August 24th 2024 – May 1st 2025
                                </p>
                                <p className="text-white">
                                  <a
                                    href="https://drive.google.com/drive/folders/1DIqYHS7rf0p2bZ3ozWkVMjZpI4otwC3T?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#F4BF37] transition-colors duration-300 font-semibold"
                                  >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                      <path
                                        fillRule="evenodd"
                                        d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                    Certificate
                                  </a>
                                </p>
                                <p className="leading-relaxed text-justify">
                                  As an HR member for the Green Sustainable Construction (GSC) project, I recruited 20+
                                  members and managed social media to promote eco-friendly building initiatives. By
                                  uniting a diverse team, I honed my ability to drive collaborative, community-driven
                                  solutions for environmental challenges in the construction sector.
                                </p>
                              </div>
                            </div>

                            {/* MUN */}
                            <div>
                              <div className="flex items-center gap-3 mb-4">
                                <svg className="w-6 h-6 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-1 .07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                                </svg>
                                <h3 className="text-2xl font-cinzel font-semibold text-[#D4AF37] uppercase tracking-wide">
                                  MUN - Model of United Nation
                                </h3>
                              </div>
                              <div className="space-y-3 text-sm text-gray-200 font-cinzel ml-9">
                                <p className="text-white">
                                  <span className="font-semibold">Role:</span> Delegate |{" "}
                                  <span className="font-semibold">Date:</span> August 2022 – June 2023
                                </p>
                                {/* CHANGE: Updating Google Drive link to the new sharing URL */}
                                <p className="text-white">
                                  <a
                                    href="https://drive.google.com/drive/folders/1vWC-z5BBSs4dEfy_3WUdRhGvGOsQEQYw"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#F4BF37] transition-colors duration-300 font-semibold"
                                  >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                      <path
                                        fillRule="evenodd"
                                        d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                    Certificates
                                  </a>
                                </p>
                                {/* </CHANGE> */}
                                <p className="leading-relaxed text-justify">
                                  {
                                    'My role as Indonesia\'s delegate in a Model UN on "Carbon Markets and Climate Equity" sparked my interest in global environmental policy. I debated whether emissions trading schemes effectively reduce CO2 or create global imbalances. This taught me to analyze sustainability through an international lens, understanding how national policies shape our collective climate future.\n'
                                  }
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Closing Philosophy */}
                    <div className="pb-8 border-t border-white/20 pt-8 mt-8">
                      <p className="text-sm leading-relaxed text-gray-200 font-cinzel italic">
                        "The Garden breathes hidden every creation. It is here that my environmental activism takes
                        root: transforming awareness into action, and research into restoration."
                      </p>
                    </div>
                  </div>
                )}

                {selectedChamber === 0 && (
                  <div className="max-w-2xl space-y-8">
                    {/* Statistics Section */}
                    <div>
                      <h3 className="text-2xl font-cinzel font-semibold text-[#D4AF37] mb-4 uppercase tracking-wide">
                        Statistics
                      </h3>
                      <div className="space-y-4 text-sm text-gray-200 font-cinzel">
                        <div>
                          <p className="font-semibold text-white mb-1">GPA:</p>
                          <p className="ml-4">9.3/10 (Grade 9), 9.4/10 (Grade 10), 9.6/10 (Grade 11)</p>
                          <p className="ml-4">3.72/4.0 (Grade 9), 3.76/4.0 (Grade 10), 3.84/4.0 (Grade 11)</p>
                        </div>
                        <div>
                          <p className="font-semibold text-white mb-1">Language Certificates:</p>
                          <p className="ml-4">1550 SAT (750 Verbal, 800 Math - superscore)</p>
                          <p className="ml-4">7.5 IELTS (8.5 Reading; 7.0 Writing; 8.0 Listening; 7.0 Speaking)</p>
                        </div>
                      </div>
                    </div>

                    {/* Honor & Award Section */}
                    <div>
                      <h3 className="text-2xl font-cinzel font-semibold text-[#D4AF37] mb-4 uppercase tracking-wide">
                        Honor & Award
                      </h3>
                      <div className="space-y-4 text-sm text-gray-200 font-cinzel">
                        <div>
                          <ul className="ml-4 space-y-1 list-disc list-inside">
                            <li>
                              <a
                                href="https://drive.google.com/file/d/1A67PWXj7gsJHNFwA0J4Ie1qTXmrsjuCK/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#D4AF37] hover:text-[#F4BF37] transition-colors duration-300 underline decoration-[#D4AF37]/50 hover:decoration-[#F4BF37]"
                              >
                                Gold Medal – Japan Design, Idea & Invention Expo - JDIE (2025)
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://drive.google.com/file/__DYWRTj5Vv0UA4otE5tVcJC2OtWCDNH/view?usp=drive_link"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#D4AF37] hover:text-[#F4BF37] transition-colors duration-300 underline decoration-[#D4AF37]/50 hover:decoration-[#F4BF37]"
                              >
                                Silver Medal – Physics, International Math and Science Competition - STEMCo (2025)
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://drive.google.com/file/d/138e-sdIObAcmgafDtGh89pMCZqraKZTO/view?usp=drive_link"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#D4AF37] hover:text-[#F4BF37] transition-colors duration-300 underline decoration-[#D4AF37]/50 hover:decoration-[#F4BF37]"
                              >
                                Silver Medal – Chemistry, International Math and Science Competition - STEMCo (2025)
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://drive.google.com/file/d/1aAo9FQPqIIfVrujyMjWt2hkgkNnppBCw/view?usp=drive_link"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#D4AF37] hover:text-[#F4BF37] transition-colors duration-300 underline decoration-[#D4AF37]/50 hover:decoration-[#F4BF37]"
                              >
                                Distinction – International Chemistry Quiz - ICQ (2025)
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://drive.google.com/file/d/1GKPP5mBLQoz84qtnBoCwpZbCxxXOIyVF/view?usp=drive_link"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#D4AF37] hover:text-[#F4BF37] transition-colors duration-300 underline decoration-[#D4AF37]/50 hover:decoration-[#F4BF37]"
                              >
                                Top 60 Finalist – 8th Stem Cell Innovation Contest, Vietnam National University – Ho Chi
                                Minh City (2023)
                              </a>
                            </li>
                            {/* </CHANGE> */}
                            <li>
                              2-time Second Prize – Materials Science, Ho Chi Minh City-level Science and Engineering
                              Fair (2023–2025)
                            </li>
                            <li>Consolation Prize – City-level Youth Innovation Competition (2023)</li>
                            <li>
                              <a
                                href="https://drive.google.com/file/d/1ABakE7ekNIZQVTy3zqm53F5u7JNJ56fl/view?usp=drive_link"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#D4AF37] hover:text-[#F4BF37] transition-colors duration-300 underline decoration-[#D4AF37]/50 hover:decoration-[#F4BF37]"
                              >
                                2-time Third Prize – School-level Scientific Research Competition (2023–2025)
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://drive.google.com/file/d/1GQFqmMqG_iAEMFoCiBvWctwiandRLJYJ/view?usp=drive_link"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#D4AF37] hover:text-[#F4BF37] transition-colors duration-300 underline decoration-[#D4AF37]/50 hover:decoration-[#F4BF37]"
                              >
                                3-time recipient of the LSTS "Certificate of Merit – Outstanding Student" (2022–2025)
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://drive.google.com/file/d/1mYkVe8OceC2P1tagQ_BEH6AX0hRG4dgS/view?usp=drive_link"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#D4AF37] hover:text-[#F4BF37] transition-colors duration-300 underline decoration-[#D4AF37]/50 hover:decoration-[#F4BF37]"
                              >
                                Top 5% Academic Performance of Grade 11 Students (2024–2025)
                              </a>
                            </li>
                            {/* </CHANGE> */}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Core Values Section */}
                    <div>
                      <h3 className="text-2xl font-cinzel font-semibold text-[#D4AF37] mb-4 uppercase tracking-wide">
                        Interest
                      </h3>
                      <div className="space-y-4 text-sm text-gray-200 font-cinzel">
                        <p className="leading-relaxed">
                          Chemical Engineering Major | Curious about the eclectic fusion of material science and quantum
                          mechanics in environmental designs.
                        </p>

                        <div className="mt-6">
                          <div className="relative w-full aspect-video rounded-lg overflow-hidden border-2 border-[#8B7355] shadow-lg">
                            <div className="absolute inset-0 border-2 border-[#D4AF37] rounded-md m-1 pointer-events-none z-10"></div>
                            <iframe
                              src="https://www.youtube.com/embed/IG0gFi6qnf4"
                              title="YouTube video"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              className="absolute inset-0 w-full h-full"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Back Story Section */}
                    <div>
                      <h3 className="text-2xl font-cinzel font-semibold text-[#D4AF37] mb-4 uppercase tracking-wide">
                        Back Story
                      </h3>
                      <div className="space-y-4 text-sm leading-relaxed text-gray-200 font-cinzel">
                        <p className="text-justify">
                          I grew up hearing a familiar chorus: humanity as the villain, nature as the passive victim in
                          need of rescue. This narrative shifted through three formative experiences.
                        </p>
                        <p className="text-justify">
                          My work with GSC revealed a darker, reciprocal truth: human pollution devastates climates,
                          while natural disasters erase human homes. I saw how well-intentioned solutions, like certain
                          heat-insulating foams, can backfire and worsen the issue of global warming that they try to
                          resolve as these foams have excessive blowing agents.
                        </p>
                        <p className="text-justify">
                          In Dong Thap, I understood the farmers&#39; plight. After climate-related crop losses, their
                          use of chemicals was a desperate act for survival, not disregard, yet the solution further
                          contaminates the land.
                        </p>
                        <p className="text-justify">
                          This taught me that true sustainability means empowering vulnerable communities, breaking the
                          cycle where short-term human survival leads to long-term ecological harm.
                        </p>

                        <div className="relative w-full max-w-md mx-auto mt-6">
                          <div className="relative border-4 border-[#8B7355] rounded-sm shadow-xl overflow-hidden">
                            <div className="absolute inset-0 border-2 border-[#D4AF37] rounded-sm m-1 pointer-events-none"></div>
                            <Image
                              src="/images/design-mode/1(3).jpg"
                              alt="Environmental volunteer work"
                              width={400}
                              height={533}
                              className="w-auto h-auto"
                            />
                          </div>
                        </div>
                        {/* </CHANGE> */}
                      </div>
                    </div>

                    {/* Unique Voice Section */}
                    <div className="pb-8">
                      <h3 className="text-2xl font-cinzel font-semibold text-[#D4AF37] mb-4 uppercase tracking-wide">
                        MY Voice
                      </h3>
                      <div className="space-y-3 text-sm text-gray-200 font-cinzel">
                        <p className="italic border-l-4 border-[#D4AF37] pl-4">
                          &quot;Saving communities is protecting the environment&quot;
                        </p>
                        <p className="font-semibold text-white">
                          My journey taught me that Humanity's thriving is not the poison but rather the antidote for a
                          sick planet.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {selectedChamber === 4 && (
                  <div className="max-w-2xl space-y-8">
                    {/* Punch Line Quote */}
                    <div className="my-8 border-l-4 border-[#D4AF37] pl-6 py-2">
                      <p className="text-base italic text-gray-100 font-cinzel leading-relaxed">
                        "The Chapter House reminds me that the truest measure of innovation is not what I build alone,
                        but what I build for and with others."
                      </p>
                    </div>

                    {/* "From Clay to Care" Section */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <svg className="w-6 h-6 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
                          <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
                          <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
                        </svg>
                        <h3 className="text-2xl font-cinzel font-semibold text-[#D4AF37] uppercase tracking-wide">
                          "From Clay to Care" – A Business Charity
                        </h3>
                      </div>
                      <div className="space-y-3 text-sm text-gray-200 font-cinzel ml-9">
                        <p className="text-white">
                          <span className="font-semibold">Role:</span> Founder |{" "}
                          <span className="font-semibold">Date:</span> January 24th 2024 – Present
                        </p>
                        <p className="text-white">
                          <a
                            href="https://www.facebook.com/profile.php?id=100077772774308"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#F4BF37] transition-colors duration-300 font-semibold"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                            Fanpage
                          </a>
                        </p>
                        <p className="leading-relaxed">
                          This charity is a consistent activity under my cultural business project "Di Sản Thu Nhỏ –
                          Điêu Khắc Hội An", where I championed Vietnamese heritage by promoting traditional crafts
                          through sales and cultural talks, and collaborated with Thanh Hà Pottery Village to provide
                          hands-on workshops for +80 visitors with local artisans. The project's commercial success
                          comes from VND 16 million in revenue from sculpture sales during Tet holiday The profits were
                          strategically allocated to fund a charity kitchen, which consistently provided 250 free
                          vegetarian meals to vulnerable communities 2-3 times per month, creating a sustainable cycle
                          of cultural enterprise and social support.
                        </p>

                        <div className="mt-6 grid grid-cols-2 gap-4">
                          <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden border-4 border-[#8B7355] shadow-2xl">
                            <div className="absolute inset-0 border-2 border-[#D4AF37] rounded-md m-1 pointer-events-none z-10"></div>
                            <Image
                              src="/images/design-mode/Charity%201.jpg"
                              alt="Charity work - providing meals to elderly woman"
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden border-4 border-[#8B7355] shadow-2xl">
                            <div className="absolute inset-0 border-2 border-[#D4AF37] rounded-md m-1 pointer-events-none z-10"></div>
                            <Image
                              src="/images/design-mode/Charity%204.jpg"
                              alt="Charity work - helping elderly woman indoors"
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden border-4 border-[#8B7355] shadow-2xl">
                            <div className="absolute inset-0 border-2 border-[#D4AF37] rounded-md m-1 pointer-events-none z-10"></div>
                            <Image
                              src="/images/design-mode/Charity%203.jpg"
                              alt="Charity work - distributing meals at outdoor event"
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden border-4 border-[#8B7355] shadow-2xl">
                            <div className="absolute inset-0 border-2 border-[#D4AF37] rounded-md m-1 pointer-events-none z-10"></div>
                            <Image
                              src="/images/design-mode/Charity%202.jpg"
                              alt="Charity work - providing meals on rainy evening"
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Koki Organization */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <svg className="w-6 h-6 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
                        </svg>
                        <h3 className="text-2xl font-cinzel font-semibold text-[#D4AF37] uppercase tracking-wide">
                          Koki Organization – Season 3
                        </h3>
                      </div>
                      <div className="space-y-3 text-sm text-gray-200 font-cinzel ml-9">
                        <p className="text-white">
                          <span className="font-semibold">Role:</span> Head of Event |{" "}
                          <span className="font-semibold">Date:</span> May 27th – August 5th 2025
                        </p>
                        <p className="text-white">
                          <a
                            href="https://www.facebook.com/youngengineerssociety.yes01"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#F4BF37] transition-colors duration-300 font-semibold"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                            Fanpage
                          </a>
                          <a
                            href="https://www.facebook.com/groups/1422063472268348"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#F4BF37] transition-colors duration-300 font-semibold"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-1 .07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                            </svg>
                            Community
                          </a>
                          <a
                            href="https://drive.google.com/drive/folders/1P24YF6BIfoUwXM8ehLe7CQ0n0gMJSS_1?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#F4BF37] transition-colors duration-300 font-semibold"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                                clipRule="evenodd"
                              />
                            </svg>
                            Certificate
                          </a>
                        </p>
                        <p className="leading-relaxed">
                          I directed the charity concert "A Yearbook of Pop," leading a team of 40+ staff to deliver a
                          successful event for 650+ attendees in Ho Chi Minh City. We raised VND 135 million in
                          donations by overseeing all operations: from social media strategy, which grew our fanpage to
                          2.6K followers, to hosting cross-department meetings. These efforts provided essential support
                          such as food, scholarships, and Braille materials for 40 visually impaired children at Bừng
                          Sáng Shelter, alongside fundraising activities like the "Art in the Park" workshop to enhance
                          public awareness.
                        </p>

                        <div className="grid grid-cols-2 gap-3">
                          <div
                            className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border-2 border-[#8B7355] shadow-lg cursor-pointer group"
                            onClick={() => openKokiLightbox(0)}
                          >
                            <div className="absolute inset-0 border border-[#D4AF37] rounded-md m-0.5 pointer-events-none z-10"></div>
                            <Image
                              src="/images/design-mode/%5B2%5D%20Concert%201.png.jpeg"
                              alt="Concert conductor at music stand"
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center z-[5]">
                              <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                              </svg>
                            </div>
                          </div>
                          <div
                            className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border-2 border-[#8B7355] shadow-lg cursor-pointer group"
                            onClick={() => openKokiLightbox(1)}
                          >
                            <div className="absolute inset-0 border border-[#D4AF37] rounded-md m-0.5 pointer-events-none z-10"></div>
                            <Image
                              src="/images/design-mode/%5B2%5D%20Concert%202.png.jpeg"
                              alt="Concert backstage preparation"
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center z-[5]">
                              <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                              </svg>
                            </div>
                          </div>
                          {/* </CHANGE> */}
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div
                            className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border-2 border-[#8B7355] shadow-lg cursor-pointer group"
                            onClick={() => openKokiLightbox(2)}
                          >
                            <div className="absolute inset-0 border border-[#D4AF37] rounded-md m-0.5 pointer-events-none z-10"></div>
                            <Image
                              src="/images/design-mode/%5B2%5D%20Concert%203.jpg"
                              alt="Koki organization event photo 4"
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center z-[5]">
                              <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                              </svg>
                            </div>
                          </div>
                          <div
                            className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border-2 border-[#8B7355] shadow-lg cursor-pointer group"
                            onClick={() => openKokiLightbox(3)}
                          >
                            <div className="absolute inset-0 border border-[#D4AF37] rounded-md m-0.5 pointer-events-none z-10"></div>
                            <Image
                              src="/images/design-mode/%5B3%5D%20Charity%201.jpg"
                              alt="Volunteer carrying donation box"
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center z-[5]">
                              <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                              </svg>
                            </div>
                          </div>
                          {/* </CHANGE> */}
                        </div>

                        {/* Row 3: Four small square images */}
                        <div className="grid grid-cols-4 gap-3">
                          <div
                            className="relative w-full aspect-square rounded-lg overflow-hidden border-2 border-[#8B7355] shadow-lg cursor-pointer group"
                            onClick={() => openKokiLightbox(4)}
                          >
                            <div className="absolute inset-0 border border-[#D4AF37] rounded-md m-0.5 pointer-events-none z-10"></div>
                            <Image
                              src="/images/design-mode/%5B1%5D%20%E1%BA%A2nh%20gi%E1%BB%9Bi%20thi%E1%BB%87u%20ho%E1%BA%A1t%20%C4%91%E1%BB%99ng_%20Intro%201%281%29.jpg"
                              alt="Orchestra performance overhead view"
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center z-[5]">
                              <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                              </svg>
                            </div>
                          </div>
                          <div
                            className="relative w-full aspect-square rounded-lg overflow-hidden border-2 border-[#8B7355] shadow-lg cursor-pointer group"
                            onClick={() => openKokiLightbox(5)}
                          >
                            <div className="absolute inset-0 border border-[#D4AF37] rounded-md m-0.5 pointer-events-none z-10"></div>
                            <Image
                              src="/images/design-mode/%5B1%5D%20%E1%BA%A2nh%20gi%E1%BB%9Bi%20thi%E1%BB%87u%20ho%E1%BA%A1t%20%C4%91%E1%BB%99ng_%20Intro%201.jpg"
                              alt="Orchestra performance side view"
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center z-[5]">
                              <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                              </svg>
                            </div>
                          </div>
                          <div
                            className="relative w-full aspect-square rounded-lg overflow-hidden border-2 border-[#8B7355] shadow-lg cursor-pointer group"
                            onClick={() => openKokiLightbox(6)}
                          >
                            <div className="absolute inset-0 border border-[#D4AF37] rounded-md m-0.5 pointer-events-none z-10"></div>
                            <Image
                              src="/images/design-mode/%5B3%5D%20Charity%203.jpg"
                              alt="Volunteers speaking to community group"
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center z-[5]">
                              <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                              </svg>
                            </div>
                          </div>
                          <div
                            className="relative w-full aspect-square rounded-lg overflow-hidden border-2 border-[#8B7355] shadow-lg cursor-pointer group"
                            onClick={() => openKokiLightbox(7)}
                          >
                            <div className="absolute inset-0 border border-[#D4AF37] rounded-md m-0.5 pointer-events-none z-10"></div>
                            <Image
                              src="/images/design-mode/v0_image-2.png"
                              alt="Koki organization event photo"
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center z-[5]">
                              <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                              </svg>
                            </div>
                          </div>
                          {/* </CHANGE> */}
                        </div>

                        {/* Row 4: Two large horizontal images */}
                        <div className="grid grid-cols-2 gap-3">
                          <div
                            className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border-2 border-[#8B7355] shadow-lg cursor-pointer group"
                            onClick={() => openKokiLightbox(8)}
                          >
                            <div className="absolute inset-0 border border-[#D4AF37] rounded-md m-0.5 pointer-events-none z-10"></div>
                            <Image
                              src="/images/design-mode/%5B3%5D%20Charity%204.jpg"
                              alt="Koki organization group photo"
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center z-[5]">
                              <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                              </svg>
                            </div>
                          </div>
                          <div
                            className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border-2 border-[#8B7355] shadow-lg cursor-pointer group"
                            onClick={() => openKokiLightbox(9)}
                          >
                            <div className="absolute inset-0 border border-[#D4AF37] rounded-md m-0.5 pointer-events-none z-10"></div>
                            <Image
                              src="/images/design-mode/%5B3%5D%20Charity%205.jpg"
                              alt="Koki organization concert photo"
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center z-[5]">
                              <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                              </svg>
                            </div>
                          </div>
                          {/* </CHANGE> */}
                        </div>
                      </div>
                    </div>

                    {/* Youth Engineering Society */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <svg className="w-6 h-6 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                        </svg>
                        <h3 className="text-2xl font-cinzel font-semibold text-[#D4AF37] uppercase tracking-wide">
                          Youth Engineering Society! (YES!)
                        </h3>
                      </div>
                      <div className="space-y-3 text-sm text-gray-200 font-cinzel ml-9">
                        <p className="text-white">
                          <span className="font-semibold">Role:</span> President |{" "}
                          <span className="font-semibold">Date:</span> December 28th 2024 – Present
                        </p>
                        <p className="text-white">
                          <a
                            href="https://www.facebook.com/youngengineerssociety.yes01"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#F4BF37] transition-colors duration-300 font-semibold"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                            Fanpage
                          </a>
                        </p>
                        <p className="leading-relaxed">
                          As President of YES, I led a 12-member executive team to expand the club's reach into both
                          research and community initiatives, growing our fanpage to 2.1K followers with 200+ active
                          viewers.
                        </p>
                        <p className="leading-relaxed">
                          {
                            "I directed the AirTrack Project, deploying an IoT-based weather monitoring system to support farmers in Đồng Tháp. This involved organizing two trips (4-day and 9-day) to collect data and test eco-friendly water filters using corncob composite, water hyacinth, zeolite, and silica aerogel. \n"
                          }
                        </p>
                        <p className="leading-relaxed">
                          {
                            "We hosted two workshops on pollution and sustainable practices for 100+ farmers, achieving tangible results: 26 households report positive feedback on water cleanliness and 85% community approval for the model. \nOur efforts were recognized at the Đồng Tháp STEM Forum, where I represented YES for promoting student-led environmental innovation.\n"
                          }
                        </p>
                        <p className="leading-relaxed">
                          Furthermore, I founded "June Sunshine," a STEM-based volunteering initiative, leading 10
                          volunteers to teach science and soft skills to underprivileged students and organize
                          intergenerational storytelling sessions at nursing homes.
                        </p>

                        <div className="mt-8 grid grid-cols-3 gap-6">
                          {/* Dong Thap Trip Gallery */}
                          <div>
                            <h4 className="text-base font-cinzel font-semibold text-[#D4AF37] mb-3 uppercase tracking-wide">
                              Dong Thap Trip
                            </h4>
                            <div className="relative w-full h-[240px] cursor-pointer group">
                              {/* Stacked photos effect */}
                              {dongThapGalleryImages.slice(0, 4).map((imageSrc, index) => (
                                <div
                                  key={index}
                                  onClick={() => openDongThapLightbox(index)}
                                  className="absolute inset-0 transition-all duration-500 ease-out group-hover:translate-y-0"
                                  style={{
                                    transform: `translateY(${index * 8}px) translateX(${index * 5}px) rotate(${index * 2 - 3}deg)`,
                                    zIndex: dongThapGalleryImages.length - index,
                                  }}
                                >
                                  <div className="relative w-full h-full border-4 border-[#8B7355] rounded-lg overflow-hidden shadow-2xl hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-shadow duration-300">
                                    <div className="absolute inset-0 border-2 border-[#D4AF37] rounded-md m-1 pointer-events-none z-10"></div>
                                    <Image
                                      src={imageSrc || "/placeholder.svg"}
                                      alt={`Dong Thap trip photo ${index + 1}`}
                                      fill
                                      className="object-cover"
                                    />
                                    {index === 0 && (
                                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 px-2.5 py-1 rounded-full">
                                          <p className="text-xs font-cinzel font-semibold text-black">
                                            View {dongThapGalleryImages.length} photos
                                          </p>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Tutoring Gallery */}
                          <div>
                            <h4 className="text-base font-cinzel font-semibold text-[#D4AF37] mb-3 uppercase tracking-wide">
                              Tutoring
                            </h4>
                            <div className="relative w-full h-[240px] cursor-pointer group">
                              {/* Stacked photos effect */}
                              {tutoringGalleryImages.slice(0, 4).map((imageSrc, index) => (
                                <div
                                  key={index}
                                  onClick={() => openTutoringLightbox(index)}
                                  className="absolute inset-0 transition-all duration-500 ease-out group-hover:translate-y-0"
                                  style={{
                                    transform: `translateY(${index * 8}px) translateX(${index * 5}px) rotate(${index * 2 - 3}deg)`,
                                    zIndex: tutoringGalleryImages.length - index,
                                  }}
                                >
                                  <div className="relative w-full h-full border-4 border-[#8B7355] rounded-lg overflow-hidden shadow-2xl hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-shadow duration-300">
                                    <div className="absolute inset-0 border-2 border-[#D4AF37] rounded-md m-1 pointer-events-none z-10"></div>
                                    <Image
                                      src={imageSrc || "/placeholder.svg"}
                                      alt={`Tutoring photo ${index + 1}`}
                                      fill
                                      className="object-cover"
                                    />
                                    {index === 0 && (
                                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 px-2.5 py-1 rounded-full">
                                          <p className="text-xs font-cinzel font-semibold text-black">
                                            View {tutoringGalleryImages.length} photos
                                          </p>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Nursing Home Gallery */}
                          <div>
                            <h4 className="text-base font-cinzel font-semibold text-[#D4AF37] mb-3 uppercase tracking-wide">
                              Nursing Home
                            </h4>
                            <div className="relative w-full h-[240px] cursor-pointer group">
                              {/* Stacked photos effect */}
                              {nursingHomeGalleryImages.slice(0, 4).map((imageSrc, index) => (
                                <div
                                  key={index}
                                  onClick={() => openNursingHomeLightbox(index)}
                                  className="absolute inset-0 transition-all duration-500 ease-out group-hover:translate-y-0"
                                  style={{
                                    transform: `translateY(${index * 8}px) translateX(${index * 5}px) rotate(${index * 2 - 3}deg)`,
                                    zIndex: nursingHomeGalleryImages.length - index,
                                  }}
                                >
                                  <div className="relative w-full h-full border-4 border-[#8B7355] rounded-lg overflow-hidden shadow-2xl hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-shadow duration-300">
                                    <div className="absolute inset-0 border-2 border-[#D4AF37] rounded-md m-1 pointer-events-none z-10"></div>
                                    <Image
                                      src={imageSrc || "/placeholder.svg"}
                                      alt={`Nursing home photo ${index + 1}`}
                                      fill
                                      className="object-cover"
                                    />
                                    {index === 0 && (
                                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 px-2.5 py-1 rounded-full">
                                          <p className="text-xs font-cinzel font-semibold text-black">
                                            View {nursingHomeGalleryImages.length} photos
                                          </p>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Aeromonitor */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <svg className="w-6 h-6 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                        </svg>
                        <h3 className="text-2xl font-cinzel font-semibold text-[#D4AF37] uppercase tracking-wide">
                          Aeromonitor
                        </h3>
                      </div>
                      <div className="space-y-3 text-sm text-gray-200 font-cinzel ml-9">
                        <p className="text-white">
                          <span className="font-semibold">Role:</span> Co-Creator |{" "}
                          <span className="font-semibold">Date:</span> Nov 2024 - Present
                        </p>
                        <p className="text-white">
                          <a
                            href="#"
                            className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#F4BF37] transition-colors duration-300 font-semibold"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5a2 2 0 11-2.828-2.828l3-3zM8 10a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                                clipRule="evenodd"
                              />
                            </svg>
                            Link
                          </a>
                        </p>
                        <p className="leading-relaxed text-justify">
                          I developed an IoT-based weather station to empower farmers in adapting to climate change and
                          optimizing crop planning. After testing the system with over 20 farming households in Dong Thap,
                          the results were significant, yielding a 20% increase in crop productivity and a 7% rise in
                          income. To ensure effective adoption, I organized the workshop &quot;Cultivating Resilience –
                          Harvest Data, Healthy Crop,&quot; which educated farmers and youth on using the technology and
                          inspired interest in STEM-driven agricultural solutions.
                        </p>

                        {/* YouTube Video Embed */}
                        <div className="mt-6">
                          <div className="relative w-full aspect-video rounded-lg overflow-hidden border-4 border-[#8B7355] shadow-2xl">
                            <div className="absolute inset-0 border-2 border-[#D4AF37] rounded-md m-1 pointer-events-none z-10"></div>
                            <iframe
                              src="https://www.youtube.com/embed/osGfreSXOuE"
                              title="Aeromonitor Project Video"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              className="absolute inset-0 w-full h-full"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Closing Philosophy */}
                    <div className="pb-8 border-t border-white/20 pt-8 mt-8">
                      <p className="text-sm leading-relaxed text-gray-200 font-cinzel italic">
                        "The stories we tell here have defined my identity greatly. They led back to the Sanctum where I
                        clarified my deepest and most personal aspects."
                      </p>
                    </div>
                    {/* </CHANGE> */}
                  </div>
                )}

                {selectedChamber === 3 && (
                  <div className="max-w-2xl space-y-8">
                    {/* Opening Quote */}
                    <div className="my-8 border-l-4 border-[#D4AF37] pl-6 py-2">
                      <p className="text-base italic text-gray-100 font-cinzel leading-relaxed">
                        "Sculpture reminds me that culture is not inherited. It is continuously rebuilt, every time I
                        choose to remember, recreate, and retell."
                      </p>
                    </div>

                    <div className="my-12">
                      {/* Gallery Carousel */}
                      <div className="relative w-full">
                        {/* Main Image Container */}

                        {/* Navigation Arrows */}

                        {/* Slide Counter */}

                        {/* Dot Indicators */}
                      </div>
                    </div>

                    {/* Cultural Business Project */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <svg className="w-6 h-6 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
                          <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
                          <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
                        </svg>
                        <h3 className="text-2xl font-cinzel font-semibold text-[#D4AF37] uppercase tracking-wide">
                          The cultural business project &quot;Di San Thu Nho – Dieu Khac Hoi An.&quot;
                        </h3>
                      </div>
                      <div className="space-y-3 text-sm text-gray-200 font-cinzel ml-9">
                        <p className="text-white">
                          <span className="font-semibold">Role:</span> Founder |{" "}
                          <span className="font-semibold">Date:</span> Jun 2024 - Present
                        </p>
                        <p className="text-white">
                          <a
                            href="#"
                            className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#F4BF37] transition-colors duration-300 font-semibold"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                            Fanpage
                          </a>
                        </p>
                        <p className="leading-relaxed text-justify">
                          I championed Vietnamese cultural heritage and promoted the culture of traditional Vietnamese
                          craft villages in ceramics, porcelain, earthenware, and sculpture through sales, cultural
                          talks, and exchanges. Collaborating with Thanh Hà Pottery Village, I provided trial
                          experiences for 80+ visitors by organizing hands-on pottery workshops with local elderly
                          artisans.
                        </p>

                        <div className="mt-6 space-y-4">
                          {/* Featured Business Avatar Image */}
                          <div className="relative w-full aspect-video rounded-lg overflow-hidden border-4 border-[#8B7355] shadow-2xl">
                            <div className="absolute inset-0 border-2 border-[#D4AF37] rounded-md m-1 pointer-events-none z-10"></div>
                            <Image
                              src="/images/design-mode/Business%20Avatar.png"
                              alt="Di Sản Thu Nhỏ – Điêu Khắc Hội An Business Avatar"
                              fill
                              className="object-cover"
                            />
                          </div>

                          {/* Gallery Grid */}
                          <div className="grid grid-cols-3 gap-3">
                            <div className="relative w-full aspect-square rounded-lg overflow-hidden border-2 border-[#8B7355] shadow-lg">
                              <Image
                                src="/images/design-mode/7.jpg"
                                alt="Shop interior with ceramic sculptures"
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="relative w-full aspect-square rounded-lg overflow-hidden border-2 border-[#8B7355] shadow-lg">
                              <Image
                                src="/images/design-mode/1(4).jpg"
                                alt="Metal rickshaw sculpture"
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="relative w-full aspect-square rounded-lg overflow-hidden border-2 border-[#8B7355] shadow-lg">
                              <Image
                                src="/images/design-mode/4.jpg"
                                alt="With local artisan at the shop"
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="relative w-full aspect-square rounded-lg overflow-hidden border-2 border-[#8B7355] shadow-lg">
                              <Image
                                src="/images/design-mode/6.jpg"
                                alt="Buddha stone sculpture"
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="relative w-full aspect-square rounded-lg overflow-hidden border-2 border-[#8B7355] shadow-lg">
                              <Image
                                src="/images/design-mode/3.jpg"
                                alt="With visitor at the shop"
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="relative w-full aspect-square rounded-lg overflow-hidden border-2 border-[#8B7355] shadow-lg">
                              <Image
                                src="/images/design-mode/5%20%281%29.jpg"
                                alt="Holding ceramic sculpture"
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="relative w-full aspect-square rounded-lg overflow-hidden border-2 border-[#8B7355] shadow-lg col-span-3">
                              <Image
                                src="/images/design-mode/2.jpg"
                                alt="Traditional Vietnamese rural scene ceramic collection"
                                fill
                                className="object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Art Portfolio */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <svg className="w-6 h-6 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <h3 className="text-2xl font-cinzel font-semibold text-[#D4AF37] uppercase tracking-wide">
                          The Art Portfolio "The Signature of Clay"
                        </h3>
                      </div>
                      <div className="space-y-3 text-sm text-gray-200 font-cinzel ml-9">
                        <p className="leading-relaxed text-justify">
                          My Art Portfolio is a collection of works that capture the soul of my surroundings, where
                          clay, light, and texture fuse into my culture. It reflects not perfection but presence: how I
                          see, feel, and connect with the world around me.This portfolio drew inspiration from my
                          cultural business project. Its subject, clay figures, is the precursor of the ceramic
                          sculpture sold in my uncle's stall. I want to understand not only the root of myself but also
                          the aesthetic origins of every cultural footprints I saw in the memory of my homeland, Hội An.
                        </p>

                        <div className="mt-6 relative">
                          <div
                            className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border-4 border-[#8B7355] shadow-2xl cursor-pointer"
                            onClick={() => openSignatureOfClayLightbox(signatureOfClayIndex)}
                          >
                            <div className="absolute inset-0 border-2 border-[#D4AF37] rounded-md m-1 pointer-events-none z-10"></div>
                            <Image
                              src={chambers[3].galleryImages?.[signatureOfClayIndex] || "/placeholder.svg"}
                              alt={`The Signature of Clay artwork ${signatureOfClayIndex + 1}`}
                              fill
                              className="object-cover"
                            />
                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100 z-10">
                              <svg
                                className="w-12 h-12 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={1.5}
                                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                                />
                              </svg>
                            </div>
                            {/* </CHANGE> */}

                            {/* Navigation buttons */}
                            <button
                              onClick={prevSignatureOfClayImage}
                              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/70 hover:bg-black/90 text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
                              aria-label="Previous image"
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2.5}
                                  d="M15 19l-7-7 7-7"
                                />
                              </svg>
                            </button>
                            <button
                              onClick={nextSignatureOfClayImage}
                              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/70 hover:bg-black/90 text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
                              aria-label="Next image"
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                              </svg>
                            </button>

                            {/* Dot indicators */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                              {chambers[3].galleryImages?.map((_, index) => (
                                <button
                                  key={index}
                                  onClick={() => setSignatureOfClayIndex(index)}
                                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                    index === signatureOfClayIndex
                                      ? "bg-[#D4AF37] w-6"
                                      : "bg-white/60 hover:bg-white/90"
                                  }`}
                                  aria-label={`Go to image ${index + 1}`}
                                />
                              ))}
                            </div>

                            {/* Image counter */}
                            <div className="absolute top-4 right-4 z-20 bg-black/70 px-2.5 py-1 rounded-full">
                              <span className="text-xs text-white font-cinzel font-semibold">
                                {signatureOfClayIndex + 1} / {chambers[3].galleryImages?.length || 0}
                              </span>
                            </div>
                          </div>
                        </div>
                        {/* </CHANGE> */}
                      </div>
                    </div>

                    {/* Closing Philosophy */}
                    <div className="pb-8 border-t border-white/20 pt-8 mt-8">
                      <p className="text-sm leading-relaxed text-gray-200 font-cinzel italic">
                        "The stories we tell here have defined my identity greatly. They led back to the Sanctum where I
                        clarified my deepest and most personal aspects."
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right side - Navigation thumbnails */}
            <div className="w-48 bg-black/50 backdrop-blur-sm border-l border-white/10 p-3 overflow-y-auto">
              <div className="space-y-0">
                {chambers.map((chamber, index) => (
                  <button
                    key={chamber.id}
                    onClick={() => openModal(index)}
                    className={`w-full group relative overflow-hidden transition-all duration-300 border-b border-white/10 last:border-b-0 ${
                      selectedChamber === index
                        ? "ring-2 ring-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.5)] z-10"
                        : "hover:ring-2 hover:ring-white/30"
                    }`}
                  >
                    <div className="relative aspect-[3/4]">
                      <Image
                        src={chamber.image || "/placeholder.svg"}
                        alt={chamber.title}
                        fill
                        className="object-cover"
                      />
                      {/* </CHANGE> */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-2">
                        <h3 className="text-white font-cinzel text-sm font-semibold">{chamber.title}</h3>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-white hover:text-[#D4AF37] transition-colors duration-300 z-20"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Bottom blue line */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-500" />
          </div>
        </div>
      )}

      {/* </CHANGE> */}

      {experimentLightboxOpen && (
        <div
          className="fixed inset-0 z-[110] bg-black/95 backdrop-blur-sm flex items-center justify-center p-8"
          onClick={() => setExperimentLightboxOpen(false)}
        >
          <div className="relative w-full max-w-5xl h-[85vh]" onClick={(e) => e.stopPropagation()}>
            {/* Main image */}
            <div className="relative w-full h-full rounded-lg overflow-hidden border-4 border-[#8B7355] shadow-2xl">
              <div className="absolute inset-0 border-2 border-[#D4AF37] rounded-md m-1 pointer-events-none z-10"></div>
              <Image
                src={experimentGalleryImages[experimentLightboxIndex] || "/placeholder.svg"}
                alt={`House of Experiment photo ${experimentLightboxIndex + 1}`}
                fill
                className="object-contain bg-white"
              />

              {/* Navigation buttons */}
              <button
                onClick={prevExperimentLightboxImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/70 hover:bg-black/90 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Previous image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextExperimentLightboxImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/70 hover:bg-black/90 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Next image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Dot indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {experimentGalleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setExperimentLightboxIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === experimentLightboxIndex ? "bg-[#D4AF37] w-8" : "bg-white/60 hover:bg-white/90"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>

              {/* Image counter */}
              <div className="absolute top-4 right-4 z-20 bg-black/70 px-3 py-1.5 rounded-full">
                <span className="text-sm text-white font-cinzel font-semibold">
                  {experimentLightboxIndex + 1} / {experimentGalleryImages.length}
                </span>
              </div>
            </div>

            {/* Close button */}
            <button
              onClick={() => setExperimentLightboxOpen(false)}
              className="absolute -top-12 right-0 w-10 h-10 flex items-center justify-center text-white hover:text-[#D4AF37] transition-colors duration-300"
              aria-label="Close lightbox"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Thumbnail strip */}
            <div className="absolute -bottom-24 left-0 right-0 flex justify-center gap-2 px-4 overflow-x-auto">
              {experimentGalleryImages.map((imageSrc, index) => (
                <button
                  key={index}
                  onClick={() => setExperimentLightboxIndex(index)}
                  className={`relative w-20 h-20 rounded-md overflow-hidden border-2 transition-all duration-300 flex-shrink-0 ${
                    index === experimentLightboxIndex
                      ? "border-[#D4AF37] ring-2 ring-[#D4AF37] scale-110"
                      : "border-white/30 hover:border-white/60"
                  }`}
                >
                  <Image
                    src={imageSrc || "/placeholder.svg"}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
      {/* </CHANGE> */}

      {anhQuanLightboxOpen && (
        <div
          className="fixed inset-0 z-[110] bg-black/95 backdrop-blur-sm flex items-center justify-center p-8"
          onClick={() => setAnhQuanLightboxOpen(false)}
        >
          <div className="relative w-full max-w-5xl h-[85vh]" onClick={(e) => e.stopPropagation()}>
            {/* Main image */}
            <div className="relative w-full h-full rounded-lg overflow-hidden border-4 border-[#8B7355] shadow-2xl">
              <div className="absolute inset-0 border-2 border-[#D4AF37] rounded-md m-1 pointer-events-none z-10"></div>
              <Image
                src={anhQuanGalleryImages[anhQuanLightboxIndex] || "/placeholder.svg"}
                alt={`Anh Quan internship photo ${anhQuanLightboxIndex + 1}`}
                fill
                className="object-contain"
              />

              {/* Navigation buttons */}
              <button
                onClick={prevAnhQuanLightboxImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/70 hover:bg-black/90 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Previous image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextAnhQuanLightboxImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/70 hover:bg-black/90 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Next image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Dot indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {anhQuanGalleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setAnhQuanLightboxIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === anhQuanLightboxIndex ? "bg-[#D4AF37] w-8" : "bg-white/60 hover:bg-white/90"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>

              {/* Image counter */}
              <div className="absolute top-4 right-4 z-20 bg-black/70 px-3 py-1.5 rounded-full">
                <span className="text-sm text-white font-cinzel font-semibold">
                  {anhQuanLightboxIndex + 1} / {anhQuanGalleryImages.length}
                </span>
              </div>
            </div>

            {/* Close button */}
            <button
              onClick={() => setAnhQuanLightboxOpen(false)}
              className="absolute -top-12 right-0 w-10 h-10 flex items-center justify-center text-white hover:text-[#D4AF37] transition-colors duration-300"
              aria-label="Close lightbox"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Thumbnail strip */}
            <div className="absolute -bottom-24 left-0 right-0 flex justify-center gap-2 px-4">
              {anhQuanGalleryImages.map((imageSrc, index) => (
                <button
                  key={index}
                  onClick={() => setAnhQuanLightboxIndex(index)}
                  className={`relative w-20 h-20 rounded-md overflow-hidden border-2 transition-all duration-300 ${
                    index === anhQuanLightboxIndex
                      ? "border-[#D4AF37] ring-2 ring-[#D4AF37] scale-110"
                      : "border-white/30 hover:border-white/60"
                  }`}
                >
                  <Image
                    src={imageSrc || "/placeholder.svg"}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
      {/* </CHANGE> */}

      {signatureOfClayLightboxOpen && (
        <div
          className="fixed inset-0 z-[110] bg-black/95 backdrop-blur-sm flex items-center justify-center p-8"
          onClick={() => setSignatureOfClayLightboxOpen(false)}
        >
          <div className="relative flex items-center gap-6 w-full max-w-6xl h-[85vh]" onClick={(e) => e.stopPropagation()}>
            {/* Previous button - outside frame */}
            <button
              onClick={prevSignatureOfClayLightboxImage}
              className="flex-shrink-0 z-20 bg-black/70 hover:bg-black/90 text-white p-4 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Main image container */}
            <div className="relative flex-1 h-full">
              <div className="relative w-full h-full rounded-lg overflow-hidden border-4 border-[#8B7355] shadow-2xl">
                <div className="absolute inset-0 border-2 border-[#D4AF37] rounded-md m-1 pointer-events-none z-10"></div>
                <Image
                  src={chambers[3].galleryImages?.[signatureOfClayLightboxIndex] || "/placeholder.svg"}
                  alt={`The Signature of Clay artwork ${signatureOfClayLightboxIndex + 1}`}
                  fill
                  className="object-contain"
                />

                {/* Dot indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                  {chambers[3].galleryImages?.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setSignatureOfClayLightboxIndex(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        index === signatureOfClayLightboxIndex ? "bg-[#D4AF37] w-8" : "bg-white/60 hover:bg-white/90"
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Image counter */}
                <div className="absolute top-4 right-4 z-20 bg-black/70 px-3 py-1.5 rounded-full">
                  <span className="text-sm text-white font-cinzel font-semibold">
                    {signatureOfClayLightboxIndex + 1} / {chambers[3].galleryImages?.length || 0}
                  </span>
                </div>
              </div>

              {/* Close button */}
              <button
                onClick={() => setSignatureOfClayLightboxOpen(false)}
                className="absolute -top-12 right-0 w-10 h-10 flex items-center justify-center text-white hover:text-[#D4AF37] transition-colors duration-300"
                aria-label="Close lightbox"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Thumbnail strip */}
              <div className="absolute -bottom-24 left-0 right-0 flex justify-center gap-2 px-4">
                {chambers[3].galleryImages?.map((imageSrc, index) => (
                  <button
                    key={index}
                    onClick={() => setSignatureOfClayLightboxIndex(index)}
                    className={`relative w-20 h-20 rounded-md overflow-hidden border-2 transition-all duration-300 ${
                      index === signatureOfClayLightboxIndex
                        ? "border-[#D4AF37] ring-2 ring-[#D4AF37] scale-110"
                        : "border-white/30 hover:border-white/60"
                    }`}
                  >
                    <Image
                      src={imageSrc || "/placeholder.svg"}
                      alt={`Thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Next button - outside frame */}
            <button
              onClick={nextSignatureOfClayLightboxImage}
              className="flex-shrink-0 z-20 bg-black/70 hover:bg-black/90 text-white p-4 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="Next image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          {/* </CHANGE> */}
        </div>
      )}

      {dongThapLightboxOpen && (
        <div
          className="fixed inset-0 z-[110] bg-black/95 backdrop-blur-sm flex items-center justify-center p-8"
          onClick={() => setDongThapLightboxOpen(false)}
        >
          <div className="relative w-full max-w-5xl h-[85vh]" onClick={(e) => e.stopPropagation()}>
            {/* Main image */}
            <div className="relative w-full h-full rounded-lg overflow-hidden border-4 border-[#8B7355] shadow-2xl">
              <div className="absolute inset-0 border-2 border-[#D4AF37] rounded-md m-1 pointer-events-none z-10"></div>
              <Image
                src={dongThapGalleryImages[dongThapLightboxIndex] || "/placeholder.svg"}
                alt={`Dong Thap trip photo ${dongThapLightboxIndex + 1}`}
                fill
                className="object-contain"
              />

              {/* Navigation buttons */}
              <button
                onClick={prevDongThapImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/70 hover:bg-black/90 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Previous image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextDongThapImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/70 hover:bg-black/90 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Next image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Dot indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {dongThapGalleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setDongThapLightboxIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === dongThapLightboxIndex ? "bg-[#D4AF37] w-8" : "bg-white/60 hover:bg-white/90"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>

              {/* Image counter */}
              <div className="absolute top-4 right-4 z-20 bg-black/70 px-3 py-1.5 rounded-full">
                <span className="text-sm text-white font-cinzel font-semibold">
                  {dongThapLightboxIndex + 1} / {dongThapGalleryImages.length}
                </span>
              </div>
            </div>

            {/* Close button */}
            <button
              onClick={() => setDongThapLightboxOpen(false)}
              className="absolute -top-12 right-0 w-10 h-10 flex items-center justify-center text-white hover:text-[#D4AF37] transition-colors duration-300"
              aria-label="Close lightbox"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Thumbnail strip */}
            <div className="absolute -bottom-24 left-0 right-0 flex justify-center gap-2 px-4">
              {dongThapGalleryImages.map((imageSrc, index) => (
                <button
                  key={index}
                  onClick={() => setDongThapLightboxIndex(index)}
                  className={`relative w-20 h-20 rounded-md overflow-hidden border-2 transition-all duration-300 ${
                    index === dongThapLightboxIndex
                      ? "border-[#D4AF37] ring-2 ring-[#D4AF37] scale-110"
                      : "border-white/30 hover:border-white/60"
                  }`}
                >
                  <Image
                    src={imageSrc || "/placeholder.svg"}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
      {/* </CHANGE> */}

      {tutoringLightboxOpen && (
        <div
          className="fixed inset-0 z-[110] bg-black/95 backdrop-blur-sm flex items-center justify-center p-8"
          onClick={() => setTutoringLightboxOpen(false)}
        >
          <div className="relative w-full max-w-5xl h-[85vh]" onClick={(e) => e.stopPropagation()}>
            {/* Main image */}
            <div className="relative w-full h-full rounded-lg overflow-hidden border-4 border-[#8B7355] shadow-2xl">
              <div className="absolute inset-0 border-2 border-[#D4AF37] rounded-md m-1 pointer-events-none z-10"></div>
              <Image
                src={tutoringGalleryImages[tutoringLightboxIndex] || "/placeholder.svg"}
                alt={`Tutoring photo ${tutoringLightboxIndex + 1}`}
                fill
                className="object-contain"
              />

              {/* Navigation buttons */}
              <button
                onClick={prevTutoringImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/70 hover:bg-black/90 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Previous image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextTutoringImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/70 hover:bg-black/90 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Next image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Dot indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {tutoringGalleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setTutoringLightboxIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === tutoringLightboxIndex ? "bg-[#D4AF37] w-8" : "bg-white/60 hover:bg-white/90"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>

              {/* Image counter */}
              <div className="absolute top-4 right-4 z-20 bg-black/70 px-3 py-1.5 rounded-full">
                <span className="text-sm text-white font-cinzel font-semibold">
                  {tutoringLightboxIndex + 1} / {tutoringGalleryImages.length}
                </span>
              </div>
            </div>

            {/* Close button */}
            <button
              onClick={() => setTutoringLightboxOpen(false)}
              className="absolute -top-12 right-0 w-10 h-10 flex items-center justify-center text-white hover:text-[#D4AF37] transition-colors duration-300"
              aria-label="Close lightbox"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Thumbnail strip */}
            <div className="absolute -bottom-24 left-0 right-0 flex justify-center gap-2 px-4">
              {tutoringGalleryImages.map((imageSrc, index) => (
                <button
                  key={index}
                  onClick={() => setTutoringLightboxIndex(index)}
                  className={`relative w-20 h-20 rounded-md overflow-hidden border-2 transition-all duration-300 ${
                    index === tutoringLightboxIndex
                      ? "border-[#D4AF37] ring-2 ring-[#D4AF37] scale-110"
                      : "border-white/30 hover:border-white/60"
                  }`}
                >
                  <Image
                    src={imageSrc || "/placeholder.svg"}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
      {/* </CHANGE> */}
      {nursingHomeLightboxOpen && (
        <div
          className="fixed inset-0 z-[110] bg-black/95 backdrop-blur-sm flex items-center justify-center p-8"
          onClick={() => setNursingHomeLightboxOpen(false)}
        >
          <div className="relative w-full max-w-5xl h-[85vh]" onClick={(e) => e.stopPropagation()}>
            {/* Main image */}
            <div className="relative w-full h-full rounded-lg overflow-hidden border-4 border-[#8B7355] shadow-2xl">
              <div className="absolute inset-0 border-2 border-[#D4AF37] rounded-md m-1 pointer-events-none z-10"></div>
              <Image
                src={nursingHomeGalleryImages[nursingHomeLightboxIndex] || "/placeholder.svg"}
                alt={`Nursing home photo ${nursingHomeLightboxIndex + 1}`}
                fill
                className="object-contain"
              />

              {/* Navigation buttons */}
              <button
                onClick={prevNursingHomeImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/70 hover:bg-black/90 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Previous image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextNursingHomeImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/70 hover:bg-black/90 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Next image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Dot indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {nursingHomeGalleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setNursingHomeLightboxIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === nursingHomeLightboxIndex ? "bg-[#D4AF37] w-8" : "bg-white/60 hover:bg-white/90"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>

              {/* Image counter */}
              <div className="absolute top-4 right-4 z-20 bg-black/70 px-3 py-1.5 rounded-full">
                <span className="text-sm text-white font-cinzel font-semibold">
                  {nursingHomeLightboxIndex + 1} / {nursingHomeGalleryImages.length}
                </span>
              </div>
            </div>

            {/* Close button */}
            <button
              onClick={() => setNursingHomeLightboxOpen(false)}
              className="absolute -top-12 right-0 w-10 h-10 flex items-center justify-center text-white hover:text-[#D4AF37] transition-colors duration-300"
              aria-label="Close lightbox"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Thumbnail strip */}
            <div className="absolute -bottom-24 left-0 right-0 flex justify-center gap-2 px-4">
              {nursingHomeGalleryImages.map((imageSrc, index) => (
                <button
                  key={index}
                  onClick={() => setNursingHomeLightboxIndex(index)}
                  className={`relative w-20 h-20 rounded-md overflow-hidden border-2 transition-all duration-300 ${
                    index === nursingHomeLightboxIndex
                      ? "border-[#D4AF37] ring-2 ring-[#D4AF37] scale-110"
                      : "border-white/30 hover:border-white/60"
                  }`}
                >
                  <Image
                    src={imageSrc || "/placeholder.svg"}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
      {/* </CHANGE> */}
    </div>
  )
}
