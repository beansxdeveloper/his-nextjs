'use client';

import { Button, Tag, Tooltip } from 'antd';
import { AlertOutlined, PrinterOutlined } from '@ant-design/icons';
import Image from 'next/image';
import Link from 'next/link';

export default function PatientHeader() {
  return (
    <div className="bg-yellow-50 p-4 flex items-start justify-between">
      <div className="flex items-start space-x-4">
        <div className="w-24 h-24 relative">
          {/* <Image
            src="/patient-avatar.png"
            alt="Patient"
            width={96}
            height={96}
            className="rounded"
          /> */}
        </div>
        <div>
          <div className="flex items-center space-x-2">
            <h2 className="text-xl font-semibold">นาย ทองดี มีลาภ</h2>
            <Tag color="blue">VIP</Tag>
          </div>
          <div className="space-y-1 text-sm">
            <p>6708800398</p>
            <p className="flex items-center space-x-2">
              <span>ชาย 40 Y</span>
              <span>DOB: 01 ม.ค. 2527/123456789</span>
              <Link href="/pacs" className="text-blue-600">PACS</Link>
            </p>
            <div className="flex items-center space-x-2">
              <Tag icon={<AlertOutlined />} color="error">Alert</Tag>
              <span>Thai</span>
              <Button icon={<PrinterOutlined />} size="small" />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="text-right">
          <h3 className="font-semibold">Visit Details</h3>
          <p>67111101027 / 11-11-2567 09:09</p>
          <p>OPD MED / แพทย์โรงพยาบาล</p>
          <p className="truncate max-w-md">บริษัท คู โบต้า เอ็นจิ้น (ไทยแลนด์) จำกัด / เครดิต</p>
        </div>
        <div className="text-right">
          <h3 className="font-semibold">Vital Sign</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>Ht : -</div>
            <div>BMI : -</div>
            <div>Wt : -</div>
            <div>BSA : -</div>
            <div>T : -</div>
            <div>Sys : -</div>
            <div>P : -</div>
            <div>Dia : -</div>
          </div>
        </div>
      </div>
    </div>
  );
}