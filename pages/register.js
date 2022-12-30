import React from "react";
import { useContext, useState } from "react";
import logo from "../public/logo.png";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AuthContext } from "../Context/AuthProvider";
import Link from "next/link";
import Image from "next/image";

const Register = () => {
  const { registerWithEmail, modifyProfile } = useContext(AuthContext);

  const [createdUserEmail, setCreatedUserEmail] = useState("");

  const [err, setErr] = useState({
    general: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      select: {},
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    const name = data.name;
    const userEmail = data.email.toLowerCase();
    const userPhone = data.userPhone;
    const pass = data.password;
    const userPhoto = data.userPhoto;
    const userRole = data.userRole;

    const userInfo = {
      displayName: name,
      photoURL: userPhoto,
    };

    const userInfoDB = {
      displayName: name,
      photoURL: userPhoto,
      phoneNumber: userPhone,
      userEmail: userEmail,
      Address: "",
      userRole: userRole,
      paymentMethod: {
        NameOnCard: "",
        CardNumber: "",
        ExpirationDate: "",
        SecurityCode: "",
      },
    };

    registerWithEmail(userEmail, pass)
      .then((result) => {
        const user = result.user;
        if (user) {
          toast.success("User registered successfully");

          modifyProfile(userInfo)
            .then((res) => {
              saveUserToDB(userInfoDB);
            })
            .catch((error) => {
              setErr({ ...err, general: error });
            });
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErr({ ...err, general: errorMessage });
      });
  };

  const saveUserToDB = (userInfoDB) => {
    fetch("https://bechedaw-server.vercel.app/admin", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userInfoDB),
    })
      .then((res) => res.json())
      .then((data) => {
        setCreatedUserEmail(userInfoDB.userEmail);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <section className="h-full gradient-form bg-gray-200 md:min-h-screen py-32">
        <div className="container mx-auto py-12 px-6 h-full">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="xl:w-10/12">
              <div className="block bg-white shadow-lg rounded-lg">
                <div className="lg:flex lg:flex-wrap g-0">
                  <div className="lg:w-6/12 px-4 md:px-0">
                    <div className="md:p-12 md:mx-6">
                      <div className="text-center">
                        <h4 className="text-xl font-semibold mt-1 mb-12 pb-1">
                          Register
                        </h4>
                      </div>
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <p className="mb-4">Please Register your account</p>
                        <div className="mb-4">
                          <input
                            {...register("name", {
                              required: "Please enter your name",
                            })}
                            type="text"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Your Name"
                          />
                        </div>

                        <div className="mb-4">
                          <input
                            {...register("email", {
                              required: "Please enter your email address",
                            })}
                            type="email"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Your Email"
                          />
                        </div>

                        <div className="mb-4">
                          <input
                            {...register("userPhone", {
                              required: "Please enter your profile photo link",
                            })}
                            type="tel"
                            autoComplete="tel"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Your Phone Number"
                          />
                        </div>
                        <div className="mb-4">
                          <input
                            {...register("userPhoto")}
                            type="url"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Your User Photo"
                          />
                        </div>

                        <div className="mb-4">
                          <select
                            {...register("userRole", {
                              required: "Please choose your user role",
                            })}
                            className=" form-control block w-full pl-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          >
                            <option className="text-gray-700 " value="buyer">
                              Buyer
                            </option>
                            <option className="text-gray-700 " value="seller">
                              Seller
                            </option>
                          </select>
                          {/*  */}
                        </div>

                        <div className="mb-4">
                          <input
                            {...register(
                              "password",
                              { required: "Please enter your password" },
                              { pattern: /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/ }
                            )}
                            type="password"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Your Password"
                          />
                        </div>
                        <div className="text-center pt-1 mb-12 pb-1">
                          <input
                            type="submit"
                            value="Register Your Account"
                            className="bg-gradient-to-r to-[#FF0062] from-[#0029FF]  inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                          />
                          <p className="text-red-600 ">{err.general}</p>

                          {errors.email && <span>This field is required</span>}
                        </div>
                        <div className="flex items-center justify-between pb-6">
                          <div className="flex items-center justify-between pb-6">
                            <p className="mb-0 mr-2">
                              Already have an account?{" "}
                              <Link href="/login" className="text-[#dd3675]">
                                Login
                              </Link>
                            </p>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none bg-gradient-to-r to-[#FF0062] from-[#0029FF] ">
                    <div className="text-white px-4 py-6 md:p-12 md:mx-6">
                      <Image
                        src={logo}
                        width={180}
                        height={20}
                        className="mx-auto w-48"
                      ></Image>{" "}
                      <h4 className="text-xl font-semibold mb-6">
                        We are more than just a company
                      </h4>
                      <p className="text-sm">
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

export default Register;
