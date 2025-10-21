import { useState } from "react";
import { FiSearch } from "react-icons/fi";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const districts = [
  { district: "Dhaka", thana: "Tejgaon", phone: "02-9123456" },
  { district: "Gazipur", thana: "Sadar", phone: "02-9256789" },
  { district: "Narayanganj", thana: "Sadar", phone: "02-7645123" },
  { district: "Manikganj", thana: "Sadar", phone: "0651-612345" },
  { district: "Munshiganj", thana: "Sadar", phone: "0641-712345" },
  { district: "Kishoreganj", thana: "Sadar", phone: "0941-812345" },
  { district: "Tangail", thana: "Sadar", phone: "0921-612345" },
  { district: "Narsingdi", thana: "Sadar", phone: "0628-712345" },
  { district: "Faridpur", thana: "Sadar", phone: "0631-712345" },
  { district: "Madaripur", thana: "Sadar", phone: "0661-712345" },
  { district: "Shariatpur", thana: "Sadar", phone: "0601-612345" },
  { district: "Gopalganj", thana: "Sadar", phone: "0668-712345" },
  { district: "Rajbari", thana: "Sadar", phone: "0642-612345" },

  { district: "Chittagong", thana: "Kotwali", phone: "031-621234" },
  { district: "Cox's Bazar", thana: "Sadar", phone: "0341-512345" },
  { district: "Rangamati", thana: "Sadar", phone: "0351-612345" },
  { district: "Khagrachari", thana: "Sadar", phone: "0371-712345" },
  { district: "Bandarban", thana: "Sadar", phone: "0361-612345" },
  { district: "Feni", thana: "Sadar", phone: "0331-712345" },
  { district: "Noakhali", thana: "Sadar", phone: "0321-812345" },
  { district: "Lakshmipur", thana: "Sadar", phone: "0381-612345" },
  { district: "Comilla", thana: "Sadar Dakshin", phone: "081-712345" },
  { district: "Brahmanbaria", thana: "Sadar", phone: "0851-612345" },
  { district: "Chandpur", thana: "Sadar", phone: "0841-712345" },

  { district: "Sylhet", thana: "Kotwali", phone: "0821-712345" },
  { district: "Moulvibazar", thana: "Sadar", phone: "0861-612345" },
  { district: "Habiganj", thana: "Sadar", phone: "0831-712345" },
  { district: "Sunamganj", thana: "Sadar", phone: "0871-612345" },

  { district: "Khulna", thana: "Sonadanga", phone: "041-720123" },
  { district: "Bagerhat", thana: "Sadar", phone: "0468-612345" },
  { district: "Satkhira", thana: "Sadar", phone: "0471-712345" },
  { district: "Jessore", thana: "Sadar", phone: "0421-612345" },
  { district: "Jhenaidah", thana: "Sadar", phone: "0451-712345" },
  { district: "Magura", thana: "Sadar", phone: "0481-612345" },
  { district: "Narail", thana: "Sadar", phone: "0491-612345" },
  { district: "Chuadanga", thana: "Sadar", phone: "0761-712345" },
  { district: "Kushtia", thana: "Sadar", phone: "071-712345" },
  { district: "Meherpur", thana: "Sadar", phone: "0791-612345" },

  { district: "Rajshahi", thana: "Boalia", phone: "0721-772233" },
  { district: "Natore", thana: "Sadar", phone: "0771-612345" },
  { district: "Naogaon", thana: "Sadar", phone: "0741-712345" },
  { district: "Chapainawabganj", thana: "Sadar", phone: "0781-612345" },
  { district: "Pabna", thana: "Sadar", phone: "0731-712345" },
  { district: "Sirajganj", thana: "Sadar", phone: "0751-612345" },
  { district: "Bogra", thana: "Sadar", phone: "051-612345" },
  { district: "Joypurhat", thana: "Sadar", phone: "0571-612345" },

  { district: "Barisal", thana: "Kotwali", phone: "0431-217890" },
  { district: "Bhola", thana: "Sadar", phone: "0491-712345" },
  { district: "Patuakhali", thana: "Sadar", phone: "0441-712345" },
  { district: "Barguna", thana: "Sadar", phone: "0488-612345" },
  { district: "Jhalokathi", thana: "Sadar", phone: "0498-712345" },
  { district: "Pirojpur", thana: "Sadar", phone: "0461-612345" },

  { district: "Rangpur", thana: "Kotwali", phone: "0521-621345" },
  { district: "Gaibandha", thana: "Sadar", phone: "0541-712345" },
  { district: "Kurigram", thana: "Sadar", phone: "0581-612345" },
  { district: "Nilphamari", thana: "Sadar", phone: "0551-712345" },
  { district: "Lalmonirhat", thana: "Sadar", phone: "0561-612345" },
  { district: "Dinajpur", thana: "Sadar", phone: "0531-712345" },
  { district: "Thakurgaon", thana: "Sadar", phone: "0561-812345" },
  { district: "Panchagarh", thana: "Sadar", phone: "0591-612345" },

  { district: "Mymensingh", thana: "Kotwali", phone: "091-650123" },
  { district: "Jamalpur", thana: "Sadar", phone: "0981-712345" },
  { district: "Sherpur", thana: "Sadar", phone: "0931-612345" },
  { district: "Netrokona", thana: "Sadar", phone: "0951-712345" },
];


  const hospitals = [
    {
      division: "Dhaka",
      name: "Dhaka Medical College Hospital",
      location: "Dhaka, Bangladesh",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.5482737984457!2d90.39841887439454!3d23.72604867870364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8a442c7f2db%3A0x6b6ff49acbbefec4!2sDhaka%20Medical%20College%20Hospital!5e0!3m2!1sen!2sbd!4v1716251291298!5m2!1sen!2sbd",
    },
    {
      division: "Chittagong",
      name: "Chittagong Medical College Hospital",
      location: "Chittagong, Bangladesh",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.7257938615224!2d91.82232217434882!3d22.36459477963726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd9f9aa7b3b63%3A0x93d5c53a7f6b88d7!2sChittagong%20Medical%20College%20Hospital!5e0!3m2!1sen!2sbd!4v1716251492214!5m2!1sen!2sbd",
    },
    {
      division: "Sylhet",
      name: "Sylhet MAG Osmani Medical College Hospital",
      location: "Sylhet, Bangladesh",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.223328934207!2d91.86827187439579!3d24.89488227789538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375054d9c0dfe7d3%3A0x57c8ad74d9de1435!2sSylhet%20MAG%20Osmani%20Medical%20College%20Hospital!5e0!3m2!1sen!2sbd!4v1716251572445!5m2!1sen!2sbd",
    },
    {
      division: "Rajshahi",
      name: "Rajshahi Medical College Hospital",
      location: "Rajshahi, Bangladesh",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.8933901180553!2d88.58648607438972!3d24.37242907813838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbef34f5f6ec17%3A0x12c38a6ee7bb0fd4!2sRajshahi%20Medical%20College%20Hospital!5e0!3m2!1sen!2sbd!4v1716251609035!5m2!1sen!2sbd",
    },
    {
      division: "Khulna",
      name: "Khulna Medical College Hospital",
      location: "Khulna, Bangladesh",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.2238795345487!2d89.54425887438695!3d22.80947298202565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff9c5c3a8da1cd%3A0xb6c530d29d236f57!2sKhulna%20Medical%20College%20Hospital!5e0!3m2!1sen!2sbd!4v1716251632583!5m2!1sen!2sbd",
    },
    {
      division: "Barisal",
      name: "Sher-e-Bangla Medical College Hospital",
      location: "Barisal, Bangladesh",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.2415069245485!2d90.35955647434925!3d22.709392679426065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30aab77b294af3a7%3A0x8b621bd50753321e!2sSher-E-Bangla%20Medical%20College%20Hospital!5e0!3m2!1sen!2sbd!4v1716251652895!5m2!1sen!2sbd",
    },
    {
      division: "Rangpur",
      name: "Rangpur Medical College Hospital",
      location: "Rangpur, Bangladesh",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.4680575939914!2d89.24643437439746!3d25.748784777307684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fcf186e7764ea5%3A0x8f68db194cd4a0b!2sRangpur%20Medical%20College%20Hospital!5e0!3m2!1sen!2sbd!4v1716251677303!5m2!1sen!2sbd",
    },
    {
      division: "Mymensingh",
      name: "Mymensingh Medical College Hospital",
      location: "Mymensingh, Bangladesh",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.084444058361!2d90.40306757439167!3d24.74331887800044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3756f92e19b6a317%3A0xa6a5a8f7f08b7f64!2sMymensingh%20Medical%20College%20Hospital!5e0!3m2!1sen!2sbd!4v1716251700033!5m2!1sen!2sbd",
    },
  ];

  const filtered = districts.filter((item) =>
    item.district.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 py-12 px-6 font-sans">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-700 mb-2">
          🌍 Travel Support Hub
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Get quick access to emergency contacts and hospital locations across
          Bangladesh. Stay safe while you explore.
        </p>
      </header>

      {/* District Search */}
      <section className="bg-white/80 backdrop-blur-lg border border-blue-100 shadow-xl rounded-3xl p-8 w-full max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          🏙️ District Police Station Contacts
        </h2>

        <div className="flex items-center mb-6 border rounded-full overflow-hidden shadow-sm">
          <input
            type="text"
            placeholder="Search district..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 px-5 py-3 outline-none text-gray-700 bg-transparent"
          />
          <FiSearch className="text-gray-500 mr-4" size={22} />
        </div>

        <div className="max-h-80 overflow-y-auto">
          {filtered.length > 0 ? (
            filtered.map((item, i) => (
              <div
                key={i}
                className="flex justify-between items-center py-3 border-b border-gray-100 hover:bg-blue-50 px-2 rounded-lg transition"
              >
                <span className="font-medium text-gray-700">
                  {item.district}
                </span>
                <span className="text-gray-600 text-sm">
                  {item.thana} — 📞 {item.phone}
                </span>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 py-4">
              No district found.
            </p>
          )}
        </div>
      </section>

      {/* Hospital Locations */}
      <section className="mt-16 w-full max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
          🏥 Division-wise Major Hospitals
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {hospitals.map((h, i) => (
            <div
              key={i}
              className="bg-white/90 backdrop-blur-lg border border-blue-100 p-6 rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
            >
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                {h.name}
              </h3>
              <p className="text-gray-500 text-sm mb-3">{h.location}</p>
              <iframe
                src={h.mapUrl}
                width="100%"
                height="260"
                loading="lazy"
                allowFullScreen
                className="rounded-2xl"
              ></iframe>
            </div>
          ))}
        </div>
      </section>

    
    </div>
  );
};

export default App;
