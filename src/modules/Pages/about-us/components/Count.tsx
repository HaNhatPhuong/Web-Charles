import CountUp from "react-countup";

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

const Count = () => {
  return (
    <div className="theme-counter-two section-spacing ">
      <div className="container ">
        <div className="clearfix">
          <div className="counter-wrapper mx-[174px]">
            <div className=" flex mx-[146px]">
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
              <CounterBox from={0} to={24} speed={1200} label="Consultants" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Count;
