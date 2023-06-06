import React from "react";
import OldMatho from "../assets/img/png/OldMan.png";
import Text_arrow from "../assets/img/svg/Arrow_Meditlogi.svg";
function OurMethodology() {
  return (
    <>
      <section className="bg_black py-5 position-relative">
        <div className="Green_Layer_Commn Green_Layer_pos position-absolute"></div>
        <div className="container">
          <div className="py-lg-4">
            <div className="row justify-content-between ">
              <div className="col-xl-5 col-lg-6">
                <div className="Image_Old_Metho position-relative d-inline-block">
                  <div className="position-absolute z_index0 Green_box_behind_old"></div>
                  <img
                    className="position-relative z_index2"
                    src={OldMatho}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-5">
                {" "}
                <div className="d-flex flex-column justify-content-center h-100 pe-lg-5 pe-sm-4  mt-lg-0">
                  <h2 className="heading-common pb-xl-3 pb-2 mb-xxl-2 position-relative">
                    {" "}
                    <img
                      className="Text_arrow_Old_matho position-absolute d-none d-sm-block z_index0"
                      src={Text_arrow}
                      alt="Err"
                    />
                    <span className="position-relative z_index2">
                      {" "}
                      Our Methodology
                    </span>
                  </h2>
                  <p className="peragraph_common mb-0 mb-xl-3 ">
                    Quisque arcu erat aenean iaculis nisl molestie et tellus. In
                    purus aliquam mauris quis molestie ornare mauris egestas
                    nibh. Arcu sed neque est lacus vivamus mattis libero.
                  </p>
                  <p className="peragraph_common  pb-xl-3 pb-2 mb-xxl-2">
                    Quisque arcu erat aenean iaculis nisl molestie et tellus. In
                    purus aliquam mauris quis molestie ornare mauris egestas
                    nibh. Arcu sed neque est lacus vivamus mattis libero.
                  </p>
                  <span>
                    {" "}
                    <a href="#" className="common_btn d-inline-block">
                      Learn more
                    </a>
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
