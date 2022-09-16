import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import {
  HomeIcon,
  MoviesIcon,
  SeriesIcon,
  BookmarksIcon,
  LogoIcon,
} from '../icons';

const StyledHeader = styled.header``;

const Navbar = styled.div`
  background-color: ${({ theme }) => theme.colors.semiDarkBlue};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1.2rem;

  @media (min-width: 600px) {
    margin: 1rem;
    border-radius: 8px;
  }

  @media (min-width: 768px) {
    flex-direction: column;
    position: sticky;
    top: 1.5rem;
    height: calc(100vh - 3rem);
    max-height: 41rem;
    padding: 1.8rem 0;
    margin: 0;
  }

  @media (min-width: 1024px) {
    padding: 2rem 0;
    top: 2rem;
    height: calc(100vh - 4rem);
    border-radius: 14px;
  }

  @media (max-height: 500px) {
    height: 100%;
    position: unset;
  }
`;

const Logo = styled.a`
  display: flex;
  svg {
    width: 26px;
  }

  @media (min-width: 600px) {
    svg {
      width: 30px;
    }
  }

  @media (min-width: 768px) {
    svg {
      width: 32px;
    }
  }
`;

const Nav = styled.nav`
  svg {
    width: 16px;
  }
  ul {
    display: flex;
    gap: 0.6rem;
  }
  a {
    display: flex;
    padding: 0.8rem;
    border-radius: 5px;
    color: #5a698f;
    &:hover,
    &:focus {
      background-color: #202a44;
    }
    &.active {
      color: white;
    }
  }

  @media (min-width: 600px) {
    svg {
      width: 18px;
    }
    ul {
      gap: 1rem;
    }
  }

  @media (min-width: 768px) {
    margin-top: 4rem;
    ul {
      flex-direction: column;
    }
  }

  @media (min-width: 1024px) {
    svg {
      width: 20px;
    }
    a {
      padding: 1rem;
      border-radius: 8px;
    }
  }
`;

const User = styled.button`
  flex-shrink: 0;
  height: 1.7rem;
  width: 1.7rem;
  border: 1.5px solid white;
  border-radius: 50%;

  @media (min-width: 600px) {
    height: 1.8rem;
    width: 1.8rem;
  }

  @media (min-width: 768px) {
    margin-top: auto;
    height: 2rem;
    width: 2rem;
  }
`;

const navLinks = [
  {
    id: 1,
    url: '/',
    text: 'home',
    icon: <HomeIcon />,
  },
  {
    id: 2,
    url: '/movies',
    text: 'movies',
    icon: <MoviesIcon />,
  },
  {
    id: 3,
    url: '/tvseries',
    text: 'tvseries',
    icon: <SeriesIcon />,
  },
  // {
  //   id: 4,
  //   url: '/bookmarks',
  //   text: 'bookmarks',
  //   icon: <BookmarksIcon />,
  // },
];

const Header = () => {
  const router = useRouter();

  return (
    <StyledHeader>
      <Navbar>
        <Logo href="/" aria-label="logo">
          <LogoIcon />
        </Logo>

        <Nav>
          <ul>
            {navLinks.map((link) => {
              return (
                <li key={link.id}>
                  <Link href={link.url}>
                    <a
                      className={
                        router.pathname === `${link.url}` ? 'active' : ''
                      }
                      title={link.text}
                      aria-label={link.text}
                    >
                      {link.icon}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Nav>

        <User aria-label="user">
          <Image
            src="/assets/image-avatar.png"
            width={25}
            height={25}
            layout="responsive"
            alt="avatar"
          />
        </User>
      </Navbar>
    </StyledHeader>
  );
};

export default Header;
