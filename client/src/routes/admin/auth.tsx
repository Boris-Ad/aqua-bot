import type { ActionFunctionArgs } from 'react-router-dom';
import { redirect } from 'react-router-dom';
import { IoShieldCheckmark } from 'react-icons/io5';
import { signIn } from '../../api/admin.api';
import { useAuthStore } from '../../store/auth.store';
import AuthForm from '../../components/admin/AuthForm';
import { HTTPError } from 'ky';

const AuthPage: React.FC = () => {
  return (
    <div className="flex h-screen flex-col bg-gray-100 p-4">
      <div className="flex items-center gap-2">
        <IoShieldCheckmark className="h-10 w-10 fill-blue-500" />
        <span className="text-2xl font-bold">Security</span>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <div className="w-full max-w-md -translate-y-1/2 rounded-md bg-white p-4 shadow-lg">
          <AuthForm />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const login = formData.get('name') as string;
  const password = formData.get('password') as string;
  const setToken = useAuthStore.getState().setToken;

  try {
    const response = await signIn({ login, password });
    if ('access_token' in response) {
      setToken(response['access_token']);
      return redirect('/admin');
    }
    return redirect('/auth')
  } catch (err) {
    const error = err as HTTPError
    const json = await error.response.json()
    return json;
  }
}
