const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImage }) => {
  const hanldeClick = () => {
    if (bigShoeImage !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImage === imgURL ? "border-coral-red" : "border-transparent"
      }cursor-pointer max-sm:flex-1`}
      onClick={hanldeClick}
    ></div>
  );
};

export default ShoeCard;
