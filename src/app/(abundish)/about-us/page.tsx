import React from "react";
import AbundishPremiumCards from "@/components/AbundishPremiumCards";

const AboutUs = () => {
  return (
    <section className="w-full max-w-6xl mx-auto py-16">
      <div className="w-full p-6">
        <h1 className="text-2xl lg:text-3xl font-bold text-raw-primary">
          Foodstreet Business Model: Agents vs. Vendors
        </h1>
        <h3 className="text-lg lg:text-xl font-bold mt-6 mb-3">Introduction</h3>
        <p>
          Foodstreet is a business platform that allows individuals to earn
          through two main roles: Agents and Vendors. Each role offers unique
          benefits and multiple income streams, creating opportunities for
          financial growth.
        </p>
        <div className="my-6">
          <h2 className="text-lg lg:text-xl font-bold">Who is an Agent?</h2>
          <p>
            An Agent is a sales representative who earns by recruiting Vendors
            and selling Abundish Premium Cards. Agents do not own a shop but
            make money from the vendors they bring into the system.
          </p>
          <p>Agent Registration Fee: ₦10,000 Agent Benefits & Earnings</p>
          <ul className="my-4 space-y-2">
            <li>✅ Earn commissions when you recruit vendors</li>
            <li>✅ Sell Abundish Premium Cards and earn extra income</li>
            <li>✅ No need to own a shop—earn from vendors under you</li>
            <li>
              ✅ Can grow into a Super Vendor, gaining access to physical shops
              and distribution territories Agent Promotion & Bonus Structure
              Agents receive bonuses based on their recruitment efforts:
              <ul className="my-4 space-y-2">
                <li>1️ Level One - Recruit 4 vendors → Bonus: ₦10,000 </li>
                <li>
                  2️ Level Two - Each of your 4 vendors recruits 4 more (16
                  total) → Bonus: ₦50,000
                </li>
                <li>3️⃣ Level Three - Team of 32 vendors → Bonus: ₦800,000</li>
                <li>
                  4️⃣ Level Four - Team of 64 vendors → Bonus: ₦5,000,000 💰
                  Maximum bonus earning: ₦5M!
                </li>
              </ul>
            </li>
          </ul>
          <p>
            💡 You can register up to 5 agency accounts to increase your total
            earnings.
          </p>
        </div>

        <div>
          <h2 className="text-lg lg:text-xl font-bold">Who is a Vendor?</h2>
          <p className="text-sm lg:text-base">
            A Vendor is a shop owner on Foodstreet. Vendors register, get a
            branded online shop, and earn money by selling food and Abundish
            Premium Cards.{" "}
            <span className="text-base font-semibold">
              Vendor Registration Fee: ₦25,000 or ₦35,000 Vendor
            </span>{" "}
          </p>
          <h3 className="text-lg lg:text-xl font-bold">Benefits & Earnings</h3>
          <ul className="w-full my-6 space-y-3">
            <li>✅ Own a branded online shop and sell food items</li>
            <li>✅ Sell Abundish Premium Cards for additional income</li>
            <li>✅ Earn commissions from food distributors and canteens</li>
            <li>✅ Recruit vendors and earn from their sales</li>
            <li>
              ✅ Automatically qualify to become a Super Vendor and own a
              physical shop & distribution territory
            </li>
          </ul>
          <h3 className="text-lg lg:text-xl font-bold">Types of Vendors</h3>
          <ul className="my-4 space-y-3">
            <li>
              1️⃣ Regular Vendor (₦25,000) • Branded online shop • Earns from
              food sales & Abundish Premium Cards • Access to one agency account
              for extra income
            </li>
            <li>
              2️⃣ Mix Vendor (₦35,000) – Recommended for faster growth • All
              benefits of a Regular Vendor
            </li>
            <li>
              • Includes 3 agency accounts, meaning additional income from agent
              bonuses • Faster growth & higher earnings potential 💡 Mix Vendors
              are advised for quick growth & extra income.
            </li>
          </ul>
        </div>

        <div className="my-4">
          <h2 className="text-lg lg:text-xl font-bold">
            Who is a Super Vendor?
          </h2>
          <p className="text-sm lg:text-base">
            A Super Vendor is a top-level distributor who owns physical shops
            and territories.
          </p>
          <ul className="my-4 space-y-3">
            <li>✅ Vendors & customers buy directly from Super Vendors</li>
            <li>✅ Super Vendors act as distributors for Foodstreet </li>
            <li>
              ✅ You cannot buy this position—you must EARN it through platform
              growth Key Differences
            </li>
          </ul>
        </div>

        <div className="py-16 px-6">
          <h1 className="text-xl lg:text-2xl font-bold text-center text-raw-primary">
            Ready to Start?
          </h1>
          <ul className="my-3 space-y-4">
            <li>📞 Contact Your Sponsor or Foodstreet Support</li>
            <li>💳 Make Your Payment & Get Onboarded Today!</li>
            <li>
              🌍 Start Earning & Growing Your Business Immediately! Michael King
              Founder Wakocoding +2348063081972
            </li>
          </ul>
        </div>
      </div>
      <AbundishPremiumCards />
    </section>
  );
};

export default AboutUs;
