import Image from "next/image";
import humanImage from "@/public/images/Human.svg";
import { Title } from "@/src/shared/ui";
import Link from "next/link";


export default function Home() {

  return (
    <>
      <section className="max-w-[1200px] px-[20px] mx-auto mb-[20px] md:mb-[100px]">
        <div className="relative inline-flex items-end w-full min-h-[198px] md:min-h-[315px] lg:min-h-[700px]">
          <Title size="lg" className="z-10 lg:mb-[60px]">Welcome to The NicoTopica.ru my mission is innovation.</Title>
          <div className="absolute right-0 z-0 h-[198px] w-[198px] md:h-[315px] md:w-[198px] lg:h-[700px] lg:w-[440px]">
            <Image src={humanImage} alt="Human" fill priority />
          </div>
        </div>
      </section>
      <section className="py-[60px] px-[20px] md:py-[100px] bg-black flex-grow">
        <div className="max-w-[1200px] mx-auto">
          <Title size="sm" className="mb-[40px]">Ready to explore my site? <br /> Lets go!</Title>
          <div className="flex flex-col items-center md:flex-row gap-[10px] uppercase">
            <Link href="/login" className="w-full md:w-auto bg-(--color-teal) px-[15px] py-[10px] uppercase">
              Log in
            </Link>
            <span className="hiden md:block uppercase">Or</span>
            <Link href="/signup" className="w-full md:w-auto bg-(--color-orange) px-[15px] py-[10px] uppercase">
              Sign up
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}