'use client';

import { Table, DatePicker, Button, Tabs } from 'antd';
import { ReloadOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import dayjs from 'dayjs';

export default function MedicineRejected() {
  const { t } = useTranslation('common');

  const columns = [
    {
      title: 'MRN',
      dataIndex: 'mrn',
      key: 'mrn',
    },
    {
      title: 'Patient Name',
      dataIndex: 'patientName',
      key: 'patientName',
    },
    {
      title: 'Order',
      dataIndex: 'order',
      key: 'order',
    },
    {
      title: 'Reject Reason',
      dataIndex: 'rejectReason',
      key: 'rejectReason',
    },
    {
      title: 'Comment',
      dataIndex: 'comment',
      key: 'comment',
    },
  ];

  const items = [
    {
      key: 'opd',
      label: 'OPD',
      children: (
        <Table 
          columns={columns} 
          dataSource={[]}
          size="small"
          pagination={false}
          locale={{ emptyText: t('COMMON.NO_DATA') }}
        />
      ),
    },
    {
      key: 'ipd',
      label: 'IPD',
      children: (
        <Table 
          columns={columns} 
          dataSource={[]}
          size="small"
          pagination={false}
          locale={{ emptyText: t('COMMON.NO_DATA') }}
        />
      ),
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Medicine Rejected (0)</h2>
        <div className="flex items-center space-x-4">
          <DatePicker 
            defaultValue={dayjs('11-11-2567', 'DD-MM-YYYY')}
            format="DD-MM-YYYY"
          />
          <Button icon={<ReloadOutlined />} />
        </div>
      </div>

      <Tabs defaultActiveKey="opd" items={items} />
    </div>
  );
}