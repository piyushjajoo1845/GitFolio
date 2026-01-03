import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleGenerate = () => {
    if (!input.trim()) {
      setError("Please paste a GitHub username or URL");
      return;
    }

    const username = extractUsername(input);

    if (!username) {
      setError("Invalid GitHub URL or username");
      return;
    }

    setError("");
    setLoading(true);

    // navigate to portfolio page
    navigate("/profile", {
      state: { username },
    });
  };

  return (
    <div className=" relative flex flex-col items-center justify-center text-sm px-4 md:px-16 lg:px-24 xl:px-32 bg-blck text-white">
      <div className="mt-24">
        {/* Main heading */}
        <h1 className="text-5xl leading-[68px] md:text-6xl md:leading-[84px] font-playfairDisplay font-medium max-w-3xl text-center mx-auto">
          From Github Profile to Live Portfolio
          <span className="text-purple-500"> in 30 Seconds</span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl mt-6 max-w-2xl mx-auto text-center">
          No design skills needed. Paste your GitHub URL, customize your theme,
          and deploy instantly. Your professional portfolio awaits.
        </p>
      </div>


      {/* input field section */}
      <div className="flex flex-col md:flex-row mt-24  gap-5 md:gap-10 items-center">
        <div className="flex flex-col">
          <input
          className="px-4 py-3 border-2 border-gray-700 bg-[#141516] text-white rounded-lg w-full md:w-96
                      focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50
                      transition-all duration-400"
          type="text"
          placeholder='https://github.com/username'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <p className="text-sm text-gray-500 mt-2 text-center md:text-left ">
          Example: github.com/torvalds or just "torvalds"
        </p>
        </div>
        
        {/* Generate button */}
  
        <button
          className="border rounded-full px-7 h-11 text-sm bg-purple-600 text-white 
          hover:shadow-[0px_0px_10px_4px] shadow-[0px_0px_10px_2px] hover:shadow-white/50 shadow-white/50 hover:bg-slate-100 hover:text-black hover:cursor-pointer"
          onClick={handleGenerate}
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate"}
        </button>
      </div>


      {/* feature highlights section */}
      <div className="grid grid-cols-2 md:flex md:flex-row flex-wrap justify-center items-stretch gap-4 md:gap-6 mt-12 max-w-4xl mx-auto px-4">

        {/* card 1 */}
        <div className="
          bg-[#141516] rounded-lg p-6 
          w-full md:w-48
          hover:border-purple-500 hover:scale-105 hover:-translate-y-4
          hover:shadow-xl hover:shadow-purple-500/40
          transition-all duration-300
          flex flex-col items-center justify-center gap-2
          cursor-pointer"
          >
          <span className="text-lg md:text-base text-gray-300 text-center font-medium">30 Seconds</span>
        </div>

        {/* card 2 */}
        <div className="
          bg-[#141516] rounded-lg p-6 
          w-full md:w-48
          hover:border-purple-500 hover:scale-105 hover:-translate-y-4
          hover:shadow-xl hover:shadow-purple-500/40
          transition-all duration-300
          flex flex-col items-center justify-center gap-2
          cursor-pointer"
          >
          <span className="text-lg md:text-base text-gray-300 text-center font-medium">One-Click deploy</span>
        </div>

        {/* card 3 */}
        <div className="
          bg-[#141516] rounded-lg p-6 
          w-full md:w-48
          hover:border-purple-500 hover:scale-105 hover:-translate-y-4
          hover:shadow-xl hover:shadow-purple-500/40
          transition-all duration-300
          flex flex-col items-center justify-center gap-2
          cursor-pointer"
          >
          <span className="text-lg md:text-base text-gray-300 text-center font-medium">No Coding</span>
        </div>
        
        {/* card 4 */}
        <div className="
          bg-[#141516] rounded-lg p-6 
          w-full md:w-48
          hover:border-purple-500 hover:scale-105 hover:-translate-y-4
          hover:shadow-xl hover:shadow-purple-500/40
          transition-all duration-300
          flex flex-col items-center justify-center gap-2
          cursor-pointer"
          >
          <span className="text-lg md:text-base text-gray-300 text-center font-medium">Modern design</span>
        </div>




      </div>
    </div>
  );
};

function extractUsername(input) {
  try {
    if (input.includes("github.com")) {
      return input
        .replace("https://github.com/", "")
        .replace("http://github.com/", "")
        .replace("www.github.com/", "")
        .split("/")[0];
    }
    return input;
  } catch {
    return null;
  }
}

export default Hero;
