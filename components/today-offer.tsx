import ImageComponent from "./ui/image";

const TodayOffer = () => {
  return (
    <div className="size-[120px] flex items-center justify-center bg-[#FEBF00] rounded-full shadow-custom-shadow">
      <ImageComponent
        src="/today-offer.png"
        alt="today-offer-banner"
        className="size-[105.66px]"
      />
    </div>
  );
};

export default TodayOffer;
