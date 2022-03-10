import { Grid, GridItem } from '@chakra-ui/react';
import { Category } from './Category';

export function TravelCategories() {
  return (
    <Grid
      w="90%"
      maxW="1160px"
      mx="auto"
      mt={['10', '20']}
      mb={['10', '20']}
      alignItems="center"
      justifyContent="center"
      templateColumns={['1fr 1fr', '1fr 1fr', '1fr 1fr', 'repeat(5, 1fr)']}
      gap="10"
    >
      <GridItem>
        <Category
          src="/assets/images/cocktail.png"
          alt="cocktail"
          subtitle="vida noturna"
        />
      </GridItem>

      <GridItem>
        <Category src="/assets/images/beach.png" alt="beach" subtitle="praia" />
      </GridItem>

      <GridItem>
        <Category
          src="/assets/images/modern.png"
          alt="modern"
          subtitle="moderno"
        />
      </GridItem>

      <GridItem>
        <Category
          src="/assets/images/classic.png"
          alt="classic"
          subtitle="clássico"
        />
      </GridItem>

      <GridItem colSpan={[2, 2, 2, 1]}>
        <Category
          src="/assets/images/earth.png"
          alt="earth"
          subtitle="e mais..."
        />
      </GridItem>
    </Grid>
  );
}
