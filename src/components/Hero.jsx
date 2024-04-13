import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col items-start ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 md:mt-0 mt-6`}
      >
        <div className="flex items-center flex-row py-[6px] px-4 bg-discount-gradient mb-2 md:mx-0 mx-auto rounded-[10px]">
          <img
            src={discount}
            alt="discount"
            className="w-[32px] h-[32px]"
          />
          <p
            className={` capitalize ml-2 ${styles.paragraph} font-semibold text-sm`}
          >
            <span className=" text-white">20%</span> discount for{" "}
            <span className="text-white">1 month</span> account
          </p>
        </div>
        <div className="flex flex-row items-center justify-between w-full relative md:text-start text-center">
          <h1 className="capitalize font-semibold flex-1 text-white font-poppins ss:text-[72px] text-[32px] leading-[1.5]">
            the next <br className="md:block hidden" />{" "}
            <span className=" text-gradient">generation</span>{" "}
            <br className="md:block hidden" /> payment method.
          </h1>
          <div className="ss:flex hidden absolute right-3 top-7 transition-all duration-[.3s] hover:scale-110">
            <GetStarted />
          </div>
        </div>
        <p className={`${styles.paragraph} mt-5 max-w-[470px] capitalize`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>
      <div className="flex-1 md:mt-0 mt-10 relative">
        <img
          src={robot}
          alt="billing"
          className="w-full h-full"
        />
        {/* for the gradient around the img */}
        <div className="absolute z-0 w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] bottom-40 rounded-full white__gradient" />
        <div className="absolute z-0 w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>
      <div className="ss:hidden block mx-auto mt-5 transition-all duration-[.3s] hover:scale-110">
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
