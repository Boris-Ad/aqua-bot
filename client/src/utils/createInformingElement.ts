import clsx from 'clsx';
import { InformingTypes } from '../types/types';

export const createInformingElement = (str: string, type: InformingTypes) => {
  const elem = document.getElementById('informing');
  const errorDiv = document.createElement('div');
  errorDiv.className = clsx(
    'w-[260px] flex gap-2 items-center px-2 py-3 relative rounded animate-informing translate-y-[300px] mb-1',
    type === 'access' && ' text-green-700 border border-green-400 rounded-md bg-green-100',
    type === 'warning' && ' text-yellow-700 border border-yellow-400 rounded-md bg-yellow-100',
    type === 'danger' && ' text-rose-700 rounded-md border border-rose-500 bg-rose-300'
  );

  const img = document.createElement('img');
  img.src = type === 'danger' ? '/svg/danger.svg' : type === 'warning' ? '/svg/warning.svg' : '/svg/access.svg';
  img.style.filter = clsx(
    type === 'access' && 'invert(83%) sepia(27%) saturate(3779%) hue-rotate(74deg) brightness(101%) contrast(101%)',
    type === 'warning' && 'invert(90%) sepia(75%) saturate(2660%) hue-rotate(320deg) brightness(100%) contrast(94%)',
    type === 'danger' && 'invert(48%) sepia(85%) saturate(6222%) hue-rotate(344deg) brightness(97%) contrast(101%)'
  );

  img.width = 24;
  img.height = 24;
  const errorP = document.createElement('p');
  errorP.textContent = str;
  setTimeout(() => errorDiv.remove(), 3000);
  errorDiv.append(img);
  errorDiv.append(errorP);
  elem?.appendChild(errorDiv);
};
