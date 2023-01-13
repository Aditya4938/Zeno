import React from "react";
import "./Client.css";
import ClientIntro from "./ClientIntro";
export default function Client() {
  return (
    <>
      <div className="client-m">
        <div className="client-header">
          <h1 style={{color:"#23C497"}}>Our Clients Know Best</h1>
          <p>
            Far far away, behind the word mountains, far from <br /> the
            countries Vokalia and Consonantia
          </p>
        </div>
        <div className="client-i">
          <ClientIntro
            name="Sarah Smith"
            position="Lead Developer, flowbase"
            clientDescription="Separated they live in Bookmarks grove
            right at the coast of the Semantics, a
            large language ocean. A small river
            named Duden flows by their place and
            supplies it with the necessary regelialia."
          />
          <ClientIntro
            name="Craig Sams"
            position="Lead Developer, flowbase"
            clientDescription="Separated they live in Bookmarks grove
            right at the coast of the Semantics, a
            large language ocean. A small river
            named Duden flows by their place and
            supplies it with the necessary regelialia."
          />
          <ClientIntro
            name="Simon Lee"
            position="Lead Developer, flowbase"
            clientDescription="Separated they live in Bookmarks grove
            right at the coast of the Semantics, a
            large language ocean. A small river
            named Duden flows by their place and
            supplies it with the necessary regelialia."
          />
        </div>
      </div>
    </>
  );
}
