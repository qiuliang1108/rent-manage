
import index from '@/router/home/routes/index';

import common from '@/router/home/routes/common';

const Layout = () => import('@/components/home/public/layout');

export default [{
  path: '',
  component: Layout,
  children: index
}, {
  path: 'common',
  component: Layout,
  children: common
}]
