import styled from 'styled-components';
import { Heading } from '../styles/SharedStyles';
import Card from './Card';

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
    gap: 2.5rem;
  }
`;

const Collection = ({ list, title, mediaType }) => {
  return (
    <>
      <Heading>{title}</Heading>
      <Grid>
        {list.map((item) => {
          return <Card key={item.id} item={item} mediaType={mediaType} />;
        })}
      </Grid>
    </>
  );
};

export default Collection;
