import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full mt-5 border-b-2 pb-7 sm:px-4 px-2">
      <Link href="/" className="flex items-center space-x-2">
        <div className="w-12 h-12 flex justify-center items-center bg-gray-200 rounded-full overflow-hidden">
          <Image
            alt="header text"
            src="/imageIcon.png"
            className="object-cover w-full h-full"
            width={48}
            height={48}
          />
        </div>
        <h1 className="relative text-blue-500 sm:text-5xl text-3xl font-bold ml-2 tracking-tight font-montserrat">
          Làm nét ảnh cũ
        </h1>
      </Link>


      <a
        href="https://play.google.com/store/apps/details?id=com.dancargame.test"
        target="_blank"
        rel="noreferrer"
        className="flex items-center space-x-1 text-orange-500 hover:text-orange-600"
      >
        <Image
          alt="Dan Car Game"
          src="/vercelLogo.png"
          className="sm:w-10 sm:h-[34px] w-8 h-[28px] rounded-full rounded-none sm:rounded-none sm:rounded-r-full"
          width={32}
          height={28}
        />
        <span className="text-lg font-semibold">Dan Car Game</span>
      </a>
    </header>


  );
}
