import React from "react";

const SubscribeSection = () => (
  <div className="bg-white mb-20 p-6 rounded-lg max-w-[405px] min-w-[313px] w-full col-span-2 md:col-span-1">
    <h4 className="text-xl mb-1">Subscribe to newsletter</h4>
    <p className="text-left text-base font-normal">
      Subscribe now to receive tips on how to take your business to the next
      level.
    </p>
    <div className="mt-4 flex justify-between text-center items-center">
      <button className="border border-gray-400 rounded-xl pl-3 pr-3 pt-3 pb-3 transition hover:bg-slate-300">
        Enter your email
      </button>
      <button className="pl-3 pr-3 pt-3 pb-3 bg-blue-400 text-white rounded-xl font-semibold text-base hover:bg-blue-500">
        Subscribe
      </button>
    </div>
  </div>
);

export default SubscribeSection;
