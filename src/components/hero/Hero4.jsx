import Image from "next/image";
import Link from "next/link";

const logo = "/images/about/ylr-landing.png"

export default function Hero4() {
  return (
    <>
      <section className="hero-home4 pb-0 pt80">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6">
              <div className="pr30 pr0-lg mb30-md position-relative">
                <Image
                  height={120}
                  width={250} 
                  alt="Logo" 
                  className="img-fluid animate-up-2" 
                  src={logo} />
                <h1 className="animate-up-1 mb25 text-thm2">
                  Gateway to your dreams,
                </h1>
                <h3>Launching soon in Qatar</h3>
                <p className="text animate-up-2">
                  Internship marketplace connecting university grads and  students with employers.
                </p>
                <div className="d-flex align-items-center mt30 animate-up-3">
                  <Link href="https://forms.gle/CMzfxypDAPiPrQGKA" target="_blank" className="ud-btn btn-thm me-3 rounded-pill">
                    Intrested
                  </Link>
                  {/* <Link href="/freelancer-1" className="ud-btn btn-thm-border">
                    Find Interns
                  </Link> */}
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <div className="home5-hero-content position-relative">
                <Image
                  height={536}
                  width={691}
                  src="/images/about/landing1.jpg"
                  alt="hero-img"
                  className="object-fit-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
