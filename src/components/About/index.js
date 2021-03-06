import React from "react";

function About() {
  return (
    <section className="mx-12 about">
      <div className="d-flex border-bottom py-3">
        <div id="image-crop">
          <img
            className="align-self-start pr-5"
            src={require("../../assets/portfolio.jpg").default}
            alt="placeholder"
          />
        </div>
        <h1 className="align-self-end">About Me</h1>
      </div>
      <p className="pt-3">
        I'm baby pop-up bitters cliche mixtape. Pitchfork keytar pug, plaid
        kitsch squid retro cronut twee poutine affogato lyft. Vice brooklyn
        live-edge snackwave polaroid. Godard edison bulb air plant art party
        keffiyeh salvia subway tile schlitz knausgaard shabby chic tbh kitsch
        organic pinterest mixtape. Whatever kombucha vice celiac. Pok pok
        flannel kale chips aesthetic coloring book swag meggings listicle
        organic. Distillery +1 cardigan cray, meditation bushwick williamsburg
        vinyl cold-pressed franzen street art skateboard. Succulents taxidermy
        authentic hell of meh polaroid 3 wolf moon single-origin coffee banjo.
        Craft beer man braid pug affogato dreamcatcher. Brunch offal 3 wolf moon
        migas fam. Semiotics edison bulb jianbing lo-fi kombucha affogato vegan
        meh typewriter whatever meditation tofu tacos vape man bun.
      </p>
    </section>
  );
}

export default About;
