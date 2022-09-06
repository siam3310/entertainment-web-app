import styled from 'styled-components';
import { Heading } from '../styles/SharedStyles';
import Card from './Card';

const StyledCollection = styled.div`
  margin-bottom: 2rem;

  @media (min-width: 600px) {
    margin-bottom: 2.5rem;
  }

  @media (min-width: 1024px) {
    margin-bottom: 3.5rem;
  }
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1.5rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 2.3rem 2.5rem;
  }
`;

const Collection = ({ list, title, mediaType }) => {
  return (
    <StyledCollection>
      <Heading>{title}</Heading>
      <Grid>
        {list.map((item) => {
          return <Card key={item.id} item={item} mediaType={mediaType} />;
        })}
      </Grid>
    </StyledCollection>
  );
};

export default Collection;
