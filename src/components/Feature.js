import React from "react";
import "./Feature.css";
import FeatureBox from "./FeatureBox";
export default function Feature(props) {
  return (
    <>
      <div className="feature">
        <div className="need">
          <h1 style={{ color: "#42A387" }}>Features you need</h1>
          <p>
            No depending be convinced in unfeeling he. <br />
            Excellence she unaffected and too sentiments her.
            <br />
            Rooms he doors there ye aware in by shall
          </p>
        </div>
        <div className="features-details">
          <FeatureBox
            heading="Interaction Design"
            description="One day, after a troubling
                        visit from the giant Catherine
                        Clifford, Chloe leaves her"
          />
          <FeatureBox
            heading="Easy Customisation"
            description="Far far away, behind the word
                        mountains, far from the
                        countries Vokalia and
                        Consonantia"
          />
          <FeatureBox
            heading="Clear Structure"
            description="One day, after a troubling
                        visit from the giant Catherine
                        Clifford, Chloe leaves her"
          />
          <FeatureBox
            heading="Well Documented"
            description="Far far away, behind the word
                            mountains, far from the
                            countries Vokalia and
                            Consonantia"
          />
          <FeatureBox
            heading="24/7 Support"
            description="One day, after a troubling
                        visit from the giant Catherine
                        Clifford, Chloe leaves her"
          />
          <FeatureBox
            heading="Free Update"
            description="Far far away, behind the word
                        mountains, far from the
                        countries Vokalia and
                        Consonantia"
          />
        </div>
      </div>
    </>
  );
}
