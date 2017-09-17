import styled from 'styled-components';
import classNames from 'classnames';
import Link from 'next/link';
import Logo from '../svgs/blackout-logo.svg';

const ItemList = ({ children, className }) => (
  <div className={classNames('dtc v-mid w-75 tr', className)}>{children}</div>
);

const StyledList = styled(ItemList)`
  > a:last-child {
    margin-right: 0;
  }
`;

const NavItem = ({ to = '/', children, ...rest }) => (
  <Link href={to} scroll={false}>
    <a className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" title={children} {...rest}>
      {children}
    </a>
  </Link>
);

const Navbar = props => {
  return (
    <nav className="dt w-100 border-box pa3 ph5-ns bg-white card-shadow">
      <Link
        prefetch
        href="/"
        className="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l"
        title="Home"
      >
        <a><Logo className="w2 h-auto mt1" /></a>
      </Link>
      <StyledList className="dtc v-mid w-75 tr">
        <NavItem to="hva-skjedde">Hva skjedde?</NavItem>
        <NavItem to="transactions">Transaksjoner</NavItem>
        <NavItem to="map">Fiks kartet</NavItem>
        <NavItem to="payment">Evig penger?</NavItem>
      </StyledList>
    </nav>
  );
};

export default Navbar;
