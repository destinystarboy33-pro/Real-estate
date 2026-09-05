import { useState, useEffect, useRef } from "react";
import Reveal from "../Components/Reveal";

const Statistics = () => {

  const [count, setCount] = useState(0);
  const target = 5000000;

  const [count2, setCount2] = useState(0);
  const target2 = 10000000;

  const [count3, setCount3] = useState(0);
  const target3 = 98;

  // Reference to the statistics section
  const statRef = useRef(null);


  useEffect(() => {

    const observer = new IntersectionObserver(
      (entries) => {

        const entry = entries[0];

        if (entry.isIntersecting) {

          // First counter
          const interval1 = setInterval(() => {
            setCount((prev) => {

              if (prev < target) {
                return prev + 10000;
              }

              clearInterval(interval1);
              return target;
            });
          }, 8);


          // Second counter
          const interval2 = setInterval(() => {
            setCount2((prev) => {

              if (prev < target2) {
                return prev + 20000;
              }

              clearInterval(interval2);
              return target2;
            });
          }, 4);


          // Third counter
          const interval3 = setInterval(() => {
            setCount3((prev) => {

              if (prev < target3) {
                return prev + 2;
              }

              clearInterval(interval3);
              return target3;
            });
          }, 100);


          // Stop observing after animation starts
          observer.disconnect();

        }

      },
      {
        threshold: 0.3
      }
    );


    if (statRef.current) {
      observer.observe(statRef.current);
    }


    return () => {
      observer.disconnect();
    };

  }, []);


  // First display
  let display = count;

  if (count >= 1000000) {
    display = count / 1000000 + "M";
  }
  else if (count >= 1000) {
    display = count / 1000 + "K";
  }


  // Second display
  let display2 = count2;

  if (count2 >= 1000000) {
    display2 = count2 / 1000000 + "M";
  }
  else if (count2 >= 1000) {
    display2 = count2 / 1000 + "K";
  }


  return (
    <Reveal>

      <div ref={statRef}>

        <div className="flex gap-5 items-center justify-center px-15 bg-gray-100 mt-15 py-15">

          {/* Statistics */}

          <div className="w-24">
            <h1 className="text-center font-bold">
              Clients Worldwide
            </h1>

            <p className="text-2xl font-bold text-center tabular-nums">
              {display}+
            </p>
          </div>


          <div className="w-24">
            <h1 className="text-center font-bold">
              Year Of Experience
            </h1>

            <p className="text-2xl font-bold text-center tabular-nums">
              {display2}+
            </p>
          </div>


          <div className="w-24">
            <h1 className="text-center font-bold">
              Customer Satisfaction
            </h1>

            <p className="text-2xl font-bold text-center tabular-nums">
              {count3}%
            </p>
          </div>

        </div>

      </div>

    </Reveal>
  );
};

export default Statistics;