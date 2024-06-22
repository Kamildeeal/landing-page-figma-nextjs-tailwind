"use client"
import { useState } from "react";

export default function Questions() {
  const [open1, setOpen1] = useState(true);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);

  return (
    <div className="flex justify-center items-center m-8 flex-col">
      <h2 className="hidden sm:block text-4xl mb-12">Frequently asked questions</h2>
      <article className="max-w-[836px] w-full">  
        <div>
        <div>
          <div className="flex flex-row gap-10 justify-between">
            <h4 className="text-almostBlack font-semibold text-lg mb-4">
            How does the contact management feature help me keep track of clients and partners?
            </h4>
            <span 
              className="text-2xl font-semibold text-black cursor-pointer"
              onClick={() => setOpen1(prev => !prev)}
            >
              {open1 ? "✕" : "+"}
            </span>
          </div>
          {open1 &&
          <p className="text-base text-customGray">
            Keep track of your contacts, gain valuable insights, analyse live data and performance metrics.
          </p>
          }
           <div 
            className={`h-0.5 w-full mt-4 mb-4 ${open1 ? 'bg-almostBlack' : 'bg-gray-300'}`}
          >
            </div >
        </div>

          <div className="flex flex-row gap-10 justify-between">
            <h4 className="text-almostBlack font-semibold text-lg mb-4">
              Can I customize the dashboards and reporting feature to display the metrics that are most important to my business?
            </h4>
            <span 
              className="text-2xl font-semibold text-black cursor-pointer"
              onClick={() => setOpen2(prev => !prev)}
            >
              {open2 ? "✕" : "+"}
            </span>
          </div>
          {open2 &&
          <p className="text-base text-customGray">
            Of course you can! This is special feature in our offer.
          </p>
          }
           <div 
            className={`h-0.5 w-full mt-4 mb-4 ${open2 ? 'bg-almostBlack' : 'bg-gray-300'}`}
          >
            </div >
        </div>

        <div>
          <div className="flex flex-row gap-10 justify-between">
            <h4 className="text-almostBlack font-semibold text-lg mb-4">
              How does the task management feature help me delegate tasks to my team and track progress?
            </h4>
            <span 
              className="text-2xl font-semibold text-black cursor-pointer"
              onClick={() => setOpen3(prev => !prev)}
            >
              {open3 ? "✕" : "+"}
            </span>
          </div>
          {open3 &&
          <p className="text-base text-customGray">
            Time is money, you will be able to to it quicker!
          </p>
          }
           <div 
            className={`h-0.5 w-full mt-4 mb-4 ${open3 ? 'bg-almostBlack' : 'bg-gray-300'}`}
          >
            </div >
        </div>
        <div>
          <div className="flex flex-row gap-10 justify-between">
            <h4 className="text-almostBlack font-semibold text-lg mb-4">
            Can I collaborate with my team in real-time using all tools?
            </h4>
            <span 
              className="text-2xl font-semibold text-black cursor-pointer"
              onClick={() => setOpen4(prev => !prev)}
            >
              {open4 ? "✕" : "+"}
            </span>
          </div>
          {open4 &&
          <p className="text-base text-customGray">
            Yes, limitless!
          </p>
          }
           <div 
            className={`h-0.5 w-full mt-4 mb-4 ${open4 ? 'bg-almostBlack' : 'bg-gray-300'}`}
          >
            </div >
        </div>
        
        <div>
          <div className="flex flex-row gap-10 justify-between">
            <h4 className="text-almostBlack font-semibold text-lg mb-4">
              Is this app avaliable on all devices?
            </h4>
            <span 
              className="text-2xl font-semibold text-black cursor-pointer"
              onClick={() => setOpen5(prev => !prev)}
            >
              {open5 ? "✕" : "+"}
            </span>
          </div>
          {open5 &&
          <p className="text-base text-customGray">
            We are working on it.
          </p>
          }
           <div 
            className={`h-0.5 w-full mt-4 mb-4 ${open5 ? 'bg-almostBlack' : 'bg-gray-300'}`}
          >
            </div >
        </div>

        <div>
          <div className="flex flex-row gap-10 justify-between">
            <h4 className="text-almostBlack font-semibold text-lg mb-4">
            How does the app help me stay compliant when working with freelancers and contractors?
            </h4>
            <span 
              className="text-2xl font-semibold text-black cursor-pointer"
              onClick={() => setOpen6(prev => !prev)}
            >
              {open6 ? "✕" : "+"}
            </span>
          </div>
          {open6 &&
          <p className="text-base text-customGray">
           We are working on it!
          </p>
          }
           <div 
            className={`h-0.5 w-full mt-4 mb-4 ${open6 ? 'bg-almostBlack' : 'bg-gray-300'}`}
          >
            </div >
        </div>
      </article>
    </div>
  );
}
