
import index from '@/router/manage/routes/index';

import common from '@/router/manage/routes/common';

const Layout = () => import('@/components/manage/public/layout');

export default [{
  path: '',      // home/
  component: Layout,
  children: index
}, {
  path: 'common',  // home/common
  component: Layout,
  children: common
}]
