import { PhoneIcon, ClockIcon, MapPinIcon } from "@heroicons/react/24/solid";

const Footer = () => {
  return (
    <div className="flex justify-between items-center p-10 h-52 bg-slate-300 ">
      <div>
        <h1 className="text-orange-500 text-3xl font-bold">Our School</h1>
      </div>
      <div className="flex gap-3 items-center">
        <PhoneIcon className="h-6 w-6 text-orange-500" />
        <span>
          <p>Call</p>
          <p>+2 342 5446 67</p>
        </span>
      </div>
      <div className="flex gap-3 items-center">
        <ClockIcon className="h-6 w-6 text-orange-500" />
        <span>
          <p>Work Time</p>
          <p>Mon-Fri 8AM-5PM</p>
        </span>
      </div>
      <div className="flex gap-3 items-center">
        <MapPinIcon className="h-6 w-6 text-orange-500" />
        <span>
          <p>Address</p>
          <p>Franklin St, Greenpoint Ave</p>
        </span>
      </div>
    </div>
  );
};

export default Footer;
