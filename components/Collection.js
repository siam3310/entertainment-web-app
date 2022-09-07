import styled from 'styled-components';
import { Heading } from '../styles/SharedStyles';
import { sliceArray } from '../utils';
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

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ShowMoreBtn = styled.button`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.greyishBlue};
  font-size: clamp(0.7rem, 1.8vw, 0.9rem);
`;

const Collection = ({ list, title, mediaType }) => {
  return (
    <StyledCollection>
      <Flex>
        <Heading>{title}</Heading>
        <ShowMoreBtn>See more</ShowMoreBtn>
      </Flex>
      <Grid>
        {sliceArray(list, 12).map((item) => {
          return <Card key={item.id} item={item} mediaType={mediaType} />;
        })}
      </Grid>
    </StyledCollection>
  );
};

export default Collection;
