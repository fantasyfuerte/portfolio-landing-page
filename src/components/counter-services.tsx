"use client";

import { dataCounter } from "@/data";
import Counter from "react-countup";

function CounterServices() {
  return (
    <div className="grid justify-between max-w-3xl grid-cols-2 gap-3 mx-auto my-8 md:grid-cols-4 md:gap-6">
      {dataCounter.map(
        ({ id, endCounter, text, lineRight, lineRightMobile }) => (
          <div key={id} className={`${lineRight && "ltr"}`}>
            <div
              className={`${
                lineRightMobile &&
                "px-4 border-2 border-transparent md:border-e-gray-100"
              }`}
            >
              <p>
                + <Counter start={0} end={endCounter} duration={5} />
              </p>
              <p className="text-xs uppercase max-w-[100px]">{text}</p>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default CounterServices;