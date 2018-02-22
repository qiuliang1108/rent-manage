const Header = () => import('@/components/manage/public/header');
const Login = () => import('@/components/manage/common/login');

export default [{
  path: 'login',
  components: {
    'header': Header,
    'body': Login
  }
}];
