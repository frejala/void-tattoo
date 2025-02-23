import { Copyright } from "@/components/footer/copyright";
import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/header";

type Props = {
  children: React.ReactNode;
};

export default function LandingLayout({ children }: Props) {
  return (
    <div className="max-w-480 mx-auto overflow-hidden bg-white">
      <Header />
      <main className="mt-20">{children}</main>
      <Footer />
      <Copyright />
    </div>
  );
}
