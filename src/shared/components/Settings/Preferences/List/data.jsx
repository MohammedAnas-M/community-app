import forum from 'assets/images/preferences/forum.svg';
import payment from 'assets/images/preferences/payment.svg';

import { config } from 'topcoder-react-utils';

const data = [
  {
    id: 'forum',
    icon: forum,
    name: 'Forum',
    description: 'To setup your forum preferences, please click the “Go To Forum” button.',
    link: `${config.URL.FORUMS_VANILLA}/profile/preferences`,
    linkTitle: 'GO TO FORUM',
  },
  {
    id: 'payment',
    icon: payment,
    name: 'Payment',
    description: 'To setup your payments preferences, please click the “Go To Payments” button.',
    link: `${config.URL.COMMUNITY}/PactsMemberServlet?module=PaymentHistory&full_list=false`,
    altLink: `${config.URL.THRIVE}/articles/Payment%20Methods`,
    linkTitle: 'GO TO PAYMENTS',
  },
];

export default data;
