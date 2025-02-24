import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase"; // Import Firestore instance
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";

const Login = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [otp, setOtp] = useState<string>("");
  const [isOtpSent, setIsOtpSent] = useState<boolean>(false);
  const [confirmationResult, setConfirmationResult] = useState<any>(null);

  useEffect(() => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: () => console.log("reCAPTCHA verified!"),
        }
      );
    }
  }, []);

  const checkUserExists = async (formattedPhoneNumber: string) => {
    const usersRef = collection(db, "users"); // Replace with your Firestore collection name
    const q = query(usersRef, where("phoneNumber", "==", formattedPhoneNumber));
    const querySnapshot = await getDocs(q);
    return !querySnapshot.empty; // Returns true if user exists, false otherwise
  };

  const sendOtp = async () => {
    if (!phoneNumber || phoneNumber.length !== 10) {
      message.error("Please enter a valid 10-digit phone number");
      return;
    }

    const formattedPhoneNumber = `+91${phoneNumber}`;

    try {
      const userExists = await checkUserExists(phoneNumber);
      if (!userExists) {
        message.error("No user found with this phone number.");
        return;
      }

      const confirmation = await signInWithPhoneNumber(
        auth,
        formattedPhoneNumber,
        window.recaptchaVerifier
      );
      setConfirmationResult(confirmation);
      setIsOtpSent(true);
      message.success("OTP sent successfully!");
    } catch (error) {
      console.error("OTP send error:", error);
      message.error("Failed to send OTP. Try again.");
    }
  };

  const verifyOtp = async () => {
    if (!otp) {
      message.error("Please enter OTP");
      return;
    }

    try {
      await confirmationResult.confirm(otp);
      message.success("Login successful!");
      navigate("/home");
    } catch (error) {
      console.error("OTP verification error:", error);
      message.error("Invalid OTP. Try again.");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-50 bg-cover bg-center"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <div className="w-full max-w-lg px-6">
        <Card className="p-8 shadow-lg">
          <h1 className="text-3xl font-bold text-gray-900 text-center mb-4">
            Login
          </h1>
          <p className="text-gray-600 text-center mb-6">
            Please log in using your phone number
          </p>

          {!isOtpSent ? (
            <>
              <Input
                placeholder="Enter your 10-digit phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                maxLength={10}
                className="h-12 text-lg mb-4"
              />
              <Button
                type="primary"
                block
                onClick={sendOtp}
                className="h-12 text-lg"
              >
                Send OTP
              </Button>
              <div id="recaptcha-container"></div>
            </>
          ) : (
            <>
              <Input
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="h-12 text-lg mb-4"
              />
              <Button
                type="primary"
                block
                onClick={verifyOtp}
                className="h-12 text-lg"
              >
                Verify OTP
              </Button>
            </>
          )}

          <p className="text-center text-gray-600 mt-4">
            Don't have an account?{" "}
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => navigate("/")}
            >
              Sign Up
            </span>
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Login;
