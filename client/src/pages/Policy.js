import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos sapiente optio facere debitis blanditiis corporis, vitae asperiores molestiae magni non est modi beatae velit sint aliquam recusandae omnis exercitationem maiores temporibus cum eius ipsam sequi reprehenderit! deserunt saepe a eligendi natus distinctio, nisi odit possimus dolore fugiat excepturi omnis? Eligendi molestias itaque aperiam nesciunt delectus repellat mollitia consectetur vitae? Illum, voluptatibus dolorem ad amet explicabo.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
