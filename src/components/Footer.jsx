import React from 'react';
import { FaFacebook } from "react-icons/fa";
import CallIcon from '@mui/icons-material/Call';
import { IoEarth } from "react-icons/io5";
import '../styles/Footer.css';

const elements = [
  "CHEMICALS",
  "PROCESS POWER",
  "WATER & WASTE WATER",
  "OILS & GAS",
  "PHARMA",
  "SUGARS & DISTILLERIES",
  "PAPER & PULP",
  "MARINE & DEFENCE",
  "METAL & MINING",
  "FOOD & BEVERAGE",
  "PETROCHEMICAL & REFINERIES",
  "SOLAR",
  "BUILDING HVAC",
  "FIRE FIGHTING",
  "AGRICULTURE & RESIDENTIAL"
]


const items = [
  {
    text: "www.facebook.com/cripumps",
    icon:<FaFacebook/>
  },
  {
    text: "www.crigroups.com",
    icon:<IoEarth/>
  }
];

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="divider"></div>
      <div className="content">
        <h6 className="footerHeading">C.R.L. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h6>
        <div className="contentItems">
            {elements.map((items)=> (
              <span key={items} className="subtext">
                {items}
              </span>
            ))}
        </div>
      </div>
      <div className="footer-items">

          <span className="item">
          < CallIcon className="telephone"/>
          Toll Free <strong>1800 2001234</strong>
          </span>
        {items.map((item, index) => (
          <span key={index} className="item">{item.icon} {item.text}</span>
        ))}
      </div>
    </div>
  );
};

export default Footer;
