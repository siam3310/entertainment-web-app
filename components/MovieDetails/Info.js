import styled from 'styled-components';

const StyledInfo = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 25rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: var(--mb-gap);

  p {
    font-size: var(--fs-info);
  }

  @media (min-width: 600px) {
    margin-left: 0;
    margin-right: 0;
  }
  @media (min-width: 1024px) {
    max-width: 30rem;
  }
`;

const Placeholder = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  margin-bottom: 0.1rem;
  @media (min-width: 1024px) {
    margin-bottom: 0.2rem;
  }
`;

const Info = ({ runtime, spoken_languages, release_date, status }) => {
  return (
    <StyledInfo>
      <div>
        <Placeholder>Length</Placeholder>
        <p>{`${runtime ? `${runtime} min.` : 'N/A'} `}</p>
      </div>
      <div>
        <Placeholder>Language</Placeholder>
        <p>{spoken_languages[0].name}</p>
      </div>
      <div>
        <Placeholder>Year</Placeholder>
        <p>{release_date.slice(0, 4)}</p>
      </div>
      <div>
        <Placeholder>Status</Placeholder>
        <p>{status}</p>
      </div>
    </StyledInfo>
  );
};

export default Info;
