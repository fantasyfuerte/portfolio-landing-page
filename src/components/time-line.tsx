import { dataAboutPage } from "@/data";
import React from "react";

function TimeLine() {
  return (
    <div className="flex flex-col justify-center divide-y divide-slate-200">
      <div className="w-full max-w-3xl mx-auto md:pb-40 md:pt-20">
        <div className="-my-6">
          {dataAboutPage.map((data) => {
            return (
              <div key={data.id} className="relative py-6 pl-8 sm:pl-3">
                <div className="flex flex-col items-center justify-center">
                  <div className="text-center text-3xl font-bold text-slate-900">
                    {data.title}
                  </div>
                  <div className="text-center text-lg font-medium text-slate-500">
                    {data.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TimeLine;
