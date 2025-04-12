import { Linkedin } from "lucide-react";
import { useRef } from "react";
import { useInView } from "@/lib/useInView";

function Profiles() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const leftInView = useInView(leftRef);
  const rightInView = useInView(rightRef);

  return (
    <section id="profiles" className="h-screen flex flex-col md:flex-row bg-black">
      {/* Left Profile */}
      <div
        ref={leftRef}
        className={`flex-1 flex flex-col items-center justify-center p-8 border-b md:border-b-0 md:border-r border-gray-800
          transition-all duration-700
          ${leftInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
      >
        <img
          src="https://media.licdn.com/dms/image/v2/D4D03AQFxKXO9bd2cyg/profile-displayphoto-shrink_800_800/B4DZUgbdb5G8Ag-/0/1740005824749?e=1749686400&v=beta&t=3hTy8ST7i_EXvLV4cr6j_7nC7JsLq98ZANpLyoaGNSo"
          alt="Alexandru Craciun"
          className="w-40 h-40 object-cover rounded-full mb-6 transition-transform duration-300 hover:scale-110"
        />
        <h3 className="text-white text-3xl font-bold mb-2">Alexandru Craciun</h3>
        <a
          href="https://www.linkedin.com/in/alexandru-craciun-180b642a4/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-300 hover:text-blue-400 hover:underline underline-offset-4 transition-all text-lg font-medium"
        >
          <Linkedin className="w-5 h-5" />
          LinkedIn
        </a>
      </div>

      {/* Right Profile */}
      <div
        ref={rightRef}
        className={`flex-1 flex flex-col items-center justify-center p-8
          transition-all duration-700 delay-150
          ${rightInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
      >
        <img
          src="https://media.licdn.com/dms/image/v2/D4D03AQFETobHtVxVSA/profile-displayphoto-shrink_800_800/B4DZWHPv4xHYAc-/0/1741730809120?e=1749686400&v=beta&t=_a2KyTxTNrvYJmKJTTcxRhVKoui3UxNTU99iC-J_9-s"
          alt="Andreas Baschir"
          className="w-40 h-40 object-cover rounded-full mb-6 transition-transform duration-300 hover:scale-110"
        />
        <h3 className="text-white text-3xl font-bold mb-2">Andreas Baschir</h3>
        <a
          href="https://www.linkedin.com/in/andreas-baschir-21b963236/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-300 hover:text-blue-400 hover:underline underline-offset-4 transition-all text-lg font-medium"
            >
          <Linkedin className="w-5 h-5" />
          LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Profiles;
