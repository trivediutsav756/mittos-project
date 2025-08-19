

import { useEffect, useState } from "react"
import { Facebook, Instagram, MessageCircle, Mail, Phone, Bot, TrendingUp, TrendingDown, MessagesSquare, MessageSquare } from "lucide-react"
import image from "../assets/mittoslogo.png"
import { BsWhatsapp } from "react-icons/bs"

 function RevenueSection() {
  const [animationStep, setAnimationStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % 8)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900/20 via-transparent to-transparent" />

      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            // className="absolute w-1 h-1 bg-green-400/30   rounded-full animate-pulse"
            className="absolute w-1 h-1 bg-green-400 rounded-full animate-pulse"

            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            //   animationDelay: `${Math.random() * 3}s`,
            //   animationDuration: `${2 + Math.random() * 2}s`,
            animationDelay: `${Math.random() * 1}s`,
            animationDuration: `${1 + Math.random() * 1}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-3 xs:px-4 sm:px-6 md:px-8 py-6 xs:py-8 sm:py-10 md:py-12 lg:py-16 max-w-5xl">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-1 xs:mb-2 sm:mb-3 md:mb-4">
            <span className="text-green-400">5X</span> YOUR REVENUE
          </h1>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-300 mb-3 xs:mb-4 sm:mb-6 md:mb-8 lg:mb-10">
            with the Power of <span className="text-green-400">AI</span> &{" "}
            <span className="text-green-400">WhatsApp</span>
          </p>

          {/* Social Media Icons with Pipelines */}
          <div className="relative">
            <div className="flex justify-center gap-2 xs:gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-6 xs:mb-8 sm:mb-10 md:mb-12 lg:mb-16">
              {[
                {
                  icon: Facebook,
                  color: "text-blue-500",
                  bgColor: "bg-white",
                  borderColor: "border-blue-500/50",
                  pipeColor: "from-blue-400 to-blue-600",
                },
                {
                  icon: Instagram,
                  color: "text-pink-500",
                  bgColor: "bg-white",
                  borderColor: "border-pink-500/50",
                  pipeColor: "from-pink-400 to-pink-600",
                },
                {
                  icon: MessagesSquare,
                  color: "text-yellow-300",
                  bgColor: "bg-white",
                  borderColor: "border-yellow-500/50",
                  pipeColor: "from-yellow-400 to-yellow-600",
                },
                {
                  icon: BsWhatsapp,
                  color: "text-green-500",
                  bgColor: "bg-white",
                  borderColor: "border-green-400/50",
                  pipeColor: "from-green-300 to-green-500",
                },
                {
                  icon: Mail,
                  color: "text-red-500",
                  bgColor: "bg-white",
                  borderColor: "border-red-500/50",
                  pipeColor: "from-red-400 to-red-600",
                },
              ].map((social, index) => (
                <div key={index} className="relative">
                  <div
                    className={`w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16 rounded-full ${social.bgColor} border-[1.5px] xs:border-2 ${social.borderColor} flex items-center justify-center hover:scale-110 transition-all duration-300 ${social.color} shadow-xl relative z-10`}
                  >
                    <social.icon className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-8 xl:h-8" />
                  </div>

                  {/* Individual Pipeline from each icon */}
                  <div className="absolute top-5 xs:top-6 sm:top-8 md:top-10 lg:top-12 xl:top-16 left-1/2 transform -translate-x-1/2">
                    <div
                      className={`w-[1.5px] xs:w-[2px] sm:w-[3px] md:w-[4px] lg:w-[5px] h-6 xs:h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 bg-gradient-to-b ${social.pipeColor} rounded-full relative overflow-hidden shadow-lg`}
                    >
                      <div
                        className="absolute w-full h-6 bg-gradient-to-b from-transparent via-white/60 to-transparent rounded-full"
                        style={{
                          animation: `flowDown 2s infinite linear`,
                          animationDelay: `${index * 0.4}s`,
                        }}
                      />
                      {/* Pipe segments */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent w-full" />
                    </div>
                    {/* <div className="w-4 h-4 bg-cyan-400 rounded-full mx-auto shadow-lg shadow-cyan-400/50 " /> */}
                  </div>
                </div>
              ))}
            </div>

            {/* Main Collector Pipeline */}
            {/* <div className="relative flex justify-center ">
              <div className="md:w-96 w-56 md:h-[5px] h-[3px] bg-gradient-to-r from-transparent via-gray-400 to-transparent rounded-full relative overflow-hidden shadow-lg">
                <div
                  className="absolute h-full w-12 bg-gradient-to-r from-transparent via-cyan-300 to-transparent rounded-full"
                  style={{ animation: `flowRight 3s infinite linear` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/20 rounded-full" />
              </div>
            </div> */}
            <div className="flex justify-center">
  <div className="w-36 xs:w-48 sm:w-64 md:w-80 lg:w-96 h-[1.5px] xs:h-[2px] sm:h-[3px] md:h-[4px] lg:h-[5px] bg-gradient-to-r from-transparent via-gray-400 to-transparent rounded-full relative overflow-hidden shadow-lg">

    {/* Left to Center */}
    <div
      className={`absolute left-0 h-full w-10 bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-full transition-opacity duration-500 ${
        animationStep >= 3 ? "opacity-100" : "opacity-30"
      }`}
      style={{ animation: `fromLeftToCenter1 2.5s infinite linear`, animationDelay: "0.3s" }}
    />

    {/* Right to Center */}
    <div
      className={`absolute right-0 h-full w-10 bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-full transition-opacity duration-500 ${
        animationStep >= 3 ? "opacity-100" : "opacity-30"
      }`}
      style={{ animation: `fromRightToCenter1 2.5s infinite linear`, animationDelay: "0.3s" }}
    />
  </div>
  </div>

            

            {/* Pipeline to Lead Capture */}
            <div className="flex justify-center ">
              <div className="w-[1.5px] xs:w-[2px] sm:w-[3px] md:w-[4px] lg:w-[5px] h-6 xs:h-8 sm:h-10 md:h-12 lg:h-16 bg-gradient-to-b from-gray-400 via-purple-500 to-purple-600 rounded-full relative overflow-hidden shadow-lg">
                <div
                  className="absolute w-full h-8 bg-gradient-to-b from-transparent via-white/50 to-transparent rounded-full"
                  style={{ animation: `flowDown 1.8s infinite linear` }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-black/10 rounded-full" />
              </div>
            </div>

            {/* Lead Capture */}
            {/* <div className="flex justify-center relative">
              <div
                className={`bg-gradient-to-r from-purple-600 to-blue-600 px-10 py-5 rounded-xl border-2 border-purple-400/50 shadow-2xl shadow-purple-500/25 transition-all duration-500 relative overflow-hidden ${
                  animationStep >= 0 ? "scale-105 shadow-purple-500/50 border-purple-400" : ""
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl animate-pulse" />
                <span className="font-bold text-xl relative z-10">Lead Capture</span>
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50 animate-ping" />
              </div>
            </div> */}
            <div className="flex justify-center relative">
  <div className="relative w-36 xs:w-48 sm:w-56 md:w-72 lg:w-80 xl:w-96 h-10 xs:h-12 sm:h-14 md:h-16 lg:h-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white flex items-center justify-center shadow-xl transition-all duration-500"
    style={{
      clipPath: 'polygon(0% 0%, 100% 0%, 85% 100%, 15% 100%)',
      border: animationStep >= 0 ? '2px solid rgba(192,132,252,0.5)' : '2px solid transparent',
      transform: animationStep >= 0 ? 'scale(1.05)' : 'scale(1)',
      boxShadow: animationStep >= 0 ? '0 0 30px rgba(192,132,252,0.5)' : '0 0 15px rgba(192,132,252,0.25)',
    }}
  >
    <span className="font-bold text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl relative z-10">Lead Capture</span>

    {/* Optional Glow Ping Dot */}
    {/* <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50 animate-ping z-0" /> */}
  </div>
</div>

          </div>
        </div>

        {/* Pipeline to Workflow Automation */}
        <div className="flex justify-center">
          <div className="w-[1.5px] xs:w-[2px] sm:w-[3px] md:w-[4px] lg:w-[5px] h-6 xs:h-8 sm:h-10 md:h-12 lg:h-16 bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500 rounded-full relative overflow-hidden shadow-lg">
            <div
              className={`absolute w-full h-8 bg-gradient-to-b from-transparent via-white/60 to-transparent rounded-full transition-opacity duration-500 ${
                animationStep >= 1 ? "opacity-100" : "opacity-30"
              }`}
              style={{ animation: `flowDown 2s infinite linear`, animationDelay: "0.5s" }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-black/10 rounded-full" />
          </div>
        </div>
     


        {/* Workflow Automation */}
        {/* <div className="flex justify-center      ">
          <div
            className={`bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-4 rounded-xl border-2 border-blue-400/50 shadow-xl shadow-blue-500/25 transition-all duration-500 relative overflow-hidden ${
              animationStep >= 1 ? "scale-105 shadow-blue-500/50 border-blue-400" : ""
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-xl animate-pulse" />
            <span className="font-bold text-lg relative z-10">Workflow Automation</span>
          </div>
        </div> */}
            <div className="flex justify-center relative">
  <div className="relative w-32 xs:w-36 sm:w-44 md:w-52 lg:w-60 xl:w-64 h-10 xs:h-12 sm:h-14 md:h-16 lg:h-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white flex items-center justify-center shadow-xl transition-all duration-500"
    style={{
      clipPath: 'polygon(0% 0%, 100% 0%, 85% 100%, 15% 100%)',
      border: animationStep >= 0 ? '2px solid rgba(192,132,252,0.5)' : '2px solid transparent',
      transform: animationStep >= 0 ? 'scale(1.05)' : 'scale(1)',
      boxShadow: animationStep >= 0 ? '0 0 30px rgba(192,132,252,0.5)' : '0 0 15px rgba(192,132,252,0.25)',
    }}
  >
    <span className="font-bold text-[8px] xs:text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] relative z-10">Mittos API Automation </span> <span className="ml-0.5 xs:ml-1 bg-white"><img src={image} alt="" className="w-1.5 xs:w-2 sm:w-3 md:w-4 lg:w-5" /></span>

    {/* Optional Glow Ping Dot */}
    {/* <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50 animate-ping z-0" /> */}
  </div>
</div>

        {/* Distribution Pipeline System */}
        <div className="flex justify-center mb-3 xs:mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-14">
          <div className="relative w-[70%] xs:w-[75%] sm:w-[78%] md:w-[80%] lg:w-[82%] h-10 xs:h-12 sm:h-14 md:h-16 lg:h-18 xl:h-20 mb-6 xs:mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            {/* Main vertical pipe */}
            <div className="absolute top-0 left-1/2 w-[1.5px] xs:w-[2px] sm:w-[3px] md:w-[4px] lg:w-[5px] h-6 xs:h-8 sm:h-10 md:h-12 lg:h-16 bg-gradient-to-b from-cyan-500 to-green-500 transform -translate-x-1/2 rounded-full shadow-lg">
              <div
                className={`absolute w-full h-4 bg-gradient-to-b from-transparent via-white/60 to-transparent rounded-full transition-opacity duration-500 ${
                  animationStep >= 2 ? "opacity-100" : "opacity-30"
                }`}
                style={{ animation: `flowDown 1.5s infinite linear`, animationDelay: "1s" }}
              />
            </div>

            {/* Junction box */}
            {/* <div className="absolute top-8 left-1/2 w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 transform -translate-x-1/2 rounded-lg shadow-lg shadow-green-400/50" /> */}

            {/* Horizontal distribution pipe */}
            {/* <div className="absolute top-16 left-0 right-0 h-[5px] bg-gradient-to-r from-transparent via-green-500 to-transparent rounded-full shadow-lg">
              <div
                className={`absolute h-full w-8 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-full transition-opacity duration-500 ${
                  animationStep >= 2 ? "opacity-100" : "opacity-30"
                }`}
                style={{ animation: `flowRight 2s infinite linear`, animationDelay: "1.2s" }}
              />
            </div> */}
   <div className="absolute top-6 xs:top-8 sm:top-10 md:top-12 lg:top-16 left-0 right-0 h-[1.5px] xs:h-[2px] sm:h-[3px] md:h-[4px] lg:h-[5px] bg-green-500 rounded-full shadow-lg overflow-hidden">

{/* Right Flow */}
<div
  className={`absolute left-1/2 h-full w-8 bg-gradient-to-r from-transparent via-white/70 to-transparent rounded-full transition-opacity duration-500 ${
    animationStep >= 2 ? "opacity-100" : "opacity-30"
  }`}
  style={{
    animation: `flowRight 2s infinite linear`,
    transform: "translateX(-50%)",
    animationDelay: "0.2s",
  }}
/>

{/* Left Flow */}
<div
  className={`absolute left-1/2 h-full w-8 bg-gradient-to-r from-transparent via-white/70 to-transparent rounded-full transition-opacity duration-500 ${
    animationStep >= 2 ? "opacity-100" : "opacity-30"
  }`}
  style={{
    animation: `flowLeft 2s infinite linear`,
    transform: "translateX(-50%)",
    animationDelay: "0.2s",
  }}
/>
</div>
            {/* Vertical pipes to services */}
            {[0, 25, 50, 75, 100].map((position, index) => (
              <div
                key={index}
                className="absolute top-[25px] xs:top-[30px] sm:top-[40px] md:top-[50px] lg:top-[70px] w-[1.5px] xs:w-[2px] sm:w-[3px] md:w-[4px] lg:w-[5px] h-6 xs:h-8 sm:h-10 md:h-12 lg:h-16 bg-gradient-to-b from-green-500 to-emerald-600 rounded-full shadow-lg"
                style={{ left: `${position}%` }}
              >
                <div
                  className={`absolute w-full h-4 bg-gradient-to-b from-transparent via-white/50 to-transparent rounded-full transition-opacity duration-500 ${
                    animationStep >= 2 ? "opacity-100" : "opacity-30"
                  }`}
                  style={{ animation: `flowDown 1.8s infinite linear`, animationDelay: `${1.5 + index * 0.2}s` }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Services Row */}
        <div className="grid grid-cols-5 gap-1 xs:gap-2 sm:gap-3 md:gap-4 mb-6 xs:mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          {[
            { name: "AI Chat", icon: Bot, color: "from-blue-600 to-blue-700" },
            { name: "AI Calling", icon: Phone, color: "from-green-600 to-green-700" },
            { name: "Chatbot", icon: MessagesSquare, color: "from-purple-600 to-purple-700" },
            { name: "WhatsApp", icon: BsWhatsapp, color: "from-emerald-600 to-emerald-700" },
            { name: "Email", icon: Mail, color: "from-red-600 to-red-700" },
          ].map((service, index) => (
            <div key={index} className="relative">
              <div
                className={`bg-gradient-to-r ${service.color} p-1.5 xs:p-2 sm:p-3 md:p-4 rounded-sm xs:rounded-md sm:rounded-lg md:rounded-xl border border-green-400/50 xs:border-2 text-center hover:border-white transition-all duration-500 shadow-lg relative overflow-hidden ${
                  animationStep >= 2 ? "scale-105 border-white shadow-green-500/25" : ""
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent rounded-xl" />
                <service.icon className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-8 xl:h-8 mx-auto mb-0.5 xs:mb-1 sm:mb-1.5 md:mb-2 mt-0.5 xs:mt-1 sm:mt-1.5 md:mt-0 text-white relative z-10" />
                <span className="text-[5px] xs:text-[6px] sm:text-[8px] md:text-[10px] lg:text-xs xl:text-sm font-bold relative z-10">{service.name}</span>
              </div>

              {/* Output pipe from each service */}
              <div className="absolute -bottom-8 sm:-bottom-10 md:-bottom-12 lg:-bottom-16 left-1/2 transform -translate-x-1/2">
                <div className="w-[2px] sm:w-[3px] md:w-[4px] lg:w-[5px] h-8 sm:h-10 md:h-12 lg:h-16 bg-gradient-to-b from-emerald-500 to-teal-600 rounded-full shadow-lg">
                  <div
                    className={`absolute w-full h-4 bg-gradient-to-b from-transparent via-white/50 to-transparent rounded-full transition-opacity duration-500 ${
                      animationStep >= 3 ? "opacity-100" : "opacity-30"
                    }`}
                    style={{ animation: `flowDown 2s infinite linear`, animationDelay: `${2 + index * 0.3}s` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Collection Pipeline */}
        {/* <div className="flex justify-center mb-8">
          <div className="w-[85%] h-[5px] bg-gradient-to-r from-transparent via-teal-500 to-transparent rounded-full relative overflow-hidden shadow-lg">
            <div
              className={`absolute h-full w-10 bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-full transition-opacity duration-500 ${
                animationStep >= 3 ? "opacity-100" : "opacity-30"
              }`}
              style={{ animation: `flowRight 2.5s infinite linear`, animationDelay: "2.5s" }}
            />
          </div>
        </div> */}
        <div className="flex justify-center">
  <div className="w-[82%] h-[2px] sm:h-[3px] md:h-[4px] lg:h-[5px] bg-teal-500 rounded-full relative overflow-hidden shadow-lg">

    {/* Left to Center */}
    <div
      className={`absolute left-0 h-full w-10 bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-full transition-opacity duration-500 ${
        animationStep >= 3 ? "opacity-100" : "opacity-30"
      }`}
      style={{ animation: `fromLeftToCenter 2.5s infinite linear`, animationDelay: "0.3s" }}
    />

    {/* Right to Center */}
    <div
      className={`absolute right-0 h-full w-10 bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-full transition-opacity duration-500 ${
        animationStep >= 3 ? "opacity-100" : "opacity-30"
      }`}
      style={{ animation: `fromRightToCenter 2.5s infinite linear`, animationDelay: "0.3s" }}
    />
  </div>
  </div>

        {/* Pipeline to Auto Qualify */}
        <div className="flex justify-center ">
          <div className="w-[2px] sm:w-[3px] md:w-[4px] lg:w-[5px] h-8 sm:h-10 md:h-12 lg:h-16 bg-gradient-to-b from-teal-500 to-green-600 rounded-full relative overflow-hidden shadow-lg">
            <div
              className={`absolute w-full h-6 bg-gradient-to-b from-transparent via-white/60 to-transparent rounded-full transition-opacity duration-500 ${
                animationStep >= 4 ? "opacity-100" : "opacity-30"
              }`}
              style={{ animation: `flowDown 1.8s infinite linear`, animationDelay: "3s" }}
            />
          </div>
        </div>

        {/* Auto Qualify Lead */}
        {/* <div className="flex justify-center">
          <div
            className={`bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-4 rounded-xl border-2 border-green-400/50 shadow-xl shadow-green-500/25 transition-all duration-500 relative overflow-hidden ${
              animationStep >= 4 ? "scale-105 shadow-green-500/50 border-green-400" : ""
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-xl animate-pulse" />
            <span className="font-bold text-lg relative z-10">Auto Qualify Lead</span>
          </div>
        </div> */}
              <div className="flex justify-center relative">
  <div className="relative w-36 xs:w-40 sm:w-44 md:w-48 lg:w-52 h-12 sm:h-14 md:h-16 lg:h-20 bg-gradient-to-r px-2 xs:px-3 sm:px-4 md:px-0 from-green-600 to-emerald-600 text-white flex items-center justify-center shadow-xl transition-all duration-500"
    style={{
      clipPath: 'polygon(0% 0%, 100% 0%, 85% 100%, 15% 100%)',
      border: animationStep >= 0 ? '2px solid rgba(192,132,252,0.5)' : '2px solid transparent',
      transform: animationStep >= 0 ? 'scale(1.05)' : 'scale(1)',
      boxShadow: animationStep >= 0 ? '0 0 30px rgba(192,132,252,0.5)' : '0 0 15px rgba(192,132,252,0.25)',
    }}
  >
    <span className="font-bold md:text-lg text-sm relative z-10">Auto Qualify Lead</span>

    {/* Optional Glow Ping Dot */}
    {/* <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50 animate-ping z-0" /> */}
  </div>
</div>

        {/* Pipeline to Auto Nurture */}
        <div className="flex justify-center ">
          <div className="md:w-[5px] md:h-16 w-[3px] h-12 bg-gradient-to-b from-green-500 to-yellow-500 rounded-full relative overflow-hidden shadow-lg">
            <div
              className={`absolute w-full h-6 bg-gradient-to-b from-transparent via-white/60 to-transparent rounded-full transition-opacity duration-500 ${
                animationStep >= 5 ? "opacity-100" : "opacity-30"
              }`}
              style={{ animation: `flowDown 1.8s infinite linear`, animationDelay: "3.5s" }}
            />
          </div>
        </div>

        {/* Auto Nurture Section */}
        <div className="text-center ">
          {/* <div
            className={`inline-block bg-gradient-to-r from-yellow-600 to-orange-600 px-8 py-4 rounded-xl border-2 border-yellow-400/50 shadow-xl shadow-yellow-500/25 transition-all duration-500 relative overflow-hidden ${
              animationStep >= 5 ? "scale-105 shadow-yellow-500/50 border-yellow-400" : ""
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 rounded-xl animate-pulse" />
            <span className="font-bold text-lg relative z-10">Auto Nurture</span>
          </div> */}
          <div className="flex justify-center md:gap-8 gap-2 items-center relative">
          <div  className="relative">
          <div className="flex justify-center items-start mb-2">
                    <BsWhatsapp className=" text-green-500" size={20}/>

                </div>
                <span
                  className={`md:px-4 px-2 md:py-2 py-1 bg-gradient-to-r from-yellow-600/30 to-orange-600/30 border-2 border-yellow-400/30 rounded-full md:text-sm text-[8px] font-semibold transition-all duration-300 block ${
                    animationStep >= 5
                      ? "bg-gradient-to-r from-yellow-600/50 to-orange-600/50 border-yellow-400/60"
                      : ""
                  }`}
                >
                 Day 01
                </span>
                {/* {index < 4 && (
                  <div className="absolute top-1/2 -right-2 w-4 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full transform -translate-y-1/2">
                    <div
                      className={`absolute w-2 h-full bg-white/60 rounded-full transition-opacity duration-500 ${
                        animationStep >= 5 ? "opacity-100" : "opacity-30"
                      }`}
                      style={{ animation: `flowRight 1s infinite linear`, animationDelay: `${4 + index * 0.2}s` }}
                    />
                  </div>
                )} */}
              </div>
              <div className="relative">
                <div className="flex justify-center items-start mb-2">
                    <BsWhatsapp className=" text-green-500" size={20}/>

                </div>
                
                <span
                  className={`md:px-4 px-2 md:py-2 py-1 bg-gradient-to-r from-yellow-600/30 to-orange-600/30 border-2 border-yellow-400/30 rounded-full md:text-sm text-[8px] font-semibold transition-all duration-300 block ${
                    animationStep >= 5
                      ? "bg-gradient-to-r from-yellow-600/50 to-orange-600/50 border-yellow-400/60"
                      : ""
                  }`}
                >
                 Day 03
                </span>
                {/* {index < 4 && (
                  <div className="absolute top-1/2 -right-2 w-4 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full transform -translate-y-1/2">
                    <div
                      className={`absolute w-2 h-full bg-white/60 rounded-full transition-opacity duration-500 ${
                        animationStep >= 5 ? "opacity-100" : "opacity-30"
                      }`}
                      style={{ animation: `flowRight 1s infinite linear`, animationDelay: `${4 + index * 0.2}s` }}
                    />
                  </div>
                )} */}
              </div>
  <div className="relative md:w-36 md:h-16 w-32 h-12 bg-gradient-to-r from-yellow-600 to-orange-600 text-white flex items-center justify-center shadow-xl transition-all duration-500"
    style={{
      clipPath: 'polygon(0% 0%, 100% 0%, 85% 100%, 15% 100%)',
      border: animationStep >= 0 ? '2px solid rgba(192,132,252,0.5)' : '2px solid transparent',
      transform: animationStep >= 0 ? 'scale(1.05)' : 'scale(1)',
      boxShadow: animationStep >= 0 ? '0 0 30px rgba(192,132,252,0.5)' : '0 0 15px rgba(192,132,252,0.25)',
    }}
  >
    <span className="font-bold md:text-base text-sm relative z-10">Auto Nurture</span>

    {/* Optional Glow Ping Dot */}
    {/* <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50 animate-ping z-0" /> */}
  </div>
  <div  className="relative">
  <div className="flex justify-center items-start mb-2">
                    <BsWhatsapp className=" text-green-500" size={20}/>

                </div>
                <span
                  className={`md:px-4 px-2 md:py-2 py-1 bg-gradient-to-r from-yellow-600/30 to-orange-600/30 border-2 border-yellow-400/30 rounded-full md:text-sm text-[8px] font-semibold transition-all duration-300 block ${
                    animationStep >= 5
                      ? "bg-gradient-to-r from-yellow-600/50 to-orange-600/50 border-yellow-400/60"
                      : ""
                  }`}
                >
                  Day 05
                </span>
                {/* {index < 4 && (
                  <div className="absolute top-1/2 -right-2 w-4 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full transform -translate-y-1/2">
                    <div
                      className={`absolute w-2 h-full bg-white/60 rounded-full transition-opacity duration-500 ${
                        animationStep >= 5 ? "opacity-100" : "opacity-30"
                      }`}
                      style={{ animation: `flowRight 1s infinite linear`, animationDelay: `${4 + index * 0.2}s` }}
                    />
                  </div>
                )} */}
              </div>
              <div className="relative">
              <div className="flex justify-center items-start mb-2">
                    <BsWhatsapp className=" text-green-500" size={20}/>

                </div>
                <span
                  className={`md:px-4 px-2 md:py-2 py-1 bg-gradient-to-r from-yellow-600/30 to-orange-600/30 border-2 border-yellow-400/30 rounded-full md:text-sm text-[8px] font-semibold transition-all duration-300 block ${
                    animationStep >= 5
                      ? "bg-gradient-to-r from-yellow-600/50 to-orange-600/50 border-yellow-400/60"
                      : ""
                  }`}
                >
                  Day 07
                </span>
                {/* {index < 4 && (
                  <div className="absolute top-1/2 -right-2 w-4 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full transform -translate-y-1/2">
                    <div
                      className={`absolute w-2 h-full bg-white/60 rounded-full transition-opacity duration-500 ${
                        animationStep >= 5 ? "opacity-100" : "opacity-30"
                      }`}
                      style={{ animation: `flowRight 1s infinite linear`, animationDelay: `${4 + index * 0.2}s` }}
                    />
                  </div>
                )} */}
              </div>
</div>

          {/* Day Labels with mini pipelines */}
          {/* <div className="flex justify-center gap-3 mt-6 flex-wrap">
            {["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"].map((day, index) => (
              <div key={index} className="relative">
                <span
                  className={`px-4 py-2 bg-gradient-to-r from-yellow-600/30 to-orange-600/30 border-2 border-yellow-400/30 rounded-full text-sm font-semibold transition-all duration-300 block ${
                    animationStep >= 5
                      ? "bg-gradient-to-r from-yellow-600/50 to-orange-600/50 border-yellow-400/60"
                      : ""
                  }`}
                >
                  {day}
                </span>
                {index < 4 && (
                  <div className="absolute top-1/2 -right-2 w-4 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full transform -translate-y-1/2">
                    <div
                      className={`absolute w-2 h-full bg-white/60 rounded-full transition-opacity duration-500 ${
                        animationStep >= 5 ? "opacity-100" : "opacity-30"
                      }`}
                      style={{ animation: `flowRight 1s infinite linear`, animationDelay: `${4 + index * 0.2}s` }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div> */}
        </div>
        

        {/* Final Distribution Pipeline */}
        <div className="flex justify-center md:mb-16 mb-12">
          <div className="relative md:w-64 w-52 md:h-16 h-12">
            <div className="absolute top-0 left-1/2 md:w-[5px] md:h-16 w-[3px] h-12 bg-gradient-to-b from-orange-500 to-red-500 transform -translate-x-1/2 rounded-full shadow-lg">
              <div
                className={`absolute w-full h-4 bg-gradient-to-b from-transparent via-white/60 to-transparent rounded-full transition-opacity duration-500 ${
                  animationStep >= 6 ? "opacity-100" : "opacity-30"
                }`}
                style={{ animation: `flowDown 1.5s infinite linear`, animationDelay: "4.5s" }}
              />
            </div>
            {/* <div className="absolute top-8 left-1/2 w-6 h-6 bg-gradient-to-br from-red-400 to-orange-500 transform -translate-x-1/2 rounded-lg shadow-lg" /> */}
            {/* <div className="absolute top-16 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full shadow-lg">
              <div
                className={`absolute h-full w-8 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-full transition-opacity duration-500 ${
                  animationStep >= 6 ? "opacity-100" : "opacity-30"
                }`}
                style={{ animation: `flowRight 2s infinite linear`, animationDelay: "5s" }}
              />
            </div> */}
     <div className="absolute md:top-16 top-12 left-0 right-0  md:h-[5px]  h-[3px] rounded-full shadow-lg overflow-hidden flex">

{/* Left Half - Red */}
<div className="w-1/2 h-full bg-green-500" />

{/* Right Half - Green */}
<div className="w-1/2 h-full bg-red-500" />

{/* Right Flow (Green) */}
<div
  className={`absolute left-1/2 h-full w-8 bg-gradient-to-r from-transparent via-white to-transparent rounded-full transition-opacity duration-500 ${
    animationStep >= 2 ? "opacity-100" : "opacity-30"
  }`}
  style={{
    animation: `flowRight 2s infinite linear`,
    transform: "translateX(-50%)",
    animationDelay: "0.2s",
  }}
/>

{/* Left Flow (Red) */}
<div
  className={`absolute left-1/2 h-full w-8 bg-gradient-to-r from-transparent via-white to-transparent rounded-full transition-opacity duration-500 ${
    animationStep >= 2 ? "opacity-100" : "opacity-30"
  }`}
  style={{
    animation: `flowLeft 2s infinite linear`,
    transform: "translateX(-50%)",
    animationDelay: "0.2s",
  }}
/>
</div>
            <div
              className="absolute md:top-[70px] top-[50px] md:w-[5px] md:h-16 w-[3px] h-12 bg-green-600 rounded-full shadow-lg"
              style={{ left: "0%",  }}
            >
              <div
                className={`absolute w-full h-2 bg-white/50 rounded-full transition-opacity duration-500 ${
                  animationStep >= 6 ? "opacity-100" : "opacity-30"
                }`}
                style={{ animation: `flowDown 1.5s infinite linear`, animationDelay: "5.2s" }}
              />
            </div>
            <div
              className="absolute md:top-[70px] top-[50px] md:w-[5px] md:h-16 w-[3px] h-12 bg-gradient-to-b from-red-500 to-red-600 rounded-full shadow-lg"
              style={{ left: "100%",  }}
            >
              <div
                className={`absolute w-full h-2 bg-white/50 rounded-full transition-opacity duration-500 ${
                  animationStep >= 6 ? "opacity-100" : "opacity-30"
                }`}
                style={{ animation: `flowDown 1.5s infinite linear`, animationDelay: "5.4s" }}
              />
            </div>
          </div>
          
        </div>

        {/* Final Results */}
        <div className="flex justify-center md:gap-28 gap-20 mt-12">
       
           <div className="flex justify-center">
          <div
            className={`bg-gradient-to-r from-green-600 to-emerald-600 md:px-8 px-4 md:py-4 py-2 rounded-xl border-2 border-green-400/50 shadow-xl shadow-green-500/25 transition-all duration-500 relative overflow-hidden ${
              animationStep >= 4 ? "scale-105 shadow-green-500/50 border-green-400" : ""
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-xl animate-pulse" />
            <span className="font-bold text-lg relative z-10">Positive</span>
          </div>
        </div>
        <div className="flex justify-center">
          <div
            className={`bg-gradient-to-r from-red-800 to-red-700 md:px-8 px-4 md:py-4 py-2 rounded-xl border-2 border-red-400/50 shadow-xl shadow-red-500/25 transition-all duration-500 relative overflow-hidden ${
              animationStep >= 4 ? "scale-105 shadow-lg shadow-red-500/25 border-red-400" : ""
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-emerald-600/20 rounded-xl animate-pulse" />
            <span className="font-bold text-lg relative z-10">Negative</span>
          </div>
        </div>

          {/* <div
            className={`bg-gradient-to-r from-red-800 to-red-700 p-6 rounded-xl border-2 border-red-400/50 text-center transition-all duration-500 relative overflow-hidden shadow-xl ${
              animationStep >= 7 ? "scale-105 shadow-lg shadow-red-500/25 border-red-400" : ""
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-800/20 to-red-700/20 rounded-xl animate-pulse" />
            <TrendingDown className="w-10 h-10 mx-auto mb-3 text-red-400 relative z-10" />
            <span className="font-bold text-lg relative z-10 block">AI Negative</span>
            <div className="text-red-400 text-base mt-2 font-semibold relative z-10">-12% Drop Rate</div>
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-400 rounded-full shadow-lg shadow-red-400/50 animate-pulse" />
          </div> */}
        </div>
        <div className="flex justify-center ">
          <div className="relative md:w-64 w-52">
            {/* <div className="absolute top-0 left-1/2 w-[5px] h-16 bg-gradient-to-b from-orange-500 to-red-500 transform -translate-x-1/2 rounded-full shadow-lg">
              <div
                className={`absolute w-full h-4 bg-gradient-to-b from-transparent via-white/60 to-transparent rounded-full transition-opacity duration-500 ${
                  animationStep >= 6 ? "opacity-100" : "opacity-30"
                }`}
                style={{ animation: `flowDown 1.5s infinite linear`, animationDelay: "4.5s" }}
              />
            </div> */}
            {/* <div className="absolute top-8 left-1/2 w-6 h-6 bg-gradient-to-br from-red-400 to-orange-500 transform -translate-x-1/2 rounded-lg shadow-lg" /> */}
            {/* <div className="absolute top-16 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full shadow-lg">
              <div
                className={`absolute h-full w-8 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-full transition-opacity duration-500 ${
                  animationStep >= 6 ? "opacity-100" : "opacity-30"
                }`}
                style={{ animation: `flowRight 2s infinite linear`, animationDelay: "5s" }}
              />
            </div> */}
     {/* <div className="absolute top-16 left-0 right-0 h-[5px] rounded-full shadow-lg overflow-hidden flex"> */}

{/* Left Half - Red */}
{/* <div className="w-1/2 h-full bg-green-500" /> */}

{/* Right Half - Green */}
{/* <div className="w-1/2 h-full bg-red-500" /> */}

{/* Right Flow (Green) */}
{/* <div
  className={`absolute left-1/2 h-full w-8 bg-gradient-to-r from-transparent via-white to-transparent rounded-full transition-opacity duration-500 ${
    animationStep >= 2 ? "opacity-100" : "opacity-30"
  }`}
  style={{
    animation: `flowRight 2s infinite linear`,
    transform: "translateX(-50%)",
    animationDelay: "0.2s",
  }}
/> */}

{/* Left Flow (Red) */}
{/* <div
  className={`absolute left-1/2 h-full w-8 bg-gradient-to-r from-transparent via-white to-transparent rounded-full transition-opacity duration-500 ${
    animationStep >= 2 ? "opacity-100" : "opacity-30"
  }`}
  style={{
    animation: `flowLeft 2s infinite linear`,
    transform: "translateX(-50%)",
    animationDelay: "0.2s",
  }}
/> */}
{/* </div> */}
            <div
              className="absolute md:w-[5px] md:h-16 w-[3px] h-12 bg-green-600 rounded-full shadow-lg"
              style={{ left: "0%", top: "0px" }}
            >
              <div
                className={`absolute w-full h-2 bg-white/50 rounded-full transition-opacity duration-500 ${
                  animationStep >= 6 ? "opacity-100" : "opacity-30"
                }`}
                style={{ animation: `flowDown 1.5s infinite linear`, animationDelay: "5.2s" }}
              />
            </div>
            <div
              className="absolute md:w-[5px] md:h-16 w-[3px] h-12 bg-gradient-to-b from-red-500 to-red-600 rounded-full shadow-lg"
              style={{ left: "100%", top: "0px" }}
            >
              <div
                className={`absolute w-full h-2 bg-white/50 rounded-full transition-opacity duration-500 ${
                  animationStep >= 6 ? "opacity-100" : "opacity-30"
                }`}
                style={{ animation: `flowDown 1.5s infinite linear`, animationDelay: "5.4s" }}
              />
            </div>
          </div>
          
        </div>
        <div className="flex justify-center gap-28 mt-12">
       
       <div className="flex justify-center">
      <div
        className={`bg-gradient-to-r from-green-600 to-emerald-600 md:px-4 px-1 md:py-2 py-1 rounded-xl border-2 border-green-400/50 shadow-xl shadow-green-500/25 transition-all duration-500 relative overflow-hidden ${
          animationStep >= 4 ? "scale-105 shadow-green-500/50 border-green-400" : ""
        }`}
      >
        <div className="absolute  bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-xl animate-pulse" />
        <span className="font-bold md:text-lg text-sm relative z-10">Lead Won</span>
      </div>
    </div>
    <div className="flex justify-center">
      <div
        className={`bg-gradient-to-r from-red-800 to-red-700 md:px-4 px-1 md:py-2 py-1 rounded-xl border-2 border-red-400/50 shadow-xl shadow-red-500/25 transition-all duration-500 relative overflow-hidden ${
          animationStep >= 4 ? "scale-105 shadow-lg shadow-red-500/25 border-red-400" : ""
        }`}
      >
        <div className="absolute  bg-gradient-to-r from-red-600/20 to-emerald-600/20 rounded-xl animate-pulse" />
        <span className="font-bold md:text-base text-sm relative z-10">Long Nuture</span>
      </div>
    </div>

      {/* <div
        className={`bg-gradient-to-r from-red-800 to-red-700 p-6 rounded-xl border-2 border-red-400/50 text-center transition-all duration-500 relative overflow-hidden shadow-xl ${
          animationStep >= 7 ? "scale-105 shadow-lg shadow-red-500/25 border-red-400" : ""
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-red-800/20 to-red-700/20 rounded-xl animate-pulse" />
        <TrendingDown className="w-10 h-10 mx-auto mb-3 text-red-400 relative z-10" />
        <span className="font-bold text-lg relative z-10 block">AI Negative</span>
        <div className="text-red-400 text-base mt-2 font-semibold relative z-10">-12% Drop Rate</div>
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-400 rounded-full shadow-lg shadow-red-400/50 animate-pulse" />
      </div> */}
    </div>
      </div>

      <style jsx>{`
        @keyframes flowDown {
          0% { transform: translateY(-100%); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(400%); opacity: 0; }
        }
        
        @keyframes flowRight {
    0% {
      transform: translateX(-50%) translateX(0);
      opacity: 0;
    }
    20% {
      opacity: 1;
    }
    80% {
      opacity: 1;
    }
    100% {
      transform: translateX(-50%) translateX(400%);
      opacity: 0;
    }
  }

  @keyframes flowLeft {
    0% {
      transform: translateX(-50%) translateX(0);
      opacity: 0;
    }
    20% {
      opacity: 1;
    }
    80% {
      opacity: 1;
    }
    100% {
      transform: translateX(-50%) translateX(-400%);
      opacity: 0;
    }
  }
     @keyframes fromLeftToCenter {
    0% {
      transform: translateX(-100%);
      opacity: 0;
    }
    20% {
      opacity: 1;
    }
    80% {
      opacity: 1;
    }
    100% {
      transform: translateX(30vw); /* Move to center */
      opacity: 0;
    }
  }

  @keyframes fromRightToCenter {
    0% {
      transform: translateX(100%);
      opacity: 0;
    }
    20% {
      opacity: 1;
    }
    80% {
      opacity: 1;
    }
    100% {
      transform: translateX(-30vw); /* Move to center */
      opacity: 0;
    }
  }
    @keyframes fromLeftToCenter1 {
    0% {
      transform: translateX(-100%);
      opacity: 0;
    }
    20% {
      opacity: 1;
    }
    80% {
      opacity: 1;
    }
    100% {
      transform: translateX(12vw); /* Move to center */
      opacity: 0;
    }
  }

  @keyframes fromRightToCenter1 {
    0% {
      transform: translateX(100%);
      opacity: 0;
    }
    20% {
      opacity: 1;
    }
    80% {
      opacity: 1;
    }
    100% {
      transform: translateX(-12vw); /* Move to center */
      opacity: 0;
    }
  }
      `}</style>
    </div>
  )
}

export default RevenueSection;