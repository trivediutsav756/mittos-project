import { FaWhatsapp, FaPhoneAlt, FaFilePdf, FaRandom, FaUserSlash, FaWpforms } from 'react-icons/fa';
import { BiMessageRoundedDetail } from 'react-icons/bi';
import { SiGmail } from 'react-icons/si';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { BsPuzzle } from 'react-icons/bs';
import { IoIosCopy } from 'react-icons/io';
 
const LeadSources = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Instantly capture and assign every lead, both online or offline</h1>
        <p className="text-gray-600 mb-8">
          Connect Privyr directly to your lead sources to receive instant new lead alerts. Contact them in just one tap via WhatsApp, text, call, and more—taking seconds instead of days to start new conversations.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="bg-gray-100 text-gray-700 text-sm font-medium px-4 py-2 rounded-lg flex items-center"><BsPuzzle className="mr-2" />No-code Integrations</div>
          <div className="bg-gray-100 text-gray-700 text-sm font-medium px-4 py-2 rounded-lg flex items-center"><IoMdNotificationsOutline className="mr-2" />Instant Lead Alerts</div>
          <div className="bg-gray-100 text-gray-700 text-sm font-medium px-4 py-2 rounded-lg flex items-center"><FaRandom className="mr-2" />Automatic Lead Distribution</div>
          <div className="bg-gray-100 text-gray-700 text-sm font-medium px-4 py-2 rounded-lg flex items-center"><IoIosCopy className="mr-2" />Duplicate Lead Handling</div>
          <div className="bg-gray-100 text-gray-700 text-sm font-medium px-4 py-2 rounded-lg flex items-center"><FaUserSlash className="mr-2" />Offline Lead Capture</div>
          <div className="bg-gray-100 text-gray-700 text-sm font-medium px-4 py-2 rounded-lg flex items-center"><FaWpforms className="mr-2" />Privyr Lead Forms</div>
        </div>
      </div>
      <div className="bg-purple-50 flex justify-center items-center py-12">
            <div className="bg-white p-8 rounded-lg shadow-lg flex space-x-8 max-w-5xl w-full">
        {/* Left Section: Lead Sources */}
        <div className="w-1/2">
        <div className="relative h-[350px] w-full mb-8">
          {/* SVG for connecting lines */}
          <svg className="absolute top-0 left-0 w-full h-full z-0" preserveAspectRatio="none">
            {/* Lines from top center to each avatar */}
            <line x1="50%" y1="22" x2="15%" y2="100" stroke="#e9d5ff" strokeWidth="2" />
            <line x1="50%" y1="22" x2="35%" y2="200" stroke="#e9d5ff" strokeWidth="2" />
            <line x1="50%" y1="22" x2="50%" y2="300" stroke="#e9d5ff" strokeWidth="2" />
            <line x1="50%" y1="22" x2="65%" y2="200" stroke="#e9d5ff" strokeWidth="2" />
            <line x1="50%" y1="22" x2="85%" y2="100" stroke="#e9d5ff" strokeWidth="2" />
          </svg>
 
          {/* Central Box */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
            <h2 className="text-lg font-bold text-blue-600 bg-blue-100 rounded-full py-2 px-6 inline-block whitespace-nowrap">Your lead sources</h2>
          </div>
 
          {/* Avatars */}
          <div className="absolute top-[80px] left-[15%] -translate-x-1/2 z-10">
            <img src="https://i.pravatar.cc/150?img=1" alt="Lead 1" className="w-16 h-16 rounded-full border-4 border-white shadow-md"/>
          </div>
          <div className="absolute top-[180px] left-[35%] -translate-x-1/2 z-10">
            <img src="https://i.pravatar.cc/150?img=2" alt="Lead 2" className="w-16 h-16 rounded-full border-4 border-white shadow-md"/>
          </div>
          <div className="absolute top-[280px] left-1/2 -translate-x-1/2 z-10">
            <img src="https://i.pravatar.cc/150?img=3" alt="Lead 3" className="w-16 h-16 rounded-full border-4 border-white shadow-md"/>
          </div>
          <div className="absolute top-[180px] left-[65%] -translate-x-1/2 z-10">
            <img src="https://i.pravatar.cc/150?img=4" alt="Lead 4" className="w-16 h-16 rounded-full border-4 border-white shadow-md"/>
          </div>
          <div className="absolute top-[80px] left-[85%] -translate-x-1/2 z-10">
            <img src="https://i.pravatar.cc/150?img=5" alt="Lead 5" className="w-16 h-16 rounded-full border-4 border-white shadow-md"/>
          </div>
        </div>
        <div className="flex justify-center space-x-8 mb-8">
          <div className="flex items-center">
            <label className="switch">
              <input type="checkbox" defaultChecked />
              <span className="slider round"></span>
            </label>
            <span className="ml-3 text-gray-700">Round Robin</span>
          </div>
          <div className="flex items-center">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            <span className="ml-3 text-gray-700">Any Custom Rules</span>
          </div>
        </div>
        <div className="flex justify-center mb-8">
          <div className="flex items-center">
            <label className="switch">
              <input type="checkbox" defaultChecked />
              <span className="slider round"></span>
            </label>
            <span className="ml-3 text-gray-700">Fastest Fingers First</span>
          </div>
        </div>
        <div className="flex justify-center space-x-4">
          <FaWhatsapp className="w-12 h-12 text-green-500" />
          <BiMessageRoundedDetail className="w-12 h-12 text-blue-500" />
          <FaPhoneAlt className="w-12 h-12 text-green-500" />
          <SiGmail className="w-12 h-12 text-red-500" />
        </div>
      </div>
 
        {/* Right Section: Timeline */}
        <div className="w-1/2 flex items-center">
          <div className="relative w-full">
 
            {/* Timeline Items */}
            <div className="space-y-12">
              {/* Day 1 */}
              <div className="flex items-center">
                <div className="z-10 bg-indigo-600 text-white rounded-full px-3 py-1 text-sm">Day 1</div>
                <div className="ml-4 bg-white p-3 rounded-lg shadow-md w-full">
                  <div className="flex items-center text-sm mb-2">
                     <IoMdNotificationsOutline className="text-red-500 mr-2" />
                    <span className="font-bold">New lead alert</span>
                  </div>
                  <div className="bg-gray-50 p-2 rounded-lg">
                    <div className="flex items-center text-xs text-gray-500 mb-1">
                      <span>PRIVYR</span>
                      <span className="ml-auto">now</span>
                    </div>
                    <p className="font-bold text-sm">New Lead - Katherine Lim</p>
                    <p className="text-xs">You have a new lead from Facebook. Tap to follow up with Katherine Lim</p>
                  </div>
                </div>
              </div>
 
              {/* Day 2 */}
              <div className="flex items-center">
                <div className="z-10 bg-indigo-600 text-white rounded-full px-3 py-1 text-sm">Day 2</div>
                <div className="ml-4 bg-white p-3 rounded-lg shadow-md w-full flex items-center">
                  <FaFilePdf className="text-red-500 text-2xl mr-3" />
                  <div>
                    <p className="font-bold">Send brochure</p>
                    <p className="text-sm text-gray-500">Send PDF file</p>
                  </div>
                </div>
              </div>
 
              {/* Day 3 */}
              <div className="flex items-center">
                <div className="z-10 bg-indigo-600 text-white rounded-full px-3 py-1 text-sm">Day 3</div>
                <div className="ml-4 bg-white p-3 rounded-lg shadow-md w-full flex items-center">
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
    </div>
  );
};
 
export default LeadSources;