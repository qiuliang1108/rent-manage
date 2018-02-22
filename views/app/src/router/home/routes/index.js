const Header = () => import('@/components/home/public/header');
const Index = () => import('@/components/home/index/index');

export default [{
  path: '',
  components: {
    'header': Header,
    'body': Index
  }
}];
