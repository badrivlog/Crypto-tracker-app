import BannerImg from "../../assets/Banner.png";

function Banner() {
  return (
    <div className="w-full h-[25rem] relative">
      <img src={BannerImg} alt="Banner Image" className="h-full w-full" />
      <div className="absolute top-20 left-0 right-0 mx-auto w-[20rem]">
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-5xl text-black">Crypto Tracker</h1>
          <p className="font-semibold text-sm text-center text-black">
            Get all info regarding cryptocurrencies
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
