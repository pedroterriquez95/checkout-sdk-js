import { Address } from '../address';
import { Coupon } from '../coupon';
import { Currency } from '../currency';
import { DigitalItem, GiftCertificateItem, PhysicalItem } from '../cart';

export default interface Order {
    baseAmount: number;
    billingAddress: Address;
    cartId: string;
    coupons: Coupon[];
    currency: Currency;
    customerCreated: boolean;
    customerId: number;
    discountAmount: number;
    hasDigitalItems: boolean;
    isComplete: boolean;
    isDownloadable: boolean;
    isTaxIncluded: boolean;
    lineItems: {
        physicalItems: PhysicalItem[];
        digitalItems: DigitalItem[];
        giftCertificates: GiftCertificateItem[];
    };
    orderAmount: number;
    orderId: number;
    status: string;
}
