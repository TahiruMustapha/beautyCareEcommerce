import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import Hslider1 from "../components/homeSliderImgs/Hslidder1.webp";
import Hslider2 from "./homeSliderImgs/Hslider2.webp";
import Hslider3 from "./homeSliderImgs/Hslider3.webp";
import Hslider4 from "./homeSliderImgs/Hslider4.webp";
import { FreeMode } from "swiper";
import "swiper/css/free-mode";
import i2 from "./cardImages/i2.webp";
import i3 from "./cardImages/i3.webp";
import i4 from "./cardImages/i4.webp";
import i5 from "./cardImages/i5.webp";
import i10 from "./cardImages/i10.webp";
import newsImg from "./homeSliderImgs/newsImg.png";
import newImg2 from "./homeSliderImgs/newImg2.png";
import blog1 from "./homeSliderImgs/blog1.webp";
import blog2 from "./homeSliderImgs/blog2.webp";
import blog3 from "./homeSliderImgs/blog3.webp";
import { ImStarFull, ImStarHalf } from "react-icons/im";
import { SlChemistry } from "react-icons/sl";
import {BsBag, BsGlobe2, BsStar} from "react-icons/bs";
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <div className="w-[90%] ml-auto mr-auto mt-0 mb-[44rem] h-fit ">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper h-[15rem] lg:h-full xl:mt-10  lg:mt-40 md:h-full md:mt-20  w-full mt-10 mb-10"
      >
        <SwiperSlide className="h-full ">
          <img src={Hslider1} alt="img" className=" cursor-pointer h-full  object-cover  " />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Hslider2} alt="img" className=" cursor-pointer h-full  object-cover " />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Hslider3} alt="img" className=" cursor-pointer h-full  object-cover " />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Hslider4} alt="img" className=" cursor-pointer h-full  object-cover " />
        </SwiperSlide>
      </Swiper>

      <div className="  lg:hidden md:hidden xl:hidden  mt-30 weekly__deals w-full h-fit p-5 mb-5 bg-[#f4f4f4] ">
        <p className="flex items-center justify-between w-full">
          <h3 className="pb-2 font-bold">Weekly Deals</h3>
          <h5 className=" cursor-pointer">Show more</h5>
        </p>
        <hr className="mb-5" />

        <div className="  card w-full  h-[80%] flex items-center ">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper h-fit  w-[100%] p-5  rounded-t-2xl "
          >
            <SwiperSlide className="   ">
              <div className="text-center ">
                <img src={i5} alt="img" className="w-[100%] mb-1 " />
                <p>Nuxe Men 24 Hour Protection</p>
                <p>Deodorant Roll-on x2</p>
                <p className="mt-5 mb-3">
                  <span className=" line-through font-bold text-[gray]">
                    $20.5
                  </span>{" "}
                  <span className="text-[green] font-bold ml-1 mr-1">
                    Special Price
                  </span>
                  <span>$15.42</span>
                </p>
                <button class=" bg-slate-950 hover:bg-slate-700 mb-9 text-white font-bold py-2 px-4 rounded-full">
                  Add to Cart
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide className=" ">
              <div className="text-center ">
                <img src={i4} alt="img" className="w-[100%] mb-1" />
                <p>Nuxe Men 24 Hour Protection</p>
                <p>Deodorant Roll-on x2</p>
                <p className="mt-5 mb-3">
                  <span className=" line-through font-bold text-[gray]">
                    $20.5
                  </span>{" "}
                  <span className="text-[green] font-bold ml-1 mr-1">
                    Special Price
                  </span>
                  <span>$15.42</span>
                </p>
                <button class=" bg-slate-950 mb-9 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-full">
                  Add to Cart
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-center ">
                <img src={i10} alt="img" className="w-[100%] mb-1" />
                <p>Nuxe Men 24 Hour Protection</p>
                <p>Deodorant Roll-on x2</p>
                <p className="mt-5 mb-3">
                  <span className=" line-through font-bold text-[gray]">
                    $20.5
                  </span>{" "}
                  <span className="text-[green] font-bold ml-1 mr-1">
                    Special Price
                  </span>
                  <span>$15.42</span>
                </p>
                <button class=" bg-slate-950 mb-9 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-full">
                  Add to Cart
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-center ">
                <img src={i2} alt="img" className="w-[100%] mb-1" />
                <p>Nuxe Men 24 Hour Protection</p>
                <p>Deodorant Roll-on x2</p>
                <p className="mt-5 mb-3">
                  <span className=" line-through font-bold text-[gray]">
                    $20.5
                  </span>{" "}
                  <span className="text-[green] font-bold ml-1 mr-1">
                    Special Price
                  </span>
                  <span>$15.42</span>
                </p>
                <button class=" bg-slate-950 mb-9 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-full">
                  Add to Cart
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-center ">
                <img src={i3} alt="img" className="w-[100%] mb-1" />
                <p>Nuxe Men 24 Hour Protection</p>
                <p>Deodorant Roll-on x2</p>
                <p className="mt-5 mb-3">
                  <span className=" line-through font-bold text-[gray]">
                    $20.5
                  </span>{" "}
                  <span className="text-[green] font-bold ml-1 mr-1">
                    Special Price
                  </span>
                  <span>$15.42</span>
                </p>
                <button class=" bg-slate-950 mb-9 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-full">
                  Add to Cart
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-center ">
                <img src={i10} alt="img" className="w-[100%] mb-1" />
                <p>Nuxe Men 24 Hour Protection</p>
                <p>Deodorant Roll-on x2</p>
                <p className="mt-5 mb-3">
                  <span className=" line-through font-bold text-[gray]">
                    $20.5
                  </span>{" "}
                  <span className="text-[green] font-bold ml-1 mr-1">
                    Special Price
                  </span>
                  <span>$15.42</span>
                </p>
                <button class=" bg-slate-950 mb-9 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-full">
                  Add to Cart
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-center ">
                <img src={i3} alt="img" className="w-[100%] mb-1" />
                <p>Nuxe Men 24 Hour Protection</p>
                <p>Deodorant Roll-on x2</p>
                <p className="mt-5 mb-3">
                  <span className=" line-through font-bold text-[gray]">
                    $20.5
                  </span>{" "}
                  <span className="text-[green] font-bold ml-1 mr-1">
                    Special Price
                  </span>
                  <span>$15.42</span>
                </p>
                <button class=" bg-slate-950 mb-9 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-full">
                  Add to Cart
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="text-center ">
                <img src={i4} alt="img" className="w-[100%] mb-1" />
                <p>Nuxe Men 24 Hour Protection</p>
                <p>Deodorant Roll-on x2</p>
                <p className="mt-5 mb-3">
                  <span className=" line-through font-bold text-[gray]">
                    $20.5
                  </span>{" "}
                  <span className="text-[green] font-bold ml-1 mr-1">
                    Special Price
                  </span>
                  <span>$15.42</span>
                </p>
                <button class=" bg-slate-950 mb-9 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-full">
                  Add to Cart
                </button>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className=" md__deals   lg:hidden   md:mt-20 weekly__deals md:w-full md:h-fit md:p-5 mb-5 bg-[#f4f4f4] ">
        <p className="flex items-center justify-between w-full">
          <h3 className="pb-2 font-bold">Weekly Deals</h3>
          <h5 className=" cursor-pointer">Show more</h5>
        </p>
        <hr className="mb-5" />

        <div className="  card w-full  h-[80%] flex items-center ">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper md:h-fit md:w-[100%] md:p-5 "
          >
            <SwiperSlide className="w-[70%]  ">
              <div className="text-center ">
                <img src={i5} alt="img" className="w-[100%] md:mb-2" />
                <p>Nuxe Men 24 Hour Protection</p>
                <p>Deodorant Roll-on x2</p>
                <p className="mt-5 mb-3">
                  <span className=" line-through font-bold text-[gray]">
                    $20.5
                  </span>{" "}
                  <span className="text-[green] font-bold ml-1 mr-1">
                    Special Price
                  </span>
                  <span>$15.42</span>
                </p>
                <button class=" bg-slate-950 md:mb-10 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-full">
                  Add to Cart
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide className="ml-[0] ">
              <div className="text-center ">
                <img src={i4} alt="img" className="w-[100%] md:mb-2" />
                <p>Nuxe Men 24 Hour Protection</p>
                <p>Deodorant Roll-on x2</p>
                <p className="mt-5 mb-3">
                  <span className=" line-through font-bold text-[gray]">
                    $20.5
                  </span>{" "}
                  <span className="text-[green] font-bold ml-1 mr-1">
                    Special Price
                  </span>
                  <span>$15.42</span>
                </p>
                <button class=" bg-slate-950 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-full">
                  Add to Cart
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-center ">
                <img src={i10} alt="img" className="w-[100%] md:mb-2" />
                <p>Nuxe Men 24 Hour Protection</p>
                <p>Deodorant Roll-on x2</p>
                <p className="mt-5 mb-3">
                  <span className=" line-through font-bold text-[gray]">
                    $20.5
                  </span>{" "}
                  <span className="text-[green] font-bold ml-1 mr-1">
                    Special Price
                  </span>
                  <span>$15.42</span>
                </p>
                <button class=" bg-slate-950 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-full">
                  Add to Cart
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-center ">
                <img src={i2} alt="img" className="w-[100%] md:mb-2" />
                <p>Nuxe Men 24 Hour Protection</p>
                <p>Deodorant Roll-on x2</p>
                <p className="mt-5 mb-3">
                  <span className=" line-through font-bold text-[gray]">
                    $20.5
                  </span>{" "}
                  <span className="text-[green] font-bold ml-1 mr-1">
                    Special Price
                  </span>
                  <span>$15.42</span>
                </p>
                <button class=" bg-slate-950 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-full">
                  Add to Cart
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-center ">
                <img src={i3} alt="img" className="w-[100%] md:mb-2" />
                <p>Nuxe Men 24 Hour Protection</p>
                <p>Deodorant Roll-on x2</p>
                <p className="mt-5 mb-3">
                  <span className=" line-through font-bold text-[gray]">
                    $20.5
                  </span>{" "}
                  <span className="text-[green] font-bold ml-1 mr-1">
                    Special Price
                  </span>
                  <span>$15.42</span>
                </p>
                <button class=" bg-slate-950 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-full">
                  Add to Cart
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-center ">
                <img src={i10} alt="img" className="w-[100%] md:mb-2" />
                <p>Nuxe Men 24 Hour Protection</p>
                <p>Deodorant Roll-on x2</p>
                <p className="mt-5 mb-3">
                  <span className=" line-through font-bold text-[gray]">
                    $20.5
                  </span>{" "}
                  <span className="text-[green] font-bold ml-1 mr-1">
                    Special Price
                  </span>
                  <span>$15.42</span>
                </p>
                <button class=" bg-slate-950 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-full">
                  Add to Cart
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-center ">
                <img src={i3} alt="img" className="w-[100%] md:mb-2" />
                <p>Nuxe Men 24 Hour Protection</p>
                <p>Deodorant Roll-on x2</p>
                <p className="mt-5 mb-3">
                  <span className=" line-through font-bold text-[gray]">
                    $20.5
                  </span>{" "}
                  <span className="text-[green] font-bold ml-1 mr-1">
                    Special Price
                  </span>
                  <span>$15.42</span>
                </p>
                <button class=" bg-slate-950 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-full">
                  Add to Cart
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="text-center ">
                <img src={i4} alt="img" className="w-[100%]" />
                <p>Nuxe Men 24 Hour Protection</p>
                <p>Deodorant Roll-on x2</p>
                <p className="mt-5 mb-3">
                  <span className=" line-through font-bold text-[gray]">
                    $20.5
                  </span>{" "}
                  <span className="text-[green] font-bold ml-1 mr-1">
                    Special Price
                  </span>
                  <span>$15.42</span>
                </p>
                <button class=" bg-slate-950 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-full">
                  Add to Cart
                </button>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="lg__deals    lg:mt-20 weekly__deals lg:w-full lg:h-fit lg:p-5 mb-5 bg-[#f4f4f4] ">
        <p className="flex items-center justify-between w-full">
          <h3 className="pb-2 font-bold">Weekly Deals</h3>
          <h5 className=" cursor-pointer">Show more</h5>
        </p>
        <hr className="mb-5" />

        <div className="  card w-full  h-[80%] flex items-center ">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper h-fit w-[100%] p-5  "
          >
            <SwiperSlide className="w-[70%]">
              <div className="text-center ">
                <img src={i5} alt="img" className="w-[100%] lg:mb-2" />
                <p>Nuxe Men 24 Hour Protection</p>
                <p>Deodorant Roll-on x2</p>
                <p className="mt-5 mb-3">
                  <span className=" line-through font-bold text-[gray]">
                    $20.5
                  </span>{" "}
                  <span className="text-[green] font-bold ml-1 mr-1">
                    Special Price
                  </span>
                  <span>$15.42</span>
                </p>
                <button class=" bg-slate-950 lg:mb-10 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-full">
                  Add to Cart
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide className="ml-[0] ">
              <div className="text-center ">
                <img src={i4} alt="img" className="w-[100%] lg:mb-2" />
                <p>Nuxe Men 24 Hour Protection</p>
                <p>Deodorant Roll-on x2</p>
                <p className="mt-5 mb-3">
                  <span className=" line-through font-bold text-[gray]">
                    $20.5
                  </span>{" "}
                  <span className="text-[green] font-bold ml-1 mr-1">
                    Special Price
                  </span>
                  <span>$15.42</span>
                </p>
                <button class=" bg-slate-950 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-full">
                  Add to Cart
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-center ">
                <img src={i10} alt="img" className="w-[100%] lg:mb-2" />
                <p>Nuxe Men 24 Hour Protection</p>
                <p>Deodorant Roll-on x2</p>
                <p className="mt-5 mb-3">
                  <span className=" line-through font-bold text-[gray]">
                    $20.5
                  </span>{" "}
                  <span className="text-[green] font-bold ml-1 mr-1">
                    Special Price
                  </span>
                  <span>$15.42</span>
                </p>
                <button class=" bg-slate-950 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-full">
                  Add to Cart
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-center ">
                <img src={i2} alt="img" className="w-[100%] lg:mb-2" />
                <p>Nuxe Men 24 Hour Protection</p>
                <p>Deodorant Roll-on x2</p>
                <p className="mt-5 mb-3">
                  <span className=" line-through font-bold text-[gray]">
                    $20.5
                  </span>{" "}
                  <span className="text-[green] font-bold ml-1 mr-1">
                    Special Price
                  </span>
                  <span>$15.42</span>
                </p>
                <button class=" bg-slate-950 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-full">
                  Add to Cart
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-center ">
                <img src={i3} alt="img" className="w-[100%] lg:mb-2" />
                <p>Nuxe Men 24 Hour Protection</p>
                <p>Deodorant Roll-on x2</p>
                <p className="mt-5 mb-3">
                  <span className=" line-through font-bold text-[gray]">
                    $20.5
                  </span>{" "}
                  <span className="text-[green] font-bold ml-1 mr-1">
                    Special Price
                  </span>
                  <span>$15.42</span>
                </p>
                <button class=" bg-slate-950 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-full">
                  Add to Cart
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-center ">
                <img src={i10} alt="img" className="w-[100%] lg:mb-2" />
                <p>Nuxe Men 24 Hour Protection</p>
                <p>Deodorant Roll-on x2</p>
                <p className="mt-5 mb-3">
                  <span className=" line-through font-bold text-[gray]">
                    $20.5
                  </span>{" "}
                  <span className="text-[green] font-bold ml-1 mr-1">
                    Special Price
                  </span>
                  <span>$15.42</span>
                </p>
                <button class=" bg-slate-950 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-full">
                  Add to Cart
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-center ">
                <img src={i3} alt="img" className="w-[100%] lg:mb-2" />
                <p>Nuxe Men 24 Hour Protection</p>
                <p>Deodorant Roll-on x2</p>
                <p className="mt-5 mb-3">
                  <span className=" line-through font-bold text-[gray]">
                    $20.5
                  </span>{" "}
                  <span className="text-[green] font-bold ml-1 mr-1">
                    Special Price
                  </span>
                  <span>$15.42</span>
                </p>
                <button class=" bg-slate-950 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-full">
                  Add to Cart
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="text-center ">
                <img src={i4} alt="img" className="w-[100%] lg:mb-2" />
                <p>Nuxe Men 24 Hour Protection</p>
                <p>Deodorant Roll-on x2</p>
                <p className="mt-5 mb-3">
                  <span className=" line-through font-bold text-[gray]">
                    $20.5
                  </span>{" "}
                  <span className="text-[green] font-bold ml-1 mr-1">
                    Special Price
                  </span>
                  <span>$15.42</span>
                </p>
                <button class=" bg-slate-950 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-full">
                  Add to Cart
                </button>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className=" xl__deals  xl:mt-20 weekly__deals xl:w-full xl:h-fit xl:p-5 mb-5 bg-[#f4f4f4] ">
        <p className="flex items-center justify-between w-full">
          <h3 className="pb-2 font-bold">Weekly Deals</h3>
          <h5 className=" cursor-pointer">Show more</h5>
        </p>
        <hr className="mb-5" />

        <div className="  card w-full  h-[80%] flex items-center ">
          <Swiper
            slidesPerView={5}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper h-fit w-[100%] p-5  "
          >
            <SwiperSlide className="w-[70%]">
              <div className="text-center ">
                <img src={i5} alt="img" className="w-[100%] lg:mb-2" />
                <p>Nuxe Men 24 Hour Protection</p>
                <p>Deodorant Roll-on x2</p>
                <p className="mt-5 mb-3">
                  <span className=" line-through font-bold text-[gray]">
                    $20.5
                  </span>{" "}
                  <span className="text-[green] font-bold ml-1 mr-1">
                    Special Price
                  </span>
                  <span>$15.42</span>
                </p>
                <button class=" bg-slate-950 lg:mb-10 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-full">
                  Add to Cart
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide className="ml-[0] ">
              <div className="text-center ">
                <img src={i4} alt="img" className="w-[100%] lg:mb-2" />
                <p>Nuxe Men 24 Hour Protection</p>
                <p>Deodorant Roll-on x2</p>
                <p className="mt-5 mb-3">
                  <span className=" line-through font-bold text-[gray]">
                    $20.5
                  </span>{" "}
                  <span className="text-[green] font-bold ml-1 mr-1">
                    Special Price
                  </span>
                  <span>$15.42</span>
                </p>
                <button class=" bg-slate-950 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-full">
                  Add to Cart
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-center ">
                <img src={i10} alt="img" className="w-[100%] lg:mb-2" />
                <p>Nuxe Men 24 Hour Protection</p>
                <p>Deodorant Roll-on x2</p>
                <p className="mt-5 mb-3">
                  <span className=" line-through font-bold text-[gray]">
                    $20.5
                  </span>{" "}
                  <span className="text-[green] font-bold ml-1 mr-1">
                    Special Price
                  </span>
                  <span>$15.42</span>
                </p>
                <button class=" bg-slate-950 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-full">
                  Add to Cart
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-center ">
                <img src={i2} alt="img" className="w-[100%] lg:mb-2" />
                <p>Nuxe Men 24 Hour Protection</p>
                <p>Deodorant Roll-on x2</p>
                <p className="mt-5 mb-3">
                  <span className=" line-through font-bold text-[gray]">
                    $20.5
                  </span>{" "}
                  <span className="text-[green] font-bold ml-1 mr-1">
                    Special Price
                  </span>
                  <span>$15.42</span>
                </p>
                <button class=" bg-slate-950 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-full">
                  Add to Cart
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-center ">
                <img src={i3} alt="img" className="w-[100%] lg:mb-2" />
                <p>Nuxe Men 24 Hour Protection</p>
                <p>Deodorant Roll-on x2</p>
                <p className="mt-5 mb-3">
                  <span className=" line-through font-bold text-[gray]">
                    $20.5
                  </span>{" "}
                  <span className="text-[green] font-bold ml-1 mr-1">
                    Special Price
                  </span>
                  <span>$15.42</span>
                </p>
                <button class=" bg-slate-950 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-full">
                  Add to Cart
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-center ">
                <img src={i10} alt="img" className="w-[100%] lg:mb-2" />
                <p>Nuxe Men 24 Hour Protection</p>
                <p>Deodorant Roll-on x2</p>
                <p className="mt-5 mb-3">
                  <span className=" line-through font-bold text-[gray]">
                    $20.5
                  </span>{" "}
                  <span className="text-[green] font-bold ml-1 mr-1">
                    Special Price
                  </span>
                  <span>$15.42</span>
                </p>
                <button class=" bg-slate-950 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-full">
                  Add to Cart
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-center ">
                <img src={i3} alt="img" className="w-[100%] lg:mb-2" />
                <p>Nuxe Men 24 Hour Protection</p>
                <p>Deodorant Roll-on x2</p>
                <p className="mt-5 mb-3">
                  <span className=" line-through font-bold text-[gray]">
                    $20.5
                  </span>{" "}
                  <span className="text-[green] font-bold ml-1 mr-1">
                    Special Price
                  </span>
                  <span>$15.42</span>
                </p>
                <button class=" bg-slate-950 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-full">
                  Add to Cart
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="text-center ">
                <img src={i4} alt="img" className="w-[100%] lg:mb-2" />
                <p>Nuxe Men 24 Hour Protection</p>
                <p>Deodorant Roll-on x2</p>
                <p className="mt-5 mb-3">
                  <span className=" line-through font-bold text-[gray]">
                    $20.5
                  </span>{" "}
                  <span className="text-[green] font-bold ml-1 mr-1">
                    Special Price
                  </span>
                  <span>$15.42</span>
                </p>
                <button class=" bg-slate-950 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-full">
                  Add to Cart
                </button>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      
      <div className="newBanner flex ml-auto  flex-wrap xl:flex  h-fit items-center xl:items-center xl:justify-center mt-10 xl:mt-20 w-full xl:w-full  xl:h-fit justify-center mb-10 xl:mb-20">
        <div className="w-full m-auto  h-[25rem] text-left lg:text-left lg:w-[47%] lg:h-[30rem] lg:mr-5">
          <div
            className=" flex justify-around text-white object-cover  flex-col w-full bg-cover bg-center h-[90%] rounded-t-2xl "
            style={{
              backgroundImage: `url(${newImg2})`,
            }}
          >
            <h3 className="ml-2 text-4xl font-medium  lg:ml-4 lg:text-5xl lg:font-semibold">
              Featured <br /> Brand
            </h3>

            <h3 className=" ml-2 text-4xl font-medium lg:ml-4 lg:text-5xl lg:font-semibold">
              Esterderm <br /> 20% Off
            </h3>
          </div>

          <p className="flex items-center mb-10 justify-between font-normal lg:font-semibold bg-[#f4f4f4] pl-4 lg:pl-8 pt-2 lg:pt-4 pr-3 pb-4 rounded-b-2xl text-base lg:text-lg">
            June 16th - June 30th
            <button class=" bg-slate-950 hover:bg-slate-700 text-white font-normal py-2 px-2 lg:font-bold lg:py-3 lg:px-8 rounded-full">
              Find More
            </button>
          </p>
        </div>
        <div className="w-full m-auto h-[25rem] text-left lg:text-left mt-24 lg:mt-0 lg:w-[47%] lg:h-[30rem] lg:mr-5">
          <div
            className=" flex flex-col justify-around  text-white w-full bg-cover bg-center h-[90%] rounded-t-2xl "
            style={{
              backgroundImage: `url(${newsImg})`,
            }}
          >
            <h3 className="ml-2 text-4xl font-medium  lg:ml-4 lg:text-5xl lg:font-semibold">
              Care to beauty <br /> Newsletter
            </h3>

            <h3 className="ml-2 text-4xl font-medium  lg:ml-4 lg:text-5xl lg:font-semibold">
              Suscribe <br /> it now!!
            </h3>
          </div>
          <p className="flex items-center mb-10 justify-between font-normal lg:font-semibold bg-[#f4f4f4] pl-4 lg:pl-8 pt-2 lg:pt-4 pr-3 pb-4 rounded-b-2xl text-base lg:text-lg">
            June 16th - June 30th
            <button class=" bg-slate-950 hover:bg-slate-700 text-white font-normal py-2 px-2 lg:font-bold lg:py-3 lg:px-8 rounded-full">
              Find More
            </button>
          </p>
        </div>
      </div>
      <div className="blog w-full h-fit mt-20 lg:mb-36 ">
        <p className="flex items-center  justify-between w-full">
          <h3 className="pb-2 font-bold">Blog</h3>
          <h5 className=" cursor-pointer">+See more post</h5>
        </p>
        <hr />
        <div className="  w-full h-fit flex items-center justify-around flex-wrap mt-10 ">
          <div className=" lg:w-[29%]   lg:h-full">
            <img
              src={blog3}
              alt="img"
              className="w-full rounded-2xl h-full object-cover"
            />
            <p className="text-[#80808094] italic mt-7 font-semibold text-base">
              22 Jun 2023
            </p>
            <p className=" font-semibold text-lg mt-7">
              What's a Korean Essence,& Do You Need One?
            </p>
          </div>
          <div className="lg:w-[29%] lg:h-full">
            <img
              src={blog2}
              alt="img"
              className="w-full rounded-2xl h-full object-cover"
            />
            <p className="text-[#80808094] italic mt-7 font-semibold text-base">
              29 Jun 2023
            </p>
            <p className=" font-semibold text-lg mt-7">
              Makeup Tips To Make Brown Eyes Pop
            </p>
          </div>
          <div className=" lg:w-[29%]    lg:h-full ">
            <img
              src={blog1}
              alt="img"
              className="w-full rounded-2xl h-full object-cover"
            />
            <p className="text-[#80808094] italic mt-7 font-semibold text-base">
              25 Jun 2023
            </p>
            <p className=" font-semibold text-lg mt-7">
              What is the Best Face Wash for Blackheads?
            </p>
          </div>
        </div>
      </div>
      <div className="brand mb-0 mt-5 w-full h-fit">
        <p className=" flex  items-center  justify-between w-full">
          <h3 className=" mt-2 lg:mt-0 lg:pb-2 font-bold">The Best Brand</h3>
          <h5 className=" mt-2  lg:mt-0  cursor-pointer">+ More brands</h5>
        </p>
        <hr className="mb-7 mt-1" />
        <div className=" flex  h-full justify-center flex-wrap md:grid md:grid-cols-3 md:h-fit lg:h-full lg:flex lg:items-center lg:justify-around">
          <div className="m-3">
            <img
              src="https://static.beautytocare.com/media/wysiwyg/landing-pages/home/carousel/brands/vichy.svg"
              alt="img"
            className="w-20"
            />
          </div>
          <div className="m-3">
            <img
              src="https://static.beautytocare.com/media/wysiwyg/landing-pages/home/carousel/brands/sesderma.svg"
              alt="img"
              className="w-20"
            />
          </div>
          <div className="m-3">
            <img
              src="https://static.beautytocare.com/media/wysiwyg/landing-pages/home/carousel/brands/avene.svg"
              alt="img"
              className="w-20"
            />
          </div>
          <div className="m-3">
            <img
              src="https://static.beautytocare.com/media/wysiwyg/landing-pages/home/carousel/brands/filorga.svg"
              alt="img"
              className="w-20"
            />
          </div>
          <div className="m-3">
            <img
              src="https://static.beautytocare.com/media/wysiwyg/landing-pages/home/carousel/brands/la-roche-posay.svg"
              alt="img"
              className="w-20"
            />
          </div>
          <div className="m-3"> 
            <img
              src="https://static.beautytocare.com/media/wysiwyg/landing-pages/home/carousel/brands/isdin.svg"
              alt="img"
              className="w-20"
            />
          </div>
        </div>
      </div>
      <div className="reviews  h-[33rem] w-[100%] mr-0  pl-3 pr-3">
        <p className="flex  items-center   justify-between w-full">
          <h3 className="pb-1 md:font-bold lg:font-bold mt-8">Customer Reviews</h3>
          <h5 className=" cursor-pointer mt-8">+ Make review</h5>
        </p>
        <hr className="mb-0 mt-1" />
        {/* h-full w-full flex items-center */}
      
        <div className=" swip1 md:hidden h-full  w-full flex  items-center lg:hidden ">
          <Swiper 
       
            slidesPerView={2}
            
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className= " mySwiper h-[80%] w-[20rem] ml-[10rem] lg:hidden lg:w-full   p-2"
          >
            {/* h-[90%]  w-[21rem] flex flex-col items-center rounded-xl firstCard bg-[#dceae4] p-10 */}
             <SwiperSlide className="ml-0">
             <div className=" h-[90%]  w-[15rem] flex flex-col items-center rounded-xl firstCard bg-[#dceae4] p-3">
            <h2 className=" text-5xl font-bold">
              4,4 <span className=" font-normal text-sm">out of 4</span>
            </h2>
            <span className="flex text-center mt-6 mb-6">
              <ImStarFull className="text-2xl" />
              <ImStarFull className="text-2xl" />
              <ImStarFull className="text-2xl" />
              <ImStarFull className="text-2xl" />
              <ImStarHalf className="text-2xl" />
            </span>
            <p className="text-lg mb-8">1378 Reviews</p>
            <p className="text-lg mt-20">
              Showing our foverite <br /> review from <strong>Facebook</strong>
            </p>
          </div>
             </SwiperSlide>
             <SwiperSlide className=" ml-20">
             <div className=" flex flex-col justify-between pb-5  h-[90%]  w-[15rem] border rounded-xl pl-10">
            <div>
              <span className="flex text-center  mt-8 mb-6  ">
                <ImStarFull className="text-xl" />
                <ImStarFull className="text-xl" />
                <ImStarFull className="text-xl" />
                <ImStarFull className="text-xl" />
                <ImStarHalf className="text-xl" />
              </span>
              <p className=" text-lg text-[#444]">
                Fast delivery, a friendly <br /> website and good prices
              </p>
            </div>

            <div className="flex items-center ">
              <div className="w-12 h-12 ">
                <img
                  src="https://static.beautytocare.com/media/ctb_review/Screenshot_2023-04-14_100616.jpg"
                  alt="img"
                  className="w-full h-full rounded-full" />
              </div>
              <p className="ml-5 text-[#444] text-base">
                Hajara Mustapha <br />{" "}
                <span className="text-[gray]">9 April 2023</span>
              </p>
            </div>
             </div>
             </SwiperSlide>
             <SwiperSlide className="ml-20">
             <div className=" flex flex-col justify-between pb-5  h-[90%]  w-[15rem] border rounded-xl pl-10">
            <div>
              <span className="flex text-center  mt-8 mb-6  ">
                <ImStarFull className="text-xl" />
                <ImStarFull className="text-xl" />
                <ImStarFull className="text-xl" />
                <ImStarFull className="text-xl" />
                <ImStarHalf className="text-xl" />
              </span>
              <p className=" text-lg text-[#444]">
                Fast delivery, a friendly <br /> website and good prices
              </p>
            </div>

            <div className="flex items-center ">
              <div className="w-12 h-12 ">
                <img
                  src="https://static.beautytocare.com/media/ctb_review/Screenshot_2023-04-14_100616.jpg"
                  alt="img"
                  className="w-full h-full rounded-full" />
              </div>
              <p className="ml-5 text-[#444] text-base">
                Hajara Mustapha <br />{" "}
                <span className="text-[gray]">9 April 2023</span>
              </p>
            </div>
             </div>
             </SwiperSlide>
             <SwiperSlide className="ml-20">
             <div className=" flex flex-col justify-between pb-5  h-[90%]  w-[15rem] border rounded-xl pl-10">
            <div>
              <span className="flex text-center  mt-8 mb-6">
                <ImStarFull className="text-xl" />
                <ImStarFull className="text-xl" />
                <ImStarFull className="text-xl" />
                <ImStarFull className="text-xl" />
                <ImStarHalf className="text-xl" />
              </span>
              <p className=" text-base text-[#444]">
                I have bought from care to <br /> beauty from time now and <br /> i can't recomend them enough. <br />
               Such a greate service <br /> recieved my orders in <br /> record time and well packed.
              </p>
            </div>

            <div className="flex items-center ">
              <div className="w-12 h-12 ">
                <img
                  src="https://static.beautytocare.com/media/ctb_review/Screenshot_2023-04-14_100616.jpg"
                  alt="img"
                  className="w-full h-full rounded-full" />
              </div>
              <p className="ml-5 text-[#444] text-base">
                Hajara Mustapha <br />{" "}
                <span className="text-[gray]">9 April 2023</span>
              </p>
            </div>
          </div>
             </SwiperSlide>
             <SwiperSlide className="ml-20">
             <div className=" flex flex-col justify-between pb-5  h-[90%]  w-[15rem] border rounded-xl pl-10">
            <div>
              <span className="flex text-center  mt-8 mb-6">
                <ImStarFull className="text-xl" />
                <ImStarFull className="text-xl" />
                <ImStarFull className="text-xl" />
                <ImStarFull className="text-xl" />
                <ImStarHalf className="text-xl" />
              </span>
              <p className=" text-base text-[#444]">
                I have bought from care to <br /> beauty from time now and <br /> i can't recomend them enough. <br />
               Such a greate service <br /> recieved my orders in <br /> record time and well packed.
              </p>
            </div>

            <div className="flex items-center ">
              <div className="w-12 h-12 ">
                <img
                  src="https://static.beautytocare.com/media/ctb_review/Screenshot_2023-04-14_100616.jpg"
                  alt="img"
                  className="w-full h-full rounded-full" />
              </div>
              <p className="ml-5 text-[#444] text-base">
                Hajara Mustapha <br />{" "}
                <span className="text-[gray]">9 April 2023</span>
              </p>
            </div>
          </div>
             </SwiperSlide>
             <SwiperSlide className="ml-20">
             <div className=" flex flex-col justify-between pb-5  h-[90%]  w-[15rem] border rounded-xl pl-10">
            <div>
              <span className="flex text-center  mt-8 mb-6">
                <ImStarFull className="text-xl" />
                <ImStarFull className="text-xl" />
                <ImStarFull className="text-xl" />
                <ImStarFull className="text-xl" />
                <ImStarHalf className="text-xl" />
              </span>
              <p className=" text-base text-[#444]">
                I have bought from care to <br /> beauty from time now and <br /> i can't recomend them enough. <br />
               Such a greate service <br /> recieved my orders in <br /> record time and well packed.
              </p>
            </div>

            <div className="flex items-center ">
              <div className="w-12 h-12 ">
                <img
                  src="https://static.beautytocare.com/media/ctb_review/Screenshot_2023-04-14_100616.jpg"
                  alt="img"
                  className="w-full h-full rounded-full" />
              </div>
              <p className="ml-5 text-[#444] text-base">
                Hajara Mustapha <br />{" "}
                <span className="text-[gray]">9 April 2023</span>
              </p>
            </div>
          </div>
             </SwiperSlide>
             <SwiperSlide className="ml-20">
             <div className=" flex flex-col justify-between pb-5  h-[90%]  w-[15rem] border rounded-xl pl-10">
            <div>
              <span className="flex text-center  mt-8 mb-6">
                <ImStarFull className="text-xl" />
                <ImStarFull className="text-xl" />
                <ImStarFull className="text-xl" />
                <ImStarFull className="text-xl" />
                <ImStarHalf className="text-xl" />
              </span>
              <p className=" text-base text-[#444]">
                I have bought from care to <br /> beauty from time now and <br /> i can't recomend them enough. <br />
               Such a greate service <br /> recieved my orders in <br /> record time and well packed.
              </p>
            </div>

            <div className="flex items-center ">
              <div className="w-12 h-12 ">
                <img
                  src="https://static.beautytocare.com/media/ctb_review/Screenshot_2023-04-14_100616.jpg"
                  alt="img"
                  className="w-full h-full rounded-full" />
              </div>
              <p className="ml-5 text-[#444] text-base">
                Hajara Mustapha <br />{" "}
                <span className="text-[gray]">9 April 2023</span>
              </p>
            </div>
          </div>
             </SwiperSlide>
             <SwiperSlide className="ml-20">
             <div className=" flex flex-col justify-between pb-5  h-[90%]  w-[15rem] border rounded-xl pl-10">
            <div>
              <span className="flex text-center  mt-8 mb-6">
                <ImStarFull className="text-xl" />
                <ImStarFull className="text-xl" />
                <ImStarFull className="text-xl" />
                <ImStarFull className="text-xl" />
                <ImStarHalf className="text-xl" />
              </span>
              <p className=" text-base text-[#444]">
                I have bought from care to <br /> beauty from time now and <br /> i can't recomend them enough. <br />
               Such a greate service <br /> recieved my orders in <br /> record time and well packed.
              </p>
            </div>

            <div className="flex items-center ">
              <div className="w-12 h-12 ">
                <img
                  src="https://static.beautytocare.com/media/ctb_review/Screenshot_2023-04-14_100616.jpg"
                  alt="img"
                  className="w-full h-full rounded-full" />
              </div>
              <p className="ml-5 text-[#444] text-base">
                Hajara Mustapha <br />{" "}
                <span className="text-[gray]">9 April 2023</span>
              </p>
            </div>
          </div>
             </SwiperSlide>
             <SwiperSlide className=" ml-20">
             <div className=" flex flex-col justify-between pb-5  h-[90%]  w-[15rem] border rounded-xl pl-10">
            <div>
              <span className="flex text-center  mt-8 mb-6">
                <ImStarFull className="text-xl" />
                <ImStarFull className="text-xl" />
                <ImStarFull className="text-xl" />
                <ImStarFull className="text-xl" />
                <ImStarHalf className="text-xl" />
              </span>
              <p className=" text-base ">
                I have bought from care to <br /> beauty from time now and <br /> i can't recomend them enough. <br />
               Such a greate service <br /> recieved my orders in <br /> record time and well packed.
              </p>
            </div>

            <div className="flex items-center ">
              <div className="w-12 h-12 ">
                <img
                  src="https://static.beautytocare.com/media/ctb_review/Screenshot_2023-04-14_100616.jpg"
                  alt="img"
                  className="w-full h-full rounded-full" />
              </div>
              <p className="ml-5 text-[#444] text-base">
                Hajara Mustapha <br />{" "}
                <span className="text-[gray]">9 April 2023</span>
              </p>
            </div>
          </div>
             </SwiperSlide>
          </Swiper>
        </div>

        <div className=" hidden  md:h-full  md:w-full md:flex  md:items-center lg:hidden ">
          <Swiper 
       
            slidesPerView={3}
            
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className= " mySwiper h-[65%] w-full ml-[10rem] lg:hidden lg:w-full   p-2"
          >
            {/* h-[90%]  w-[21rem] flex flex-col items-center rounded-xl firstCard bg-[#dceae4] p-10 */}
             <SwiperSlide className="ml-0">
             <div className=" h-[90%]  w-[15rem] flex flex-col items-center rounded-xl firstCard bg-[#dceae4] p-3">
            <h2 className=" text-5xl font-bold">
              4,4 <span className=" font-normal text-sm">out of 4</span>
            </h2>
            <span className="flex text-center mt-6 mb-6">
              <ImStarFull className="text-2xl" />
              <ImStarFull className="text-2xl" />
              <ImStarFull className="text-2xl" />
              <ImStarFull className="text-2xl" />
              <ImStarHalf className="text-2xl" />
            </span>
            <p className="text-lg mb-8">1378 Reviews</p>
            <p className="text-lg mt-20">
              Showing our foverite <br /> review from <strong>Facebook</strong>
            </p>
          </div>
             </SwiperSlide>
             <SwiperSlide className=" ml-20">
             <div className=" flex flex-col justify-between pb-5  h-[90%]  w-[15rem] border rounded-xl pl-10">
            <div>
              <span className="flex text-center  mt-8 mb-6  ">
                <ImStarFull className="text-xl" />
                <ImStarFull className="text-xl" />
                <ImStarFull className="text-xl" />
                <ImStarFull className="text-xl" />
                <ImStarHalf className="text-xl" />
              </span>
              <p className=" text-lg text-[#444]">
                Fast delivery, a friendly <br /> website and good prices
              </p>
            </div>

            <div className="flex items-center ">
              <div className="w-12 h-12 ">
                <img
                  src="https://static.beautytocare.com/media/ctb_review/Screenshot_2023-04-14_100616.jpg"
                  alt="img"
                  className="w-full h-full rounded-full" />
              </div>
              <p className="ml-5 text-[#444] text-base">
                Hajara Mustapha <br />{" "}
                <span className="text-[gray]">9 April 2023</span>
              </p>
            </div>
             </div>
             </SwiperSlide>
             <SwiperSlide className="ml-20">
             <div className=" flex flex-col justify-between pb-5  h-[90%]  w-[15rem] border rounded-xl pl-10">
            <div>
              <span className="flex text-center  mt-8 mb-6  ">
                <ImStarFull className="text-xl" />
                <ImStarFull className="text-xl" />
                <ImStarFull className="text-xl" />
                <ImStarFull className="text-xl" />
                <ImStarHalf className="text-xl" />
              </span>
              <p className=" text-lg text-[#444]">
                Fast delivery, a friendly <br /> website and good prices
              </p>
            </div>

            <div className="flex items-center ">
              <div className="w-12 h-12 ">
                <img
                  src="https://static.beautytocare.com/media/ctb_review/Screenshot_2023-04-14_100616.jpg"
                  alt="img"
                  className="w-full h-full rounded-full" />
              </div>
              <p className="ml-5 text-[#444] text-base">
                Hajara Mustapha <br />{" "}
                <span className="text-[gray]">9 April 2023</span>
              </p>
            </div>
             </div>
             </SwiperSlide>
             <SwiperSlide className="ml-20">
             <div className=" flex flex-col justify-between pb-5  h-[90%]  w-[15rem] border rounded-xl pl-10">
            <div>
              <span className="flex text-center  mt-8 mb-6">
                <ImStarFull className="text-xl" />
                <ImStarFull className="text-xl" />
                <ImStarFull className="text-xl" />
                <ImStarFull className="text-xl" />
                <ImStarHalf className="text-xl" />
              </span>
              <p className=" text-base text-[#444]">
                I have bought from care to <br /> beauty from time now and <br /> i can't recomend them enough. <br />
               Such a greate service <br /> recieved my orders in <br /> record time and well packed.
              </p>
            </div>

            <div className="flex items-center ">
              <div className="w-12 h-12 ">
                <img
                  src="https://static.beautytocare.com/media/ctb_review/Screenshot_2023-04-14_100616.jpg"
                  alt="img"
                  className="w-full h-full rounded-full" />
              </div>
              <p className="ml-5 text-[#444] text-base">
                Hajara Mustapha <br />{" "}
                <span className="text-[gray]">9 April 2023</span>
              </p>
            </div>
          </div>
             </SwiperSlide>
             <SwiperSlide className="ml-20">
             <div className=" flex flex-col justify-between pb-5  h-[90%]  w-[15rem] border rounded-xl pl-10">
            <div>
              <span className="flex text-center  mt-8 mb-6">
                <ImStarFull className="text-xl" />
                <ImStarFull className="text-xl" />
                <ImStarFull className="text-xl" />
                <ImStarFull className="text-xl" />
                <ImStarHalf className="text-xl" />
              </span>
              <p className=" text-base text-[#444]">
                I have bought from care to <br /> beauty from time now and <br /> i can't recomend them enough. <br />
               Such a greate service <br /> recieved my orders in <br /> record time and well packed.
              </p>
            </div>

            <div className="flex items-center ">
              <div className="w-12 h-12 ">
                <img
                  src="https://static.beautytocare.com/media/ctb_review/Screenshot_2023-04-14_100616.jpg"
                  alt="img"
                  className="w-full h-full rounded-full" />
              </div>
              <p className="ml-5 text-[#444] text-base">
                Hajara Mustapha <br />{" "}
                <span className="text-[gray]">9 April 2023</span>
              </p>
            </div>
          </div>
             </SwiperSlide>
             <SwiperSlide className="ml-20">
             <div className=" flex flex-col justify-between pb-5  h-[90%]  w-[15rem] border rounded-xl pl-10">
            <div>
              <span className="flex text-center  mt-8 mb-6">
                <ImStarFull className="text-xl" />
                <ImStarFull className="text-xl" />
                <ImStarFull className="text-xl" />
                <ImStarFull className="text-xl" />
                <ImStarHalf className="text-xl" />
              </span>
              <p className=" text-base text-[#444]">
                I have bought from care to <br /> beauty from time now and <br /> i can't recomend them enough. <br />
               Such a greate service <br /> recieved my orders in <br /> record time and well packed.
              </p>
            </div>

            <div className="flex items-center ">
              <div className="w-12 h-12 ">
                <img
                  src="https://static.beautytocare.com/media/ctb_review/Screenshot_2023-04-14_100616.jpg"
                  alt="img"
                  className="w-full h-full rounded-full" />
              </div>
              <p className="ml-5 text-[#444] text-base">
                Hajara Mustapha <br />{" "}
                <span className="text-[gray]">9 April 2023</span>
              </p>
            </div>
          </div>
             </SwiperSlide>
             <SwiperSlide className="ml-20">
             <div className=" flex flex-col justify-between pb-5  h-[90%]  w-[15rem] border rounded-xl pl-10">
            <div>
              <span className="flex text-center  mt-8 mb-6">
                <ImStarFull className="text-xl" />
                <ImStarFull className="text-xl" />
                <ImStarFull className="text-xl" />
                <ImStarFull className="text-xl" />
                <ImStarHalf className="text-xl" />
              </span>
              <p className=" text-base text-[#444]">
                I have bought from care to <br /> beauty from time now and <br /> i can't recomend them enough. <br />
               Such a greate service <br /> recieved my orders in <br /> record time and well packed.
              </p>
            </div>

            <div className="flex items-center ">
              <div className="w-12 h-12 ">
                <img
                  src="https://static.beautytocare.com/media/ctb_review/Screenshot_2023-04-14_100616.jpg"
                  alt="img"
                  className="w-full h-full rounded-full" />
              </div>
              <p className="ml-5 text-[#444] text-base">
                Hajara Mustapha <br />{" "}
                <span className="text-[gray]">9 April 2023</span>
              </p>
            </div>
          </div>
             </SwiperSlide>
             <SwiperSlide className="ml-20">
             <div className=" flex flex-col justify-between pb-5  h-[90%]  w-[15rem] border rounded-xl pl-10">
            <div>
              <span className="flex text-center  mt-8 mb-6">
                <ImStarFull className="text-xl" />
                <ImStarFull className="text-xl" />
                <ImStarFull className="text-xl" />
                <ImStarFull className="text-xl" />
                <ImStarHalf className="text-xl" />
              </span>
              <p className=" text-base text-[#444]">
                I have bought from care to <br /> beauty from time now and <br /> i can't recomend them enough. <br />
               Such a greate service <br /> recieved my orders in <br /> record time and well packed.
              </p>
            </div>

            <div className="flex items-center ">
              <div className="w-12 h-12 ">
                <img
                  src="https://static.beautytocare.com/media/ctb_review/Screenshot_2023-04-14_100616.jpg"
                  alt="img"
                  className="w-full h-full rounded-full" />
              </div>
              <p className="ml-5 text-[#444] text-base">
                Hajara Mustapha <br />{" "}
                <span className="text-[gray]">9 April 2023</span>
              </p>
            </div>
          </div>
             </SwiperSlide>
             <SwiperSlide className=" ml-20">
             <div className=" flex flex-col justify-between pb-5  h-[90%]  w-[15rem] border rounded-xl pl-10">
            <div>
              <span className="flex text-center  mt-8 mb-6">
                <ImStarFull className="text-xl" />
                <ImStarFull className="text-xl" />
                <ImStarFull className="text-xl" />
                <ImStarFull className="text-xl" />
                <ImStarHalf className="text-xl" />
              </span>
              <p className=" text-base ">
                I have bought from care to <br /> beauty from time now and <br /> i can't recomend them enough. <br />
               Such a greate service <br /> recieved my orders in <br /> record time and well packed.
              </p>
            </div>

            <div className="flex items-center ">
              <div className="w-12 h-12 ">
                <img
                  src="https://static.beautytocare.com/media/ctb_review/Screenshot_2023-04-14_100616.jpg"
                  alt="img"
                  className="w-full h-full rounded-full" />
              </div>
              <p className="ml-5 text-[#444] text-base">
                Hajara Mustapha <br />{" "}
                <span className="text-[gray]">9 April 2023</span>
              </p>
            </div>
          </div>
             </SwiperSlide>
          </Swiper>
        </div>

        <div className="hidden swip2  lg:h-full  lg:w-full lg:flex  lg:items-center md:hidden  ">
        <Swiper 
       
       slidesPerView={4}
       
       spaceBetween={30}
       freeMode={true}
       pagination={{
         clickable: true,
       }}
       modules={[FreeMode, Pagination]}
       className= " mySwiper2  lg:h-[75%] lg:w-[95%]   lg:p-2"
     >
       {/* h-[90%]  w-[21rem] flex flex-col items-center rounded-xl firstCard bg-[#dceae4] p-10 */}
        <SwiperSlide className="ml-16">
        <div className=" lg:h-[90%]  lg:w-[17rem] flex flex-col items-center rounded-xl firstCard bg-[#dceae4] p-3">
       <h2 className=" text-5xl font-bold">
         4,4 <span className=" font-normal text-sm">out of 4</span>
       </h2>
       <span className="flex text-center mt-6 mb-6">
         <ImStarFull className="text-2xl" />
         <ImStarFull className="text-2xl" />
         <ImStarFull className="text-2xl" />
         <ImStarFull className="text-2xl" />
         <ImStarHalf className="text-2xl" />
       </span>
       <p className="text-lg mb-8">1378 Reviews</p>
       <p className="text-lg mt-20">
         Showing our foverite <br /> review from <strong>Facebook</strong>
       </p>
     </div>
        </SwiperSlide>
        <SwiperSlide className=" ml-16">
        <div className=" flex flex-col justify-between pb-5  lg:h-[90%]  lg:w-[17rem] border rounded-xl pl-10">
       <div>
         <span className="flex text-center  mt-8 mb-6  ">
           <ImStarFull className="text-xl" />
           <ImStarFull className="text-xl" />
           <ImStarFull className="text-xl" />
           <ImStarFull className="text-xl" />
           <ImStarHalf className="text-xl" />
         </span>
         <p className=" text-lg text-[#444]">
           Fast delivery, a friendly <br /> website and good prices
         </p>
       </div>

       <div className="flex items-center ">
         <div className="w-12 h-12 ">
           <img
             src="https://static.beautytocare.com/media/ctb_review/Screenshot_2023-04-14_100616.jpg"
             alt="img"
             className="w-full h-full rounded-full" />
         </div>
         <p className="ml-5 text-[#444] text-base">
           Hajara Mustapha <br />{" "}
           <span className="text-[gray]">9 April 2023</span>
         </p>
       </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className="ml-16">
        <div className=" flex flex-col justify-between pb-5  lg:h-[90%]   lg:w-[17rem] border rounded-xl pl-10">
       <div>
         <span className="flex text-center  mt-8 mb-6  ">
           <ImStarFull className="text-xl" />
           <ImStarFull className="text-xl" />
           <ImStarFull className="text-xl" />
           <ImStarFull className="text-xl" />
           <ImStarHalf className="text-xl" />
         </span>
         <p className=" text-lg text-[#444]">
           Fast delivery, a friendly <br /> website and good prices
         </p>
       </div>

       <div className="flex items-center ">
         <div className="w-12 h-12 ">
           <img
             src="https://static.beautytocare.com/media/ctb_review/Screenshot_2023-04-14_100616.jpg"
             alt="img"
             className="w-full h-full rounded-full" />
         </div>
         <p className="ml-5 text-[#444] text-base">
           Hajara Mustapha <br />{" "}
           <span className="text-[gray]">9 April 2023</span>
         </p>
       </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className="ml-16">
        <div className=" flex flex-col justify-between pb-5  lg:h-[90%]  lg:w-[17rem] border rounded-xl pl-10">
       <div>
         <span className="flex text-center  mt-8 mb-6">
           <ImStarFull className="text-xl" />
           <ImStarFull className="text-xl" />
           <ImStarFull className="text-xl" />
           <ImStarFull className="text-xl" />
           <ImStarHalf className="text-xl" />
         </span>
         <p className=" text-base text-[#444]">
           I have bought from care to <br /> beauty from time now and <br /> i can't recomend them enough. <br />
          Such a greate service <br /> recieved my orders in <br /> record time and well packed.
         </p>
       </div>

       <div className="flex items-center ">
         <div className="w-12 h-12 ">
           <img
             src="https://static.beautytocare.com/media/ctb_review/Screenshot_2023-04-14_100616.jpg"
             alt="img"
             className="w-full h-full rounded-full" />
         </div>
         <p className="ml-5 text-[#444] text-base">
           Hajara Mustapha <br />{" "}
           <span className="text-[gray]">9 April 2023</span>
         </p>
       </div>
     </div>
        </SwiperSlide>
        <SwiperSlide className="ml-16">
        <div className=" flex flex-col justify-between pb-5  lg:h-[90%]  lg:w-[17rem] border rounded-xl pl-10">
       <div>
         <span className="flex text-center  mt-8 mb-6">
           <ImStarFull className="text-xl" />
           <ImStarFull className="text-xl" />
           <ImStarFull className="text-xl" />
           <ImStarFull className="text-xl" />
           <ImStarHalf className="text-xl" />
         </span>
         <p className=" text-base text-[#444]">
           I have bought from care to <br /> beauty from time now and <br /> i can't recomend them enough. <br />
          Such a greate service <br /> recieved my orders in <br /> record time and well packed.
         </p>
       </div>

       <div className="flex items-center ">
         <div className="w-12 h-12 ">
           <img
             src="https://static.beautytocare.com/media/ctb_review/Screenshot_2023-04-14_100616.jpg"
             alt="img"
             className="w-full h-full rounded-full" />
         </div>
         <p className="ml-5 text-[#444] text-base">
           Hajara Mustapha <br />{" "}
           <span className="text-[gray]">9 April 2023</span>
         </p>
       </div>
     </div>
        </SwiperSlide>
        <SwiperSlide className="ml-16">
        <div className=" flex flex-col justify-between pb-5 lg:h-[90%]  lg:w-[17rem] border rounded-xl pl-10">
       <div>
         <span className="flex text-center  mt-8 mb-6">
           <ImStarFull className="text-xl" />
           <ImStarFull className="text-xl" />
           <ImStarFull className="text-xl" />
           <ImStarFull className="text-xl" />
           <ImStarHalf className="text-xl" />
         </span>
         <p className=" text-base text-[#444]">
           I have bought from care to <br /> beauty from time now and <br /> i can't recomend them enough. <br />
          Such a greate service <br /> recieved my orders in <br /> record time and well packed.
         </p>
       </div>

       <div className="flex items-center ">
         <div className="w-12 h-12 ">
           <img
             src="https://static.beautytocare.com/media/ctb_review/Screenshot_2023-04-14_100616.jpg"
             alt="img"
             className="w-full h-full rounded-full" />
         </div>
         <p className="ml-5 text-[#444] text-base">
           Hajara Mustapha <br />{" "}
           <span className="text-[gray]">9 April 2023</span>
         </p>
       </div>
     </div>
        </SwiperSlide>
        <SwiperSlide className="ml-16">
        <div className=" flex flex-col justify-between pb-5  lg:h-[90%]  lg:w-[17rem] border rounded-xl pl-10">
       <div>
         <span className="flex text-center  mt-8 mb-6">
           <ImStarFull className="text-xl" />
           <ImStarFull className="text-xl" />
           <ImStarFull className="text-xl" />
           <ImStarFull className="text-xl" />
           <ImStarHalf className="text-xl" />
         </span>
         <p className=" text-base text-[#444]">
           I have bought from care to <br /> beauty from time now and <br /> i can't recomend them enough. <br />
          Such a greate service <br /> recieved my orders in <br /> record time and well packed.
         </p>
       </div>

       <div className="flex items-center ">
         <div className="w-12 h-12 ">
           <img
             src="https://static.beautytocare.com/media/ctb_review/Screenshot_2023-04-14_100616.jpg"
             alt="img"
             className="w-full h-full rounded-full" />
         </div>
         <p className="ml-5 text-[#444] text-base">
           Hajara Mustapha <br />{" "}
           <span className="text-[gray]">9 April 2023</span>
         </p>
       </div>
     </div>
        </SwiperSlide>
        <SwiperSlide className="ml-16">
        <div className=" flex flex-col justify-between pb-5 lg:h-[90%]  lg:w-[17rem] border rounded-xl pl-10">
       <div>
         <span className="flex text-center  mt-8 mb-6">
           <ImStarFull className="text-xl" />
           <ImStarFull className="text-xl" />
           <ImStarFull className="text-xl" />
           <ImStarFull className="text-xl" />
           <ImStarHalf className="text-xl" />
         </span>
         <p className=" text-base text-[#444]">
           I have bought from care to <br /> beauty from time now and <br /> i can't recomend them enough. <br />
          Such a greate service <br /> recieved my orders in <br /> record time and well packed.
         </p>
       </div>

       <div className="flex items-center ">
         <div className="w-12 h-12 ">
           <img
             src="https://static.beautytocare.com/media/ctb_review/Screenshot_2023-04-14_100616.jpg"
             alt="img"
             className="w-full h-full rounded-full" />
         </div>
         <p className="ml-5 text-[#444] text-base">
           Hajara Mustapha <br />{" "}
           <span className="text-[gray]">9 April 2023</span>
         </p>
       </div>
     </div>
        </SwiperSlide>
        <SwiperSlide className=" ml-16">
        <div className=" flex flex-col justify-between pb-2  lg:h-[90%]  lg:w-[17rem] border rounded-xl pl-10">
       <div>
         <span className="flex text-center  mt-8 mb-6">
           <ImStarFull className="text-xl" />
           <ImStarFull className="text-xl" />
           <ImStarFull className="text-xl" />
           <ImStarFull className="text-xl" />
           <ImStarHalf className="text-xl" />
         </span>
         <p className=" text-base ">
           I have bought from care to <br /> beauty from time now and <br /> i can't recomend them enough. <br />
          Such a greate service <br /> recieved my orders in <br /> record time and well packed.
         </p>
       </div>

       <div className="flex items-center ">
         <div className="w-12 h-12 ">
           <img
             src="https://static.beautytocare.com/media/ctb_review/Screenshot_2023-04-14_100616.jpg"
             alt="img"
             className="w-full h-full rounded-full" />
         </div>
         <p className="ml-5 text-[#444] text-base">
           Hajara Mustapha <br />{" "}
           <span className="text-[gray]">9 April 2023</span>
         </p>
       </div>
     </div>
        </SwiperSlide>
     </Swiper>
        </div>


      <div className=" flex flex-col  justify-center  h-fit w-full  mt-0 sm:grid  sm:grid-cols-1 md:grid  lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-4 xl:w-full lg:w-full lg:mt-10     ">
        <div className="flex   w-full  justify-center  p-2 mr-3  border-b-2 sm:w-[44rem]  pb-6 lg:w-[18rem] lg:border-r-2 xl:w-[17rem] lg:border-b-0" >
        <div className=" w-32  flex flex-col">
        <BsGlobe2 className="w-full h-10 text-[purple]" />
        </div>
        
          <div className="ml-4">
            <p className="font-bold   text-lg text-[#444] mb-4">   Ghana Deliveries</p>
            <p>Free and fast shiping for orders above $123,000 via Ghana DHL express shipping 
              <Link className= "underline ml-2 font-medium">Know More</Link>
            </p>
          </div>
        </div>
        <div className="flex  w-full  justify-center p-2 mr-3 border-b-2 sm:w-[44rem] pb-4 lg:w-[18rem] lg:border-r-2 xl:w-[17rem] xl:ml-8 lg:border-b-0">
        <div className=" w-32  flex flex-col">
          <BsStar className="w-full h-10 text-[purple]"/>
          </div>
          <div className="ml-4">
            <p className="font-bold  text-lg text-[#444] mb-4">4.8/ Star Customer Reviews </p>
            <p>Free and fast shiping for orders above $123,000 via Ghana DHL express shipping 
              <Link className= "underline ml-2 font-medium">Know More</Link>
            </p>
          </div>
        </div>
        
        <div className="flex  w-full  justify-center p-2 mr-3 border-b-2 sm:w-[44rem] pb-4 lg:w-[18rem]  xl:w-[17rem] xl:ml-8 lg:border-r-2 lg:border-b-0">
        <div className=" w-32  flex flex-col">
          <SlChemistry className="w-full h-10 
          text-[purple]
          "/>
          </div>
          <div className="ml-4">
            <p className="font-bold  text-lg text-[#444] mb-4">Premium Customer Care</p>
            <p>Free and fast shiping for orders above $123,000 via Ghana DHL express shipping 
              <Link className= "underline ml-2 font-medium">Know More</Link>
            </p>
          </div>
        </div>
        <div className="flex w-full justify-center p-2 mr-3 border-b-2 sm:w-[44rem]   pb-4 lg:w-[18rem]   lg:border-r-2 xl:w-[17rem] xl:mt-0 xl:ml-8 lg:mt-10 lg:border-b-0">
        <div className=" w-32  flex flex-col">
          <BsBag className="w-full h-10 text-[purple]" />
          </div>
          <div className="ml-4">
            <p className="font-bold  text-lg text-[#444] mb-4">100% geniune product on stocks</p>
            <p>Free and fast shiping for orders above $123,000 via Ghana DHL express shipping 
              <Link className= "underline ml-2 font-medium">Know More</Link>
            </p>
          </div>
        </div>
       
      </div>
      </div>
     
    </div>
  );
};

export default Home;
