import React from 'react';

export default function List({ title, list_item }) {
  return (
    <div className="list-item overflow-scroll">
      <h2 className="text-center my-4 mb-10 text-4xl ">{title}</h2>
      <div className="flex justify-around flex-row flex-wrap overflow-x-auto ">
        {list_item.map((item, index) => {
          return (
            <div className="flex-1" key={index}>
              <div className="box mx-auto h-[253px] w-[311px] border-solid border-2 mb-10 border-black rounded-xl">
                <a href={item.url}>
                  <img src={item.img} alt={`ảnh ${index}`} />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
