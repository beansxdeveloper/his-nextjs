'use client';

import { Table, Select, DatePicker, Button, Input } from 'antd';
import { ReloadOutlined, CalendarOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import dayjs from 'dayjs';
import { useRouter } from 'next/navigation';

const { Option } = Select;

export default function DoctorWorklist() {
  const { t } = useTranslation('common');
  const router = useRouter();

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
      render: (text: string, record: any) => (
        <button
          onClick={() => router.push(`/emr/${record.mrn}`)}
          className="text-blue-600 hover:text-blue-800 hover:underline text-left"
        >
          {text}
        </button>
      ),
    },
    {
      title: '♿',
      dataIndex: 'wheelchair',
      key: 'wheelchair',
      width: 50,
    },
    {
      title: '👤',
      dataIndex: 'vip',
      key: 'vip',
      width: 50,
    },
    {
      title: '📋',
      dataIndex: 'notes',
      key: 'notes',
      width: 50,
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
      sorter: true,
    },
    {
      title: 'Visit',
      dataIndex: 'visit',
      key: 'visit',
    },
  ];

  const data = [
    {
      key: '1',
      mrn: '6708800398',
      patientName: 'นายทองดี มีลาภ',
      wheelchair: '0/3',
      vip: '0/2',
      notes: '',
      genderAge: 'ชาย 40Y',
      department: 'OPD MED',
      visit: '09',
    },
    {
      key: '2',
      mrn: '6708800340',
      patientName: 'น.ส.ทิพยา ทดสอบ',
      wheelchair: '',
      vip: '',
      notes: '',
      genderAge: 'หญิง 12Y 9M 11D',
      department: 'OPD MED',
      visit: '09',
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Input.Search
            placeholder="Search MRN or Name"
            style={{ width: 200 }}
          />
          <Select defaultValue="all" style={{ width: 200 }}>
            <Option value="all">All, Triaged, Registered, Arrive...</Option>
          </Select>
          <DatePicker 
            defaultValue={dayjs('11-11-2567', 'DD-MM-YYYY')}
            format="DD-MM-YYYY"
          />
          <Button icon={<ReloadOutlined />} />
        </div>
        <Button type="primary" icon={<CalendarOutlined />}>
          View Calendar
        </Button>
      </div>

      <Table 
        columns={columns} 
        dataSource={data}
        size="small"
        pagination={false}
        className="bg-white rounded-lg shadow"
      />
    </div>
  );
}