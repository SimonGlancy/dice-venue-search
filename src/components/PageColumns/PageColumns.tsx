import { PropsWithChildren } from 'react';
import { useColumniseData } from '../../hooks';
import FlexBox from '../FlexBox';
import { PageColumnsContainer } from './PageColumns.style';
import { PageColumnsProps } from './PageColumns.types';

const PageColumns = <DataType,>(
  props: PropsWithChildren<PageColumnsProps<DataType>>
) => {
  const {
    children,
    items,
    renderItem,
    mediaQueries = [
      '(min-width: 1500px)',
      '(min-width: 1000px)',
      '(min-width: 560px)',
    ],
    columnNumbers = [3, 3, 2],
    defaultColumn = 1,
    ...rest
  } = props;

  const { columns, columnsArray } = useColumniseData({
    mediaQueries,
    items,
    columnNumbers,
    defaultColumn,
  });

  return (
    <PageColumnsContainer {...rest}>
      {columnsArray.map((_, index) => (
        <FlexBox key={index} width='100%' flexDirection={'column'}>
          {columns[index]?.map(renderItem)}
        </FlexBox>
      ))}
    </PageColumnsContainer>
  );
};

export default PageColumns;
