import { stats } from "../constants/index";
const Stats = () => {
  return (
    <section className="flex md:flex-row md:gap-0 gap-8 flex-col justify-around items-center mt-4">
      {stats.map(({ title, value, id }) => (
        <div
          className="flex md:flex-row flex-col items-center gap-3 relative uppercase"
          key={id}
        >
          <h4 className="text-white font-semibold font-poppins text-3xl">
            {value}
          </h4>
          <span className="text-lg text-gradient">{title}</span>
          {/* the line */}
          <div className="md:block hidden absolute top-1/2 -right-8 -translate-y-1/2 w-[2px] h-1/2 bg-red-50" />{" "}
        </div>
      ))}
    </section>
  );
};

export default Stats;
