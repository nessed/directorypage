import Image from "next/image";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

// Define your component
export default function Home() {
  return (
    <div className="flex flex-col min-h-full">
      <div className="relative flex items-center h-full w-full bg-center bg-no-repeat bg-cover" style={{ backgroundImage: 'url("/bgdimmed.jpg")' }}>
        <div className="flex flex-col h-screen w-full justify-between">
          <div className="fixed z-10 sm:flex flex-col bg-white w-full border border-b-gray-300 shadow-xl navbar order-1 py-2 text-sm">
            <nav className="flex-row">
              <div className="text-blue-900 pl-3 lg:text-lg text-md flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex flex-row">
                    <img className="rounded-lg border w-10 h-12 border-white pb-1 " src="https://www.lsm.edu.pk/static/media/lsm.60044558.png" />
                    {/* <div className="px-7 text-white font-sans font-thin font-bold text-sm">
                      <span className="text-center text-white"></span>
                      <span className="font-"></span>
                      <span className="text-justify block font-thin items-center">Directories</span>
                    </div> */}
                  </div>
                </div>
                <div className="flex px-2 text-sm flex-row justify-between items-center">
                  <a href="" className="px-5 hover:text-blue-300 text-lg lg:text-xl">Home</a>
                  <a href="" className="px-5 hover:text-blue-300 text-lg lg:text-xl justify-end">Contact us</a>
                  <a href="" className="pr-5 hover:text-blue-300 text-lg text-justify lg:text-xl">About us</a>
                </div>
              </div>
            </nav>
          </div>

          <div className="flex flex-col">
            <div className="absolute top-[135px] left-10 sm:py-10 p-8 lg:text-6xl text-2xl text-center py-bg- text-white font-thin font-bold lg:text-justify  bg-opacity-50 bg-blue-800">
              Pakistans First Directory on<span className="lg:block"> Construction & Allied Industries</span>
            </div>

            <div className="absolute top-[300px] left-[8px] p-8 text-base sm:text-3xl sm:py-20 lg:text-justify text-white font-bold font-thin font-semibold font-thin bg-opacity-50 font-bold">
              The First-Ever Construction Industry Directory is a vital resource for professionals, featuring key players, companies, and organizations. It serves as a reference source for networking and business expansion, covering architectural services, construction firms, and more. The PDF version will be globally accessible in spring 2024.
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex-row order-5 py-5 text-white bg-blue-900 text-center w-full">
          About Us
        </div>
        <div className="order-6 pb-20">
          <div className="text-blue-900 font-bold lg:ml-[100px] lg:mt-20 lg:ml-5 mt-[30px] lg:text-3xl justify-center ml-[128px] text-xl underline ">Who We Are</div>
          <div className="lg:ml-6 mt-5 text-black lg:ml-[100px] lg:mr-[500px] lg:text-md flex justify-center mx-10 ml-18 text-center lg:text-justify">Welcome to Pakistan Professional Directories, a pioneering force in the business community for the last three decades. As a leading name in research and publications, we take pride in our commitment to supporting and uplifting industries that play a pivotal role in our economy. The Lahore School of Management (LSM) is delighted to introduce the &quotNext Directory of Construction and Real Estate Industry of Pakistan,&quot a testament to our dedication to fostering growth and collaboration.</div>
        </div>
      </div>

      {/* <div className="flex-row order-7 py-5 text-white bg-blue-900 text-center w-full">Other Projects</div>
      <div className="px-60 py-[120px] bg-white order-8 flex justify-center">
      <div className=" border border-black bg-blue-900 border-opacity-0 shadow-lg w-full flex">
<div className="text-3xl text-white rounded font-bold block flex justify-start">Pak Health and Hospital Directory</div>
      </div>
<div className="bg-rounded-xl bg-black flex justify-center"><Image className=" " src="/book.png" height={100} width={100}/> </div>
      </div> */}
    </div>
  );
}
