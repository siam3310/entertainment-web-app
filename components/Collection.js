import styled from 'styled-components';
import { sliceArray } from '../utils';
import CollectionCard from './CollectionCard';
import Heading from './Heading';

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

const Collection = ({ list, title, mediaType, limit, href }) => {
  return (
    <StyledCollection>
      <Heading title={title} href={href} />

      <Grid>
        {sliceArray(list, limit || 20).map((item) => {
          return (
            <CollectionCard key={item.id} item={item} mediaType={mediaType} />
          );
        })}
      </Grid>
    </StyledCollection>
  );
};

export default Collection;
