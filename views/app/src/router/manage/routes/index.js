const Header = () => import('@/components/manage/public/header');
const Index = () => import('@/components/manage/index/index');

export default [{
  path: '',
  components: {
    'header': Header,
    'body': Index
  }
}];
