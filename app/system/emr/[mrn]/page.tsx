'use client';

import { useTranslation } from 'react-i18next';
import EMRContent from '@/components/emr/EMRContent';
import EMRSidebar from '@/components/emr/EMRSidebar';
import PatientHeader from '@/components/emr/PatientHeader';

interface EMRPageProps {
  params: {
    mrn: string;
  };
}

export default function EMRPage({ params }: EMRPageProps) {
  const { t } = useTranslation('common');
  const { mrn } = params;

  return (
    <div className="flex flex-col h-full">
      <PatientHeader />
      {/* mrn={mrn}  */}
      <div className="flex flex-1">
        <div className="flex-1">
          <EMRContent />
          {/* mrn={mrn} */}
        </div>
        {/* <EMRSidebar /> */}
      </div>
    </div>
  );
}

// export function generateStaticParams() {
//   return [
//     { mrn: '6708800398' },
//     { mrn: '6708800340' }
//   ];
// }