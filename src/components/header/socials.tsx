import { socialData } from "@/constants";
import Link from "next/link";

export function Socials() {
  return (
    <ul className="flex justify-center items-center gap-x-[30px]">
      {socialData.map((item, index) => (
        <li key={index}>
          <Link href={item.href}>{item.icon}</Link>
        </li>
      ))}
    </ul>
  );
}
