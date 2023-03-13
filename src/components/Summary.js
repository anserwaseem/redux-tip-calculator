import { Stack } from '@twilio-paste/stack';
import SummaryLine from './SummaryLine';
import { toCurrency } from '../utilities';

export const Summary = ({ subTotal = 0, tipAmount = 0, total = 0 }) => {
  return (
    <Stack orientation="vertical" spacing="space30">
      <SummaryLine title="subTotal">{toCurrency(subTotal)}</SummaryLine>
      <SummaryLine title="Tip Amount">{toCurrency(tipAmount)}</SummaryLine>
      <SummaryLine title="Total">{toCurrency(total)}</SummaryLine>
    </Stack>
  );
};
