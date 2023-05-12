import {Badge} from '@mantine/core';
import useSearch from '../hooks/useSearch';

type TProps = {technology: string};

const TechnologyBadge = ({technology}: TProps): JSX.Element => {
  const search = useSearch();

  //* create badge color
  const createBadgeColor = (): string | undefined => {
    const lang: string = technology.toLowerCase();

    switch (lang) {
      case 'javascript':
        return 'yellow';
      case 'typescript':
        return 'indigo';
      case 'html':
        return 'red';
      default:
        return undefined;
    }
  };

  return (
    <Badge color={createBadgeColor()} mx="1%" size="md" sx={{cursor: 'pointer'}} onClick={() => search(technology)}>
      {technology}
    </Badge>
  );
};

export default TechnologyBadge;
