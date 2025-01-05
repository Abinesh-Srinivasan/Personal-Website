import Abinesh from "../../assets/Abinesh3.png";
import TextAnimation from "./TextAnimation";
const HomeContent = () => {
  const email = "abineshsrinivasan1301@gmail.com";
  return (
    <div className="">
      <div className="lg:flex lg:flex-row-reverse justify-between">
        <div data-aos="zoom-in">
          <img className="mt-10 lg:w-96 lg:mt-24" src={Abinesh} />
        </div>
        <div data-aos="fade-up" data-aos-delay="200">
          <div className=" text-homeboldtext my-12 flex flex-col gap-2 text-4xl font-extrabold lg:text-5xl">
            <p>
              Hi, I'm <span className="text-navviolet">Abinesh!</span>
            </p>
            <TextAnimation
              texts={[
                "Web Developer",
                "ML Learner",
                "CS Student",
                "App Developer",
                "Finance Buff",
              ]}
            />
            {/* <p>Creative Coder</p> */}
            <p>React Engineer</p>
          </div>
          <div className="text-base  w-68 tracking-wide leading-8 text-homesmalltext pr-5 lg:-mt-5">
            <p>
              I'm a MERN based Web Developer & <br /> Computer Science Student
              with{" "}
              <span className=" text-navviolet">
                {new Date().getFullYear() - 2023}+ years
              </span>{" "}
              of experience
            </p>
          </div>
          <div className="flex gap-5 mt-10 lg:tracking-wider">
            <a
              href="https://github.com/Abinesh-Srinivasan"
              target="_blank"
              className="tracking-wide"
            >
              <button className="border-2 border-homeboldtext px-8 py-4 rounded text-white bg-homeboldtext hover:border-homeboldtext hover:text-navblue hover:bg-homecontent transition-all duration-300">
                My Projects!
              </button>
            </a>
            <a href="#Contact" className="tracking-wide">
              <button className="border-2 border-homeboldtext px-9 py-4 rounded text-navblue hover:bg-homeboldtext hover:text-white trasntion-all duration-300">
                Let's talk
              </button>
            </a>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        className="flex mt-10 items-center gap-5 lg:-mt-12"
      >
        <div className="bg-homecontentline w-1 h-28"></div>
        <div className="tracking-wide leading-8 text-homeboldtext">
          <p>
            <a
              className=" hover:text-emailhover transition-all duration-300"
              href="https://t.me/AbineshSrinivasan"
              target="_blank"
            >
              Telegram : AbineshSrinivasan
            </a>
          </p>
          <p>
            <a
              className=" hover:text-emailhover transition-all duration-300"
              href={`mailto:${email}`}
            >
              {email}
            </a>
          </p>
          <p className=" hover:text-emailhover transition-all duration-300">
            <a href="https://maps.app.goo.gl/bMdvbbE56Kv2TiEw7" target="_blank">
              Tamil Nadu, India
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
