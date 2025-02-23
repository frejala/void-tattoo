import { navData } from "@/constants";

import { Socials } from "./socials";

export function NavMobile({ onClick }: { onClick: () => void }) {
  const { items } = navData;
  return (
    <div className="w-full h-full flex flex-col justify-evenly overflow-hidden">
      <ul className="flex flex-col justify-center items-center gap-y-6 py-6 mb-8">
        {items.map((item, index) => (
          <li key={index}>
            <a
              className="text-2xl font-primary uppercase"
              href={item.href}
              onClick={(e) => {
                e.preventDefault();

                onClick();
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
            </a>
          </li>
        ))}
      </ul>
      <div className="text-2xl">
        <Socials />
      </div>
    </div>
  );
}
