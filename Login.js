import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [phone, setPhone] = useState("");
    const [otp, setOtp] = useState("");
    const [generatedOtp, setGeneratedOtp] = useState(null);
    const [isOtpSent, setIsOtpSent] = useState(false);
    const navigate = useNavigate();

    // Generate & Send OTP (Mock)
    const sendOtp = () => {
        if (phone.length === 10) {
            const otpCode = Math.floor(1000 + Math.random() * 9000); // Generate 4-digit OTP
            setGeneratedOtp(otpCode);
            alert(`Your OTP is: ${otpCode}`); // Mock OTP Sending (Replace with API Call)
            setIsOtpSent(true);
        } else {
            alert("Please enter a valid 10-digit phone number.");
        }
    };

    // Verify OTP & Redirect
    const verifyOtp = () => {
        if (otp === generatedOtp.toString()) {
            alert("OTP Verified! Redirecting...");
            navigate("/home"); // Navigate to Home Page
        } else {
            alert("Invalid OTP. Please try again.");
        }
    };

    return (
        <div className="login-container">
            <h2>Login with OTP</h2>
            
            {!isOtpSent ? (
                <>
                    <input
                        type="text"
                        placeholder="Enter your phone number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <button onClick={sendOtp} className="btn btn-primary">Send OTP</button>
                </>
            ) : (
                <>
                    <input
                        type="text"
                        placeholder="Enter OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                    />
                    <button onClick={verifyOtp} className="btn btn-success">Verify OTP</button>
                </>
            )}
        </div>
    );
};

export default Login;
