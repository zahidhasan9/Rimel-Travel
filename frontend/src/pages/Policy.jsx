import React from "react";

const Policy = () => {
  const policies = [
    {
      title: "Privacy Policy",
      content: `
        We respect your privacy and are committed to protecting your personal information. 
        Any data collected during bookings or inquiries is used solely for providing our services and will not be shared with third parties without your consent.
      `,
    },
    {
      title: "Cancellation Policy",
      content: `
        You can cancel or reschedule your booking up to 48 hours before the scheduled trip. 
        Cancellations made within 48 hours of departure may incur a partial or full fee depending on the package. 
        Please contact our support team for assistance.
      `,
    },
    {
      title: "Booking & Payment Policy",
      content: `
        Bookings can be made directly through our website or via phone/email. 
        Payments can be made using online payment gateways, bank transfers, or cash at our office. 
        A booking is confirmed only after the payment is successfully processed.
      `,
    },
    {
      title: "Terms & Conditions",
      content: `
        All travelers must comply with local laws and regulations. 
        We are not responsible for loss, injury, or damages arising from personal negligence. 
        Travelers are advised to have valid travel documents, insurance, and necessary permits for their trip.
      `,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12">
        <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-10">
          Our Policies 📜
        </h1>

        <div className="space-y-8">
          {policies.map((policy, index) => (
            <div key={index} className="bg-blue-50 p-6 rounded-2xl shadow-md">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">
                {policy.title}
              </h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {policy.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Policy;
