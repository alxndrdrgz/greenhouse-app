import DataTable from 'react-data-table-component';
import { seedInventory } from '../../lib/data/seed-inventory';

const columns = [
  {
    name: 'Name',
    selector: (row: any) => row.name,
    sortable: true,
  },
  {
    name: 'Type',
    selector: (row: any) => row.type
  },
  {
    name: 'Quantity',
    selector: (row: any) => row.quantity
  },
  {
    name: 'When to Start?',
    selector: (row: any) => row.start
  },
  {
    name: 'Direct sow?',
    selector: (row: any) => row.direct
  },
];

// TODO - type declaration for seedInventory!
const SeedInventoryTable = () => {
  const data = seedInventory.map((seed: any) => ({
    id: seed.id,
    name: seed.name,
    type: seed.type,
    quantity: seed.quantity,
    start: seed.start,
    direct: seed.direct,
  }));

  return (
    <div>
      {
        data &&
        <DataTable
          columns={columns}
          data={data}
        />
      }
    </div>
  );
}

export default SeedInventoryTable; 