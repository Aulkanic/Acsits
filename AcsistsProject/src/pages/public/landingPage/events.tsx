/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { fetchData } from "../../../hooks/useFetchData";
import { saveAllEvents, selector } from "../../../zustand/store/store.provider";
import useStore from "../../../zustand/store/store";
import { Badge, Calendar, Col, Radio, Row, Select, Tooltip, Typography } from "antd";
import dayjs, { Dayjs } from "dayjs";
import dayLocaleData from 'dayjs/plugin/localeData';

dayjs.extend(dayLocaleData);

export const LEventPage = () => {
    const officer = useStore(selector('officer'))
    const fetchEvents = async() => {
        const querySnapshot = await fetchData('doc_events');
        querySnapshot.shift();
        saveAllEvents(querySnapshot)
      };
    
      useEffect(() => {
        fetchEvents();
      }, []);

      const cellRender = (current: Dayjs, info: { originNode: any; type: string }) => {
        if (info.type === 'date') {
          const listData = officer.events?.filter((event: any) => dayjs(event.date).isSame(current, 'day'));
          return (
            <div className="events flex flex-col gap-2">
              {listData.map((item: any) => {
                const status = dayjs(item.date).isBefore(dayjs(), 'day') ? 'error' : 'success';
                return <Badge className='bg-[#060E613B] flex items-center p-4 w-full h-full rounded-lg' key={item.id} status={status}
                 text={<p className='text-[#060E61] line-clamp-1'><Tooltip placement="bottom" title={item.title}><p>{item.title}</p></Tooltip></p>} />;
              })}
            </div>
          );
        }
        return info.originNode;
      };
      
  return (
    <div className="px-0 sm:px-16">
        <div className='mb-20'>
        <Calendar         headerRender={({ value, type, onChange, onTypeChange }) => {
          const start = 0;
          const end = 12;
          const monthOptions = [];

          let current = value.clone();
          const localeData = value.localeData();
          const months = [];
          for (let i = 0; i < 12; i++) {
            current = current.month(i);
            months.push(localeData.monthsShort(current));
          }

          for (let i = start; i < end; i++) {
            monthOptions.push(
              <Select.Option key={i} value={i} className="month-item">
                {months[i]}
              </Select.Option>,
            );
          }

          const year = value.year();
          const month = value.month();
          const options = [];
          for (let i = year - 10; i < year + 10; i += 1) {
            options.push(
              <Select.Option key={i} value={i} className="year-item">
                {i}
              </Select.Option>,
            );
          }
          const monthName = localeData.months(current.month(month));
          return (
            <div style={{ padding: 8 }} className="flex justify-between">
              <Typography.Title level={4}>Events/Plans for {monthName}</Typography.Title>
              <Row gutter={8}>
                <Col>
                  <Radio.Group
                    size="small"
                    onChange={(e) => onTypeChange(e.target.value)}
                    value={type}
                  >
                    <Radio.Button value="month">Month</Radio.Button>
                    <Radio.Button value="year">Year</Radio.Button>
                  </Radio.Group>
                </Col>
                <Col>
                  <Select
                    size="small"
                    className="my-year-select"
                    value={year}
                    onChange={(newYear) => {
                      const now = value.clone().year(newYear);
                      onChange(now);
                    }}
                  >
                    {options}
                  </Select>
                </Col>
                <Col>
                  <Select
                    size="small"
                    value={month}
                    onChange={(newMonth) => {
                      const now = value.clone().month(newMonth);
                      onChange(now);
                    }}
                  >
                    {monthOptions}
                  </Select>
                </Col>
              </Row>
            </div>
          );
        }}
         cellRender={cellRender} className='w-full p-4 rounded-lg shadow-[0px_8px_5px_0px_#a0aec0]' />
        </div>
    </div>
  )
}
