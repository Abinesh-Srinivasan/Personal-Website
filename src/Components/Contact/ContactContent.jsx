import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Map from "./Map";

const ContactContent = () => {
  const email = "abineshsrinivasan1301@gmail.com";
  const [username, setUsername] = useState("");
  const [useremail, setUseremail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_4vpg5qg", "template_fno4ezp", form.current, {
        publicKey: "lpukhazKMXyoiH5xy",
      })
      .then(
        () => {
          alert("Message Successfully Sent!");
          setMessage("");
          setUseremail("");
          setUsername("");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-10 lg:flex-row lg:gap-32">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            <div data-aos="fade-up" className="flex flex-col gap-1">
              <p className=" text-homesmalltext tracking-wide lg:text-lg">
                - LET'S CONNECT
              </p>
              <p className=" text-homeboldtext font-bold text-4xl lg:text-5xl">
                Get in touch
              </p>
            </div>
            <div
              data-aos="fade-up"
              className=" text-homesmalltext tracking-wide leading-7 lg:w-96 lg:text-lg lg:leading-8"
            >
              I'm currently available to take on new projects. Feel free to
              reach out at any time, as I am accessible 24/7. I welcome
              the opportunity to discuss any potential collaborations or
              initiatives.
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="flex flex-col gap-3  text-lg font-bold text-homeboldtext"
          >
            <p>
              <a
                className=" hover:text-emailhover transition-all duration-300 underline underline-offset-4"
                href="https://t.me/AbineshSrinivasan"
                target="_blank"
              >
                AbineshSrinivasan
              </a>
            </p>
            <p>
              <a
                className=" hover:text-emailhover transition-all duration-300 underline underline-offset-4"
                href={`mailto:${email}`}
              >
                {email}
              </a>
            </p>
            <p>
              <a
                className=" hover:text-emailhover transition-all duration-300 underline underline-offset-4"
                href="https://maps.app.goo.gl/VY7mgwGUJaZtsBUj8"
              >
                Cuddalore, Tamil Nadu, India
              </a>
            </p>
          </div>
        </div>
        <div data-aos="fade-up">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-8 text-homesmalltext text-lg lg:gap-5 lg:mt-3 "
          >
            <input
              className="p-5 outline-none border rounded border-contactinputborder lg:w-96"
              placeholder="Enter your Name"
              type="text"
              required
              name="user_name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="p-5 outline-none border rounded border-contactinputborder"
              placeholder="Your Email"
              type="email"
              required
              name="user_email"
              value={useremail}
              onChange={(e) => setUseremail(e.target.value)}
            />
            <textarea
              rows="4"
              className="p-5 outline-none border rounded border-contactinputborder"
              placeholder="Write something valuable..."
              type="text"
              required
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <div>
              <button className=" border-2 border-homeboldtext px-8 py-3 rounded text-white bg-homeboldtext hover:border-homeboldtext hover:text-navblue hover:bg-white transition-all duration-300">
                Submit Now
              </button>
            </div>
          </form>
        </div>
      </div>
      <Map />
    </div>

    // <div data-aos="zoom-in" className="lg:ml-20">
    //   <p className="text-4xl font-sans text-red mb-10 md:mb-6 lg:text-5xl">
    //     Get in Touch!
    //   </p>
    //   <form
    //     ref={form}
    //     onSubmit={sendEmail}
    //     className=" px-4 flex flex-col justify-center gap-12 "
    //   >
    //     <input
    //       className="text-xl text-violet h-8 p-3 mb-3 outline-none md:h-10 md:w-80 bg-oasis_sand"
    //       placeholder="Enter your Name"
    //       type="text"
    //       required
    //       name="user_name"
    //       value={username}
    //       onChange={(e) => setUsername(e.target.value)}
    //     />
    //     <input
    //       className="text-xl text-violet h-8 p-3 mb-3 outline-none md:h-10 md:w-80 bg-oasis_sand"
    //       placeholder="Enter your Email Id"
    //       type="email"
    //       required
    //       name="user_email"
    //       value={useremail}
    //       onChange={(e) => setUseremail(e.target.value)}
    //     />
    //     <input
    //       className="text-xl text-violet h-10 w-72 p-3 outline-none md:h-10 md:w-80 bg-oasis_sand"
    //       placeholder="Share your Message!"
    //       type="text"
    //       required
    //       name="message"
    //       value={message}
    //       onChange={(e) => setMessage(e.target.value)}
    //     />
    //     <div className="flex px-2 justify-between w-64">
    //       <button
    //         className="text-2xl px-3 py-1 rounded-md text-blue font-mono hover:text-pink active:text-red tracking-wider md:text-2xl"
    //         type="submit"
    //       >
    //         Send
    //       </button>
    //       <button
    //         className="text-2xl px-3 py-1 rounded-md text-orangered font-mono hover:text-pink active:text-blue tracking-wider md:text-2xl"
    //         onClick={() => {
    //           setMessage("");
    //           setUseremail("");
    //           setUsername("");
    //         }}
    //       >
    //         Clear
    //       </button>
    //     </div>
    //   </form>
    // </div>
  );
};
export default ContactContent;
