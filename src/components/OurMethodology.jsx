import React from "react";
import OldMatho from "../assets/img/png/OldMan.png";
function OurMethodology() {
  return (
    <>
      <section className="bg_black py-5">
        <div className=" container">
          <div className="py-4">
            <div className="row justify-content-between ">
              <div className="col-5">
                <div className="Image_Old_Metho">
                  <img src={OldMatho} alt="" />
                </div>
              </div>
              <div className="col-6">
                {" "}
                <div className=" d-flex flex-column justify-content-center h-100">
                  <h2 className=" heading-common pb-3 mb-2">Our Methodology</h2>
                  <p className=" peragraph_common">
                    Quisque arcu erat aenean iaculis nisl molestie et tellus. In
                    purus aliquam mauris quis molestie ornare mauris egestas
                    nibh. Arcu sed neque est lacus vivamus mattis libero.
                  </p>
                  <p className=" peragraph_common pb-xl-4 pb-3 mb-2">
                    Quisque arcu erat aenean iaculis nisl molestie et tellus. In
                    purus aliquam mauris quis molestie ornare mauris egestas
                    nibh. Arcu sed neque est lacus vivamus mattis libero.
                  </p>
                  <span>
                    {" "}
                    <a className=" common_btn d-inline-block">Learn more</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurMethodology;
