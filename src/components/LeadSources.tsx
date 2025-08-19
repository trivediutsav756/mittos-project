import {
  FaWhatsapp,
  FaPhoneAlt,
  FaFilePdf,
  FaRandom,
  FaUserSlash,
  FaWpforms,
} from 'react-icons/fa';
import { BiMessageRoundedDetail } from 'react-icons/bi';
import { SiGmail } from 'react-icons/si';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { BsPuzzle } from 'react-icons/bs';
import { IoIosCopy } from 'react-icons/io';

const ToggleSwitch = ({ label, checked }) => (
  <div className="flex items-center">
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        defaultChecked={checked}
        className="sr-only peer"
      />
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:bg-blue-600 transition-all"></div>
    </label>
    <span className="ml-3 text-gray-700 text-sm">{label}</span>
  </div>
);

const LeadSources = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          Instantly capture and assign every lead, both online or offline
        </h1>
        <p className="text-gray-600 mb-8">
          Connect Privyr directly to your lead sources to receive instant new
          lead alerts. Contact them in just one tap via WhatsApp, text, call,
          and more—taking seconds instead of days to start new conversations.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {[
            { icon: <BsPuzzle className="mr-2" />, label: 'No-code Integrations' },
            { icon: <IoMdNotificationsOutline className="mr-2" />, label: 'Instant Lead Alerts' },
            { icon: <FaRandom className="mr-2" />, label: 'Automatic Lead Distribution' },
            { icon: <IoIosCopy className="mr-2" />, label: 'Duplicate Lead Handling' },
            { icon: <FaUserSlash className="mr-2" />, label: 'Offline Lead Capture' },
            { icon: <FaWpforms className="mr-2" />, label: 'Privyr Lead Forms' },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 text-gray-700 text-sm font-medium px-4 py-2 rounded-lg flex items-center"
            >
              {item.icon}
              {item.label}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-purple-50 flex justify-center items-center py-12">
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8 max-w-6xl w-full">
          {/* Left Section */}
          <div className="w-full lg:w-1/2">
            <div className="relative h-[350px] w-full mb-8">
              <svg
                className="absolute top-0 left-0 w-full h-full z-0"
                preserveAspectRatio="none"
              >
                <line
                  x1="50%"
                  y1="22"
                  x2="15%"
                  y2="100"
                  stroke="#e9d5ff"
                  strokeWidth="2"
                />
                <line
                  x1="50%"
                  y1="22"
                  x2="35%"
                  y2="200"
                  stroke="#e9d5ff"
                  strokeWidth="2"
                />
                <line
                  x1="50%"
                  y1="22"
                  x2="50%"
                  y2="300"
                  stroke="#e9d5ff"
                  strokeWidth="2"
                />
                <line
                  x1="50%"
                  y1="22"
                  x2="65%"
                  y2="200"
                  stroke="#e9d5ff"
                  strokeWidth="2"
                />
                <line
                  x1="50%"
                  y1="22"
                  x2="85%"
                  y2="100"
                  stroke="#e9d5ff"
                  strokeWidth="2"
                />
              </svg>

              <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
                <h2 className="text-sm sm:text-lg font-bold text-blue-600 bg-blue-100 rounded-full py-2 px-4 sm:px-6 inline-block whitespace-nowrap">
                  Your lead sources
                </h2>
              </div>

              {[1, 2, 3, 4, 5].map((num, idx) => {
                const positions = [
                  { top: '80px', left: '15%' },
                  { top: '180px', left: '35%' },
                  { top: '280px', left: '50%' },
                  { top: '180px', left: '65%' },
                  { top: '80px', left: '85%' },
                ];
                return (
                  <div
                    key={idx}
                    className="absolute z-10"
                    style={{
                      top: positions[idx].top,
                      left: positions[idx].left,
                      transform: 'translate(-50%, 0)',
                    }}
                  >
                    <img
                      src={`https://i.pravatar.cc/150?img=${num}`}
                      alt={`Lead ${num}`}
                      className="w-12 sm:w-16 h-12 sm:h-16 rounded-full border-4 border-white shadow-md"
                    />
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-6 mb-6 space-y-4 sm:space-y-0">
              <ToggleSwitch label="Round Robin" checked />
              <ToggleSwitch label="Any Custom Rules" />
            </div>
            <div className="flex justify-center mb-6">
              <ToggleSwitch label="Fastest Fingers First" checked />
            </div>

            <div className="flex justify-center space-x-4">
              <FaWhatsapp className="w-8 h-8 text-green-500" />
              <BiMessageRoundedDetail className="w-8 h-8 text-blue-500" />
              <FaPhoneAlt className="w-8 h-8 text-green-500" />
              <SiGmail className="w-8 h-8 text-red-500" />
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/2 flex items-center">
            <div className="w-full space-y-8">
              {/* Timeline Item 1 */}
              <div className="flex items-start">
                <div className="z-10 bg-indigo-600 text-white rounded-full px-3 py-1 text-sm">
                  Day 1
                </div>
                <div className="ml-4 bg-white p-4 rounded-lg shadow-md w-full">
                  <div className="flex items-center text-sm mb-2">
                    <IoMdNotificationsOutline className="text-red-500 mr-2" />
                    <span className="font-bold">New lead alert</span>
                  </div>
                  <div className="bg-gray-50 p-2 rounded-lg text-sm">
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>PRIVYR</span>
                      <span>now</span>
                    </div>
                    <p className="font-bold">New Lead - Katherine Lim</p>
                    <p className="text-xs">
                      You have a new lead from Facebook. Tap to follow up with
                      Katherine Lim
                    </p>
                  </div>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="flex items-start">
                <div className="z-10 bg-indigo-600 text-white rounded-full px-3 py-1 text-sm">
                  Day 2
                </div>
                <div className="ml-4 bg-white p-4 rounded-lg shadow-md w-full flex items-center">
                  <FaFilePdf className="text-red-500 text-2xl mr-3" />
                  <div>
                    <p className="font-bold">Send brochure</p>
                    <p className="text-sm text-gray-500">Send PDF file</p>
                  </div>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="flex items-start">
                <div className="z-10 bg-indigo-600 text-white rounded-full px-3 py-1 text-sm">
                  Day 3
                </div>
                <div className="ml-4 bg-white p-4 rounded-lg shadow-md w-full flex items-center">
                  <IoMdNotificationsOutline className="text-indigo-500 text-2xl mr-3" />
                  <div>
                    <p className="font-bold">Follow-up reminder</p>
                    <p className="text-sm text-gray-500">Follow-up with client</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadSources;
