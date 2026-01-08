import React, { useState } from "react";

function Login() {
  const [phoneEmail, setPhoneEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (password.trim() === "") {
      setPasswordError("Password is required");
      return;
    }

    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      return;
    }

    setPasswordError(""); // clear error if valid
    console.log("Login success");
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center relative px-4 pt-[30px]">
      <div className="absolute inset-0 bg-[rgb(185,224,153)] backdrop-blur-sm"></div>

      <div className="relative w-full max-w-[480px] shadow-lg rounded-2xl border-2 border-[#c6e6c9] bg-[#f8fef6]">
        <div className="w-full flex flex-col justify-center p-12 rounded">
          <h1 className="font-bold mb-4 flex items-center justify-center text-green-700 text-3xl">
            <span className="text-[35px]">🌙</span>
            <span className="ml-2 text-#1A3D1A">Welcome Back</span>
          </h1>

          <p className="text-center text-green-700">
            Login to continue your Quran learning journey 🌿
          </p>

          <form className="w-full mt-4" onSubmit={handleLogin}>
            {/* Phone/Email */}
            <div className="mb-4">
              <label className="font-bold text-green-700">Phone or Email</label>
              <input
                type="text"
                placeholder="Enter phone or email"
                value={phoneEmail}
                onChange={(e) => setPhoneEmail(e.target.value)}
                className="w-full py-2 px-3 mt-1 rounded-xl border-2 border-gray-300 focus:border-green-700 outline-none transition"
              />
            </div>

            {/* Password */}
            <div className="mb-2">
              <label className="font-bold text-green-700">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full py-2 px-3 mt-1 rounded-xl border-2 border-gray-300 focus:border-green-700 outline-none transition"
              />
              {passwordError && (
                <p className="text-red-600 text-sm mt-1">
                  {passwordError}
                </p>
              )}
            </div>

            {/* Remember + Forgot */}
            <div className="flex justify-between items-center mb-4">
              <label className="flex items-center text-green-700">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="accent-green-700"
                />
                <span className="ml-2">Remember me</span>
              </label>

              <a href="#" className="text-green-700 font-bold hover:underline">
                Forgot password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-2 text-white font-bold rounded-full bg-green-800 hover:bg-green-900 transition"
            >
              Login
            </button>

            {/* 2 Side Buttons */}
            <div className="flex justify-between mt-4 gap-3">
              <button className="w-1/2 border border-green-300 text-green-700 font-bold py-2 rounded-full hover:bg-green-50 transition flex items-center justify-center gap-2">
                📱 Login with Phone
              </button>

              <button className="w-1/2 border border-green-300 text-green-700 font-bold py-2 rounded-full hover:bg-green-50 transition flex items-center justify-center gap-2">
                ✉ Login with Email
              </button>
            </div>

            {/* Register */}
            <p className="text-center mt-4 text-green-700">
              Don't have an account?{" "}
              <a href="#" className="font-bold text-green-700 hover:underline">
                Register now 🍃
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
