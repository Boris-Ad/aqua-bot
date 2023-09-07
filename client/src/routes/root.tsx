import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import UserBar from '../components/UserBar';
import Informing from '../components/ui/Informing';
import { useTelegram } from '../hooks/telegram/useTelegram';

const RootPage: React.FC = () => {
  const { tgUser } = useTelegram();
  const tgId = tgUser?.id;

  return tgId ? (
    <>
      <UserBar />
      <main className="flex-1 overflow-y-auto bg-slate-100 p-[10px]">
        <Outlet />
      </main>
      <Navbar />
      <Informing />
    </>
  ) : (
    <div className="p-4">
      <h3>Приложение работает только с telegram</h3>
    </div>
  );
};

export default RootPage;
