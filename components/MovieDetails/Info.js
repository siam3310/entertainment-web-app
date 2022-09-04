import styled from 'styled-components';

const StyledInfo = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 25rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: var(--mb-gap);

  p {
    font-size: 0.85rem;
  }

  @media (min-width: 600px) {
    margin-left: 0;
    margin-right: 0;
    p {
      font-size: var(--fs-info);
    }
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

const Info = ({
  runtime,
  language,
  releaseDate,
  firstAirDate,
  lastAirDate,
  status,
}) => {
  return (
    <StyledInfo>
      {runtime ? (
        <div>
          <Placeholder>Length</Placeholder>
          <p>{`${runtime ? `${runtime} min.` : 'N/A'}`}</p>
        </div>
      ) : (
        <div>
          <Placeholder>Language</Placeholder>
          <p>{`${language[0] ? `${language[0].english_name}` : 'N/A'}`}</p>
        </div>
      )}

      {runtime ? (
        <div>
          <Placeholder>Language</Placeholder>
          <p>{`${language[0] ? `${language[0].english_name}` : 'N/A'}`}</p>
        </div>
      ) : (
        <div>
          <Placeholder>First Air</Placeholder>
          <p>{`${firstAirDate ? `${firstAirDate}` : 'N/A'}`}</p>
        </div>
      )}

      {runtime ? (
        <div>
          <Placeholder>Year</Placeholder>
          <p>{`${releaseDate ? `${releaseDate.slice(0, 4)}` : 'N/A'}`}</p>
        </div>
      ) : (
        <div>
          <Placeholder>Last Air</Placeholder>
          <p>{`${lastAirDate ? `${lastAirDate}` : 'N/A'}`}</p>
        </div>
      )}

      <div>
        <Placeholder>Status</Placeholder>
        <p>{`${status ? `${status}` : 'N/A'}`}</p>
      </div>
    </StyledInfo>
  );
};

export default Info;
