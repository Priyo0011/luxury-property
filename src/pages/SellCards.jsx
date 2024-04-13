const SellCards = ({cards}) => {
  const {image,estate_title,segment_name,price,status}= cards;
  return (
    <div className="mt-8">
      <div className=" bg-gray-100">
        <figure>
          <img className="h-[240px] w-full p-4 "
            src={image}
            alt=""
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{estate_title}</h2>
          <h3 className="font-bold uppercase">{segment_name}</h3>
          <div className="flex">
            <p><span className="font-semibold">Price</span> ${price}</p>
            <p className="bg-gray-200 text-center font-extrabold">{status}</p>
          </div>
          <button class="btn bg-gray-700 text-white uppercase w-full">View Property</button>

        </div>
      </div>
    </div>
  );
};

export default SellCards;
