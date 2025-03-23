import React, { useState, useEffect } from 'react';
import Flatpickr from 'react-flatpickr';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faPhone, faEnvelope, faCheckCircle, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import 'flatpickr/dist/themes/light.css';

function App() {
  const [language, setLanguage] = useState<'en' | 'ko'>('en');
  const [showHospitalModal, setShowHospitalModal] = useState(false);
  const [showResidenceDetails, setShowResidenceDetails] = useState(false);
  const [showTravelGuideDesc, setShowTravelGuideDesc] = useState(false);
  const [showHospitalFields, setShowHospitalFields] = useState(false);

  const translations = {
    en: {
      title: "Solving All Your Inconveniences in Korea!",
      subtitle: "Hospital Reservations, Transportation, and Travel Services in One Place!",
      bookNow: "Book Now",
      ourServices: "Our Services",
    },
    ko: {
      title: "한국 생활의 모든 불편함을 해결해 드립니다!",
      subtitle: "병원 예약, 픽업부터 여행까지 한번에!",
      bookNow: "예약하기",
      ourServices: "서비스 안내",
    }
  };

  const t = translations[language];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Language Toggle */}
      <div className="fixed top-5 right-8 flex gap-2 z-50">
        <button 
          className={`px-3 py-1 rounded-full ${language === 'en' ? 'bg-white text-blue-600' : 'bg-blue-600 text-white'}`}
          onClick={() => setLanguage('en')}
        >
          English
        </button>
        <button 
          className={`px-3 py-1 rounded-full ${language === 'ko' ? 'bg-white text-blue-600' : 'bg-blue-600 text-white'}`}
          onClick={() => setLanguage('ko')}
        >
          한국어
        </button>
      </div>

      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="text-4xl font-bold mb-4">CareMate Korea</div>
          <h1 className="text-3xl font-bold mb-4">{t.title}</h1>
          <h2 className="text-xl mb-8">{t.subtitle}</h2>
          <div className="space-x-4">
            <a href="#contact" className="inline-block bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition">
              {t.bookNow}
            </a>
            <a href="#services" className="inline-block border-2 border-white text-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition">
              {t.ourServices}
            </a>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          
          {/* Service Groups */}
          <div className="space-y-12">
            {/* Hospital Service */}
            <div className="service-group">
              <div className="flex items-center mb-6">
                <h3 className="text-2xl font-semibold text-blue-600 flex-1">
                  1️⃣ Hospital Reservation & Transportation Service
                </h3>
                <button 
                  onClick={() => setShowHospitalModal(true)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                >
                  <FontAwesomeIcon icon={faInfoCircle} />
                  <span>View Details</span>
                </button>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />
                  <span>Hospital appointment booking assistance</span>
                </li>
                <li className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />
                  <span>Round-trip pickup and drop-off to hospitals (private vehicle)</span>
                </li>
                <li className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />
                  <span>Insurance claim support after medical visits</span>
                </li>
              </ul>
            </div>

            {/* Bus & Train Service */}
            <div className="service-group">
              <h3 className="text-2xl font-semibold text-blue-600 mb-6">
                2️⃣ Bus & Train Reservation Service
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />
                  <span>Bus and train ticket booking for major cities</span>
                </li>
                <li className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />
                  <span>Ticket purchase and itinerary guidance</span>
                </li>
                <li className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />
                  <span>Station/terminal transportation assistance (pickup available)</span>
                </li>
              </ul>
            </div>

            {/* Accommodation Service */}
            <div className="service-group">
              <h3 className="text-2xl font-semibold text-blue-600 mb-6">
                3️⃣ Accommodation Booking Service
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />
                  <span>Hotel, guesthouse, and accommodation reservations</span>
                </li>
                <li className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />
                  <span>Check-in/check-out assistance</span>
                </li>
                <li className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />
                  <span>Information about nearby attractions and restaurants</span>
                </li>
              </ul>
            </div>

            {/* Travel Guide Service */}
            <div className="service-group">
              <h3 className="text-2xl font-semibold text-blue-600 mb-6">
                4️⃣ Customized Travel Guide Service
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />
                  <span>Personalized tours to attractions, markets, and restaurants</span>
                </li>
                <li className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />
                  <span>Daily life assistance service (hourly available)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4">Service Request & Inquiry</h3>
              <p>Contact us through the website or our social media channels</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4">Confirm Schedule & Details</h3>
              <p>We'll work with you to finalize your reservation details</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4">Service & Payment</h3>
              <p>Receive our services and complete payment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-16 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Contact Us</h2>
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name (English)
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nationality
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number (including country code)
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="+82 10-1234-5678"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Residence
                </label>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      id="residence-korea"
                      name="residence"
                      value="korea"
                      onChange={(e) => setShowResidenceDetails(!e.target.checked)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <label htmlFor="residence-korea">Currently residing in Korea</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      id="residence-overseas"
                      name="residence"
                      value="overseas"
                      onChange={(e) => setShowResidenceDetails(e.target.checked)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <label htmlFor="residence-overseas">Residing overseas, planning to visit Korea</label>
                  </div>
                </div>
              </div>

              {showResidenceDetails && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Expected Arrival Date in Korea
                    </label>
                    <Flatpickr
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      options={{
                        dateFormat: "Y-m-d",
                        minDate: "today",
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Expected Duration of Stay
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="e.g., 2 weeks, 1 month"
                    />
                  </div>
                </>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Services Required
                </label>
                <div className="space-y-3">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="service-hospital"
                        name="services"
                        value="hospital"
                        onChange={(e) => setShowHospitalFields(e.target.checked)}
                        className="w-4 h-4 text-blue-600"
                      />
                      <label htmlFor="service-hospital">Hospital Reservation & Transportation</label>
                    </div>
                    {showHospitalFields && (
                      <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                        <h4 className="text-lg font-semibold text-blue-600 mb-4">Hospital Service Details</h4>
                        
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Pick-up & Drop-off Location
                            </label>
                            <input
                              type="text"
                              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              placeholder="e.g., Airport, Hotel, Hospital"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Date & Time
                            </label>
                            <Flatpickr
                              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              options={{
                                enableTime: true,
                                dateFormat: "Y-m-d H:i",
                                minDate: "today"
                              }}
                              placeholder="Select date and time"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Do you need interpretation/translation support?
                            </label>
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <input
                                  type="radio"
                                  id="interpretation-none"
                                  name="interpretation"
                                  value="none"
                                  className="w-4 h-4 text-blue-600"
                                  defaultChecked
                                />
                                <label htmlFor="interpretation-none">None</label>
                              </div>
                              
                              <div className="flex items-center gap-2">
                                <input
                                  type="radio"
                                  id="interpretation-basic"
                                  name="interpretation"
                                  value="basic"
                                  className="w-4 h-4 text-blue-600"
                                />
                                <label htmlFor="interpretation-basic">Basic Interpretation</label>
                                <p className="text-sm text-gray-600 ml-6">
                                  Simple guidance, everyday conversation. General communication support.
                                </p>
                              </div>
                              
                              <div className="flex items-center gap-2">
                                <input
                                  type="radio"
                                  id="interpretation-professional"
                                  name="interpretation"
                                  value="professional"
                                  className="w-4 h-4 text-blue-600"
                                />
                                <label htmlFor="interpretation-professional">Professional/Medical Interpretation</label>
                                <p className="text-sm text-gray-600 ml-6">
                                  Medical terminology, detailed consultation for exams, diagnoses, surgery, etc.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Additional Requests
                            </label>
                            <textarea
                              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              rows={4}
                              placeholder="Department, preferred appointment time, insurance information, etc."
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="service-transport"
                        name="services"
                        value="transport"
                        className="w-4 h-4 text-blue-600"
                      />
                      <label htmlFor="service-transport">Bus & Train Reservation</label>
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="service-accommodation"
                        name="services"
                        value="accommodation"
                        className="w-4 h-4 text-blue-600"
                      />
                      <label htmlFor="service-accommodation">Accommodation Booking</label>
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="service-travel"
                        name="services"
                        value="travel"
                        onChange={(e) => setShowTravelGuideDesc(e.target.checked)}
                        className="w-4 h-4 text-blue-600"
                      />
                      <label htmlFor="service-travel">Travel Guide Service</label>
                    </div>
                    {showTravelGuideDesc && (
                      <div className="mt-2 ml-6 p-3 bg-blue-50 rounded border-l-4 border-blue-500 text-sm">
                        <p>
                          <strong>Travel Guide Service:</strong> Comprehensive assistance based on your
                          itinerary – we do not physically accompany you, but provide reservations,
                          guidance, and schedule coordination for your travel plans.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Information
                </label>
                <textarea
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  rows={4}
                  placeholder="Please provide any additional details or specific requirements"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-6">CareMate Korea</h3>
          <div className="flex justify-center gap-8 mb-8">
            <a href="#" className="hover:text-blue-400 transition">
              <FontAwesomeIcon icon={faComment} size="lg" />
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <FontAwesomeIcon icon={faWhatsapp} size="lg" />
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <FontAwesomeIcon icon={faFacebookF} size="lg" />
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
          </div>
          <div className="space-y-2 mb-6">
            <p className="flex items-center justify-center gap-2">
              <FontAwesomeIcon icon={faEnvelope} />
              <a href="mailto:info@carematekorea.com">info@carematekorea.com</a>
            </p>
            <p className="flex items-center justify-center gap-2">
              <FontAwesomeIcon icon={faPhone} />
              <a href="tel:+821012345678">+82 10-1234-5678</a>
            </p>
          </div>
          <p className="text-sm text-gray-400">Business Registration: 123-45-67890</p>
          <p className="text-sm text-gray-400">© 2025 CareMate Korea. All rights reserved.</p>
        </div>
      </footer>

      {/* Hospital Info Modal */}
      {showHospitalModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-blue-600">Korean Hospital System Guide</h2>
              <button
                onClick={() => setShowHospitalModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="space-y-6">
              {/* Section 1: Types of Korean Hospitals */}
              <div className="modal-section">
                <h3 className="text-xl font-semibold mb-4">1. Types of Korean Hospitals</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-blue-600">Large Hospitals (Tertiary and General Hospitals)</h4>
                    <p>University hospitals or very large-scale hospitals with multiple specialized departments. Appointments are strictly required in most cases due to their structured procedures.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600">Medium-sized Hospitals</h4>
                    <p>Relatively large hospitals with one or more specialized departments, but with slightly more simplified appointment procedures than large hospitals. Initial visits may still require appointments.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600">Private Clinics</h4>
                    <p>Smaller facilities focused on specific departments (internal medicine, surgery, dermatology, etc.). Most allow walk-ins, but some may operate appointment systems depending on their policy.</p>
                  </div>
                </div>
              </div>

              {/* Section 2: Appointment Requirements */}
              <div className="modal-section">
                <h3 className="text-xl font-semibold mb-4">2. Appointment Requirements</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-blue-600">Large/Tertiary Hospitals</h4>
                    <p>Appointments are almost mandatory for smooth treatment and minimizing wait times. Visiting without an appointment may result in limited access to medical services.</p>
                    <p>Booking periods vary by hospital. Appointments with famous specialists may be difficult to secure on short notice. Surgeries or detailed examinations may require booking 1-2 months in advance.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600">Medium-sized Hospitals</h4>
                    <p>Generally, 1-2 weeks advance booking is sufficient, but appointments may fill quickly for popular departments (e.g., dermatology, orthopedics) with renowned specialists.</p>
                  </div>
                </div>
              </div>

              {/* Section 3: Required Documents */}
              <div className="modal-section">
                <h3 className="text-xl font-semibold mb-4">3. Required Documents</h3>
                <ul className="space-y-2">
                  <li>• Passport or Alien Registration Card</li>
                  <li>• Insurance information (if applicable)</li>
                  <li>• Previous medical records (if available)</li>
                  <li>• List of current medications (if any)</li>
                </ul>
              </div>

              {/* Section 4: Insurance and Payment */}
              <div className="modal-section">
                <h3 className="text-xl font-semibold mb-4">4. Insurance and Payment</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-blue-600">National Health Insurance (NHI)</h4>
                    <p>Covered patients pay approximately 30-40% of the total medical cost. Foreign residents with NHI receive the same benefits as Korean citizens.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600">Private Insurance</h4>
                    <p>International insurance may require upfront payment and later reimbursement. We assist with obtaining proper documentation for claims.</p>
                  </div>
                </div>
              </div>

              {/* Section 5: Language Support */}
              <div className="modal-section">
                <h3 className="text-xl font-semibold mb-4">5. Language Support</h3>
                <div className="space-y-4">
                  <p>Many large hospitals have international clinics with English-speaking staff, but smaller facilities may have limited language support.</p>
                  <p>Our service provides interpretation options to ensure clear communication:</p>
                  <ul className="space-y-2">
                    <li>• Basic interpretation for general communication</li>
                    <li>• Professional medical interpretation for detailed consultations</li>
                  </ul>
                </div>
              </div>

              {/* Section 6: Transportation Service */}
              <div className="modal-section">
                <h3 className="text-xl font-semibold mb-4">6. Transportation Service</h3>
                <div className="space-y-4">
                  <p>Our door-to-door service includes:</p>
                  <ul className="space-y-2">
                    <li>• Pickup from your location</li>
                    <li>• Transportation to the hospital</li>
                    <li>• Waiting during your appointment</li>
                    <li>• Return trip to your location</li>
                  </ul>
                </div>
              </div>

              {/* Section 7: Emergency Information */}
              <div className="modal-section">
                <h3 className="text-xl font-semibold mb-4">7. Emergency Information</h3>
                <div className="space-y-4">
                  <p>For medical emergencies:</p>
                  <ul className="space-y-2">
                    <li>• Emergency number: 119</li>
                    <li>• 24/7 Emergency medical interpretation: 1339</li>
                    <li>• Major hospitals have 24-hour emergency rooms</li>
                  </ul>
                </div>
              </div>

              {/* Section 8: Additional Services */}
              <div className="modal-section">
                <h3 className="text-xl font-semibold mb-4">8. Additional Services</h3>
                <div className="space-y-4">
                  <ul className="space-y-2">
                    <li>• Assistance with medical record translation</li>
                    <li>• Insurance claim documentation support</li>
                    <li>• Follow-up appointment scheduling</li>
                    <li>• Pharmacy assistance and medication guidance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;