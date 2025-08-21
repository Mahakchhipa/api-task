import React, { useState } from "react";

const About = () => {
  const [country, setCountry] = useState("");
  const [city, setCity] = ("");
  const [state, setState] = useState("");
 
  const data = {
    india: {
      states: {
        Maharashtra: ["Mumbai", "Pune", "Nagpur"],
        Karnataka: ["Bengaluru", "Mysuru", "Mangalore"],
        TamilNadu: ["Chennai", "Coimbatore", "Madurai"],
        Gujarat: ["Ahmedabad", "Surat", "Vadodara"],
        Rajasthan: ["Jaipur", "Udaipur", "Jodhpur"],
        WestBengal: ["Kolkata", "Siliguri", "Durgapur"],
        Punjab: ["Chandigarh", "Amritsar", "Ludhiana"],
        Haryana: ["Gurugram", "Faridabad", "Panipat"],
        Telangana: ["Hyderabad", "Warangal", "Nizamabad"],
        UttarPradesh: ["Lucknow", "Kanpur", "Agra"],
        Bihar: ["Patna", "Gaya", "Bhagalpur"],
        Odisha: ["Bhubaneswar", "Cuttack", "Rourkela"],
      },
    },
    usa: {
      states: {
        California: ["Los Angeles", "San Francisco", "San Diego"],
        NewYork: ["New York City", "Buffalo", "Rochester"],
      },
    },
    germany: {
      states: {
        Bavaria: ["Munich", "Nuremberg", "Augsburg"],
        Berlin: ["Berlin", "Potsdam", "Cottbus"],
      },
    },
  };

  let states = []
  const AllCountry = Object.keys(data);
  console.log("country", AllCountry);

if(states){
  states = Object.keys(data[country].states)
}

  const handleManage = (e) => {
    setCountry(e.target.value);
     setState("")
    setCity("")
  };

  console.log(country, " chk kru country");
  return (
    <>
    <h1> ABout </h1>
      <div>
        <h1>drop down</h1>
        <label>
          Country:
          <select value={country} onChange={handleManage}>
            <option value="">select country</option>
            {AllCountry.map((cy) => (
              <option key={cy} value={cy}>
                {cy}
              </option>
            ))}
          </select>
        </label>
      </div>
    </>
  );
};

export default About;
