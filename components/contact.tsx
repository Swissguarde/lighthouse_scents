import { Globe } from "lucide-react";
import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { GoMail } from "react-icons/go";

export default function Contact() {
  return (
    <>
      <Link
        href="https://wa.me/2349090500194"
        target="_blank"
        className="bg-green-400 p-3 rounded-md text-white flex items-center justify-center gap-2 flex-1"
      >
        <span>
          <FaWhatsapp size={20} />
        </span>
        <div className="hidden md:block">Contact Us (WhatsApp)</div>
        <div className="md:hidden text-sm">WhatsApp</div>
      </Link>
      <Link
        href="https://www.instagram.com/lightwoxng"
        target="_blank"
        className="bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#dc2743] p-3 rounded-md text-white flex items-center justify-center gap-2 flex-1"
      >
        <span>
          <FaInstagram size={20} />
        </span>
        <div className="hidden md:block ">Instagram</div>
        <div className="md:hidden text-sm">Instagram</div>
      </Link>
      <Link
        href="mailto:lagoslighthouse@gmail.com"
        target="_blank"
        className="bg-gray-800 p-3 rounded-md text-white flex items-center justify-center gap-2 flex-1"
      >
        <span>
          <GoMail size={20} />
        </span>
        <div className="hidden md:block ">Email</div>
        <div className="md:hidden text-sm">Email</div>
      </Link>
      <Link
        href="mailto:lagoslighthouse@gmail.com"
        target="_blank"
        className="bg-blue-800 p-3 rounded-md text-white flex items-center justify-center gap-2 flex-1"
      >
        <span>
          <Globe size={20} />
        </span>
        <div className="hidden md:block ">Our Website</div>
        <div className="md:hidden text-sm">Website</div>
      </Link>
    </>
  );
}
