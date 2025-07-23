import React from "react";
import MapSection from "../_components/ContactSection";

const contact = () => {
  const FormField = [
    {
      label: "Full Name",
      type: "text",
      placeholder: "Enter your full name",
    },
    {
      label: "Email Address",
      type: "email",
      placeholder: "Enter your email address",
    },
    {
      label: "Phone Number",
      type: "tel",
      placeholder: "Enter your phone number",
    },
    {
      label: "Subject",
      type: "text",
      placeholder: "Enter the subject of your message",
    },
    {
      label: "Message",
      type: "textarea",
      placeholder: "Enter your message",
    },
  ];
  return (
    <div>
      <div className="w-full h-[300px] rounded-xl overflow-hidden max-w-7xl mx-auto">
        <MapSection />
      </div>
      <div>
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-bold text-primary  mb-4">
                  Contact us
                </h1>
                <p className="text-lg text-gray-400">
                  We are here to serve you! Contact us for any inquiry or
                  request.
                </p>
              </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        Email Address
                      </h3>
                      <p className="text-gray-400">info@restaurant.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        Phone Number
                      </h3>
                      <p className="text-gray-400">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        Address
                      </h3>
                      <p className="text-gray-400">
                        123 Restaurant Street, City, State 12345
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        Business Hours
                      </h3>
                      <p className="text-gray-400">
                        Monday - Sunday: 10:00 AM - 11:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="backdrop-blur-2xl p-8 rounded-xl shadow-lg border  border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-6">
                Send us a message
              </h2>
              <form className="space-y-6">
                {FormField.map((field) => (
                  <div key={field.label}>
                    <label
                      htmlFor={field.label.toLowerCase()}
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={field.label.toLowerCase()}
                      className="w-full px-4 py-3  border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
