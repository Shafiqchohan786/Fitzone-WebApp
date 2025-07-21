import React from "react";

import basic from "../assets/plan1.jpg";
import standard from "../assets/plan2.jpg";
import premium from "../assets/plan3.jpg";

const plans = [
  {
    title: "Basic Plan",
    price: "PKR 5,000/month",
    desc: "Perfect for beginners. Get full access to gym equipment, locker room, and general fitness area.",
    img: basic,
  },
  {
    title: "Standard Plan",
    price: "PKR 9,000/month",
    desc: "Includes all Basic benefits plus access to group workout classes and sauna facility.",
    img: standard,
  },
  {
    title: "Premium Plan",
    price: "PKR 14,000/month",
    desc: "All Standard benefits plus a dedicated personal trainer, diet plan, and VIP lounge access.",
    img: premium,
  },
];

const Plans = () => {
  return (
    <section id="plans" className="plans-section">
      <h2 className="plans-heading">Plans & Packages</h2>
      <div className="plans-row">
        {plans.map((plan, idx) => (
          <div className="plan-card" key={idx}>
            <img src={plan.img} alt={plan.title} />
            <div className="plan-content">
              <h3>{plan.title}</h3>
              <p>{plan.desc}</p>
              <span className="plan-price">{plan.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Plans;
