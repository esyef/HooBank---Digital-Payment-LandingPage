import { features, feedback } from "../constans";
import style, { layout } from "../style";
import Button from "./Button";

type props = { index: number };
const FeacureCard = ({ ...feacture }, { index }: props) => {
  const { icon, content, title } = feacture;
  return (
    <div className="flex flex-row p-6 rounded-[20px] gap-6 feature-card ">
      <div
        className={`w-[64px] h-[64px] rounded-full ${style.flexCenter} bg-dimBlue`}
      >
        <img
          src={icon}
          alt={title}
          className="w-[50%] h-[50%] object-contain"
        />
      </div>

      <div className="flex-1 flex flex-col ml-3 gap-2">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px]">
          {title}
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
          {content}
        </p>
      </div>
    </div>
  );
};

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={style.heading2}>
          You do the business, <br className="sm:block hidden" /> we&apos;ll
          handle the money.
        </h2>
        <p className={`${style.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>

        <Button styles="mt-10" />
      </div>

      <div className={`${layout.sectionImg} flex-col gap-6`}>
        {features.map((feacture, index) => {
          return <FeacureCard index={index} key={feacture.id} {...feacture} />;
        })}
      </div>
    </section>
  );
};

export default Business;
