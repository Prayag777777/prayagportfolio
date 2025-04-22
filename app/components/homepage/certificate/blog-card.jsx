// export default function BlogCard({ blog }) {
//   return (
//     <div className="border rounded-lg p-4 shadow hover:shadow-md transition-all duration-300">
//       <h2 className="text-xl font-semibold mb-1">{blog.title}</h2>
//       <p className="text-sm text-gray-500">{blog.issuedBy}</p>
//       <p className="text-sm text-gray-400 mb-2">{blog.date}</p>
//       <p className="text-gray-700">{blog.description}</p>
//     </div>
//   );
// }
import Image from "next/image";

export default function BlogCard({ blog }) {
  return (
    <a
      href={blog.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative bg-[#1a1443] border border-violet-600 rounded-xl overflow-hidden p-4 text-white transition-transform hover:-translate-y-1 hover:shadow-[0_0_20px_#8b5cf6]"
    >
      {/* Glow background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-transparent to-pink-500/20 blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />

      {/* Badge Image */}
      <div className="relative w-full h-48 mb-4 rounded-md overflow-hidden border border-violet-500">
        <Image
          src={blog.badge}
          alt={blog.title}
          fill
          className="object-contain"
        />
      </div>

      {/* Certificate Info */}
      <h2 className="text-lg font-bold mb-1">{blog.title}</h2>
      <p className="text-sm text-violet-300">Issued by: {blog.issuedBy}</p>
      <p className="text-xs text-violet-400 mb-3">{blog.date}</p>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {blog.skills.map((skill, idx) => (
          <span
            key={idx}
            className="text-xs bg-violet-600/20 border border-violet-400 text-violet-100 px-2 py-1 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </a>
  );
}
