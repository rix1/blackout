import Link from 'next/link';
import Logo from '../svgs/logo.svg';

const Navbar = props => {
  return (
    <nav className="db dt-l w-100 border-box pa3 ph5-l">
      <Link href="/">
        <a className="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l" title="Home">
          <Logo className="w4 h-auto"/>
        </a>
      </Link>
      <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
        <Link href="/">
          <a className="link dim dark-gray f6 f5-l dib mr3 mr4-l" title="Home">Home</a>
        </Link>
        <Link href="/about">
          <a className="link dim dark-gray f6 f5-l dib mr3 mr4-l" title="Home">Om oss</a>
        </Link>
        <Link href="/photo-essay">
          <a className="link dim dark-gray f6 f5-l dib" title="Home">Foto</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
