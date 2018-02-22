const Header = () => import('@/components/home/public/header');
const Login = () => import('@/components/home/common/login');
const Register = () => import('@/components/home/common/register');

export default [{
  path: 'login',
  components: {
    'header': Header,
    'body': Login
  }
}, {
  path: 'register',
  components: {
    'header': Header,
    'body': Register
  }
}];
