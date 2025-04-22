"use client";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { certificates } from "@/utils/data/certificates-data";
import GlowCard from "../../helper/glow-card";

function CertificatesSection() {
  const initialVisible = 3;
  const [visibleCount, setVisibleCount] = useState(initialVisible);

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + initialVisible);
  };

  const isMoreAvailable = visibleCount < certificates.length;

  return (
    <div id="certificates" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="background glow"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Certificates
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 py-8">
        {certificates.slice(0, visibleCount).map((cert, i) => (
          <a
            key={i}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <GlowCard identifier={`certificate-${i}`}>
              <div className="relative p-5 text-white">
                <Image
                  src="/blur-23.svg"
                  alt="blur"
                  width={1080}
                  height={200}
                  className="absolute bottom-0 opacity-80"
                />
                <div className="flex justify-center mb-4">
                  <div className="w-32 h-32 relative">
                    <Image
                      src={cert.badge}
                      alt={`${cert.title} badge`}
                      fill
                      className="rounded-lg object-contain shadow-md"
                    />
                  </div>
                </div>
                <div className="text-center space-y-1">
                  <p className="text-lg font-bold">{cert.title}</p>
                  <p className="text-sm text-[#16f2b3]">{cert.issuedBy}</p>
                  <p className="text-xs text-gray-400">{cert.date}</p>
                  <div className="mt-2 flex flex-wrap gap-1 justify-center text-[11px] text-white/70">
                    {cert.skills.map((skill, idx) => (
                      <span key={idx} className="bg-violet-900/40 px-2 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </GlowCard>
          </a>
        ))}
      </div>

      {isMoreAvailable && (
        <div className="flex justify-center mt-5 lg:mt-12">
          <button
            onClick={handleViewMore}
            className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-6 py-3 text-xs md:text-sm font-medium uppercase tracking-wider text-white transition-all duration-200"
          >
            <span>View More</span>
            <FaArrowRight size={16} />
          </button>
        </div>
      )}
    </div>
  );
}

export default CertificatesSection;
