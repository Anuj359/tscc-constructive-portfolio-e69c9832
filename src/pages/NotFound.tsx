
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-tscc-red mb-4">404</h1>
        <p className="text-2xl text-tscc-darkgray mb-8">Page Not Found</p>
        <p className="text-gray-600 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link
          to="/"
          className="inline-block bg-tscc-blue hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
