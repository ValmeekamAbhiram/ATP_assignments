import React from "react";

function Profile({data}) {
  return (
     <div className="w-full sm:w-[320px] md:w-[340px] bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition flex flex-col">
      
      <img className="w-full h-[180px] md:h-[200px] object-cover" src={data.image} alt="Image"/>

      <div className="p-5 flex flex-col flex-grow">
        <h4 className="font-semibold text-lg mb-1">{data.title}</h4>
        <p className="text-gray-600 text-sm mb-3">{data.description}</p>

        <div className="flex items-center justify-between mt-auto text-xs text-gray-500">
          
          <div className="flex items-center gap-2">
            <img className="w-6 h-6 rounded-full object-cover" src={data.authorImg} alt="Image"/>
            <span>{data.author}</span>
          </div>

          <span>{data.date}</span>
        </div>
      </div>
    </div>
  );
}

export default Profile;