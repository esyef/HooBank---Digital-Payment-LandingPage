import { stats } from "../constans";
import styles from "../style";

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {stats.map((stat) => (
      <article
        key={stat.id}
        className={`flex-1 flex justify-start items-center flex-row m-3 ss:flex-col ss:items-center sm:justify-center md:flex-row gap-1`}
      >
        <h3 className="font-poppins font-semibold xs:[text-40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
          {stat.value}
        </h3>
        <h4 className="font-poppins font-normal xs:[text-20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase">
          {stat.title}
        </h4>
      </article>
    ))}
  </section>
);

export default Stats;
