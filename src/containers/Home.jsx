import '@assets/scss/home.scss';
import React from 'react';
import Typewriter from 'typewriter-effect';

export default function Home() {
  return (
    <section id="home">
      <div className="h-full flex items-center">
        <div className="text-center w-full">
          <span>Wellcome to my portfolio</span>
          <h1>I'm Lê Đình Hiếu</h1>
          <b><span>I am a </span> 
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(' front end programmer')
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString(' web deverloper')
                  .start();
              }}
            />
          </b>
        </div>
      </div>
    </section>
  );
}
