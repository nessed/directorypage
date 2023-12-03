// Import required libraries
import Image from 'next/image';
import FadeIn from 'react-fade-in/lib/FadeIn';

// Define your component
export default function Home() {
  return (
    <div className="flex flex-col min-h-full">
      <div className='relative flex items-center h-full w-full bg-center bg-no-repeat bg-cover' style={{ backgroundImage: 'url("/bgdimmed.jpg")' }}>
        <div className='flex flex-col h-screen w-full justify-between'>
          <div className="sm:flex flex-col bg-white w-full border border-b-gray-300 shadow-lg navbar order-1 py-2 text-sm">
            <nav className='flex-row'>
              <div className='text-blue-900 pl-3 text-lg flex items-center justify-between'>
                <div className='flex items-center'>
                  <div className='flex flex-row'>
                    <img className="rounded-lg border w-10 h-12 border-white pb-1 " src="https://www.lsm.edu.pk/static/media/lsm.60044558.png" />
                    <div className='px-7 text-white font-sans font-thin font-bold text-sm'>
                      <span className='text-center text-white'></span>
                      <span className='font-'></span>
                      <span className="text-justify block font-thin items-center">Directories</span>
                    </div>
                  </div>
                </div>
                <div className='flex px-2 text-sm flex-row justify-between '>
                  <a href='' className='px-5 hover:text-blue-300 text-xl'>Home</a>
                  <a href='' className='px-5 hover:text-blue-300 text-xl justify-end'>Contact us</a>
                  <a href='' className='pr-5 hover:text-blue-300 text-xl'>About us</a>
                </div>
              </div>
            </nav>
          </div>

          <div className='flex order-2 flex-col'>
            <div className='absolute top-[135px] left-10 sm:py-10 p-8 text-2xl sm:text-6xl py-bg- text-white font-thin  font-thin bg-opacity-50 bg-blue-800'>
              Pakistan's First Directory on<span className='block'> Construction & Allied Industries</span>
            </div>

            <div className='absolute top-[300px] left-[8px] p-8 text-base sm:text-3xl underline-offset-8 sm:py-20 text-white font-bold font-thin font-semibold font-thin bg-opacity-50 font-bold'>
              The First-Ever Construction Industry Directory is
              a vital resource for professionals,
              featuring key players, companies, and organizations. It serves as a
              reference source for networking and business expansion, covering architectural services,
              construction firms,
              and more. The PDF version will be globally accessible in spring 2024.
            </div>
          </div>
        </div>
      </div>

      <div className='flex-row order-5 py-5 text-white bg-blue-900 text-center w-full'>
        HELLO
      </div>
    </div>
  );
}
