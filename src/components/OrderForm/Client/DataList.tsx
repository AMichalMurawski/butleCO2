import React from 'react';
import { DataName, DataValue, DataWraper } from './Client.styled';

interface dataListProps {
  name: string;
  value: string;
}
interface DataListProps {
  width: string;
  dataList: dataListProps[];
}

const DataList: React.FC<DataListProps> = ({ width, dataList }) => {
  return (
    <>
      {dataList.map(data => (
        <DataWraper key={data.name}>
          <DataName $width={width}>{data.name}:</DataName>
          <DataValue>{data.value}</DataValue>
        </DataWraper>
      ))}
    </>
  );
};

export default DataList;
