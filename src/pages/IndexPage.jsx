// Home Page
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-violet-800">

      <main className="flex-grow flex items-center justify-center px-4">
        <div className="text-center bg-white rounded-2xl shadow-xl w-full max-w-md sm:max-w-xl p-6 sm:p-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-violet-800 mb-4">
            Welcome to ClientSpace
          </h1>
          <p className="text-sm text-center text-violet-800 mt-6">
            This project is developed as part of the Internship Evaluation Task at <span className="font-semibold">Versai Tech Solutions</span>.
          </p>
          <p className="text-sm text-center text-violet-800 mt-1">
            Created by <span className="font-semibold">Ali Mehdi</span> | B.Tech CSE, Jamia Millia Islamia
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <Link
              to="/wishlist"
              className="bg-violet-600 hover:bg-violet-700 text-white py-2 px-4 rounded-lg shadow-md text-sm sm:text-base"
            >
              Wishlist
            </Link>
            <Link
              to="/reviews"
              className="bg-violet-600 hover:bg-violet-700 text-white py-2 px-4 rounded-lg shadow-md text-sm sm:text-base"
            >
              Reviews
            </Link>
          </div>
        </div>
      </main>

      <footer className="bg-purple-900 text-white text-center p-4">
        <p className="text-sm sm:text-base">
          Internship Evaluation Task — <span className="font-semibold">Versai Tech Solutions</span>
        </p>
        <p className="text-sm sm:text-base mt-1">
          Developed by <span className="font-semibold">Ali Mehdi</span> | B.Tech CSE, Jamia Millia Islamia
        </p>
        <p className="text-sm sm:text-base mt-1">
          GitHub: <a href="https://github.com/alimehdi04" className="underline hover:text-gray-300">alimehdi04</a> |
          Email: <a href="mailto:alimehdinaqvi05@gmail.com" className="underline hover:text-gray-300">alimehdinaqvi05@gmail.com</a>
        </p>
      </footer>
      
    </div>
  );
}
