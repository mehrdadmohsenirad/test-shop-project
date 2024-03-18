import Container from "../container/Container";
import { TiSocialInstagram } from "react-icons/ti";
import { FaTelegram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <div className=" bg-gray-900 text-white pt-20 pb-20">
      <Container>
        <div className="h-64 flex justify-between">
          <div className=" h-full w-1/3 flex items-center justify-center">
            <img src="/src/assets/images/logoNafis.png" alt="logo" />
          </div>

          <div className=" w-1/3 h-full flex flex-col items-start justify-evenly">
            <div className=" flex flex-col ">
              <h1 className=" text-yellow-500 text-xl mb-1">SHOWROOM</h1>
              <hr className=" mb-5" />
              <p className=" text-gray-400">
                Address: Kilometer 10 of Ardabil to Tabriz road, Ardabil, IRAN
              </p>
              <p className=" mt-2 mb-2 text-gray-400">
                Phone: +98 914-151-8680
              </p>
              <p className=" text-gray-400">E-Mail: iran.nafis@yahoo.com</p>
            </div>

            <div className=" flex flex-col mt-5">
              <h1 className=" text-yellow-500 text-xl mb-1">SOCIAL MEDIA</h1>
              <hr className=" mb-5" />
              <div className=" flex items-center justify-start">
                <span className=" text-3xl text-gray-400 mr-4" >
                  <TiSocialInstagram />
                </span>
                <span className=" text-3xl text-gray-400 mr-4">
                  <FaTelegram />
                </span>
                <span className=" text-3xl text-gray-400 mr-4">
                  <FaFacebook />
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
