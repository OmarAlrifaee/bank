import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => {
  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
    >
      <div
        className={`flex flex-col ${styles.flexCenter} bg-primary w-full h-full rounded-full`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className=" font-poppins font-medium text-md capitalize leading-normal">
            <span className="text-gradient">get</span>
            <img
              src={arrowUp}
              alt="arrow up"
              className="w-[25px] h-[25px] object-contain inline-block ml-1"
            />
            <span className="text-gradient block">started</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
