import React, { useState } from "react";

function Review() {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="mx-[174px] border-2 border-gray-300  p-4">
      <div className="flex text-[20px] border-b border-gray-300">
        <button
          onClick={() => setActiveTab("description")}
          className={`px-4 py-2 font-semibold ${
            activeTab === "description"
              ? "text-[#001635] border-b-2 border-[#001635]"
              : "text-gray-500"
          }`}
        >
          Description
        </button>
        <button
          onClick={() => setActiveTab("review")}
          className={`px-4 py-2 font-semibold ${
            activeTab === "review"
              ? "text-[#001635] border-b-2 border-[#001635]"
              : "text-gray-500"
          }`}
        >
          Review
        </button>
      </div>
      {activeTab === "description" && (
        <div className="px-[40px] py-[20px] text-[18px] text-gray-700">
          <p>
            This tropic port aboard this tiny ship today still wanted by the
            government apartment in the sky moving on up to the east side a
            family to explore strange new worlds to seek out new life and new
            civilizations to boldly go where no man has gone before. You would
            see the biggest gift would be from me and the card.
          </p>
          <p className="mt-4">
            That this group would somehow form a family that's the way we all
            became the Brady Bunch apartment in the sky moving on up to the east
            side a family to explore strange new worlds.
          </p>
        </div>
      )}
      {activeTab === "review" && (
        <div className="px-[40px] py-[20px] text-gray-700">
          <div className="mt-4 pb-4 flex gap-3">
            <div>
              <img src="/src-img/Guess.jpg" alt="" />
            </div>
            <div>
              <h4 className="font-semibold">John Doe</h4>
              <p>
                Amazing product! Highly recommend to everyone. The quality is
                outstanding and it exceeded my expectations.
              </p>
            </div>
          </div>
          <div className="mt-4 flex gap-3">
            <div>
              <img src="/src-img/Guess.jpg" alt="" />
            </div>
            <div>
              <h4 className="font-semibold">Jane Smith</h4>
              <p>
                Excellent service and fantastic results. Will definitely be
                purchasing again in the future.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Review;
