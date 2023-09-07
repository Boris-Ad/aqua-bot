import { useNavigate, useParams } from 'react-router-dom';
import { useGetUsersQuery } from '../../hooks/admin/useGetUsers';
import Button from '../../components/ui/Button';

const AdminUserInformationPage: React.FC = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { data } = useGetUsersQuery();
  const user = data?.find(user => user.telegId === parseInt(params.id || ''));
  return (
    <div className="p-4">
      <div className="p-2 border rounded">
        <h3 className="text-lg font-medium my-2">Информация о клиенте:</h3>
        <div className="divide-y">
          <div className="hover:bg-slate-200 grid grid-cols-6 p-1 rounded">
            <p>Telegram id:</p>
            <span className="col-span-5">{user?.telegId}</span>
          </div>
          <div className="hover:bg-slate-200 grid grid-cols-6 p-1 rounded">
            <p>Дата регистрации:</p>
            <span className="col-span-5">{new Date(user?.createdAt || '').toLocaleDateString()}</span>
          </div>
          <div className="hover:bg-slate-200 grid grid-cols-6 p-1 rounded">
            <p>Адрес:</p>
            <span className="col-span-5">{user?.address}</span>
          </div>
        </div>
      </div>
      <div className="flex justify-end my-3">
        <Button onClick={() => navigate(-1)}>Назад</Button>
      </div>
    </div>
  );
};

export default AdminUserInformationPage;
