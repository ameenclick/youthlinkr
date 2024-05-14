import Link from "next/link";
import Navigation from "./Navigation";
import Image from "next/image";
import MobileNavigation3 from "./MobileNavigation3";

export default function Header4() {
  return (
    <>
      <header
        className="header-nav nav-innerpage-style stricky main-menu at-home3 bdrb1"
        style={{ padding: "18px 0" }}
      >
        <nav className="posr">
          <div className="container posr menu_bdrt1">
            <div className="row align-items-center justify-content-between">
              <div className="col-auto">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="logos mr20">
                    <Link className="header-logo logo2" href="/">
                      <Image
                        height={40}
                        width={133}
                        src="/images/yrl-long-jpeg"
                        alt="Header Logo"
                      />
                    </Link>
                  </div>
                  <Navigation />
                </div>
              </div>
              <div className="col-auto">
                <div className="d-flex align-items-center">
                  <a
                    className="login-info"
                    data-bs-toggle="modal"
                    href="#exampleModalToggle"
                  >
                    <span className="flaticon-loupe" />
                  </a>
                  {/* <Link
                    className="login-info mx15-lg mx30"
                    href="/become-seller"
                  >
                    <span className="d-none d-xl-inline-block">Become a </span>
                    Seller
                  </Link> */}
                  <Link className="login-info mr15-lg mr30" href="/login">
                    Sign in
                  </Link>
                  <Link
                    className="ud-btn btn-home3 add-joining"
                    href="/register"
                  >
                    Sign up
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <MobileNavigation3 />
    </>
  );
}
