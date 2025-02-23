import { navData } from "@/constants";
import Link from "next/link";

export function Nav() {
  const { items } = navData;

  return (
    <nav>
      <ul className="flex gap-x-14.5">
        {items.map((item, index) => (
          <li key={index} className="group">
            <Link
              className="link relative flex flex-col"
              href={item.href}
              onClick={(e) => {
                e.preventDefault();

                const target = document.querySelector(item.href);
                if (!target) return;

                const header = document.querySelector("header");
                const offset = header ? -header.offsetHeight : -100;
                const bodyRect = document.body.getBoundingClientRect().top;
                const elementRect = target.getBoundingClientRect().top;
                const elementPosition = elementRect - bodyRect;
                const offsetPosition = elementPosition + offset;

                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth",
                });
              }}
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-dark transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
