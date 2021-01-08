import { Col, Form, Radio, Row, Select, Table } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "umi";
import styles from "./index.less";
import SoundSwiper from "../../components/SoundSwiper";

const { Option } = Select;

const TopicBrand = (props) => {
  const [form] = Form.useForm();
  const [expendKeyArr, setExpendKeyArr] = useState([]);
  // const [pagination, setPagination] = useState({
  //   page: 1,
  //   pageSize: 10,
  // });
  const [formValues, setFormValues] = useState({});
  console.log("TopicBrand -> formValues", formValues);
  const dispatch = useDispatch();

  useEffect(() => {
    loadData();
    // fetchData;
    return () => {
      // cleanup
    };
  }, [formValues]);
  // useEffect(() => {
  //    console.log(expendKeyArr);
  // }, [expendKeyArr]);

  const loadData = (type) => {
    let params = {
      // ...pagination,
      ...formValues,
    };
    // if (type !== "first") {
    //   params.page = pagination.page;
    // } else {
    //   params.page = 1;
    // }

    dispatch({
      type: "topicbgm/fetchData",
      payload: { ...params },
    });
  };

  const valueChange = (changeValues, allValues) => {
    // console.log(changeValues, allValues);
    setFormValues({ ...allValues });
  };

  const show = (expanded, record) => {
    // console.log(expanded, record);
  };
  const rowChange = (expandedRows) => {
    if (expandedRows.length > 1) {
      setExpendKeyArr(expandedRows.slice(1, 2));
    } else {
      setExpendKeyArr(expandedRows);
    }
  };

  // const handleChange = (pagination, filtersArg, sorter) => {
  //   const filters = Object.keys(filtersArg).reduce((obj, key) => {
  //     const newObj = { ...obj };
  //     const value = this.getValue(filtersArg[key]);
  //     if (value) {
  //       newObj[key] = value;
  //     }
  //     return newObj;
  //   }, {});
  //   setPagination({
  //     pagination: { page: pagination.current, pageSize: pagination.pageSize },
  //   });
  // };

  const columns = [
    { title: "Name", dataIndex: "name", width: 200, key: "name" },
    { title: "总使用量", dataIndex: "age", width: 200, key: "age" },
    { title: "增量", dataIndex: "address", width: 400, key: "address" },
    { title: "增长百分比", dataIndex: "add", width: 400, key: "add" },
    {
      title: "使用趋势",
      width: 200,
      dataIndex: "",
      key: "x",
      render: () => <a>查看详情</a>,
    },
  ];

  const data = [
    {
      key: 1,
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      description:
        "My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.",
    },
    {
      key: 2,
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      description:
        "My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.",
    },
    {
      key: 3,
      name: "Not Expandable",
      age: 29,
      address: "Jiangsu No. 1 Lake Park",
      description: "This not expandable",
    },
    {
      key: 4,
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      description:
        "My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.",
    },
  ];

  return (
    <div className={styles.wrap}>
      <div className={styles.content}>
        <Form
          form={form}
          name="topicBrandForm"
          onValuesChange={valueChange}
          initialValues={{ sort: "4", time: "3" }}
        >
          <Row className={styles.formRow} justify="space-between">
            <Col>
              <Form.Item name="sort">
                <Radio.Group>
                  <Radio.Button value="4">4</Radio.Button>
                  <Radio.Button value="3">3</Radio.Button>
                  <Radio.Button value="2">2</Radio.Button>
                  <Radio.Button value="1">1</Radio.Button>
                </Radio.Group>
              </Form.Item>
            </Col>
            <Col>
              <Form.Item name="time">
                <Select style={{ width: 150 }}>
                  <Option value="3">3</Option>
                  <Option value="7">7</Option>
                  <Option value="15">15</Option>
                  <Option value="30">30</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </Form>
        <Table
          style={{
            overflow: "hidden",
          }}
          columns={columns}
          expandRowByClick
          expandable={{
            expandedRowRender: (record) => (
              <div style={{ width: "calc(80vw - 32px)" }}>
                <SoundSwiper />
              </div>
            ),
            onExpand: show,
            onExpandedRowsChange: rowChange,
            expandedRowKeys: expendKeyArr,
          }}
          dataSource={data}
        />
      </div>
    </div>
  );
};
export default TopicBrand;
