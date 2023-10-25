<template>
    <!-- personal info form cont... -->

    <!-- personal information div -->
    <div class="flex flex-col w-full mt-8">
                    <h3 class="text-[20px] text-[#293793]">Personal Information</h3>
                    <h4 class="text-[14px] text-[#757784]">Enter Your personal details ! </h4>
                </div>

                <hr class="w-full mt-2">

    <div class="lg:flex-row md:flex-row sm:flex min-[320px]:flex-col justify-between w-full mt-10">

        
                    <!-- first name -->
                    <div class="flex flex-col">
                        <label for="" class="text-[14px]">First Name :</label>
                        <input type="text" class="text-[#757784] bg-transparent p-1 border-b-2 border-[#29379384] outline-none">
                    </div>

                    <!-- last name -->
                    <div class="flex flex-col min-[302px]:mt-4 lg:mt-0 md:mt-0 sm:mt-0">
                        <label for="" class="text-[14px]">Last Name :</label>
                        <input type="text" class="text-[#757784] bg-transparent p-1 border-b-2 border-[#29379384] outline-none">
                    </div>
                </div>


                <div class="justify-between w-full mt-4 lg:flex-row md:flex-row sm:flex min-[320px]:flex-col">

                    <!-- Select country name -->
                    <div  class="flex flex-col">
                        <label for="" class="text-[14px]">Select Country :</label>
                        <!-- <input type="text" class=" bg-transparent p-1 border-b-2 border-[#29379384] outline-none"> -->
                        <select name="" id="" class="text-[#757784] bg-transparent p-1 border-b-2 border-[#29379384] outline-none lg:w-[235px] md:w-[230px] min-[320px]:w-full w-[340px]">
                            <option v-for="country in countryList" :value="country" class="w-[200px] bg-transparent">{{country}}</option>
                        </select>
                    </div>

                    <!-- last name -->
                    <div class="flex flex-col min-[302px]:mt-4 lg:mt-0 md:mt-0 sm:mt-0">
                        <label for="" class="text-[14px]">Country Code :</label>
                        <input type="text" class="text-[#757784] bg-transparent p-1 border-b-2 border-[#29379384] outline-none">
                    </div>

                </div>


                <div class="flex justify-between w-full mt-4">

                    <!-- first name -->
                    <div class="flex flex-col">
                        <label for="" class="text-[14px]">Mobile Number :</label>
                        <input type="number" class="text-[#757784] bg-transparent p-1 border-b-2 border-[#29379384] outline-none">
                    </div>

                </div>

                <div class="flex flex-col justify-between w-full mt-4">

                    <!-- tos name -->
                    <div class="flex items-center gap-2">
                        <input type="checkbox" class="scale-[1.3]">
                        <label for="" class="text-[12px]">I agree to the terms of Bethel Platform cloud terms of service , General terms of service and Privacy Policy </label>
                    </div>

                    <router-link to="/mobile-verify">
                    <div class="flex justify-between w-full mt-7">
                        <button class="p-2 bg-[#293793] rounded-lg px-10  text-white border-[1px] hover:bg-white hover:text-[#293793] hover:border-[1px] hover:border-[#293793] transition-all ease-in-out">Create Account</button>
                    </div>
                    </router-link>
                </div>
</template>

<script>
export default{
    name : 'Signup-second',
    data(){
        return {
            countryList : [
	"Afghanistan",
	"Albania",
	"Algeria",
	"American Samoa",
	"Andorra",
	"Angola",
	"Anguilla",
	"Antarctica",
	"Antigua and Barbuda",
	"Argentina",
	"Armenia",
	"Aruba",
	"Australia",
	"Austria",
	"Azerbaijan",
	"Bahamas (the)",
	"Bahrain",
	"Bangladesh",
	"Barbados",
	"Belarus",
	"Belgium",
	"Belize",
	"Benin",
	"Bermuda",
	"Bhutan",
	"Bolivia (Plurinational State of)",
	"Bonaire, Sint Eustatius and Saba",
	"Bosnia and Herzegovina",
	"Botswana",
	"Bouvet Island",
	"Brazil",
	"British Indian Ocean Territory (the)",
	"Brunei Darussalam",
	"Bulgaria",
	"Burkina Faso",
	"Burundi",
	"Cabo Verde",
	"Cambodia",
	"Cameroon",
	"Canada",
	"Cayman Islands (the)",
	"Central African Republic (the)",
	"Chad",
	"Chile",
	"China",
	"Christmas Island",
	"Cocos (Keeling) Islands (the)",
	"Colombia",
	"Comoros (the)",
	"Congo (the Democratic Republic of the)",
	"Congo (the)",
	"Cook Islands (the)",
	"Costa Rica",
	"Croatia",
	"Cuba",
	"Curaçao",
	"Cyprus",
	"Czechia",
	"Côte d'Ivoire",
	"Denmark",
	"Djibouti",
	"Dominica",
	"Dominican Republic (the)",
	"Ecuador",
	"Egypt",
	"El Salvador",
	"Equatorial Guinea",
	"Eritrea",
	"Estonia",
	"Eswatini",
	"Ethiopia",
	"Falkland Islands (the) [Malvinas]",
	"Faroe Islands (the)",
	"Fiji",
	"Finland",
	"France",
	"French Guiana",
	"French Polynesia",
	"French Southern Territories (the)",
	"Gabon",
	"Gambia (the)",
	"Georgia",
	"Germany",
	"Ghana",
	"Gibraltar",
	"Greece",
	"Greenland",
	"Grenada",
	"Guadeloupe",
	"Guam",
	"Guatemala",
	"Guernsey",
	"Guinea",
	"Guinea-Bissau",
	"Guyana",
	"Haiti",
	"Heard Island and McDonald Islands",
	"Holy See (the)",
	"Honduras",
	"Hong Kong",
	"Hungary",
	"Iceland",
	"India",
	"Indonesia",
	"Iran (Islamic Republic of)",
	"Iraq",
	"Ireland",
	"Isle of Man",
	"Israel",
	"Italy",
	"Jamaica",
	"Japan",
	"Jersey",
	"Jordan",
	"Kazakhstan",
	"Kenya",
	"Kiribati",
	"Korea (the Democratic People's Republic of)",
	"Korea (the Republic of)",
	"Kuwait",
	"Kyrgyzstan",
	"Lao People's Democratic Republic (the)",
	"Latvia",
	"Lebanon",
	"Lesotho",
	"Liberia",
	"Libya",
	"Liechtenstein",
	"Lithuania",
	"Luxembourg",
	"Macao",
	"Madagascar",
	"Malawi",
	"Malaysia",
	"Maldives",
	"Mali",
	"Malta",
	"Marshall Islands (the)",
	"Martinique",
	"Mauritania",
	"Mauritius",
	"Mayotte",
	"Mexico",
	"Micronesia (Federated States of)",
	"Moldova (the Republic of)",
	"Monaco",
	"Mongolia",
	"Montenegro",
	"Montserrat",
	"Morocco",
	"Mozambique",
	"Myanmar",
	"Namibia",
	"Nauru",
	"Nepal",
	"Netherlands (the)",
	"New Caledonia",
	"New Zealand",
	"Nicaragua",
	"Niger (the)",
	"Nigeria",
	"Niue",
	"Norfolk Island",
	"Northern Mariana Islands (the)",
	"Norway",
	"Oman",
	"Pakistan",
	"Palau",
	"Palestine, State of",
	"Panama",
	"Papua New Guinea",
	"Paraguay",
	"Peru",
	"Philippines (the)",
	"Pitcairn",
	"Poland",
	"Portugal",
	"Puerto Rico",
	"Qatar",
	"Republic of North Macedonia",
	"Romania",
	"Russian Federation (the)",
	"Rwanda",
	"Réunion",
	"Saint Barthélemy",
	"Saint Helena, Ascension and Tristan da Cunha",
	"Saint Kitts and Nevis",
	"Saint Lucia",
	"Saint Martin (French part)",
	"Saint Pierre and Miquelon",
	"Saint Vincent and the Grenadines",
	"Samoa",
	"San Marino",
	"Sao Tome and Principe",
	"Saudi Arabia",
	"Senegal",
	"Serbia",
	"Seychelles",
	"Sierra Leone",
	"Singapore",
	"Sint Maarten (Dutch part)",
	"Slovakia",
	"Slovenia",
	"Solomon Islands",
	"Somalia",
	"South Africa",
	"South Georgia and the South Sandwich Islands",
	"South Sudan",
	"Spain",
	"Sri Lanka",
	"Sudan (the)",
	"Suriname",
	"Svalbard and Jan Mayen",
	"Sweden",
	"Switzerland",
	"Syrian Arab Republic",
	"Taiwan",
	"Tajikistan",
	"Tanzania, United Republic of",
	"Thailand",
	"Timor-Leste",
	"Togo",
	"Tokelau",
	"Tonga",
	"Trinidad and Tobago",
	"Tunisia",
	"Turkey",
	"Turkmenistan",
	"Turks and Caicos Islands (the)",
	"Tuvalu",
	"Uganda",
	"Ukraine",
	"United Arab Emirates (the)",
	"United Kingdom of Great Britain and Northern Ireland (the)",
	"United States Minor Outlying Islands (the)",
	"United States of America (the)",
	"Uruguay",
	"Uzbekistan",
	"Vanuatu",
	"Venezuela (Bolivarian Republic of)",
	"Viet Nam",
	"Virgin Islands (British)",
	"Virgin Islands (U.S.)",
	"Wallis and Futuna",
	"Western Sahara",
	"Yemen",
	"Zambia",
	"Zimbabwe",
	"Åland Islands"
            ]
        }
    }
}
</script>
