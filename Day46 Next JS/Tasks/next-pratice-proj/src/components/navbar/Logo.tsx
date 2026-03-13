import { Gravitas_One } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const gravitas = Gravitas_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-gravitas",
});

export default function Logo() {
  return (
    <Link href="/home" className="flex items-center gap-2">
      <Image
        src="/logo.png"
        alt="MyStore Logo"
        width={40}
        height={40}
        priority
      />
      <span className={`${gravitas.className} font-heading text-xl text-blue-600`}>
        MyStore
      </span>
    </Link>
  );
}
