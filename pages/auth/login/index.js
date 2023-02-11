import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import { LogoIcon } from '../../../icons';
import { Container } from '../../../styles/SharedStyles';

const Wrapper = styled.div`
height: 100vh;
display: grid;
place-items: center;
`
const Logo = styled.a`
display: flex;
justify-content: center;
margin-bottom: 3rem;

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
      width: 38px;
    }
  }
`;

const Form = styled.form`
  background-color: ${({theme}) => theme.colors.semiDarkBlue};
  padding:2.4rem 2rem 2.5rem;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  max-width: 600px;

    h1 {
      font-weight: 300;
      align-self: flex-start;
      margin-bottom: 2rem;
    }

    p {
      margin-top: 1.4rem;
      font-size: .95rem;
    }
    a {
      color: #FC4747;
      margin-left: .4rem;

      &:hover {
        border-bottom: 1px solid currentColor;
      }
    }
`;

const Input = styled.input`
  padding: 10px 15px 20px;
  margin-bottom: 12px;
  border: none;
  border-bottom: 1px solid currentColor;
  background-color: transparent;
  color: #5A698F;
  font-size: .9rem;
  width: 100%;
  caret-color: #FC4747;

    &:focus{
      outline: none;
      border-bottom: 1px solid #fff;
    }
`;

const Button = styled.button`
  width: 100%;
  padding: 16px;
  margin-top: 20px;
  border-radius: 5px;
  border: none;
  background-color: #FC4747;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: .3s;

  &:hover {
    background-color: #F25858;
  }
`;

const LoginPage = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    // login logic here
  };

  return (
    <>
    <Head>
      <title>Login | Entertainment</title>
    </Head>

      <Wrapper>
        <Container>
          <Logo href="/" aria-label="logo">
            <LogoIcon />
          </Logo>
          <Form onSubmit={handleLogin}>
            <h1>Login</h1>
            <Input type="email" name="email" placeholder="Email" required />
            <Input type="password" name="password" placeholder="Password" required />
            <Button type="submit">Login to your account</Button>
            <p>Don’t have an account? <Link href='/auth/signup'>Sign Up</Link></p>
          </Form>
        </Container>
      </Wrapper>

    </>
  );
};

export default LoginPage;
