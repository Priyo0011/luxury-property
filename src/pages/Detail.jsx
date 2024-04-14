import { useLoaderData, useParams } from "react-router-dom";
import Footer from "./shared/footer/Footer";
import Navbar from "./shared/navbar/Navbar";
import { FaLocationDot } from "react-icons/fa6";
const Detail = () => {
  const details = useLoaderData();
  const { id } = useParams();
  const detail = details.find((detail) => detail.id === id);
  const {
    image,
    estate_title,
    segment_name,
    price,
    status,
    description,
    area,
    location,
    facilities,
  } = detail;
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <div className="mt-8">
        <div className=" bg-gray-100 p-4 md:p-20">
          <figure>
            <img className="md:h-[480px] md:w-full " src={image} alt="" />
          </figure>

          <div className="card-body">
            <div className="flex flex-wrap py-2 gap-2 border-dashed ">
              {facilities &&
                facilities.map((facilities) => (
                  <a
                    key={facilities}
                    className="px-2 py-1 text-sky-600 bg-sky-100 rounded-full "
                  >
                    {facilities}
                  </a>
                ))}
            </div>
            <div className=" bg-sky-100">
              <p className="flex items-center ml-8 gap-4 p-1">
                <FaLocationDot />
                {location}
              </p>
            </div>
            <h2 className="card-title text-2xl">{estate_title}</h2>
            <h3 className="font-bold uppercase">{segment_name}</h3>
            <div className=" md:grid grid-cols-3">
              <p className="bg-gray-600 text-center text-white">
                <span className="font-semibold">Price :</span> ${price}
              </p>
              <p className="bg-gray-300 text-center">
                <span className="font-semibold">Area :</span> {area}
              </p>
              <p className="bg-gray-600 text-center text-white"><span className="font-semibold mr-2">For :</span>
                {status}
              </p>
            </div>

            <p>{description}</p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Detail;
