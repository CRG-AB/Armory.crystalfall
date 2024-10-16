import crglogo from "../img/crg/crg-logo.webp";
import eyeGuard from "../img/images/naramunz-eye-guard.webp";
import closeModal from "../img/buttons/closeModal.webp";

import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const css =
  ".elementor-widget-social-icons.elementor-grid-0 .elementor-widget-container,.elementor-widget-social-icons.elementor-grid-mobile-0 .elementor-widget-container,.elementor-widget-social-icons.elementor-grid-tablet-0 .elementor-widget-container{line-height:1;font-size:0}.elementor-widget-social-icons:not(.elementor-grid-0):not(.elementor-grid-tablet-0):not(.elementor-grid-mobile-0) .elementor-grid{display:inline-grid}.elementor-widget-social-icons .elementor-grid{grid-column-gap:var(--grid-column-gap,5px);grid-row-gap:var(--grid-row-gap,5px);grid-template-columns:var(--grid-template-columns);justify-content:var(--justify-content,center);justify-items:var(--justify-content,center)}.elementor-icon.elementor-social-icon{font-size:var(--icon-size,25px);line-height:var(--icon-size,25px);width:calc(var(--icon-size, 25px) + 2 * var(--icon-padding, .5em));height:calc(var(--icon-size, 25px) + 2 * var(--icon-padding, .5em))}.elementor-social-icon{--e-social-icon-icon-color:#fff;display:inline-flex;background-color:#69727d;align-items:center;justify-content:center;text-align:center;cursor:pointer}.elementor-social-icon i{color:var(--e-social-icon-icon-color)}.elementor-social-icon svg{fill:var(--e-social-icon-icon-color)}.elementor-social-icon:last-child{margin:0}.elementor-social-icon:hover{opacity:.9;color:#fff}.elementor-social-icon-android{background-color:#a4c639}.elementor-social-icon-apple{background-color:#999}.elementor-social-icon-behance{background-color:#1769ff}.elementor-social-icon-bitbucket{background-color:#205081}.elementor-social-icon-codepen{background-color:#000}.elementor-social-icon-delicious{background-color:#39f}.elementor-social-icon-deviantart{background-color:#05cc47}.elementor-social-icon-digg{background-color:#005be2}.elementor-social-icon-dribbble{background-color:#ea4c89}.elementor-social-icon-elementor{background-color:#d30c5c}.elementor-social-icon-envelope{background-color:#ea4335}.elementor-social-icon-facebook,.elementor-social-icon-facebook-f{background-color:#3b5998}.elementor-social-icon-flickr{background-color:#0063dc}.elementor-social-icon-foursquare{background-color:#2d5be3}.elementor-social-icon-free-code-camp,.elementor-social-icon-freecodecamp{background-color:#006400}.elementor-social-icon-github{background-color:#333}.elementor-social-icon-gitlab{background-color:#e24329}.elementor-social-icon-globe{background-color:#69727d}.elementor-social-icon-google-plus,.elementor-social-icon-google-plus-g{background-color:#dd4b39}.elementor-social-icon-houzz{background-color:#7ac142}.elementor-social-icon-instagram{background-color:#262626}.elementor-social-icon-jsfiddle{background-color:#487aa2}.elementor-social-icon-link{background-color:#818a91}.elementor-social-icon-linkedin,.elementor-social-icon-linkedin-in{background-color:#0077b5}.elementor-social-icon-medium{background-color:#00ab6b}.elementor-social-icon-meetup{background-color:#ec1c40}.elementor-social-icon-mixcloud{background-color:#273a4b}.elementor-social-icon-odnoklassniki{background-color:#f4731c}.elementor-social-icon-pinterest{background-color:#bd081c}.elementor-social-icon-product-hunt{background-color:#da552f}.elementor-social-icon-reddit{background-color:#ff4500}.elementor-social-icon-rss{background-color:#f26522}.elementor-social-icon-shopping-cart{background-color:#4caf50}.elementor-social-icon-skype{background-color:#00aff0}.elementor-social-icon-slideshare{background-color:#0077b5}.elementor-social-icon-snapchat{background-color:#fffc00}.elementor-social-icon-soundcloud{background-color:#f80}.elementor-social-icon-spotify{background-color:#2ebd59}.elementor-social-icon-stack-overflow{background-color:#fe7a15}.elementor-social-icon-steam{background-color:#00adee}.elementor-social-icon-stumbleupon{background-color:#eb4924}.elementor-social-icon-telegram{background-color:#2ca5e0}.elementor-social-icon-threads{background-color:#000}.elementor-social-icon-thumb-tack{background-color:#1aa1d8}.elementor-social-icon-tripadvisor{background-color:#589442}.elementor-social-icon-tumblr{background-color:#35465c}.elementor-social-icon-twitch{background-color:#6441a5}.elementor-social-icon-twitter{background-color:#1da1f2}.elementor-social-icon-viber{background-color:#665cac}.elementor-social-icon-vimeo{background-color:#1ab7ea}.elementor-social-icon-vk{background-color:#45668e}.elementor-social-icon-weibo{background-color:#dd2430}.elementor-social-icon-weixin{background-color:#31a918}.elementor-social-icon-whatsapp{background-color:#25d366}.elementor-social-icon-wordpress{background-color:#21759b}.elementor-social-icon-x-twitter{background-color:#000}.elementor-social-icon-xing{background-color:#026466}.elementor-social-icon-yelp{background-color:#af0606}.elementor-social-icon-youtube{background-color:#cd201f}.elementor-social-icon-500px{background-color:#0099e5}.elementor-shape-rounded .elementor-icon.elementor-social-icon{border-radius:10%}.elementor-shape-circle .elementor-icon.elementor-social-icon{border-radius:50%}";

export const FooterV2 = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <footer
      data-elementor-type="footer"
      data-elementor-id="22"
      className="elementor elementor-22 elementor-location-footer"
      data-elementor-post-type="elementor_library"
    >
      <div className="mobile fixed -left-6 bottom-6 z-50">
        <button
          className="crg-button z-20 -left-4 scale-50"
          onClick={() => document.getElementById("my_modal_5").showModal()}
        >
          Menu
        </button>
        <dialog
          id="my_modal_5"
          className="modal modal-bottom sm:modal-middle flex items-center justify-center"
        >
          <div className="modal-box bg-[url('/src/img/ui/modal/modal6.webp')] bg-contain bg-no-repeat bg-transparent h-[23.5rem] w-[18.5rem] !rounded-none">
            <div
              className="absolute bg-contain right-1 top-1 h-6 w-6 z-50 cursor-pointer"
              style={{ backgroundImage: `url(${closeModal})` }}
              onClick={() => document.getElementById("my_modal_5").close()}
            ></div>
            <div className="overflow-y-scroll h-[16.8rem] flex flex-col space-between items-center justify-center gap-2">
              <NavLink
                className="text-left px-5 whitespace-nowrap text-lg text-b7a99c mr-2 font-semibold transition-all duration-500 ease-in-out hover:text-e7e8e8"
                to={"/"}
                onClick={() => document.getElementById("my_modal_5").close()}
              >
                Home
              </NavLink>
              <NavLink
                className="text-left px-5 whitespace-nowrap text-lg text-b7a99c mr-2 font-semibold transition-all duration-500 ease-in-out hover:text-e7e8e8"
                to={"/browse"}
                onClick={() => document.getElementById("my_modal_5").close()}
              >
                Browse
              </NavLink>
              <NavLink
                className="text-left px-5 whitespace-nowrap text-lg text-b7a99c mr-2 font-semibold transition-all duration-500 ease-in-out hover:text-e7e8e8"
                to={"/profile"}
                onClick={() => document.getElementById("my_modal_5").close()}
              >
                Profile
              </NavLink>
              <NavLink
                className="text-left px-5 whitespace-nowrap text-lg text-b7a99c mr-2 font-semibold transition-all duration-500 ease-in-out hover:text-e7e8e8"
                to={"/about"}
                onClick={() => document.getElementById("my_modal_5").close()}
              >
                About
              </NavLink>
            </div>
          </div>
        </dialog>
      </div>
      <div
        className="elementor-element elementor-element-4d48bcc e-flex e-con-boxed e-con e-parent"
        data-id="4d48bcc"
        data-element_type="container"
      >
        <div className="e-con-inner">
          <div
            className="elementor-element elementor-element-d0c1a00 e-flex e-con-boxed e-con e-child"
            data-id="d0c1a00"
            data-element_type="container"
          >
            <div className="e-con-inner">
              <div
                className="elementor-element elementor-element-c81413c e-grid e-con-boxed e-con e-child"
                data-id="c81413c"
                data-element_type="container"
              >
                <div className="e-con-inner">
                  <div
                    className="elementor-element elementor-element-a9d3d7e e-grid e-con-boxed e-con e-child"
                    data-id="a9d3d7e"
                    data-element_type="container"
                  >
                    <div className="e-con-inner">
                      <div
                        className="elementor-element elementor-element-cda8e21 elementor-widget elementor-widget-heading"
                        data-id="cda8e21"
                        data-element_type="widget"
                        data-widget_type="heading.default"
                      >
                        <div className="elementor-widget-container">
                          <h2 className="elementor-heading-title elementor-size-default">
                            Join our community today!
                          </h2>{" "}
                        </div>
                      </div>
                      <div
                        className="elementor-element elementor-element-7d91798 elementor-shape-rounded elementor-grid-0 e-grid-align-center elementor-widget elementor-widget-social-icons"
                        data-id="7d91798"
                        data-element_type="widget"
                        data-widget_type="social-icons.default"
                      >
                        <div className="elementor-widget-container">
                          <style dangerouslySetInnerHTML={{ __html: css }} />{" "}
                          <div className="elementor-social-icons-wrapper elementor-grid">
                            <span className="elementor-grid-item">
                              <a
                                className="elementor-icon elementor-social-icon elementor-social-icon-facebook elementor-repeater-item-f0fde16"
                                href="https://www.facebook.com/Naramunz/"
                                target="_blank"
                              >
                                <span className="elementor-screen-only">
                                  Facebook
                                </span>
                                <svg
                                  className="e-font-icon-svg e-fab-facebook"
                                  viewBox="0 0 512 512"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                                </svg>{" "}
                              </a>
                            </span>
                            <span className="elementor-grid-item">
                              <a
                                className="elementor-icon elementor-social-icon elementor-social-icon- elementor-repeater-item-a21faa5"
                                href="https://twitter.com/naramunz"
                                target="_blank"
                              >
                                <span className="elementor-screen-only"></span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="bi bi-twitter-x"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"></path>
                                </svg>{" "}
                              </a>
                            </span>
                            <span className="elementor-grid-item">
                              <a
                                className="elementor-icon elementor-social-icon elementor-social-icon-youtube elementor-repeater-item-9f33ef9"
                                href="https://www.youtube.com/@crystalsofnaramunz"
                                target="_blank"
                              >
                                <span className="elementor-screen-only">
                                  Youtube
                                </span>
                                <svg
                                  className="e-font-icon-svg e-fab-youtube"
                                  viewBox="0 0 576 512"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                                </svg>{" "}
                              </a>
                            </span>
                            <span className="elementor-grid-item">
                              <a
                                className="elementor-icon elementor-social-icon elementor-social-icon- elementor-repeater-item-8bd0014"
                                href="https://discord.com/invite/ntPmauYuKV"
                                target="_blank"
                              >
                                <span className="elementor-screen-only"></span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="#000000"
                                  width="800px"
                                  height="800px"
                                  viewBox="0 0 448 512"
                                >
                                  <path d="M297.216 243.2c0 15.616-11.52 28.416-26.112 28.416-14.336 0-26.112-12.8-26.112-28.416s11.52-28.416 26.112-28.416c14.592 0 26.112 12.8 26.112 28.416zm-119.552-28.416c-14.592 0-26.112 12.8-26.112 28.416s11.776 28.416 26.112 28.416c14.592 0 26.112-12.8 26.112-28.416.256-15.616-11.52-28.416-26.112-28.416zM448 52.736V512c-64.494-56.994-43.868-38.128-118.784-107.776l13.568 47.36H52.48C23.552 451.584 0 428.032 0 398.848V52.736C0 23.552 23.552 0 52.48 0h343.04C424.448 0 448 23.552 448 52.736zm-72.96 242.688c0-82.432-36.864-149.248-36.864-149.248-36.864-27.648-71.936-26.88-71.936-26.88l-3.584 4.096c43.52 13.312 63.744 32.512 63.744 32.512-60.811-33.329-132.244-33.335-191.232-7.424-9.472 4.352-15.104 7.424-15.104 7.424s21.248-20.224 67.328-33.536l-2.56-3.072s-35.072-.768-71.936 26.88c0 0-36.864 66.816-36.864 149.248 0 0 21.504 37.12 78.08 38.912 0 0 9.472-11.52 17.152-21.248-32.512-9.728-44.8-30.208-44.8-30.208 3.766 2.636 9.976 6.053 10.496 6.4 43.21 24.198 104.588 32.126 159.744 8.96 8.96-3.328 18.944-8.192 29.44-15.104 0 0-12.8 20.992-46.336 30.464 7.68 9.728 16.896 20.736 16.896 20.736 56.576-1.792 78.336-38.912 78.336-38.912z"></path>
                                </svg>{" "}
                              </a>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-fe42cd4 elementor-hidden-mobile elementor-widget elementor-widget-image"
                    data-id="fe42cd4"
                    data-element_type="widget"
                  >
                    <div className="elementor-widget-container">
                      <img
                        width="603"
                        height="652"
                        src={eyeGuard}
                        className="attachment-full size-full wp-image-1844"
                        alt=""
                        sizes="(max-width: 603px) 100vw, 603px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="elementor-element elementor-element-7bd8783e e-flex e-con-boxed e-con e-parent"
        data-id="7bd8783e"
        data-element_type="container"
      >
        <div className="e-con-inner">
          <div
            className="elementor-element elementor-element-a052376 e-con-full e-flex e-con e-child"
            data-id="a052376"
            data-element_type="container"
          >
            <div
              className="elementor-element elementor-element-cf76fd6 elementor-widget elementor-widget-heading"
              data-id="cf76fd6"
              data-element_type="widget"
              data-widget_type="heading.default"
            >
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-small">
                  Disclaimer
                </h2>{" "}
              </div>
            </div>
            <div
              className="elementor-element elementor-element-3e653ec elementor-widget elementor-widget-text-editor"
              data-id="3e653ec"
              data-element_type="widget"
              data-widget_type="text-editor.default"
            >
              <div className="elementor-widget-container">
                <p>
                  Crystals of Naramunz is an action RPG in early development and
                  while we aspire to accurately describe the game, we cannot
                  guarantee that everything you are presented with here will
                  make it into the final product.
                </p>{" "}
              </div>
            </div>
            <div
              className="elementor-element elementor-element-d6e2eef e-grid e-con-full e-con e-child"
              data-id="d6e2eef"
              data-element_type="container"
            >
              <div
                className="elementor-element elementor-element-55dfa5c elementor-align-left elementor-widget elementor-widget-button m:justify-center grid m:grid"
                data-id="55dfa5c"
                data-element_type="widget"
                data-widget_type="button.default"
              >
                <div className="elementor-widget-container">
                  <div className="elementor-button-wrapper">
                    <a
                      className="elementor-button elementor-button-link elementor-size-sm m:pr-0"
                      href="https://naramunz.com/privacy-notice/"
                    >
                      <span className="elementor-button-content-wrapper">
                        <span className="elementor-button-text">
                          Privacy Policy
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-fb467db elementor-align-left elementor-widget elementor-widget-button m:justify-center grid m:grid"
                data-id="fb467db"
                data-element_type="widget"
                data-widget_type="button.default"
              >
                <div className="elementor-widget-container">
                  <div className="elementor-button-wrapper">
                    <a
                      className="elementor-button elementor-button-link elementor-size-sm m:pr-0"
                      href="https://naramunz.com/terms-of-use"
                    >
                      <span className="elementor-button-content-wrapper">
                        <span className="elementor-button-text">
                          Terms Of Use
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="elementor-element elementor-element-e05da31 e-con-full e-flex e-con e-child"
            data-id="e05da31"
            data-element_type="container"
          >
            <div
              className="elementor-element elementor-element-dfc5193 elementor-widget elementor-widget-image"
              data-id="dfc5193"
              data-element_type="widget"
              data-widget_type="image.default"
            >
              <div className="elementor-widget-container m:flex m:justify-center">
                <img
                  width="150"
                  height="150"
                  src={crglogo}
                  className="attachment-thumbnail size-thumbnail wp-image-814"
                  alt=""
                  sizes="(max-width: 150px) 100vw, 150px"
                />{" "}
              </div>
            </div>
          </div>
          <div
            className="elementor-element elementor-element-e73edbd e-con-full e-flex e-con e-child"
            data-id="e73edbd"
            data-element_type="container"
          >
            <div
              className="elementor-element elementor-element-dbe25cf elementor-widget elementor-widget-heading"
              data-id="dbe25cf"
              data-element_type="widget"
              data-widget_type="heading.default"
            >
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-small">
                  Official Channels
                </h2>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-57dcc16 elementor-widget elementor-widget-text-editor"
              data-id="57dcc16"
              data-element_type="widget"
              data-widget_type="text-editor.default"
            >
              <div className="elementor-widget-container">
                <p>
                  CRG AB
                  <br />
                  Company Reg nr: 559310-6023
                  <br />
                  VAT nr: SE559310602301
                  <br />
                  Vasagatan 6, 90329 UMEÅ, Sweden
                </p>{" "}
              </div>
            </div>
          </div>
          <div
            className="elementor-element elementor-element-136a670 elementor-widget__width-auto elementor-fixed elementor-align-center elementor-widget elementor-widget-button"
            data-id="136a670"
            data-element_type="widget"
          >
            {window.scrollY > 500 ? (
              <div className="elementor-widget-container animate-fade-in animate-fade-Out">
                <div className="elementor-button-wrapper">
                  <a
                    className="elementor-button elementor-button-link elementor-size-xs"
                    onClick={(event) => {
                      event.preventDefault();
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    <span className="elementor-button-content-wrapper">
                      <span className="elementor-button-icon elementor-align-icon-right">
                        <svg
                          aria-hidden="true"
                          className="e-font-icon-svg e-fas-arrow-up"
                          viewBox="0 0 448 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div
        className="elementor-element elementor-element-29cc9370 e-flex e-con-boxed e-con e-parent"
        data-id="29cc9370"
        data-element_type="container"
      >
        <div className="e-con-inner">
          <div
            className="elementor-element elementor-element-1a767eb elementor-widget elementor-widget-heading"
            data-id="1a767eb"
            data-element_type="widget"
            data-widget_type="heading.default"
          >
            <div className="elementor-widget-container">
              <p className="elementor-heading-title elementor-size-small">
                © 2024 All Rights Reserved.
              </p>{" "}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
