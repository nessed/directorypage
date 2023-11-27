"use client"
import Image from 'next/image';
import FadeIn from 'react-fade-in/lib/FadeIn';


export default function Home() {
  return (
    <div>
      <div className='relative flex items-center h-screen w-screen bg-center bg-no-repeat bg-cover' style={{ backgroundImage: 'url("/bgdimmed.jpg")' }}>
        <div className='flex flex-col h-screen w-screen justify-between'>
          <div className="bg-white w-screen border border-b-gray-300 shadow-lg navbar order-1 py-0 text-sm">
            <nav className='flex-row'>
              <div className='text-blue-900 pl-3 text-lg flex items-center justify-between'>
                <div className='flex items-center'>
                  <div className='flex flex-row'>
                    <img className="rounded-lg border w-5 h-10 border-white pb-1 " src="https://www.lsm.edu.pk/static/media/lsm.60044558.png" />
                    <div className='px-7 text-white font-sans font-thin font-bold text-sm'>
                      <span className='text-center text-white'>.....</span>
                      <span className='font-'>LSM</span>
                      <span className="text-justify block font-thin items-center">Directories</span>
                    </div>
                  </div>
                </div>
                <div className='flex px-2 text-sm'>
                  <a href='' className='px-5 hover:text-blue-300'>Home</a>
                  <a href='' className='px-5 hover:text-blue-300 justify-end'>Contact us</a>
                  <a href='' className='pr-5 hover:text-blue-300'>About us</a>
                </div>
              </div>
            </nav>
          </div>

          <div className='flex order-2 flex-col'>
            <div className='absolute top-20 left-10 p-8 text-4xl   text-white font-thin  font-thin bg-opacity-50 bg-blue-800'>
              Pakistan's First Directory on<span className='block'> Construction & Allied Industries</span>


            </div>
            <img className="absolute top-[60px] right-[90px] w-50 h-40 border-white pb-1 border-opacity-0 bg-opacity-40 rounded-xl border" src="https://www.lsm.edu.pk/static/media/lsm.60044558.png" />

            <div className='absolute top-[220px] left-[8px] p-8 text-xl underline-offset-8 text-white font-bold font-thin font-semibold font-thin bg-opacity-50 font-bold'>The First-Ever Construction Industry Directory is
              a vital resource for professionals,
              featuring key players, companies, and organizations. It serves as a
              reference source for networking and business expansion, covering architectural services,
              construction firms,
              and more. The PDF version will be globally accessible in spring 2024.

            </div>
          </div>

        </div>


      </div>
      <div className='flex order-3  bg-blue-900 font-bold py-5 bg-blue-900'>.</div>
      <div className='flex font-bold justify-center pt-10 underline items-center '>Meet The Team!</div>

      <div className='flex flex-row w-screen'>
      
        <div className='shadow-xl p-10 rounded-2xl my-10 text-center w-1/4 bg-white border border-gray-200 ml-20 text-black'>
          <div className='flex justify-center'>
            <Image className="rounded-[100px]" src="/adnan.jpg" alt="design" width={100} height={100} />
          </div>
          <h3 className='text-lg font-medium pt-8 my-5'>Adnan</h3>
          <p className='py-2'>LOREM IPSUM</p>
          {/* <h4 className=' text-indigo-500'>LOREM IPSUM</h4> */}
          {/* <p className='text-gray-800 py-1 text-white'>Photoshop</p>
            <p className='text-gray-800 py-1 text-white'>Illustrator</p>
            <p className='text-gray-800 py-1 text-white'>Figma</p> */}
        </div>
        <div className='shadow-xl p-10 rounded-2xl my-10 text-center w-1/4 bg-white border border-gray-200 ml-20 text-black'>
          <div className='flex justify-center'>
            <Image className="rounded-[100px]" src="/adnan.jpg" alt="design" width={100} height={100} />
          </div>
          <h3 className='text-lg font-medium pt-8 my-5'>Adnan</h3>
          <p className='py-2'>LOREM IPSUM</p>
          {/* <h4 className=' text-indigo-500'>LOREM IPSUM</h4> */}
          {/* <p className='text-gray-800 py-1 text-white'>Photoshop</p>
            <p className='text-gray-800 py-1 text-white'>Illustrator</p>
            <p className='text-gray-800 py-1 text-white'>Figma</p> */}
        </div>
        <div className='shadow-xl p-10 rounded-2xl my-10 text-center w-1/4 bg-white border border-gray-200 ml-20 text-black'>
          <div className='flex justify-center'>
            <Image className="rounded-[100px]" src="/adnan.jpg" alt="design" width={100} height={100} />
          </div>
          <h3 className='text-lg font-medium pt-8 my-5'>Adnan</h3>
          <p className='py-2'>LOREM IPSUM</p>
          {/* <h4 className=' text-indigo-500'>LOREM IPSUM</h4> */}
          {/* <p className='text-gray-800 py-1 text-white'>Photoshop</p>
            <p className='text-gray-800 py-1 text-white'>Illustrator</p>
            <p className='text-gray-800 py-1 text-white'>Figma</p> */}
        </div>
      </div>
    
    </div>
  );
}
