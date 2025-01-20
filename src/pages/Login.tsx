import logoSecondary from "../assets/logo/logoSecondary.png";
import { FaApple, FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

const SignIn = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left Section */}
      <div className="flex flex-col justify-center px-4 py-12 lg:w-1/2 md:flex md:justify-center md:item-center">
        <div className="max-w-md mx-auto">
          {/* Logo */}
          <div className="flex items-center mb-8">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img alt="" src={logoSecondary} className="h-12 w-auto" />
            </a>
          </div>

          {/* Form Header */}
          <h2 className="text-2xl font-bold text-gray-900">
            Profilingizga kiring
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Profilingiz yo'qmi?{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Hoziroq ro'yxatdan o'ting
            </a>
          </p>

          {/* Form */}
          <form className="mt-6 space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                required
                className="block w-full px-3 py-2 mt-1 text-gray-900 bg-gray-100 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                required
                className="block w-full px-3 py-2 mt-1 text-gray-900 bg-gray-100 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label
                  htmlFor="remember"
                  className="ml-2 text-sm text-gray-700"
                >
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm text-blue-500 hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none"
            >
              Sign in
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="w-auto border-t border-gray-300"></div>
            <p className="px-4 text-sm text-gray-600">Or continue with</p>
            <div className="w-auto border-t border-gray-300"></div>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-4 gap-4">
            <a className="flex justify-center py-4 rounded-md border-2 border-blue-300" href="https://google.com" target="_blank"><FaGoogle/><span></span></a>
            <a className="flex justify-center py-4 rounded-md border-2 border-blue-300" href="https://google.com" target="_blank"><FaApple/><span></span></a>
            <a className="flex justify-center py-4 rounded-md border-2 border-blue-300" href="https://google.com" target="_blank"><FaFacebook/><span></span></a>
            <a className="flex justify-center py-4 rounded-md border-2 border-blue-300" href="https://google.com" target="_blank"><FaGithub/><span></span></a>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden lg:flex lg:w-1/2">
        <img
          src="https://images.unsplash.com/photo-1559131397-f94da358f7ca?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Sign In"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default SignIn;
