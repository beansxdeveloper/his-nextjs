'use client';

import { Button, Tabs } from 'antd';
import { 
  MessageOutlined, 
  MenuOutlined, 
  ExpandOutlined,
  FileTextOutlined,
  ClockCircleOutlined,
  FormOutlined,
  UserOutlined,
  FileSearchOutlined,
  RightOutlined,
  LeftOutlined,
  ReloadOutlined,
  PrinterOutlined
} from '@ant-design/icons';

const { TabPane } = Tabs;

export default function EMRContent() {
  const actionButtons = [
    { icon: <MessageOutlined />, key: 'message' },
    { icon: <MenuOutlined />, key: 'menu' },
    { icon: <ExpandOutlined />, key: 'expand' },
  ];

  const summaryIcons = [
    { icon: <FileTextOutlined />, badge: '13', key: 'file' },
    { icon: <ClockCircleOutlined />, key: 'clock' },
    { icon: <FormOutlined />, badge: '27', key: 'form' },
    { icon: <FileTextOutlined />, key: 'text' },
    { icon: <UserOutlined />, key: 'user' },
    { icon: <FileSearchOutlined />, key: 'search' },
  ];

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-2">
          {actionButtons.map(({ icon, key }) => (
            <Button key={key} icon={icon} shape="circle" className="bg-yellow-100" />
          ))}
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-4">
            <Button icon={<LeftOutlined />} />
            <span className="text-blue-600">11-11-2567 09:09 67111101027 แพทย์โรงพยาบาล OPD MED</span>
            <Button icon={<RightOutlined />} />
            <Button icon={<ReloadOutlined />} />
            <Button icon={<PrinterOutlined />} />
          </div>
        </div>

        <div className="flex space-x-4 mb-4">
          {summaryIcons.map(({ icon, badge, key }) => (
            <div key={key} className="relative">
              <Button shape="circle" icon={icon} className="bg-yellow-100" />
              {badge && (
                <span className="absolute -top-2 -right-2 bg-yellow-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {badge}
                </span>
              )}
            </div>
          ))}
        </div>

        <div>
          <p className="text-blue-600 mb-4">VisitType: ผู้ป่วย Walk In</p>
          
          <div className="bg-blue-50 p-4 rounded">
            <h3 className="text-lg font-semibold mb-4">RADIOLOGY</h3>
            <table className="w-full">
              <thead>
                <tr className="text-left">
                  <th>S.No</th>
                  <th>Order Item</th>
                  <th>Details</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Status</th>
                  <th>Administration Instruction</th>
                  <th>Qty</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>XRA67Y111100420</td>
                  <td>ABDOMEN LEFT LATERAL (PORTABLE)</td>
                  <td>11-11-2567</td>
                  <td>12-11-2567</td>
                  <td>Ordered</td>
                  <td></td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>XRA67Y111100420</td>
                  <td>BOTH ANKLE AP LAT MORTISE</td>
                  <td>11-11-2567</td>
                  <td>12-11-2567</td>
                  <td>Ordered</td>
                  <td></td>
                  <td>1</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-semibold">LAB</h3>
            {/* Lab content will go here */}
          </div>
        </div>
      </div>
    </div>
  );
}