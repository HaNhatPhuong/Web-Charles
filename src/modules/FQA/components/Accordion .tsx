import React, { useState, useRef } from "react";

const AccordionItem = ({ title, content }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-4 px-2 flex justify-between items-center"
      >
        <span className="text-lg font-semibold">{title}</span>
        <span className="text-2xl">{isOpen ? "-" : "+"}</span>
      </button>
      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : "0",
          overflow: "hidden",
          transition: "max-height 0.3s ease-out",
        }}
        className="px-4"
      >
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  );
};

const Accordion = () => {
  const items = [
    {
      title: "At Vero Eos Et Accusamus Et Iusto Odio Dignissimos ?",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      title: "Vel illum dolore eu fugiat nulla facilisis at vero eros?",
      content: "Sed diam nonummy nibh euismod tincidunt ut laoreet dolore...",
    },
    {
      title: "Vel illum dolore eu fugiat nulla facilisis at vero eros?",
      content: "Sed diam nonummy nibh euismod tincidunt ut laoreet dolore...",
    },
    {
      title: "Vel illum dolore eu fugiat nulla facilisis at vero eros?",
      content: "Sed diam nonummy nibh euismod tincidunt ut laoreet dolore...",
    },
    {
      title: "Vel illum dolore eu fugiat nulla facilisis at vero eros?",
      content: "Sed diam nonummy nibh euismod tincidunt ut laoreet dolore...",
    },
    // Thêm các mục khác ở đây
  ];

  return (
    <div>
      <div className=" text-center">
        <h1 className="pb-[22px] text-[38px] font-bold">
          FREQUENTLY ASKED QUESTIONS
          <div className="pt-4">
            <hr className="w-10 border-t-[4px] border-solid border-slate-400 rounded-xl mx-auto" />
          </div>
        </h1>
        <p className="text-[18px] text-[#555555]">
          A tale of a fateful trip that started from this tropic port aboard
          this tiny ship today stillers
        </p>
      </div>
      <div className="max-w-2xl mx-auto mt-8">
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
    </div>
  );
};

export default Accordion;
