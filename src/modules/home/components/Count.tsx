import { useState } from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const CounterBox = ({ from, to, speed, label }: any) => {
  const [, setInView] = useState(false);
  const { ref, inView: isVisible } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    onChange: (inView) => setInView(inView),
  });

  return (
    <div className="md:w-1/4 w-1/2 p-4" ref={ref}>
      <div className="single-counter-box text-center">
        <div className="number text-[70px] font-thin text-[#001A57]">
          {isVisible && (
            <CountUp start={from} end={to} duration={speed / 800} />
          )}
          {to === 30 && "+"}
          {to === 100 && "%"}
          {to === 53 && "k"}
        </div>
        <p className="text-[#555555]">{label}</p>
      </div>
    </div>
  );
};

function Count() {
  const backgroudPatten = "/src-img/pattern.png";
  return (
    <div>
      <div
        className="py-[40px] mx-[174px] bg-no-repeat bg-center text-center"
        style={{ backgroundImage: `url(${backgroudPatten})` }}
      >
        <div className="theme-counter-two section-spacing">
          <div className="container mx-auto">
            <div className="clearfix">
              <div className="counter-wrapper">
                <div className="flex mx-[174px]">
                  <CounterBox
                    from={0}
                    to={30}
                    speed={3000}
                    label="Years of Excellence"
                  />
                  <CounterBox
                    from={0}
                    to={100}
                    speed={3000}
                    label="Client Satisfaction"
                  />
                  <CounterBox
                    from={0}
                    to={53}
                    speed={3000}
                    label="Cases Completed"
                  />
                  <CounterBox
                    from={0}
                    to={24}
                    speed={3000}
                    label="Consultants"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Count;
