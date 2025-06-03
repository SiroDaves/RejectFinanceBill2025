import Link from 'next/link';
import { bio } from "@/utils/data/bio";
import { BsGithub } from "react-icons/bs";

const Footer: React.FC = () => {
  const currentYear: number = new Date().getFullYear();
   const githubUrl = `${bio.github}/RejectFinanceBill2025/fork`;
   const githubForkUrl = `${bio.github}/RejectFinanceBill2025/fork`;
  return (
    <div className="relative border-t bg-black border-[#353951] text-white">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">
            © {currentYear} #RejectFinanceBill2025
          </p>
          <div className="flex items-center gap-5">
            <Link
              target="_blank"
              href={githubUrl}
              className="flex items-center gap-2 uppercase hover:text-[#16f2b3]"
            >
              <BsGithub size={30} />
              <span>Github</span>
            </Link>
        </div>
      </div>
    </div>
    </div >
  );
};

export default Footer;