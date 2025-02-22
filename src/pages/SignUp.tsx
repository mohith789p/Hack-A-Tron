import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button, Input, message } from "antd";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = () => {
    if (!name || !phoneNumber || phoneNumber.length !== 10) {
      message.error("Please fill in all fields correctly");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      message.success("Sign Up Successful! Redirecting to login...");
      localStorage.setItem("user", JSON.stringify({ name, phoneNumber }));
      navigate("/home");
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
            Sign Up
          </h1>
          <p className="text-gray-600 text-center mb-6">
            Create an account to get started
          </p>
          <div className="mb-4">
            <Input
              placeholder="Full Name"
              value={name}
              onChange={handleNameChange}
              className="h-12 text-lg"
            />
          </div>
          <div className="mb-4">
            <Input
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              maxLength={10}
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
            {isLoading ? "Signing Up..." : "Sign Up"}
          </Button>
          <p className="text-center text-gray-600 mt-4">
            Already have an account?
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => navigate("/login")}
            >
              {" "}
              Login
            </span>
          </p>
        </Card>
      </div>
    </div>
  );
};

export default SignUp;
