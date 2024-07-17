import { Dispatch, SetStateAction } from 'react';

import { PaymentMethod } from '@/components/checkout/payment-methods/payment-method';
import { IPaymentMethod } from '@/lib/interfaces/checkout.interface';
import { paymentMethods } from '@/lib/mock/payment.method.mock';

interface IProps {
  selectedPaymentMethod: IPaymentMethod;
  setSelectedPaymentMethod: Dispatch<SetStateAction<IPaymentMethod>>;
}

export const PaymentMethods = ({ setSelectedPaymentMethod, selectedPaymentMethod }: IProps) => {
  return (
    <div className="flex items-center gap-3">
      {paymentMethods.map((method) => (
        <PaymentMethod
          className="mt-3"
          key={method.id}
          method={method}
          isActive={method.id === selectedPaymentMethod.id}
          onClick={setSelectedPaymentMethod.bind(null, method)}
        />
      ))}
    </div>
  );
};
