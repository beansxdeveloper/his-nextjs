'use client';

import { Table, DatePicker, Button } from 'antd';
import { ReloadOutlined, CalendarOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import dayjs from 'dayjs';

export default function Appointments() {
  const { t } = useTranslation('common');

  const columns = [
    {
      title: 'MRN',
      dataIndex: 'mrn',
      key: 'mrn',
      sorter: true,
    },
    {
      title: 'Patient Name',
      dataIndex: 'patientName',
      key: 'patientName',
      sorter: true,
    },
    {
      title: 'Gender Age',
      dataIndex: 'genderAge',
      key: 'genderAge',
    },
    {
      title: 'Department',
      dataIndex: 'department',
      key: 'department',
    },
    {
      title: 'Visit Time',
      dataIndex: 'visitTime',
      key: 'visitTime',
      sorter: true,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Comments',
      dataIndex: 'comments',
      key: 'comments',
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Appointments (0)</h2>
        <div className="flex items-center space-x-4">
          <DatePicker 
            defaultValue={dayjs('11-11-2567', 'DD-MM-YYYY')}
            format="DD-MM-YYYY"
          />
          <Button icon={<ReloadOutlined />} />
          <Button type="primary" icon={<CalendarOutlined />} />
        </div>
      </div>

      <Table 
        columns={columns} 
        dataSource={[]}
        size="small"
        pagination={false}
        locale={{ emptyText: 'No records found' }}
      />
    </div>
  );
}