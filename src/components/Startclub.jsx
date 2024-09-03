import React from 'react';
import Folder from '../assets/folder.png';

const Startclub = () => {
  return (
    <div className='pb-10 pl-10'>
      <h1 className='text-left pt-10 font-bold text-3xl' style={{ fontFamily: 'Poppins, sans-serif', color: '#273c60' }}>
        {'</ START A CLUB >'}
      </h1>
      <div className="flex justify-between text-xl items-center pt-3 pb-10 pr-60">
        <p className="font-nanum pl-3">
          Bring a free coding club to your community.<br /><br />
          FSC provides all required materials and training.<br />
          6 months of coding experience required.
        </p>
        <button className="btn btn-xs sm:btn-sm md:btn-md bg-[#334c76] lg:btn-lg text-white">APPLY HERE</button>
      </div>
      <div className="bg-[#506485] rounded-3xl w-[750px] h-[250px] pt-3 pl-3">
        <h1 className='text-left font-bold text-2xl text-white' style={{ fontFamily: 'Poppins, sans-serif' }}>
          {'</ PROVIDED MATERIALS >'}
        </h1>
        <div className="flex justify-around items-center pt-4">
          <div className="flex flex-col items-center">
            <img src={Folder} alt="Curriculum Icon" className="inline-block" style={{ height: '60px', width: 'auto' }} />
            <p className="text-white mt-2 font-nanum">Curriculum</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={Folder} alt="Mentorship Icon" className="inline-block" style={{ height: '60px', width: 'auto' }} />
            <span className="text-white mt-2 font-nanum">Mentorship</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={Folder} alt="Professional Community Icon" className="inline-block" style={{ height: '60px', width: 'auto' }} />
            <span className="text-white mt-2 font-nanum">Professional Community</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Startclub;
