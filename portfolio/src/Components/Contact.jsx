import React from "react";

function Contact() {
  return (
    <div>
      <section class="text-gray-600 body-font relative">
        <div class="absolute inset-0 bg-gray-300">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14549.252711903175!2d80.7623567!3d24.2657895!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39838b399a495d21%3A0x25c8d35d8dc2695a!2sVayu%20Software%20Solutions!5e0!3m2!1shi!2sin!4v1716621805485!5m2!1shi!2sin"
            width="100%"
            height="660"
            styles="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
          {/* <iframe width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" style="filter: grayscale(1) contrast(1.2) opacity(0.4);"></iframe> */}
        </div>
        <div class="container px-5 py-24 mx-auto flex">
          <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
              Feedback
            </h2>
            <p class="leading-relaxed mb-5 text-gray-600"></p>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                class="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                autofill-information="overall type: UNKNOWN_TYPE
html type: HTML_TYPE_UNSPECIFIED
server type: NO_SERVER_DATA
heuristic type: UNKNOWN_TYPE
label: Email
parseable name: email
section: -default
field signature: 1029417091
form signature: 4844368439406118457
form signature in host form: 15181333508799082667
alternative form signature: 1172905510318357637
field frame token: 10D839941C0B229D9841745714FE9B47
form renderer id: 0
field renderer id: 13
visible: false
focusable: false
field rank: 1
field rank in signature group: 0
field rank in host form: 1
field rank in host form signature group: 0"
                title="overall type: UNKNOWN_TYPE
html type: HTML_TYPE_UNSPECIFIED
server type: NO_SERVER_DATA
heuristic type: UNKNOWN_TYPE
label: Email
parseable name: email
section: -default
field signature: 1029417091
form signature: 4844368439406118457
form signature in host form: 15181333508799082667
alternative form signature: 1172905510318357637
field frame token: 10D839941C0B229D9841745714FE9B47
form renderer id: 0
field renderer id: 13
visible: false
focusable: false
field rank: 1
field rank in signature group: 0
field rank in host form: 1
field rank in host form signature group: 0"
                autofill-prediction="UNKNOWN_TYPE"
              />
            </div>
            <div class="relative mb-4">
              <label for="message" class="leading-7 text-sm text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                class="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                autofill-information="overall type: UNKNOWN_TYPE
html type: HTML_TYPE_UNSPECIFIED
server type: NO_SERVER_DATA
heuristic type: UNKNOWN_TYPE
label: Message
parseable name: message
section: -default
field signature: 4239419590
form signature: 4844368439406118457
form signature in host form: 15181333508799082667
alternative form signature: 1172905510318357637
field frame token: 10D839941C0B229D9841745714FE9B47
form renderer id: 0
field renderer id: 14
visible: false
focusable: false
field rank: 2
field rank in signature group: 0
field rank in host form: 2
field rank in host form signature group: 0"
                title="overall type: UNKNOWN_TYPE
html type: HTML_TYPE_UNSPECIFIED
server type: NO_SERVER_DATA
heuristic type: UNKNOWN_TYPE
label: Message
parseable name: message
section: -default
field signature: 4239419590
form signature: 4844368439406118457
form signature in host form: 15181333508799082667
alternative form signature: 1172905510318357637
field frame token: 10D839941C0B229D9841745714FE9B47
form renderer id: 0
field renderer id: 14
visible: false
focusable: false
field rank: 2
field rank in signature group: 0
field rank in host form: 2
field rank in host form signature group: 0"
                autofill-prediction="UNKNOWN_TYPE"
                data-gramm="false"
                wt-ignore-input="true"
              ></textarea>
            </div>
            <button class="text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
              Button
            </button>
            <p class="text-xs text-gray-500 mt-3">
              Chicharrones blog helvetica normcore iceland tousled brook viral
              artisan.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
