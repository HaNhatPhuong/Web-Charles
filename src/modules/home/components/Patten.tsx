import CountUp from "react-countup";
import backgroudPatten from "/code/Charles-web/src-img/pattern.png";

const CounterBox = ({ from, to, speed, label }: any) => {
  return (
    <div className="md:w-1/4 w-1/2 p-4">
      <div className="single-counter-box text-center">
        <div className="number text-[70px] font-thin text-[#001A57]">
          <CountUp start={from} end={to} duration={speed / 800} />
          {to === 30 && "+"}
          {to === 100 && "%"}
          {to === 53 && "k"}
        </div>
        <p className="text-[#555555]">{label}</p>
      </div>
    </div>
  );
};

function Patten() {
  return (
    <div>
      <div
        className="py-[40px] h-[511px] mx-[174px] bg-no-repeat  bg-center text-center"
        style={{ backgroundImage: `url(${backgroudPatten})` }}
      >
        <div className="py-[85px]">
          <div>
            <h6 className=" text-lg font-medium text-[#001A57]">
              COMPANY SUCCESS
            </h6>
            <h2 className="text-[42px] font-medium">
              Some fun facts about our consulting
            </h2>
          </div>
          {/*  */}
          <div className="theme-counter-two section-spacing  ">
            <div className="container mx-auto">
              <div className="clearfix">
                <div className="counter-wrapper">
                  <div className=" flex mx-[174px]">
                    <CounterBox
                      from={0}
                      to={30}
                      speed={1200}
                      label="Years of Excellence"
                    />
                    <CounterBox
                      from={0}
                      to={100}
                      speed={1200}
                      label="Client Satisfaction"
                    />
                    <CounterBox
                      from={0}
                      to={53}
                      speed={1200}
                      label="Cases Completed"
                    />
                    <CounterBox
                      from={0}
                      to={24}
                      speed={1200}
                      label="Consultants"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-8">
            <button className="text-[14px] font-medium px-[35px] leading-[50px] rounded-lg bg-[#001648] text-white hover:bg-blue-950 hover:text-white">
              VIEW CASE STUDIES
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Patten;
