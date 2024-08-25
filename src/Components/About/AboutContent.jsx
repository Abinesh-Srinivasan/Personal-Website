import TextAnimation from "../Home/TextAnimation";

const AboutContent = () => {
  const email = "abineshsrinivasan1301@gmail.com";
  return (
    <div className="flex flex-col gap-8">
      <p data-aos="fade-up" className=" text-navblue font-sans ">
        - NICE TO MEET YOU!
      </p>
      <div
        data-aos="fade-up"
        className="flex flex-col gap-5 tracking-wide lg:flex-row lg:gap-44 lg:items-center"
      >
        <div className="flex flex-col gap-1 ">
          <p className=" text-homeboldtext text-3xl font-bold lg:text-5xl">
            Abinesh Srinivasan
          </p>
          <p className=" text-homeboldtext text-lg lg:text-2xl">
            <TextAnimation
              texts={[
                "Full Stack Web Developer",
                "Intensive Programmer",
                "Leetcode Problem Solver",
                "MERN Stack Developer",
              ]}
            />
          </p>
        </div>
        <div data-aos="fade-up">
          <a
            href="https://www.linkedin.com/in/abineshsrinivasan/"
            target="_blank"
            className="tracking-wide"
          >
            <button className=" border-2 border-homeboldtext px-9 py-4 rounded text-white bg-homeboldtext hover:border-homeboldtext hover:text-navblue hover:bg-white transition-all duration-300 lg:h-16">
              Let's Connect!
            </button>
          </a>
        </div>
      </div>
      <div>
        <div
          data-aos="fade-up"
          className="flex flex-col gap-3 text-homesmalltext tracking-wider leading-7 font-sans lg:text-lg"
        >
          <p>
            Hello there! My name is{" "}
            <span className=" text-homecontentline"> Abinesh S</span>. I am a
            Enthusiastic Web Developer, currently pursuing Bachelor of
            Technology in Computer Science and Engineering at Rajiv Gandhi
            College of Engineering and Technology.
          </p>
          <p>
            With more than 1 year of experience as a professional Web Developer,
            I have acquired the skills and knowledge necessary to make your
            project a success. Visit the{" "}
            <a href="#Services" className="underline">
              Services
            </a>{" "}
            Section to know more about my Services.
          </p>
        </div>
      </div>
      <div
        data-aos="fade-up"
        className="flex flex-col gap-7 text-homeboldtext lg:flex-row lg:gap-14"
      >
        <div className="flex gap-10 lg:gap-16">
          <div className="flex flex-col gap-2">
            <p className=" underline text-homesmalltext tracking-wider">AGE</p>
            <p className=" font-bold text-xl font-sans">
              {new Date().getFullYear() - 2005}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className=" underline text-homesmalltext tracking-wider">
              LOCATION
            </p>
            <p className=" font-bold text-xl font-sans">
              <a
                href="https://maps.app.goo.gl/VY7mgwGUJaZtsBUj8"
                target="_blank"
                className=" hover:text-emailhover transition-all duration-300"
              >
                Cuddalore, Tamil Nadu
              </a>
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className=" underline text-homesmalltext tracking-wider">MAIL</p>
          <p className=" font-bold text-xl font-sans">
            <a
              href={`mailto:${email}`}
              className=" hover:text-emailhover transition-all duration-300"
            >
              {email}
            </a>
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className=" underline text-homesmalltext tracking-wider">
            TELEGRAM
          </p>
          <p className=" font-bold text-xl font-sans">
            <a
              href="https://t.me/AbineshSrinivasan"
              target="_blank"
              className=" hover:text-emailhover transition-all duration-300"
            >
              AbineshSrinivasan
            </a>
          </p>
        </div>
      </div>
      <div data-aos='fade-up' className="BOXES flex flex-col gap-10 mt-10 lg:flex-row">
        <div style={{width:"21.4rem"}} className="BOX1 bg-aboutbox1bg h-40 rounded flex flex-col items-center justify-center gap-1">
            <p className=" text-homeboldtext font-bold text-4xl">{new Date().getFullYear()-2023} +</p>
            <p className=" text-homesmalltext tracking-wider">YEARS OF EXPERIENCE</p>
        </div>
        <div data-aos='fade-up' style={{width:"21.4rem"}} className="BOX2 bg-aboutbox2bg h-40 rounded flex flex-col items-center justify-center gap-1">
            <p className=" text-homeboldtext font-bold text-4xl">12 +</p>
            <p className=" text-homesmalltext tracking-wider">PROJECTS COMPLETED</p>
        </div>
        <div data-aos='fade-up' style={{width:"21.4rem"}} className="BOX3 bg-aboutbox3bg h-40 rounded flex flex-col items-center justify-center gap-1">
            <p className=" text-homeboldtext font-bold text-4xl">2K +</p>
            <p className=" text-homesmalltext tracking-wider ">LINKEDIN CONNECTIONS</p>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
