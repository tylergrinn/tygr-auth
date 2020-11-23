import Auth from '../lib/standalone';
import '../lib/tygr-auth.min.css';

Auth.mount(document.getElementById('app'), {
  google: true,
  twitter: true,
  github: true,
});
