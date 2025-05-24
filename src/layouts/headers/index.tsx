'use client';

import NavMenu from './Menu/NavMenu';
import Link from 'next/link';
import Image from 'next/image';
import UseSticky from '@/hooks/UseSticky';

import logo from '@/assets/images/logo/logo_jap.png';

const Header = () => {
  const { sticky } = UseSticky();

  return (
    <>
      <header
        className={`theme-main-menu menu-overlay menu-style-six scrolled sticky-menu  ${
          sticky ? 'fixed' : ''
        }`}
      >
        <div className="inner-content gap-one">
          {/* <div className="inner-content gap-two"> */}
          <div className="top-header position-relative ms-2 ms-lg-5">
            <div className="d-flex align-items-center">
              <div className="logo order-lg-0">
                {/* company logo */}
                <Link href="/" className="d-flex align-items-center">
                  <Image
                    src={'/assets/images/logo/logo_jap.png'}
                    alt=""
                    height={40}
                    width={70}
                  />
                </Link>
              </div>

              <div className="right-widget ms-auto me-2 me-lg-5 order-lg-3">
                <nav className="navbar navbar-expand-lg p0 ms-lg-5 order-lg-2">
                  <button
                    className="navbar-toggler d-block d-lg-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span></span>
                  </button>
                  <div
                    // className="collapse navbar-collapse ms-xl-5"
                    className="collapse navbar-collapse"
                    id="navbarNav"
                  >
                    <NavMenu />
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
