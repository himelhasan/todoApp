import React, { useContext, useState } from "react";
import logo from "../public/logo.png";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { AuthContext } from "../Context/AuthProvider";
import Image from "next/image";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loggedUserEmail, setLoggedUserEmail] = useState("");
  const { emailLogin, gmailLogin } = useContext(AuthContext);
  const [err, setErr] = useState({ general: "" });

  const onSubmit = (data) => {
    const email = data.email.toLowerCase();
    const pass = data.password;
    // console.log(email);
    // console.log(pass);
    setErr({ ...err, general: "" });

    emailLogin(email, pass)
      .then((response) => {
        const user = response.user;
        console.log(user);
        setLoggedUserEmail(email);
      })
      .catch((error) => {
        setErr({ ...err, general: error });
        console.error(error);
      });
  };

  const logInWithGoogle = () => {
    gmailLogin()
      .then((res) => {
        const user = res.user;
        if (user) {
          const email = user.email.toLowerCase();
          console.log(email);
          setLoggedUserEmail(email);
          setErr({ ...err, general: "" });
          // navigate(from, { replace: true });
        }
      })
      .catch((error) => {
        setErr({ ...err, general: error });

        console.error(error);
      });
  };

  const logInWithGithub = () => {
    githubLogin()
      .then((res) => {
        const user = res.user;
        setLoggedUserEmail(user.email);
        setErr({ ...err, general: "" });
        // navigate(from, { replace: true });
      })
      .catch((error) => {
        setErr({ ...error, general: error });

        console.error(error);
      });
  };

  return (
    <div>
      <section className="h-full gradient-form bg-gray-200 md:min-h-screen py-32">
        <div className="container mx-auto py-12 px-6 h-full">
          <div className="flex justify-center items-center flex-wrap h-full g-6 py-12 text-gray-800">
            <div className="xl:w-10/12 mx-auto">
              <div className="block bg-white shadow-lg rounded-lg">
                <div className="lg:flex lg:flex-wrap g-0">
                  <div className="lg:w-6/12 px-4 md:px-0">
                    <div className="md:p-12 md:mx-6">
                      <div className="text-center">
                        <h4 className="text-xl font-semibold mt-1 mb-12 pb-1">Login</h4>
                      </div>
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <p className="mb-4">Please login to your account</p>
                        <div className="mb-4">
                          <input
                            {...register("email", {
                              required: "Please enter your email address",
                            })}
                            type="text"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Email"
                          />
                        </div>
                        <div className="mb-4">
                          <input
                            {...register("password", {
                              required: "Please enter your password",
                            })}
                            type="password"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Password"
                          />
                        </div>
                        <div className="text-center pt-1 mb-12 pb-1">
                          <input
                            type="submit"
                            className="bg-gradient-to-r to-[#FF0062] from-[#0029FF]  inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                          />

                          {errors.exampleRequired && (
                            <p className="text-red-600 ">This field is required</p>
                          )}
                          <p className="text-red-600 ">{err.general}</p>

                          <a className="text-gray-500" href="#!">
                            Forgot password?
                          </a>
                        </div>
                        <div className="flex items-center justify-between pb-6">
                          <p className="mb-0 mr-2">
                            Don't have an account?{" "}
                            <Link href="/register" className="text-[#dd3675]">
                              Register
                            </Link>
                          </p>
                        </div>
                        <div className="flex items-center justify-center gap-2 pb-6">
                          <button
                            onClick={logInWithGoogle}
                            type="button"
                            className="w-full px-6 py-2 border-2 border-[#dd3675] text-[#dd3675] btn-outlined font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                          >
                            Login with Google
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none bg-slate-100 ">
                    <div className="text-white px-4 py-6 md:p-12 md:mx-6">
                      <Image
                        src={logo}
                        width={180}
                        height={20}
                        alt="logo"
                        className="mx-auto w-48"
                      ></Image>
                      <h4 className="text-xl font-semibold mb-6 text-black text-center">
                        Do your task daily
                      </h4>
                      <p className="text-sm text-black">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
