import { useState, useEffect } from "react";

const AuthImagePattern = ({ title, subtitle }) => {
  const [pulseEven, setPulseEven] = useState(true); 

  useEffect(() => {
    // Toggle the pulse state every 2 seconds
    const interval = setInterval(() => {
      setPulseEven((prev) => !prev);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
      <div className="max-w-md text-center">
        <div className="grid grid-cols-5 gap-3 mb-8">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className={`aspect-square rounded-2xl bg-primary/10 ${
                (pulseEven && i % 2 === 0) || (!pulseEven && i % 2 !== 0)
                  ? "animate-pulse"
                  : ""
              } ${
                i % 2 === 0 ? "bg-sky-500" : "bg-teal-300"
              }`}
            />
          ))}
        </div>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-base-content/60">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;