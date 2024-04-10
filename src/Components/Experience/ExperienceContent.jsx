const ExperienceContent = () => {


  return (
    <div className="flex flex-col gap-10 tracking-wide">
      <div data-aos="fade-up" className="flex flex-col gap-3">
        <p className=" tracking-wide text-navblue lg:text-xl">- EXPERIENCE</p>
        <p className=" text-3xl text-homeboldtext font-bold lg:text-6xl">
          Everything about Me!
        </p>
      </div>
      <div className="flex flex-col gap-10 lg:flex-row">
        <div
          data-aos="fade-up"
          className="BOX1 flex flex-col bg-white p-6 gap-4 lg:p-10 rounded "
        >
          <div className="flex flex-col gap-2">
            <div className="flex justify-between lg:text-lg">
              <p className=" text-emailhover">-2023 - Present</p>
              <p className=" text-homesmalltext">-Freelancer</p>
            </div>
            <p className=" text-homeboldtext font-bold text-2xl lg:text-3xl">
              Web Developer
            </p>
          </div>
          <p className=" text-experiencetext  leading-8 lg:text-lg lg:leading-9">
            As a freelance web developer, I've worked with various Web
            Development projects and made Success. From crafting websites for
            local businesses to supporting larger enterprises, I've gained
            valuable experience in creating user-friendly digital experiences.
          </p>
        </div>
        <div
          data-aos="fade-up"
          className="BOX2 flex flex-col bg-white p-6 gap-4 lg:p-10 rounded "
        >
          <div className="flex flex-col gap-2">
            <div className="flex justify-between lg:text-lg">
              <p className=" text-emailhover">-Jan 2024 - Feb 2024</p>
              <p className=" text-homesmalltext">-Internship</p>
            </div>
            <p className=" text-homeboldtext font-bold text-2xl lg:text-3xl">
              CodSoft Developer
            </p>
          </div>
          <p className=" text-experiencetext  leading-8  lg:text-lg lg:leading-9">
            I have successfully completed a Virtual Web Development Internship
            with Codsoft IT Consultancy Services, where I served as a Front-End
            Web Developer. Throughout this experience, I have successfully
            executed various professional projects. For more information, please
            visit this{" "}
            <a
              className="underline hover:text-emailhover transition-all duration-300"
              href="https://www.linkedin.com/posts/abineshsrinivasan_codsoft-codsoftinternship-webdevelopment-activity-7164822447958024192-VfJR?utm_source=share&utm_medium=member_desktop"
              target="_blank"
            >
              link
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceContent;
