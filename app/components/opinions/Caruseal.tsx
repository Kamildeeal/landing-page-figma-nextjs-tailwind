"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import carouselImg from "@/public/mobile/carusel.png";
import Appear from "@/app/animations/AppearHeader";
import FromUpAnimate from "@/app/animations/FromUpAnimate";

const Carousel = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [isDown, setIsDown] = useState<boolean>(false);
  const [startX, setStartX] = useState<number | null>(null);
  const [scrollLeft, setScrollLeft] = useState<number | null>(null);

  useEffect(() => {
    const carousel = carouselRef.current;

    const mouseDownHandler = (e: MouseEvent) => {
      setIsDown(true);
      if (carousel) {
        setStartX(e.pageX - carousel.offsetLeft);
        setScrollLeft(carousel.scrollLeft);
      }
    };

    const mouseLeaveHandler = () => {
      setIsDown(false);
    };

    const mouseUpHandler = () => {
      setIsDown(false);
    };

    const mouseMoveHandler = (e: MouseEvent) => {
      if (!isDown || startX === null || scrollLeft === null) return;
      e.preventDefault();
      if (carousel) {
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 1.5; // adjust scroll speed
        carousel.scrollLeft = scrollLeft - walk;

        // Limit scrolling within carousel boundaries
        const minScrollLeft = 0;
        const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
        if (carousel.scrollLeft < minScrollLeft) {
          carousel.scrollLeft = minScrollLeft;
        }
        if (carousel.scrollLeft > maxScrollLeft) {
          carousel.scrollLeft = maxScrollLeft;
        }
      }
    };

    if (carousel) {
      carousel.addEventListener("mousedown", mouseDownHandler);
      carousel.addEventListener("mouseleave", mouseLeaveHandler);
      carousel.addEventListener("mouseup", mouseUpHandler);
      carousel.addEventListener("mousemove", mouseMoveHandler);
    }

    return () => {
      if (carousel) {
        carousel.removeEventListener("mousedown", mouseDownHandler);
        carousel.removeEventListener("mouseleave", mouseLeaveHandler);
        carousel.removeEventListener("mouseup", mouseUpHandler);
        carousel.removeEventListener("mousemove", mouseMoveHandler);
      }
    };
  }, [isDown, startX, scrollLeft]);

  return (
    <section className="bg-almostBlack w-full">
      <div className="max-w-[1280px] flex flex-col items-center justify-center mx-auto p-2">
        <div className="flex flex-col items-center mx-6">
          <FromUpAnimate>
            <h2 className="text-white text-3xl w-min-[343px] w-max-[767px] text-center mt-10 mb-5">
              See how it works and get started in less than 2 minutes
            </h2>
          </FromUpAnimate>
          <div className="flex flex-col mx-auto w-full max-w-[900px]">
            <Image
              src={carouselImg}
              alt="charts"
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>

          <button className="w-full max-w-[343px] bg-blue-400 text-white h-16 rounded-3xl font-semibold text-lg mt-10 mb-14 hover:bg-blue-500 lg:w-auto lg:px-8 lg:py-4">
            Get Started
          </button>
        </div>
        <div className="w-full bg-gray-600 h-0.5 "></div>
      </div>
      <div className="max-w-[1280px] flex flex-col items-center justify-center mx-auto p-2">
        <FromUpAnimate>
          <h2 className="text-white text-3xl w-min-[343px] w-max-[767px] mx-6 text-left mt-10 mb-5 sm:max-w-[800px] sm:mx-[102px] sm:text-5xl sm:my-12 sm:leading-snug">
            Don&apos;t just take our word for it, see the success stories from
            businesses just like yours.
          </h2>
        </FromUpAnimate>
        <Appear>
          <div
            className="flex flex-col sm:flex-row sm:mx-20 overflow-x-auto cursor-grab"
            ref={carouselRef}
          >
            <div className="bg-white h-max-content px-6 py-8 rounded-lg mb-6 mx-6 sm:max-w-[380px] flex-shrink-0 text-base sm:text-[1.25rem] ">
              <p className=" text-almostBlack">
                “Our business has seen a significant increase in productivity
                since we started using the Growth app.”
              </p>
              <p className="font-semibold text-almostBlack mt-6">
                Katherine Smith
              </p>
              <p className=" text-almostBlack mt-1">Capodopera</p>
            </div>

            <div className="bg-white h-max-content px-6 py-8 rounded-lg mb-6 mx-6 sm:max-w-[380px] flex-shrink-0 text-base sm:text-[1.25rem]">
              <p className=" text-almostBlack">
                “As a small business owner, its important to have a tool that
                can help me keep track of everything. The Growth app has been a
                lifesaver for me, allowing me to manage my contacts, schedule
                appointments, and track progress all in one place.”
              </p>
              <p className="font-semibold  text-almostBlack mt-6">
                Jonathan Lee
              </p>
              <p className=" text-almostBlack mt-1">Red Bolt</p>
            </div>
            <div className="bg-white h-max-content px-6 py-8 rounded-lg mb-6 mx-6 sm:max-w-[380px] flex-shrink-0 text-base sm:text-[1.25rem]">
              <p className="text-almostBlack">
                “The dashboards and reporting feature has provided valuable
                insights into our performance and helped us make data-driven
                decisions. It&apos;s a game changer for us.”
              </p>
              <p className="font-semibold text-almostBlack mt-6">
                David Wilson
              </p>
              <p className=" text-almostBlack mt-1">Slide</p>
            </div>
            <div className="bg-white h-max-content px-6 py-8 rounded-lg mb-6 mx-6 sm:max-w-[380px] flex-shrink-0 text-base sm:text-[1.25rem]">
              <p className=" text-almostBlack">
                “Our business has seen a significant increase in productivity
                since we started using the Growth app.”
              </p>
              <p className=" font-semibold text-almostBlack mt-6">
                Katherine Smith
              </p>
              <p className=" text-almostBlack mt-1">Capodopera</p>
            </div>
            <div className="bg-white px-6 py-8 rounded-lg mb-6 mx-6 sm:max-w-[380px] flex-shrink-0 text-base sm:text-[1.25rem]">
              <p className=" text-almostBlack">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
                repudiandae consequatur veritatis cumque consequuntur laudantium
                obcaecati nobis aliquam eveniet esse ipsum et atque harum,
                reiciendis officia laboriosam hic placeat. Voluptas rem fuga cum
                non recusandae similique numquam quas aut enim? Libero
                voluptatem dolore quis, esse aliquid inventore sint quibusdam
                harum rerum assumenda quisquam iste optio magnam perspiciatis
                sit officia consectetur.
              </p>
              <p className="font-semibold text-almostBlack mt-6">
                Katherine Smith
              </p>
              <p className=" text-almostBlack mt-1">Capodopera</p>
            </div>
          </div>
        </Appear>
      </div>
    </section>
  );
};

export default Carousel;
