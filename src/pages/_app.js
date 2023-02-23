import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Head from 'next/head';
import moment from 'moment';

import {persistor, store} from '@/redux/store';
import {NextUIProvider} from '@nextui-org/react';

import '../styles/globals.css';

moment.locale('th');

moment.updateLocale('th', {
  months: [
    'มกราคม',
    'กุมภาพันธ์',
    'มีนาคม',
    'เมษายน',
    'พฤษภาคม',
    'มิถุนายน',
    'กรกฎาคม',
    'สิงหาคม',
    'กันยายน',
    'ตุลาคม',
    'พฤศจิกายน',
    'ธันวาคม',
  ],
  monthsShort: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'],
  weekdays: ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์'],
  weekdaysShort: ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'],
  weekdaysMin: ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'],
});

function MyApp({Component, pageProps}) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Head>
          <title>{process.env.NEXT_PUBLIC_APP_NAME}</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <NextUIProvider>
          <Component {...pageProps} />
        </NextUIProvider>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
