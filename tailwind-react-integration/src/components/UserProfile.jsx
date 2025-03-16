const UserProfile = () => {
  return (
    <div className="max-w-xs sm:max-w-sm md:max-w-sm lg:max-w-lg mx-auto p-4 sm:p-4 md:p-8 bg-white shadow-lg rounded-lg">
      {/* Profile Image */}
      <div className="flex justify-center">
        <img
          src="https://via.placeholder.com/150" // Replace with your image URL
          alt="Profile"
          className="w-24 h-24 sm:w-24 sm:h-24 md:w-36 md:h-36 rounded-full border-4 border-blue-500"
        />
      </div>

      {/* Profile Heading */}
      <h1 className="text-lg sm:text-xl md:text-xl font-bold text-center mt-4">
        John Doe
      </h1>

      {/* Profile Description */}
      <p className="text-sm sm:text-base md:text-lg text-gray-600 text-center mt-2">
        Frontend Developer | Passionate about building user-friendly interfaces.
      </p>

      {/* Additional Info */}
      <div className="mt-6 text-center">
        <p className="text-sm sm:text-base text-gray-500">
          Follow me on:
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="text-blue-500 hover:text-blue-700">
            Twitter
          </a>
          <a href="#" className="text-blue-500 hover:text-blue-700">
            LinkedIn
          </a>
          <a href="#" className="text-blue-500 hover:text-blue-700">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;