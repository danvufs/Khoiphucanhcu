import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SquigglyLines from "../components/SquigglyLines";
import { Testimonials } from "../components/Testimonials";

const Home: NextPage = () => {
  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>Khôi phục ảnh cũ</title>
      </Head>

      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-28 mt-20">
        <a
          href=""
          target="_blank"
          rel="noreferrer"
          className="bg-white border rounded-2xl py-1 px-4 text-sm text-gray-500 hover:text-blue-500 hover:border-blue-500 hover:scale-105 transition duration-300 ease-in-out"
        >
          Ứng dụng được tin dùng bởi hơn <span className="font-semibold">200,000</span> người dùng.
        </a>
        <div className="max-w-4xl">
        <h1 className="text-4xl sm:text-6xl font-bold font-display text-gray-800 mb-8">
  Làm nét ảnh cũ{" "}
  <span className="relative text-blue-500">
    {/* <SquigglyLines /> */}
    <span className="relative font-bold">sử dụng trí tuệ nhân tạo (AI)</span>
  </span>{" "}
  cho anh chị em.
</h1>


          <p className="mx-auto mt-12 max-w-xl text-lg text-slate-700 leading-7">
            Bạn có ảnh cũ và khuôn mặt bị mờ? Hãy để AI làm nét chúng nhé. 100% miễn phí!
          </p>
          <div className="flex justify-center space-x-4 mb-16">
            {/* <a
            className="bg-white rounded-xl text-black font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-gray-100 border"
            href="https://youtu.be/FRQtFDDrUXQ"
            target="_blank"
            rel="noreferrer"
          >
            Learn how it's built
          </a> */}

            <Link
              className="bg-blue-500 hover:bg-blue-600 rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8"
              href="/restore"
            >
              Làm nét ảnh của bạn
            </Link>
          </div>
          <div className="flex justify-between items-center w-full flex-col sm:mt-10 mt-6">
            <div className="flex flex-col space-y-10 mt-4 mb-16">
              <div className="flex sm:space-x-2 sm:flex-row flex-col">
                <div>
                  <h2 className="text-lg font-medium mb-2">Ảnh gốc</h2>
                  <div className="w-96 h-96 rounded-2xl overflow-hidden">
                    <Image
                      alt="Original photo of my bro"
                      src="/michael.jpg"
                      className="w-96 h-96 rounded-2xl"
                      width={400}
                      height={400}
                    />
                  </div>
                </div>
                <div className="sm:mt-0 mt-8">
                  <h2 className="text-lg font-medium mb-2">Ảnh sau khi làm nét</h2>
                  <div className="w-96 h-96 rounded-2xl overflow-hidden">
                    <Image
                      alt="Restored photo of my bro"
                      width={400}
                      height={400}
                      src="/michael-new.jpg"
                      className="w-96 h-96 rounded-2xl sm:mt-0 mt-2"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;