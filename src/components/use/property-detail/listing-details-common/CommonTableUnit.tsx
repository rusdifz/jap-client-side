import { Badge, Divider, Table } from 'antd';
import type { TableColumnsType } from 'antd';

import { PropPropertyDetail } from '@/libs/type/property.type';
import { IUnit } from '@/libs/interfaces';

// interface DataType {
//   key: React.Key;
//   name: string;
//   age: number;
//   address: string;
// }

const columns: TableColumnsType<any> = [
  // {
  //   title: 'Unit ID',
  //   dataIndex: 'unit_id',
  //   align: 'center',
  // },
  {
    title: 'Size',
    dataIndex: 'size',
    align: 'center',
  },
  {
    title: 'Rent Price',
    dataIndex: 'rent_sqm',
    align: 'center',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    align: 'center',
  },
  {
    title: 'Condition',
    dataIndex: 'condition',
    align: 'center',
  },
  {
    title: 'Available',
    dataIndex: 'available',
    align: 'center',
    render: (_: any, record: IUnit) => {
      return record.unit_id ? (
        <>
          <div
            className={`tag border-30 ${record.available ? 'sale' : 'rent'}`}
          >
            {record.available ? 'Available' : 'Lease'}
          </div>
        </>
      ) : null;
    },
  },
];

const CommonTableUnit: React.FC<PropPropertyDetail> = ({ property }) => {
  return (
    <>
      <h4 className="mb-20">Available Units</h4>
      <Table<IUnit> columns={columns} dataSource={property.units} />
    </>
  );
};

export default CommonTableUnit;
