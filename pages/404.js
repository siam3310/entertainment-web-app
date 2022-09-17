import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: -1rem;
  height: 100vh;

  h1 {
    font-size: clamp(1rem, 2.5vw, 2rem);
  }
`;

const StyledLink = styled.a`
  color: ${({ theme }) => theme.colors.greyishBlue};
  text-decoration: underline;
  font-size: clamp(0.8rem, 2vw, 1.2rem);

  &:hover {
    color: #fff;
  }
`;

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Not Found | Entertainment App</title>
      </Head>
      <Container>
        <h1>404 - Page Not Found</h1>
        <Link href="/">
          <StyledLink>Go back home</StyledLink>
        </Link>
      </Container>
    </>
  );
}
