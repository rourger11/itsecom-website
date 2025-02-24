import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
export const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
    <div
      className="container-fluid d-flex align-items-center justify-content-center vh-100"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <div
        className="card shadow-lg p-4"
        style={{
          maxWidth: "500px",
          width: "100%",
          borderRadius: "15px",
          backgroundColor: "#ffffff",
        }}
      >
        <h2 className="text-center mb-4 text-primary">Contact Us</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="message"
              rows="4"
              placeholder="Write your message"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Send Message
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};
