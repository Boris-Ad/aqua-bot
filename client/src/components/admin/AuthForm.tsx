import { Form, useActionData } from 'react-router-dom';

import { IoPersonOutline } from 'react-icons/io5';
import { IoLockClosedOutline } from 'react-icons/io5';

import { Error401 } from '../../types/auth.types';
import Input from '../ui/Input';
import Button from '../ui/Button';


interface AuthFormProps {}

const AuthForm: React.FC<AuthFormProps> = ({}) => {
  const error = useActionData() as Error401;

  return (
    <Form method="post" autoComplete="off" className="space-y-3">
      <Input name="name" type="text" label="Имя" Icon={IoPersonOutline} />
      <Input name="password" type="password" label="Пароль" Icon={IoLockClosedOutline} />
      {error && <p className="mt-1 text-rose-500">{error.message}</p>}
      <div className="pt-1">
        <Button type="submit">Войти</Button>
      </div>
    </Form>
  );
};

export default AuthForm;
