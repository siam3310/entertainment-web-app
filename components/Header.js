// import { NavLink } from 'react-router-dom';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
// import avatar from '/assets/image-avatar.png';

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
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1.2rem;

  @media (min-width: 600px) {
    margin: 1rem;
    border-radius: 8px;
  }

  @media (min-width: 768px) {
    position: sticky;
    top: 1.5rem;
    flex-direction: column;
    height: calc(100vh - 3rem);
    padding: 1.8rem 0.9rem;
    margin: 0;
    border-radius: 12px;

    & > a > svg {
      width: 32px;
    }

    & > button {
      margin-top: auto;

      img {
        height: 2rem;
        width: 2rem;
      }
    }
  }
`;

const Logo = styled.a`
  svg {
    width: 28px;
  }

  display: flex;
`;

const Nav = styled.nav`
  svg {
    width: 16px;
  }

  ul {
    display: flex;
    gap: 0.6rem;

    a {
      display: flex;
      padding: 0.8rem;
      border-radius: 5px;
      color: #5a698f;
      /* transition: background-color 250ms; */

      &:hover {
        background-color: #202a44;
      }

      &.active {
        color: white;
      }
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

    svg {
      width: 20px;
    }

    ul {
      flex-direction: column;
      gap: 1rem;
    }
  }
`;

const User = styled.button`
  flex-shrink: 0;

  height: 1.8rem;
  width: 1.8rem;
  border: 1.5px solid white;
  border-radius: 50%;
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
  {
    id: 4,
    url: '/bookmarks',
    text: 'bookmarks',
    icon: <BookmarksIcon />,
  },
];

const Header = () => {
  return (
    <StyledHeader>
      <Navbar>
        <Logo href="/" aria-label="logo">
          <LogoIcon />
        </Logo>

        <Nav>
          <ul>
            {navLinks.map((link) => {
              const { id, url, text, icon } = link;
              return (
                <li key={id}>
                  <Link href={url} title={text}>
                    <a>{icon}</a>
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
