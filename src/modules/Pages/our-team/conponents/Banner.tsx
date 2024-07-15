function Banner() {
  const backgroundShop = "/src-img/Shop.jpg";

  return (
    <div>
      <div className=" relative mt-[70px]">
        <div
          className="  h-[234px] bg-[#313a4c66]  bg-cover bg-center bg-no-repeat bg-fixed "
          style={{
            backgroundImage: `url(${backgroundShop})`,
            backgroundBlendMode: "overlay",
          }}
        >
          <div>
            <h1 className="text-5xl text-white font-bold text-center pt-[110px] pb-[70px]">
              OUR EXPERT
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
