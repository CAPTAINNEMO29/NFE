import React, { Fragment } from 'react';

const LatestNews = ( info ) => {

    const img = info.news.img;
    const autor = info.news.profile;

    return ( 
        <Fragment>
    <div className="p-10">
    <div className=" w-full lg:max-w-full lg:flex border-2 border-cyan-800 rounded-lg">
    <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
    <img className="h-40 w-full md:h-48 md:w-30 md:p-4 sm:h-48 sm:w-30 sm:p-4" src={img} alt="Picture" />
      </div>
      <div className=" p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-xl mb-2">The news GDDR6 and their improvments</div>
          <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
        </div>
        <div className="flex items-center">
          <img className="w-30 h-20 rounded-full mr-4" src={autor} alt="Avatar of Writer" />
          <div className="text-sm">
            <p className="text-gray-900 leading-none">John Smith</p>
            <p className="text-gray-600">Aug 18</p>
          </div>
        </div>
      </div>
    </div>
  </div>
        </Fragment>
     );
}
 
export default LatestNews;