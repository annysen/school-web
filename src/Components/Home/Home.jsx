import cover from "../../assets/img/cover.jpg";

import {
  AcademicCapIcon,
  NewspaperIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

const Home = () => {
  return (
    <div>
      {/* title section */}
      <section className="flex justify-center items-center px-5 my-10 ">
        {/* text section  */}
        <div className="w-1/2">
          <h1 className="text-5xl font-bold">
            The Smarter Way <br /> to Learn{" "}
            <span className="text-orange-500 underline underline-offset-2">
              Anything
            </span>
          </h1>
          <p className="py-5 text-lg">
            Welcome to our school, where every child's potential is nurtured and
            celebrated. Our mission is to provide a supportive and enriching
            learning environment for students of all backgrounds and abilities.{" "}
          </p>
        </div>
        {/* image section  */}
        <div className="w-1/2">
          <img className="rounded-xl" src={cover} alt="" />
        </div>
      </section>

      {/* mid section  */}
      <section className=" my-20">
        <h1 className="text-center text-5xl font-bold ">
          Welcome to <span className="text-orange-600">Shelly</span>
        </h1>
        <p className=" text-center text-xl mt-5">
          we are committed to excellence in education. With a team of dedicated
          educators, state-of-the-art facilities, and a diverse range of
          extracurricular activities, we strive to empower our students to reach
          their full potential.
        </p>
        <div className="flex justify-between gap-4 my-10">
          <div className="flex flex-col border shadow-2xl rounded-lg p-10">
            <AcademicCapIcon className="h-10 w-10 text-orange-500" />
            <h1 className="text-xl font-bold my-3">Awesome Teachers</h1>
            <p>
              Meet our incredible teachers! Passionate, dedicated, and committed
              to student success. With innovative methods and individualized
              support, they inspire and empower students every day. Together, we
              celebrate excellence in education!
            </p>
          </div>
          <div className="flex flex-col border shadow-2xl rounded-lg p-10">
            <NewspaperIcon className="h-10 w-10 text-orange-500" />
            <h1 className="my-3 text-xl font-bold">Global Certificate</h1>
            <p>
              Explore our global certification program. Gain a competitive edge
              and international recognition with our globally recognized
              certificates. Elevate your career and expand your opportunities
              with us.
            </p>
          </div>
          <div className="flex flex-col border shadow-2xl rounded-lg p-10">
            <UserGroupIcon className="h-10 w-10 text-orange-500" />
            <h1 className=" my-3 text-xl font-bold">Student Support Service</h1>
            <p>
              Discover our comprehensive student support services. From academic
              guidance to personal counseling, we're here to ensure every
              student's success. Our dedicated team is committed to providing
              the support and resources needed to thrive academically and
              personally.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
