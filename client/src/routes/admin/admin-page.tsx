import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminNavbar from '../../components/admin/AdminNavbar';
import AdminHeader from '../../components/admin/AdminHeader';

const AdminPage: React.FC = () => {
  return (
    <>
      <div className="flex">
        <aside className="w-full max-w-[240px] bg-cyan-900 text-slate-200">
          <AdminNavbar />
        </aside>
        <main className="w-full bg-slate-100 flex flex-col h-screen">
          <AdminHeader />
          <div className="overflow-y-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
};

export default AdminPage;
