import React, { Fragment } from "react";

const Sections = ({ info }) => {
  
  const { titulo, texto, img, profile } = info;

  return (
    <Fragment>
      <div className="w-64 m-4">
        <div className="border-2 border-gray-400 rounded-lg bg-white p-4 flex flex-col justify-between leading-normal hover:bg-sky-500">
          <div className="mb-8 h-64 mb-16">
            <p className="text-sm text-gray-600 flex items-center">
              <img className="h-40 w-full" src={img} alt="Picture" />
            </p>
            <div className="text-gray-900 font-bold text-xl mb-2 ">
              {titulo}
            </div>
            <p className="text-gray-700 text-base">
              {texto}
            </p>
          </div>
          <div className="flex items-center">
            <img
              className="w-28 h-20 rounded-full mr-8"
              src={profile}
              alt="Avatar of user"
            />
            <div className="text-sm">
              <p className="text-gray-900 leading-none">Jonathan Reinink</p>
              <p className="text-gray-600">Aug 18</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Sections;
