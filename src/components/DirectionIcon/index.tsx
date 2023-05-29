import { ArrowDown, ArrowUp } from 'phosphor-react';

interface Props {
  isAscending?: boolean;
}
export const DirectionIcon = ({ isAscending = false }: Props) => {
  if (isAscending) {
    return <ArrowUp />;
  }
  return <ArrowDown />;
};
