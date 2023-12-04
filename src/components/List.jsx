import React from 'react';
import '@assets/scss/list.scss';

export default function List({ title, list_item }) {
  return (
    <>
      <h2 className="text-center my-4 mb-10 text-4xl ">{title}</h2>
      <div className="flex justify-around flex-row flex-wrap">
        {list_item.map((item, index) => {
          return (
            <div className="flex-1" key={index}>
              <div className="box mx-auto h-[253px] w-[311px] border-solid border-2 mb-10 border-black rounded-xl">
                <a href={item.url}> 
                    <img src={item.img} alt={`ảnh ${index}`}/>
                </a>
              </div>
            </div>
          );
        })}
        {/* <div className="flex-1">
          <div className="box mx-auto h-[253px] w-[311px] border-solid border-2 border-black rounded-xl"></div>
        </div>
        <div className="flex-1">
          <div className="box"></div>
          <img src="" alt="" />
        </div>
        <div className="flex-1">
          <div className="box"></div>
        </div> */}
      </div>
    </>
  );
}
