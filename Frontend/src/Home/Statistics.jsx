import { useEffect, useRef, useState } from "react";
import Reveal from "../Components/Reveal";

const Statistics = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);

  const statRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (!entry.isIntersecting) return;

        const duration = 1800;
        const startTime = performance.now();

        const animate = (currentTime) => {
          const progress = Math.min(
            (currentTime - startTime) / duration,
            1
          );

          // Smooth easing
          const easeOut = 1 - Math.pow(1 - progress, 3);

          setCount(Math.floor(1200 * easeOut));
          setCount2(Math.floor(4500 * easeOut));
          setCount3(Math.floor(100 * easeOut));
          setCount4(Math.floor(95 * easeOut));

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };

        requestAnimationFrame(animate);

        observer.disconnect();
      },
      {
        threshold: 0.3,
      }
    );

    if (statRef.current) {
      observer.observe(statRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Reveal>
      <section
        ref={statRef}
        className="w-full bg-gray-100 py-16 md:py-20 mt-15"
      >
        <div className="max-w-7xl mx-auto px-5">

          {/* HEADER */}

          <div className="text-center mb-12">

            <p className="text-blue-600 text-sm md:text-base font-semibold uppercase tracking-widest">
              Our Achievements
            </p>

            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3">
              Numbers That Speak For Us
            </h2>

            <p className="max-w-2xl mx-auto text-gray-600 mt-4 text-base md:text-lg leading-relaxed">
              Our commitment to quality service and customer satisfaction
              continues to make a difference.
            </p>

          </div>


          {/* STATISTICS */}

          <div
            className="
              grid
              grid-cols-2
              lg:grid-cols-4
              bg-white
              rounded-2xl
              shadow-sm
              border
              border-gray-200
              overflow-hidden
            "
          >

            {/* LISTED PROPERTIES */}

            <div
              className="
                flex
                flex-col
                items-center
                justify-center
                text-center
                px-4
                py-9
                md:px-6
                md:py-12
                border-r
                border-b
                lg:border-b-0
                border-gray-200
              "
            >

              <div
                className="
                  w-12
                  h-12
                  md:w-14
                  md:h-14
                  flex
                  items-center
                  justify-center
                  rounded-full
                  bg-blue-50
                  text-blue-600
                  text-lg
                  md:text-xl
                  mb-5
                "
              >
                <i className="fa-solid fa-house"></i>
              </div>

              <h3 className="text-3xl md:text-5xl font-extrabold text-gray-900 tabular-nums">
                {count.toLocaleString()}+
              </h3>

              <p className="text-gray-500 font-medium text-xs sm:text-sm md:text-base mt-2">
                Listed Properties
              </p>

            </div>


            {/* HAPPY CLIENTS */}

            <div
              className="
                flex
                flex-col
                items-center
                justify-center
                text-center
                px-4
                py-9
                md:px-6
                md:py-12
                border-b
                lg:border-b-0
                lg:border-r
                border-gray-200
              "
            >

              <div
                className="
                  w-12
                  h-12
                  md:w-14
                  md:h-14
                  flex
                  items-center
                  justify-center
                  rounded-full
                  bg-blue-50
                  text-blue-600
                  text-lg
                  md:text-xl
                  mb-5
                "
              >
                <i className="fa-solid fa-users"></i>
              </div>

              <h3 className="text-3xl md:text-5xl font-extrabold text-gray-900 tabular-nums">
                {count2.toLocaleString()}+
              </h3>

              <p className="text-gray-500 font-medium text-xs sm:text-sm md:text-base mt-2">
                Happy Clients
              </p>

            </div>


            {/* AWARDS */}

            <div
              className="
                flex
                flex-col
                items-center
                justify-center
                text-center
                px-4
                py-9
                md:px-6
                md:py-12
                border-r
                border-gray-200
              "
            >

              <div
                className="
                  w-12
                  h-12
                  md:w-14
                  md:h-14
                  flex
                  items-center
                  justify-center
                  rounded-full
                  bg-blue-50
                  text-blue-600
                  text-lg
                  md:text-xl
                  mb-5
                "
              >
                <i className="fa-solid fa-award"></i>
              </div>

              <h3 className="text-3xl md:text-5xl font-extrabold text-gray-900 tabular-nums">
                {count3}+
              </h3>

              <p className="text-gray-500 font-medium text-xs sm:text-sm md:text-base mt-2">
                Awards
              </p>

            </div>


            {/* SATISFACTION */}

            <div
              className="
                flex
                flex-col
                items-center
                justify-center
                text-center
                px-4
                py-9
                md:px-6
                md:py-12
              "
            >

              <div
                className="
                  w-12
                  h-12
                  md:w-14
                  md:h-14
                  flex
                  items-center
                  justify-center
                  rounded-full
                  bg-blue-50
                  text-blue-600
                  text-lg
                  md:text-xl
                  mb-5
                "
              >
                <i className="fa-solid fa-face-smile"></i>
              </div>

              <h3 className="text-3xl md:text-5xl font-extrabold text-gray-900 tabular-nums">
                {count4}%
              </h3>

              <p className="text-gray-500 font-medium text-xs sm:text-sm md:text-base mt-2">
                Client Satisfaction
              </p>

            </div>

          </div>

        </div>
      </section>
    </Reveal>
  );
};

export default Statistics;