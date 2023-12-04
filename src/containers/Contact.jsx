import React from 'react';
import Email from '@assets/images/email.svg';
import FB from '@assets/images/fb.svg';
import X from '@assets/images/X.svg';
import Github from '@assets/images/icon.svg';
export default function Contact() {
  return (
    <section id="contact">
      <div className="flex items-center justify-around text-center">
        <div className=" flex-1 " >
          <a href="mailto:ledinhhieu1212003@gmail.com">
          <img src={Email} alt="" className="mx-auto"/>
          <span>
            Email:
            dinhhieu203765@gmail.com
          </span>
          </a>
        </div>
        <div className=" flex-1">
          <a href="https://www.facebook.com/ledinhhieu2212">
          <img src={FB} alt="" className="mx-auto" />
            <span>
              Facebook
            </span>
          </a>
        </div>
        <div className=" flex-1">
          <a href="https://github.com/Ledinhhieu2212">
            <img src={Github} alt="" className="mx-auto" />
            <span>Github</span>
          </a>
        </div>
        <div className=" flex-1">
          <a href="https://twitter.com/ledinhhieu2212">
          <img src={X} alt="" className="mx-auto" />
          <span>Twitter</span>
          </a>
        </div>
      </div>
    </section>
  );
}
