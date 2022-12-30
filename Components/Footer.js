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
          <ul class="flex border-b border-gray-100">
            <li class="flex-1">
              <Link class="relative block p-4" href="/AddATask">
                <span class="absolute inset-x-0 -bottom-px h-px w-full bg-pink-600"></span>

                <div class="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <span class="ml-3 text-sm font-medium text-gray-900"> New task </span>
                </div>
              </Link>
            </li>

            <li class="flex-1">
              <Link class="relative block p-4" href="/AddATask">
                <span class="absolute inset-x-0 -bottom-px h-px w-full bg-pink-600"></span>

                <div class="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <span class="ml-3 text-sm font-medium text-gray-900"> New task </span>
                </div>
              </Link>
            </li>

            <li class="flex-1">
              <Link class="relative block p-4" href="/CompletedTasks">
                <span class="absolute inset-x-0 -bottom-px h-px w-full bg-pink-600"></span>

                <div class="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <span class="ml-3 text-sm font-medium text-gray-900">
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
