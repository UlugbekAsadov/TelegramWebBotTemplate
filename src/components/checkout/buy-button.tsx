import { Button } from '@/components/ui/button';
import { useLocaleContext } from '@/context/locale.context';

interface IProps {
  onClick: () => void;
}

export const CheckoutBuyButton = ({ onClick }: IProps) => {
  const { t } = useLocaleContext();
  return (
    <div className="fixed bottom-0 py-4 px-6 bg-card rounded-t-xl w-full container">
      <Button onClick={onClick} className="w-full rounded-full" size="lg">
        {t('checkout.buy')}
      </Button>
    </div>
  );
};
