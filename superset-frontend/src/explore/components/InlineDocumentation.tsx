import { styled } from '@superset-ui/core';
import React, { FunctionComponent, ReactElement } from 'react';

export interface InlineDocumentationProps {
  vizType: string;
}

const Style = styled.div`
  width: 100%;
  height: 100%;
  margin: 10px;
`;

const docs: { [string: string]: ReactElement<any, any> | string } = {
  echarts_timeseries_scatter: 'timeseries_metric',
  mixed_timeseries: 'timeseries_metric',
  echarts_timeseries: 'timeseries_metric',
  echarts_timeseries_smooth: 'timeseries_metric',
  echarts_timeseries_stepped: 'timeseries_metric',
  echarts_timeseries_line: 'timeseries_metric',
  echarts_area: 'timeseries_metric',
  echarts_timeseries_bar: 'timeseries_metric',
  timeseries_metric: (
    <div>
      For this type of chart, two things must be set. First, the time column is
      likely already set if this resource is compatible with visualization by
      time series. Second, a metric must be set. This is set under the "Query"
      section, in the "Metrics" field. This sets the height of the line at each
      point. The simple form is a column and how it is aggregated - sum, max,
      min, etc.
    </div>
  ),
};

function renderDocs(vizType: string): ReactElement<any, any> {
  let forType: any = vizType;
  while (typeof forType === 'string') {
    forType = docs[forType];
  }
  return (
    forType ?? (
      <div>No documentation is available for this type of visualization.</div>
    )
  );
}
const InlineDocumentation: FunctionComponent<InlineDocumentationProps> = ({
  vizType,
}) => <Style>{renderDocs(vizType)}</Style>;

export default InlineDocumentation;
