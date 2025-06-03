"use client";
import { isValidEmail } from "@/utils/check-email";
import axios from "axios";
import { useState } from "react";
import { TbMailForward } from "react-icons/tb";
import { toast } from "react-toastify";
import { reject } from "@/utils/data/reject";

interface UserInput {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ErrorState {
  email: boolean;
  required: boolean;
}

const RejectForm: React.FC = () => {
  const [error, setError] = useState<ErrorState>({ email: false, required: false });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userInput, setUserInput] = useState<UserInput>({
    name: reject.name,
    email: "",
    subject: reject.subject,
    message: reject.message,
  });

  const checkRequired = () => {
    if (userInput.email && userInput.message && userInput.subject && userInput.name) {
      setError({ ...error, required: false });
    }
  };

  const handleSendMail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!userInput.email || !userInput.message || !userInput.subject || !userInput.name) {
      setError({ ...error, required: true });
      return;
    } else if (error.email) {
      return;
    } else {
      setError({ ...error, required: false });
    }

    try {
      setIsLoading(true);
      await axios.post(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/reject`,
        userInput
      );

      toast.success(`${userInput.name}, you are awesome, your email has been sent successfully!`);
      setUserInput({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-3xl text-white rounded-lg border border-black p-3 lg:p-5">
      <p className="text-sm text-[#22c55e]">{"You will reject the finance bill by sending the email via the form below. The email details are already typed for you but you are free to edit it as you see fit!"}</p>
      <div className="mt-6 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-black">Your Name (it will be appended at the bottom of the message): </label>
          <input
            className="bg-black w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
            type="text"
            maxLength={100}
            required={true}
            onChange={(e) => setUserInput({ ...userInput, name: e.target.value })}
            onBlur={checkRequired}
            value={userInput.name}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-black">Your Email (feel free to use any email as long as it is valid): </label>
          <input
            className="bg-black w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
            type="email"
            maxLength={100}
            required={true}
            value={userInput.email}
            onChange={(e) => setUserInput({ ...userInput, email: e.target.value })}
            onBlur={() => {
              checkRequired();
              setError({ ...error, email: !isValidEmail(userInput.email) });
            }}
          />
          {error.email && <p className="text-sm text-red-400">Please provide a valid email!</p>}
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-black">Your Subject: </label>
          <input
            className="bg-black w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
            type="text"
            maxLength={100}
            required={true}
            onChange={(e) => setUserInput({ ...userInput, subject: e.target.value })}
            onBlur={checkRequired}
            value={userInput.subject}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-black">Your Message goes here: </label>
          <textarea
            className="bg-black w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
            maxLength={20000}
            name="message"
            required={true}
            onChange={(e) => setUserInput({ ...userInput, message: e.target.value })}
            onBlur={checkRequired}
            rows={55}
            value={userInput.message}
          />
        </div>
        <div className="flex flex-col items-center gap-3">
          {error.required && <p className="text-sm text-red-400">All fields are required!</p>}
          <button
            className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
            role="button"
            onClick={handleSendMail}
            disabled={isLoading}
          >
            {
              isLoading ?
                <span>Sending Email ...</span> :
                <span className="flex items-center gap-1">
                  Send Email
                  <TbMailForward size={20} />
                </span>
            }
          </button>
        </div>
      </div>
    </div>
  );
};

export default RejectForm;
