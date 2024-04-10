const ServicesContent = () => {
  const email = "abineshsrinivasan1301@gmail.com";
  return (
    <div className="flex flex-col gap-10 lg:gap-14">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col gap-3 lg:gap-5">
          <p className=" tracking-wide text-navblue lg:text-xl">- SERVICES</p>
          <p className=" text-5xl text-homeboldtext font-bold lg:text-6xl">
            My Services
          </p>
        </div>
        <p className=" text-homeboldtext underline tracking-wide lg:text-lg hover:text-emailhover hover:no-underline hover:text-xl transition-all duration-300">
          <a href={`mailto:${email}`}>Mail Me to Get the Services!</a>
        </p>
      </div>
      <div className="flex flex-col gap-4 border p-6 rounded border-servicesborder">
        <p className=" text-servicesnumber text-xl lg:text-3xl">01</p>
        <p className=" text-homeboldtext text-2xl font-bold lg:text-3xl">
          Personal Websites
        </p>
        <div className="flex flex-col gap-6 lg:flex-row lg:text-lg">
          <p className=" text-servicestext leading-8 lg:leading-10">
            A personal website is crucial for individuals as it acts as a
            central hub for personal branding, professionalism, and networking.
            It showcases skills, achievements, and interests, establishing a
            strong online presence and enabling potential employers or clients
            to learn more about the individual's work.
          </p>
          <p className=" text-servicestext leading-8 lg:leading-10">
            Looking for an impressive personal website to elevate your online
            presence? Look no further! I specialize in crafting fully-fledged
            personal websites tailored to meet your unique needs. Visit the{" "}
            <a href="" className=" text-navblue">
              Contact
            </a>{" "}
            section to place your order.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 border p-6 rounded border-servicesborder">
        <p className=" text-servicesnumber text-xl lg:text-3xl">02</p>
        <p className=" text-homeboldtext text-2xl font-bold lg:text-3xl">
          Business Websites
        </p>
        <div className="flex flex-col gap-6 lg:flex-row lg:text-lg">
          <p className=" text-servicestext leading-8 lg:leading-10">
            Business websites are essential for modern entrepreneurs as they
            serve as the virtual storefronts, establishing credibility,
            professionalism, and accessibility for potential customers. These
            platforms not only showcase products or services but also enable
            effective marketing and branding efforts, reaching a global audience
            and driving sales.
          </p>
          <p className=" text-servicestext leading-8 lg:leading-10">
            Furthermore, Business Websites facilitate customer support and
            communication, enhancing the overall customer experience. With
            analytics tools, businesses can gain valuable insights into user
            behavior, enabling informed decision-making and continued growth. In
            essence, a business website is a cornerstone of success in today's
            digital landscape, offering a centralized hub for engagement, sales,
            and brand representation.
          </p>
          <p className=" text-servicestext leading-8 lg:leading-10">
            On the hunt for a polished business website to enhance your online
            brand? Your search ends here! I specialize in developing fully
            customized business websites that align perfectly with your needs.
            Visit the{" "}
            <a href="" className=" text-navblue">
              Contact
            </a>{" "}
            section to kickstart your project.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesContent;
