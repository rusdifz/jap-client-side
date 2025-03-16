'use client';
import NavMenu from './Menu/NavMenu';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import UseSticky from '@/hooks/UseSticky';
import LoginModal from '@/modals/LoginModal';
import Offcanvas from './Menu/Offcanvas';
import HeaderSearchbar from './Menu/HeaderSearchbar';

import logo_1 from '@/assets/images/logo/logo_02.svg';
import logo_2 from '@/assets/images/logo/logo_04.svg';
import logo_3 from '@/assets/images/logo/logo_06.svg';

import logo from '@/assets/images/logo/logo_jap.png';

const Header = ({ style_1, style_2 }: any) => {
  const { sticky } = UseSticky();
  // const [offCanvas, setOffCanvas] = useState<boolean>(false);
  // const [isSearch, setIsSearch] = useState<boolean>(false);

  return (
    <>
      <header
        className={`theme-main-menu menu-overlay menu-style-two scrolled sticky-menu  ${
          sticky ? 'fixed' : ''
        }`}
      >
        <div className={`inner-content ${style_2 ? 'gap-two' : 'gap-one'}`}>
          <div className="top-header position-relative">
            <div className="d-flex align-items-center">
              <div className="logo order-lg-0">
                <Link href="/" className="d-flex align-items-center ml-50">
                  <Image src={logo} alt="" height={70} width={100} />
                </Link>
              </div>

              <div className="right-widget ms-auto me-3 me-lg-0 order-lg-3">
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
                    className={`collapse navbar-collapse ${
                      style_2 ? 'ms-xl-5' : ''
                    }`}
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
