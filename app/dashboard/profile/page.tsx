"use client";

import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";

type UserFields = {
  fullName: string;
  description: string;
  occupation: string;
  phoneNumber: string;
  address: string;
  avatar: File | null;
};

const page = () => {
  const { data: session } = useSession();
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorState, setErrorState] = useState({
    showFormError: false,
    showPasswordError: false,
    errorFormMessage: "",
    errorPasswordMessage: "",
  });

  const [passwords, setPasswords] = useState({
    old_password: "",
    new_password: "",
    confirm_password: "",
  });

  const [inputFields, setInputFields] = useState<UserFields>({
    fullName: "",
    description: "",
    occupation: "",
    phoneNumber: "",
    address: "",
    avatar: null,
  });

  const { old_password, new_password, confirm_password } = passwords;

  const handleUserInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInputFields((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setInputFields((prev) => ({
        ...prev,
        avatar: file,
      }));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswords((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = (field: string) => {
    if (field === "old") setShowOldPassword(!showOldPassword);
    if (field === "new") setShowNewPassword(!showNewPassword);
    if (field === "confirm") setShowConfirmPassword(!showConfirmPassword);
  };

  const handleUpdatePassword = async () => {
    try {
      const req = await axios.post("/api/update-password", {
        userId: session?.user?.id,
        old_password,
        new_password,
        confirm_password,
      });
      if (req) {
        setErrorState((prev) => ({
          ...prev,
          showPasswordError: true,
          errorPasswordMessage: req.data.message,
        }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateUserDetails = async () => {
    const { fullName, description, occupation, phoneNumber, address, avatar } = inputFields;

    if (!session?.user?.id) {
      console.error("User is not logged in or session is not loaded");
      return;
    }

    const formData = new FormData();
    
    formData.append("userId", session?.user?.id);
    formData.append("fullName", fullName);
    formData.append("description", description);
    formData.append("occupation", occupation);
    formData.append("phoneNumber", phoneNumber);
    formData.append("address", address);

    if (avatar) {
      formData.append("avatar", avatar);
    }

    try {
      const res = await axios.post("/api/account-details", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res) {
        setErrorState((prev) => ({
          ...prev,
          showFormError: true,
          errorFormMessage: res.data.message,
        }));
      }
    } catch (error) {
      console.error("Update Error:", error);
    }
  };

  return (
    <>
      <div className="max-w-7xl mx-auto md:px-[120px] px-6 transition-[padding] duration-300 py-10">
        <div className="bg-white w-full shadow-md rounded-2xl p-6 mt-8">
          <h3 className="text-[#161e2d] mb-7 text-2xl font-semibold">Avatar</h3>
          <div className="flex md:flex-row flex-col items-start md:gap-10 gap-5 mb-7">
            <Image
              src={session?.user?.avatar ?? "/avatar/account.jpg"}
              className="rounded-full"
              width={100}
              height={100}
              alt="user-avatar"
            />
            <div className="flex flex-col gap-3">
              <span className="text-xs">Upload a new avatar</span>
              <input
                type="file"
                name="avatar"
                accept="image/jpeg,image/jpg,image/png"
                id="avatar"
                onChange={handleFileChange}
                className="border border-[#e4e4e4] rounded-2xl pl-4 py-2.5"
              />
              <span className="text-xs">JPEG 100x100</span>
            </div>
          </div>
          <h3 className="text-[#161e2d] mb-7 text-2xl font-semibold">
            Account Settings
          </h3>
          <form className="w-full">
            <div className="flex flex-col gap-2 mb-7">
              <label className="text-xs font-semibold" htmlFor="fullName">
                Full Name: *
              </label>
              <input
                className="w-full border border-[#e4e4e4] pl-4 py-2.5 rounded-[99px] bg-white text-[#161e2d] font-medium text-sm outline-none focus:border-[#1563df]"
                type="text"
                name="fullName"
                id="fullName"
                value={inputFields.fullName}
                onChange={handleUserInput}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold" htmlFor="description">
                Description: *
              </label>
              <textarea
                className="w-full h-28 resize-none border border-[#e4e4e4] pl-4 py-2.5 rounded-2xl bg-white text-[#161e2d] font-medium text-sm outline-none focus:border-[#1563df]"
                name="description"
                value={inputFields.description}
                id="description"
                onChange={handleUserInput}
              />
            </div>
            <div className="w-full mt-7 flex md:flex-row md:gap-0 gap-2 flex-col md:items-center items-start justify-between">
              <div className="w-[inherit] flex flex-col gap-2">
                <label className="text-xs font-semibold" htmlFor="occupation">
                  Occupation: *
                </label>
                <input
                  className="md:w-[320px] w-full border border-[#e4e4e4] pl-4 py-2.5 rounded-[99px] bg-white text-[#161e2d] font-medium text-sm outline-none focus:border-[#1563df]"
                  type="text"
                  name="occupation"
                  value={inputFields.occupation}
                  id="occupation"
                  onChange={handleUserInput}
                />
              </div>
              <div className="w-[inherit] flex flex-col gap-2">
                <label className="text-xs font-semibold" htmlFor="phoneNumber">
                  Phone Number: *
                </label>
                <input
                  className="md:w-[320px] w-full border border-[#e4e4e4] pl-4 py-2.5 rounded-[99px] bg-white text-[#161e2d] font-medium text-sm outline-none focus:border-[#1563df]"
                  type="tel"
                  name="phoneNumber"
                  value={inputFields.phoneNumber}
                  id="phoneNumber"
                  onChange={handleUserInput}
                />
              </div>
              <div className="w-[inherit] flex flex-col gap-2">
                <label className="text-xs font-semibold" htmlFor="address">
                  Address: *
                </label>
                <input
                  className="md:w-[320px] w-full border border-[#e4e4e4] pl-4 py-2.5 rounded-[99px] bg-white text-[#161e2d] font-medium text-sm outline-none focus:border-[#1563df]"
                  type="text"
                  name="address"
                  id="address"
                  value={inputFields.address}
                  onChange={handleUserInput}
                />
              </div>
            </div>
            <button
              onClick={handleUpdateUserDetails}
              type="button"
              className="bg-[#1563df] text-white font-medium text-base rounded-full w-44 mt-7 py-3.5 transition-colors hover:bg-[#0e49a6]"
            >
              Save & Update
            </button>
          </form>
          {errorState.showFormError && (
            <div
              className={`mt-4 text-base font-semibold ${
                errorState.errorFormMessage === "Details updated successfully"
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {errorState.errorFormMessage}
            </div>
          )}
          <h3 className="text-[#161e2d] mt-7 text-2xl font-semibold">
            Change Password
          </h3>
          <form className="w-full">
            <div className="w-full mt-7 flex md:flex-row md:gap-0 gap-2 flex-col md:items-center items-start justify-between">
              <div className="w-[inherit] relative flex flex-col gap-2">
                <label className="text-xs font-semibold" htmlFor="old_password">
                  Old Password: *
                </label>
                <div className="relative">
                  <input
                    className="md:w-[320px] w-full border border-[#e4e4e4] pl-4 py-2.5 rounded-[99px] bg-white text-[#161e2d] font-medium text-sm outline-none focus:border-[#1563df]"
                    type={showOldPassword ? "text" : "password"}
                    name="old_password"
                    id="old_password"
                    value={old_password}
                    onChange={handleInputChange}
                  />
                  <button
                    type="button"
                    onClick={() => togglePasswordVisibility("old")}
                    className="absolute md:right-6 right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showOldPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>
              <div className="w-[inherit] relative flex flex-col gap-2">
                <label className="text-xs font-semibold" htmlFor="new_password">
                  New Password: *
                </label>
                <div className="relative">
                  <input
                    className="md:w-[320px] w-full border border-[#e4e4e4] pl-4 py-2.5 rounded-[99px] bg-white text-[#161e2d] font-medium text-sm outline-none focus:border-[#1563df]"
                    type={showNewPassword ? "text" : "password"}
                    name="new_password"
                    id="new_password"
                    value={new_password}
                    onChange={handleInputChange}
                  />
                  <button
                    type="button"
                    onClick={() => togglePasswordVisibility("new")}
                    className="absolute md:right-6 right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showNewPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>
              <div className="w-[inherit] relative flex flex-col gap-2">
                <label
                  className="text-xs font-semibold"
                  htmlFor="confirm_password"
                >
                  Confirm Password: *
                </label>
                <div className="relative">
                  <input
                    className="md:w-[320px] w-full border border-[#e4e4e4] pl-4 py-2.5 rounded-[99px] bg-white text-[#161e2d] font-medium text-sm outline-none focus:border-[#1563df]"
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirm_password"
                    id="confirm_password"
                    value={confirm_password}
                    onChange={handleInputChange}
                  />
                  <button
                    type="button"
                    onClick={() => togglePasswordVisibility("confirm")}
                    className="absolute md:right-6 right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>
            {errorState.showPasswordError && (
              <div
                className={`mt-4 text-base font-semibold ${
                  errorState.errorPasswordMessage ===
                  "Password updated successfully"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {errorState.errorPasswordMessage}
              </div>
            )}
            <button
              onClick={handleUpdatePassword}
              type="button"
              className="bg-[#1563df] text-white font-medium text-base rounded-full w-44 mt-7 py-3.5 transition-colors hover:bg-[#0e49a6]"
            >
              Update Password
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default page;
