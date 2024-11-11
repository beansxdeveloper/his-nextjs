'use client';

import { useTranslation } from 'react-i18next';
import PatientHeader from '../components/emr/PatientHeader';
import EMRSidebar from '../components/emr/EMRSidebar';
import EMRContent from '../components/emr/EMRContent';
import '../i18n/client';

export default function EMRPage() {
  const { t } = useTranslation('common');

  return (
    <div className="flex flex-col h-full">
      <PatientHeader />
      <div className="flex flex-1">
        <div className="flex-1">
          <EMRContent />
        </div>
        <EMRSidebar />
      </div>
    </div>
  );
}