import Image from "next/image";
import Link from "next/link";

export default function OurFunFact2() {
  return (
    <>
      <section className="pt150 pt60-lg pb60-lg pb30-md">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6">
              <div className="home4-about-1 position-relative">
                <Image
                  height={508}
                  width={691}
                  className="w-100 mb30-md h-100 object-fit-contain"
                  src="/images/about/about-9.png"
                  alt="about"
                />
                <Image
                  height={68}
                  width={362}
                  src="/images/about/happy-client.png"
                  alt="about"
                  className="bounce-x img-1 default-box-shadow4 object-fit-contain"
                />
                <div className="iconbox-small1 d-none d-lg-block wow fadeInRight default-box-shadow4 bounce-x animate-up-1 animated">
                  <span className="icon " />
                  <div className="details">
                    <h6 className="mb-1">0</h6>
                    <p className="text fz13 mb-0">Internships connected</p>
                  </div>
                </div>
                <div className="iconbox-small2 d-none d-lg-block wow fadeInLeft default-box-shadow4 bounce-y animate-up-2 animated">
                  <span className="icon flaticon-review" />
                  <div className="details">
                    <h6 className="mb-1">0</h6>
                    <p className="text fz13 mb-0">Internships in Qatar</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-5">
              <div className="mb30">
                <div className="mb30">
                  <h2 className="title mb30">
                    Qatar's 1st Internship Marketplace
                    <br className="d-none d-xl-block" />
                    for University Students & Grads
                  </h2>
                  <p className="text">
                    We are on a mission to help university students to get their first employment oppertunity
                  </p>
                </div>
                <div className="list-style2">
                  <ul className="mb25">
                    <li>
                      <i className="far fa-check" />
                      Connect proactive interns with recruiters employement scope
                    </li>
                    <li>
                      <i className="far fa-check" />
                      Get matched with the proactive talents by our analytics dashboard
                    </li>
                    <li>
                      <i className="far fa-check" />
                      Oppertunity to enroll for remote, hybrid, and flexible interships
                    </li>
                    <li>
                      <i className="far fa-check" />
                      Attain your course credits through internships
                    </li>
                  </ul>
                </div>
                <Link href="/contact" className="ud-btn btn-thm-border">
                  Find Interns <i className="fal fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
