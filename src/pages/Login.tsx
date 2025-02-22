import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button, Input, message } from "antd";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [otp, setOtp] = useState<string>("");
  const [isOtpSent, setIsOtpSent] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [generatedOtp, setGeneratedOtp] = useState<string>("");

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtp(e.target.value);
  };

  const generateOtp = (): string => {
    return Math.floor(10000 + Math.random() * 90000).toString();
  };

  const sendOtp = () => {
    if (!phoneNumber || phoneNumber.length !== 10) {
      message.error("Please enter a valid 10-digit phone number");
      return;
    }
    const otp = generateOtp();
    setGeneratedOtp(otp);
    message.success(`OTP has been sent to ${phoneNumber}`);
    setIsOtpSent(true);
  };

  const validateOtp = () => {
    if (parseInt(otp) > 9999) {
      message.success("OTP is valid. Access granted!");
      navigate("/home");
    } else {
      message.error("Invalid OTP. Please try again");
    }
  };

  const handleSubmit = async () => {
    if (!otp) {
      message.error("Please enter the OTP");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      validateOtp();
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-50 bg-cover bg-center"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <div className="w-full max-w-lg px-6">
        <Card className="p-8 shadow-lg">
          <h1 className="text-3xl font-bold text-gray-900 text-center mb-4">
            OTP Login
          </h1>
          <p className="text-gray-600 text-center mb-6">
            Please log in using your phone number
          </p>

          {!isOtpSent ? (
            <div>
              <div className="mb-4">
                <Input
                  placeholder="Enter your 10-digit phone number"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  maxLength={10}
                  className="h-12 text-lg"
                />
              </div>
              <Button
                type="primary"
                block
                onClick={sendOtp}
                disabled={isLoading}
                className="h-12 text-lg"
              >
                {isLoading ? "Sending OTP..." : "Send OTP"}
              </Button>
            </div>
          ) : (
            <div>
              <div className="mb-4">
                <Input
                  placeholder="Enter the OTP"
                  value={otp}
                  onChange={handleOtpChange}
                  className="h-12 text-lg"
                />
              </div>
              <Button
                type="primary"
                block
                onClick={handleSubmit}
                disabled={isLoading}
                className="h-12 text-lg"
              >
                {isLoading ? "Verifying OTP..." : "Verify OTP"}
              </Button>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Login;
