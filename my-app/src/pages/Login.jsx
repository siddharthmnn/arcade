import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!formData.username.trim() || !formData.password.trim()) {
      alert("Please enter both username and password.");
      return;
    }

    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      localStorage.setItem("username", formData.username);
      localStorage.setItem("password", formData.password);

      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        background: "#e0e7ff", // light but colorful like home
        padding: "40px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Background Color Blocks */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      >
        <div
          style={{
            background: "#dbeafe",
            height: "35%",
            borderBottomLeftRadius: "40px",
            borderBottomRightRadius: "40px",
          }}
        ></div>
        <div
          style={{
            background: "#fef3c7",
            height: "30%",
          }}
        ></div>
        <div
          style={{
            background: "#fde2e2",
            height: "35%",
            borderTopLeftRadius: "40px",
            borderTopRightRadius: "40px",
          }}
        ></div>
      </div>

      {/* Center Login Box */}
      <div
        style={{
          margin: "auto",
          marginTop: "120px",
          width: "350px",
          backgroundColor: "white",
          borderRadius: "20px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          border: "2px solid #ccc",
          padding: "30px",
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "#333", marginBottom: "10px" }}>Welcome Back</h1>
        <p style={{ color: "#666", marginTop: "0", marginBottom: "20px" }}>
          Login to Pixel Playground
        </p>

        {/* Username */}
        <input
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "10px",
            border: "2px solid #ddd",
            marginBottom: "15px",
            background: "#fafafa",
          }}
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "10px",
            border: "2px solid #ddd",
            marginBottom: "20px",
            background: "#fafafa",
          }}
        />

        {/* Login Button */}
        <button
          onClick={handleLogin}
          disabled={isLoading}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "10px",
            background: "#2563eb",
            color: "white",
            border: "none",
            fontSize: "16px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          {isLoading ? "Loading..." : "Continue"}
        </button>
      </div>
    </div>
  );
}
