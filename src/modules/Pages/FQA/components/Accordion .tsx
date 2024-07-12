import React, { useState, useRef } from "react";

const AccordionItem = ({ title, content }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-6 px-2 flex justify-between items-center"
      >
        <span className="text-xl font-normal text-[#555555]">{title}</span>
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
      content: (
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat.
          </p>
          <ol className=" py-4 list-decimal ml-6">
            <li>
              Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorperadipiscing elit,
            </li>
            <li>sed diam nonummynibh suscipit lobortis nisl ut aliquip ex.</li>
            <li>
              vel illum dolore eu feugiat nulla facilisis at vero eros et
              accumsan et.
            </li>
          </ol>
          <p>
            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
            molestie consequat, vel illum dolore eu.
          </p>
          <p>
            Vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan
            et iusto odio dignissim qui blandit praesent luptatum zzril delenit
            augue duis dolore te feugait nulla facilisi.
          </p>
        </div>
      ),
    },
    // noi dung 1
    {
      title: "Vel illum dolore eu feugiat nulla facilisis at vero eros?",
      content: (
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat.
          </p>
          <ol className=" py-4 list-decimal ml-6">
            <li>
              Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorperadipiscing elit,
            </li>
            <li>sed diam nonummynibh suscipit lobortis nisl ut aliquip ex.</li>
            <li>
              vel illum dolore eu feugiat nulla facilisis at vero eros et
              accumsan et.
            </li>
          </ol>
          <p>
            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
            molestie consequat, vel illum dolore eu.
          </p>
          <p>
            Vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan
            et iusto odio dignissim qui blandit praesent luptatum zzril delenit
            augue duis dolore te feugait nulla facilisi.
          </p>
        </div>
      ),
    },
    // noi dung 2
    {
      title:
        " Autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie?",
      content: (
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat.
          </p>
          <ol className=" py-4 list-decimal ml-6">
            <li>
              Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorperadipiscing elit,
            </li>
            <li>sed diam nonummynibh suscipit lobortis nisl ut aliquip ex.</li>
            <li>
              vel illum dolore eu feugiat nulla facilisis at vero eros et
              accumsan et.
            </li>
          </ol>
          <p>
            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
            molestie consequat, vel illum dolore eu.
          </p>
          <p>
            Vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan
            et iusto odio dignissim qui blandit praesent luptatum zzril delenit
            augue duis dolore te feugait nulla facilisi.
          </p>
        </div>
      ),
    },
    // noi dung 3
    {
      title: "Ut wisi enim ad minim veniam, quis nostrud exerci tation?",
      content: (
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat.
          </p>
          <ol className=" py-4 list-decimal ml-6">
            <li>
              Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorperadipiscing elit,
            </li>
            <li>sed diam nonummynibh suscipit lobortis nisl ut aliquip ex.</li>
            <li>
              vel illum dolore eu feugiat nulla facilisis at vero eros et
              accumsan et.
            </li>
          </ol>
          <p>
            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
            molestie consequat, vel illum dolore eu.
          </p>
          <p>
            Vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan
            et iusto odio dignissim qui blandit praesent luptatum zzril delenit
            augue duis dolore te feugait nulla facilisi.
          </p>
        </div>
      ),
    },
    // noi dung 4
    {
      title: "At Vero Eos Et Accusamus Et Iusto Odio Dignissimos ?",
      content: (
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat.
          </p>
          <ol className=" py-4 list-decimal ml-6">
            <li>
              Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorperadipiscing elit,
            </li>
            <li>sed diam nonummynibh suscipit lobortis nisl ut aliquip ex.</li>
            <li>
              vel illum dolore eu feugiat nulla facilisis at vero eros et
              accumsan et.
            </li>
          </ol>
          <p>
            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
            molestie consequat, vel illum dolore eu.
          </p>
          <p>
            Vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan
            et iusto odio dignissim qui blandit praesent luptatum zzril delenit
            augue duis dolore te feugait nulla facilisi.
          </p>
        </div>
      ),
    },
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
      <div className=" mx-[174px] mt-8">
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
