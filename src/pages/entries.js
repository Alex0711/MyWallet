import { useOperation } from '@hooks/useOperation';
import Operations from '@components/Operations';

export default function Entries() {
  const operations = useOperation();

  return <Operations operations={operations.entries?.slice().reverse()} />;
}
