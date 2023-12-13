import React from 'react';
export default function Contact() {
  return (
    <section id="contact">
      <div className="flex items-center justify-around text-center">
        <div className=" flex-1 " >
          <a href="mailto:ledinhhieu1212003@gmail.com">
          <img src="./assets/images/email.svg" alt="" className="mx-auto"/>
          <span>
            Email:
            dinhhieu203765@gmail.com
          </span>
          </a>
        </div>
        <div className=" flex-1">
          <a href="https://www.facebook.com/ledinhhieu2212">
          <img src="./assets/images/fb.svg" alt="" className="mx-auto" />
            <span>
              Facebook
            </span>
          </a>
        </div>
        <div className=" flex-1">
          <a href="https://github.com/Ledinhhieu2212">
            <img src="./assets/images/Icon.svg" alt="" className="mx-auto" />
            <span>Github</span>
          </a>
        </div>
        <div className=" flex-1">
          <a href="https://twitter.com/ledinhhieu2212">
          <img src="./assets/images/X.svg" alt="" className="mx-auto" />
          <span>Twitter</span>
          </a>
        </div>
      </div>
    </section>
  );
}
