import Container from "../../components/container/Container";
import "./About.css";

function About() {
  return (
    <div className=" h-screen flex items-center">
      <Container>
        <div className=" grid grid-cols-3 gap-8">
          <div className=" img-Container transition-all duration-1000 ease-in-out cursor-pointer relative dark:bg-black">
            <img
              className=" h-full transition-all duration-1000 ease-in-out"
              src="/src/assets/images/about1.jpg"
              alt="abou1"
            />
            <h1 className=" text-yellow-500 text-3xl absolute top-10 left-1/2 -translate-x-1/2">
              BACKGROUND
            </h1>
            <p className="transition-all duration-500 ease-in absolute text-white top-44 opacity-0 p-10 text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div className="img-Container transition-all duration-1000 ease-in-out relative cursor-pointer dark:bg-black">
            <img
              className=" h-full transition-all duration-1000 ease-in-out"
              src="/src/assets/images/about2.jpg"
              alt="abou2"
            />
            <h1 className=" text-yellow-500 text-3xl absolute top-10 left-1/2 -translate-x-1/2">
              OUR GOAL
            </h1>
            <p className="transition-all duration-500 ease-in text-white absolute top-44 opacity-0 p-10 text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div className="img-Container transition-all duration-1000 ease-in-out relative cursor-pointer dark:bg-black">
            <img
              className=" h-full transition-all duration-1000 ease-in-out"
              src="/src/assets/images/about4.jpg"
              alt="abou3"
            />
            <h1 className=" text-yellow-500 text-3xl absolute top-10 left-1/2 -translate-x-1/2">
              DETAILS
            </h1>
            <p className="transition-all duration-500 ease-in-out absolute opacity-0 text-white top-44 p-10 text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default About;
