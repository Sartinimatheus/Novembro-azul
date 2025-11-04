
import React from 'react';
import { type Slide } from './types';

const StethoscopeIcon: React.FC<{ className?: string }> = ({ className = 'w-16 h-16' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547a2 2 0 00-.547 1.806l.477 2.387a6 6 0 00.517 3.86l.158.318a6 6 0 00.517 3.86l2.387.477a2 2 0 001.806-.547a2 2 0 00.547-1.806l-.477-2.387a6 6 0 00-.517-3.86l-.158-.318a6 6 0 00-.517-3.86l-2.387-.477a2 2 0 00-.547-1.022m13.402 0a2 2 0 01-1.022.547l-2.387.477a6 6 0 01-3.86-.517l-.318-.158a6 6 0 00-3.86-.517l-2.387-.477a2 2 0 01-1.806-.547a2 2 0 01-.547-1.806l.477-2.387a6 6 0 01.517-3.86l.158-.318a6 6 0 01.517-3.86l2.387-.477a2 2 0 011.806.547a2 2 0 01.547 1.806l-.477 2.387a6 6 0 01-.517 3.86l-.158.318a6 6 0 01-.517 3.86l2.387.477a2 2 0 011.022.547m-6.91-4.012a3 3 0 01-4.242 0 3 3 0 010-4.242 3 3 0 014.242 0 3 3 0 010 4.242zM18 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const UserGroupIcon: React.FC<{ className?: string }> = ({ className = 'w-16 h-16' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const ShieldCheckIcon: React.FC<{ className?: string }> = ({ className = 'w-16 h-16' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const InformationCircleIcon: React.FC<{ className?: string }> = ({ className = 'w-16 h-16' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const SLIDES: Slide[] = [
  {
    icon: <InformationCircleIcon className="w-16 h-16 text-blue-500" />,
    title: "O Que São os Sintomas?",
    description: "Fique atento a sinais como dificuldade em urinar, diminuição do jato de urina, necessidade de urinar mais vezes e presença de sangue na urina ou sêmen. A detecção precoce é crucial."
  },
  {
    icon: <UserGroupIcon className="w-16 h-16 text-blue-500" />,
    title: "Fatores de Risco",
    description: "Homens acima de 50 anos, com histórico familiar da doença (pai ou irmão), e homens negros têm maior risco. Conhecer seu risco é o primeiro passo para a prevenção."
  },
  {
    icon: <ShieldCheckIcon className="w-16 h-16 text-blue-500" />,
    title: "Como Prevenir?",
    description: "Adote um estilo de vida saudável: pratique exercícios físicos regularmente, mantenha uma alimentação equilibrada rica em frutas e vegetais, e evite o excesso de gordura e álcool."
  },
  {
    icon: <StethoscopeIcon className="w-16 h-16 text-blue-500" />,
    title: "Consulte um Médico",
    description: "A recomendação é que homens a partir dos 45-50 anos conversem com um urologista sobre os exames de rastreamento, como o PSA e o toque retal. Não deixe o preconceito vencer a saúde."
  }
];
