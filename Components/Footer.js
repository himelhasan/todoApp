import Link from "next/link";
import { useState, useEffect } from "react";

export default function Footer() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <nav
      style={{ bottom: "10px !important", position: "absolute" }}
      className="bg-blue-500 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 w-full"
    >
      <div className="container flex flex-wrap items-center justify-between mx-auto ">
        <div className=" w-full text-center items-center justify-center ">
          <ul className="flex border-b border-gray-100">
            <li className="flex-1">
              <Link className="relative block p-4" href="/AddATask">
                <span className="absolute inset-x-0 -bottom-px h-px w-full bg-pink-600"></span>

                <div className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <span className="ml-3 text-sm font-medium text-gray-900">
                    {" "}
                    New task{" "}
                  </span>
                </div>
              </Link>
            </li>

            <li className="flex-1">
              <Link className="relative block p-4" href="/AddATask">
                <span className="absolute inset-x-0 -bottom-px h-px w-full bg-pink-600"></span>

                <div className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <span className="ml-3 text-sm font-medium text-gray-900">
                    {" "}
                    New task{" "}
                  </span>
                </div>
              </Link>
            </li>

            <li className="flex-1">
              <Link className="relative block p-4" href="/CompletedTasks">
                <span className="absolute inset-x-0 -bottom-px h-px w-full bg-pink-600"></span>

                <div className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <span className="ml-3 text-sm font-medium text-gray-900">
                    {" "}
                    Completed Tasks{" "}
                  </span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
