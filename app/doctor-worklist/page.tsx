'use client';

import { useTranslation } from 'react-i18next';
import DoctorWorklist from '../components/DoctorWorklist';
import MedicineRejected from '../components/MedicineRejected';
import Appointments from '../components/Appointments';

export default function DoctorWorklistPage() {
  const { t } = useTranslation();

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">{t('DASHBOARD.TITLE')}</h1>
      
      <div className="grid gap-8">
        <DoctorWorklist />
        <MedicineRejected />
        <Appointments />
      </div>
    </div>
  );
}