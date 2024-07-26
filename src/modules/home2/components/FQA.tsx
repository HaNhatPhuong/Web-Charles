import { useState } from "react";

function Whywebest() {
  const Whywebestimg = "/src-img/Home2best.jpg";
  const [openTopic, setOpenTopic] = useState(null);
  const [showVideo, setShowVideo] = useState(false);

  const usefulTopics = [
    {
      question: "1. What industries do you specialize in?",
      answer:
        "A tale of a fateful trip that started from this tropic port aboard this tiny ship today still wanted by the government they survive as soldiers of fortune to a deluxe apartment in the sky moving on up to the east side a family to explore strange new worlds.",
    },
    {
      question: "2. You guarantee that our plan will raise capital?",
      answer:
        "A tale of a fateful trip that started from this tropic port aboard this tiny ship today still wanted by the government they survive as soldiers of fortune to a deluxe apartment in the sky moving on up to the east side a family to explore strange new worlds.",
    },
    {
      question: "3. Do you ever invest in your clients?",
      answer:
        "A tale of a fateful trip that started from this tropic port aboard this tiny ship today still wanted by the government they survive as soldiers of fortune to a deluxe apartment in the sky moving on up to the east side a family to explore strange new worlds.",
    },
    {
      question: "4. What makes your financial projections special?",
      answer:
        "A tale of a fateful trip that started from this tropic port aboard this tiny ship today still wanted by the government they survive as soldiers of fortune to a deluxe apartment in the sky moving on up to the east side a family to explore strange new worlds.",
    },
    {
      question: "5. Will you agree with everything I say?",
      answer:
        "A tale of a fateful trip that started from this tropic port aboard this tiny ship today still wanted by the government they survive as soldiers of fortune to a deluxe apartment in the sky moving on up to the east side a family to explore strange new worlds.",
    },
  ];

  const toggleTopic = (index: any) => {
    setOpenTopic(openTopic === index ? null : index);
  };

  return (
    <div>
      <div
        className="h-[570px] bg-[#0d1427] bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `url(${Whywebestimg})`,
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="mx-[174px] pt-[95px]">
          <div className="text-center">
            <h1 className="pb-[22px] text-[38px] text-white font-bold">
              FQA'S
              <div className="pt-4">
                <hr className="w-10 border-t-[4px] border-solid border-white rounded-xl mx-auto" />
              </div>
            </h1>
            <p className="text-[18px] text-white">
              A tale of a fateful trip that started from this tropic port aboard
              this tiny ship today stillers
            </p>
          </div>
          <div className="flex flex-wrap pt-[55px]">
            <div className="w-full lg:w-1/2 relative">
              {!showVideo ? (
                <div
                  className="cursor-pointer"
                  onClick={() => setShowVideo(true)}
                >
                  <img
                    src="/src-img/Home2video.jpg"
                    alt="Thumbnail"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowVideo(true);
                      }}
                      className=" w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg"
                    >
                      <img
                        className=" rounded-full"
                        src="/src-img/play2.avif"
                        alt="Play Button"
                      />
                    </a>
                  </div>
                </div>
              ) : (
                <div className="w-full h-0 pb-[56.25%] relative">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/iwWtofDtcV4"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="YouTube video"
                  ></iframe>
                </div>
              )}
            </div>
            <div className="p-4 w-full lg:w-1/2 bg-white text-xl text-[#555555]">
              {usefulTopics.map((topic, index) => (
                <div key={index} className="mb-6">
                  <p
                    className="font-semibold cursor-pointer border-b-2 border-slate-200 pb-3"
                    onClick={() => toggleTopic(index)}
                  >
                    {topic.question}
                  </p>
                  <div
                    className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                      openTopic === index ? "max-h-screen" : "max-h-0"
                    }`}
                  >
                    {topic.answer && (
                      <p className="pt-2 text-lg">{topic.answer}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Whywebest;
