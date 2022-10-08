import { useOperation } from '@hooks/useOperation';
import Operations from '@components/Operations';

export default function Payments() {
  const operations = useOperation();

  return <Operations operations={operations.payments?.slice().reverse()} />;
}
