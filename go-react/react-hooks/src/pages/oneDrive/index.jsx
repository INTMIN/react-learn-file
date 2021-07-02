import { Breadcrumb, Button, Col, Form, Radio, Row, Select, Table } from "antd";
import React, { useEffect, useState } from "react";
import { connect, useDispatch, history } from "umi";
import styles from "./index.less";
import SoundSwiper from "../../components/SoundSwiper";

const { Option } = Select;

const OneDriveList = props => {
  const [form] = Form.useForm();
  const [expendKeyArr, setExpendKeyArr] = useState([]);
  // const [pagination, setPagination] = useState({
  //   page: 1,
  //   pageSize: 10,
  // });
  const [formValues, setFormValues] = useState({});
  const [nowPath, setNowPath] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    loadData();
    // fetchData;
    return () => {
      // cleanup
    };
  }, [formValues, nowPath]);
  // useEffect(() => {
  //    console.log(expendKeyArr);
  // }, [expendKeyArr]);

  const loadData = type => {
    let params = {
      // ...pagination,
      ...formValues,
      path: nowPath.length ? nowPath.join("/") : undefined
    };
    // if (type !== "first") {
    //   params.page = pagination.page;
    // } else {
    //   params.page = 1;
    // }

    dispatch({
      type: "oneDrive/fetchData",
      payload: { ...params }
    });
  };

  const valueChange = (changeValues, allValues) => {
    // console.log(changeValues, allValues);
    setFormValues({ ...allValues });
  };

  const changeNowPath = path => {
    let newPath = [...nowPath];
    newPath.push(path);
    setNowPath(newPath);
  };

  const GoPath = path => {
    let newPath = [...nowPath];
    const findIndex = newPath.findIndex(item => item === path);
    const finaPath = newPath.slice(0, findIndex + 1);
    setNowPath(finaPath);
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
    { title: "类型", dataIndex: "type", width: 200, key: "type" },
    { title: "大小", dataIndex: "size", width: 400, key: "size" },
    { title: "修改时间", dataIndex: "time", width: 400, key: "time" },
    {
      title: "操作",
      width: 200,
      dataIndex: "",
      key: "x",
      render: (_, record) =>
        record.type === "folder" && record.childCount > 0 ? (
          <Button onClick={() => changeNowPath(record.name)}>查看</Button>
        ) : (
          <a
            href={`https://1197052014571378.cn-beijing.fc.aliyuncs.com/2016-08-15/proxy/henshangOneDrive/OneDriveApi/download?id=${record.id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            点击下载
          </a>
        )
    }
  ];

  // const data = [{"name": "backup", "id": "01ERGLJUYDOJLNCQM2XRAIIVQJRFXWFCDQ", "time": "2020-04-21T02:27:17Z", "type":
  //     "folder", "childCount": 4, "size": 70108628}, {"name": "learnGOPDF", "id": "01ERGLJU42VNWS4K4HQ5HZAIWQ2ZHAGOCI", "time":
  //     "2020-04-21T02:27:17Z", "type": "folder", "childCount": 9, "size": 148623857}, {"name": "MK-unlocker", "id":
  //     "01ERGLJU5PW7PBQSRDFBG2YJW4VIYRHRM5", "time": "2020-04-21T02:27:15Z", "type": "folder", "childCount": 19, "size":
  //     16216259}, {"name": "testPicture", "id": "01ERGLJU5HWSGWM76HF5EIAYQXCZPXIUHK", "time": "2020-04-21T02:27:16Z", "type":
  //     "folder", "childCount": 93, "size": 61347622}, {"name": "\u56fe\u7247", "id": "01ERGLJU3UAU344EHZXRA2ORIIQFRBQ7DZ",
  //   "time": "2020-08-01T16:31:11Z", "type": "folder", "childCount": 1, "size": 39323547}, {"name": "\u5c0f\u5de5\u5177",
  //   "id": "01ERGLJU4QY5XOUP23EFFYCBVLY7QRXONI", "time": "2020-04-21T02:27:16Z", "type": "folder", "childCount": 20, "size":
  //     227997413}, {"name": "\u7b14\u8bb0\u672c", "id": "01ERGLJUYG5M5RJRRKORCZNHHZJGEZDCUS", "time": "2020-04-21T06:12:08Z",
  //   "type": "folder", "childCount": 1, "size": 7581}, {"time": "2021-01-12T10:09:27Z", "size": 107959, "type": "picture",
  //   "id": "01ERGLJU4PIMILVDPN2VF37XYJER7QWO7F", "name": "2020\u5e74\u4ee3\u7801\u8d21\u732e.png"}, {"time":
  //     "2020-10-23T08:51:11Z", "size": 72870, "type": "file", "id": "01ERGLJU7INYHPQNZ4JFAK2EZWG472DWJR", "name":
  //     "battery-report.html"}, {"time": "2020-12-06T14:35:58Z", "size": 15121, "type": "file", "id":
  //     "01ERGLJU7K5KBXKBZDBZDY5L45T2QDBPJU", "name": "bookmarks_20201206223558.html"}, {"time": "2020-09-15T07:09:15Z", "size":
  //     344828, "type": "file", "id": "01ERGLJU75UWURD6SRAJG3TXSN725DRNFA", "name": "favorites_2020_9_15.html"}, {"time":
  //     "2021-02-03T08:57:53Z", "size": 2767, "type": "file", "id": "01ERGLJUZVXBRRUCZSCFCKW7NN4NLBHOBD", "name": "hosts"},
  //   {"time": "2020-04-26T12:36:59Z", "size": 484862, "type": "file", "id": "01ERGLJU6ZW4FI4WIXYRHYD5KGIBLR2S6Z", "name":
  //       "min @ henshang"}, {"time": "2020-07-14T00:12:55Z", "size": 4946, "type": "file", "id":
  //       "01ERGLJU3HNBTG3GNPWZGL2LWUMTBBI3SC", "name": "min\u5de5\u4f5c"}, {"time": "2021-01-07T07:49:57Z", "size": 12802441,
  //     "type": "file", "id": "01ERGLJU5DXWIRNUU3OJG35GHD5FHLPJUY", "name": "oneNote\u5907\u4efd.zip"}, {"time":
  //       "2020-11-13T10:48:34Z", "size": 326557, "type": "picture", "id": "01ERGLJU7T4C7N7PYFUBCIHN6QP43YDGV6", "name":
  //       "\u4e3b\u677f\u56fe\u7247.jpg"}, {"time": "2020-07-23T10:29:36Z", "size": 81203, "type": "picture", "id":
  //       "01ERGLJU6CGVFW3VQITBAJPNX23JCIKLH7", "name": "\u5fae\u4fe1\u622a\u56fe_20200723182920.png"}, {"time":
  //       "2020-05-25T16:46:25Z", "size": 85947, "type": "picture", "id": "01ERGLJU7CSXUW7XJ2WVHZEQHJNJGWJJGT", "name":
  //       "\u62a5\u540d.PNG"}, {"time": "2020-04-21T02:22:27Z", "size": 0, "type": "file", "id":
  //       "01ERGLJU6YU3ICHGWGYBHIRNF2AZZUSCVK", "name": "\u6587\u6863.docx"}, {"time": "2020-12-11T06:36:59Z", "size": 15189,
  //     "type": "file", "id": "01ERGLJU3ERHNVFVGSUZDI422DTNYBXXLK", "name": "\u6587\u6863-MIN.docx"}, {"time":
  //       "2020-05-02T02:45:38Z", "size": 605696, "type": "file", "id": "01ERGLJUZ6ILZU2QIR3VDLOPPMMPG6C27W", "name":
  //       "\u65e5\u5e38\u9632\u63a7.ppt"}, {"time": "2020-05-02T02:42:52Z", "size": 516416, "type": "file", "id":
  //       "01ERGLJU6HT3JPM75MGBB3AUL4N4WXKUZG", "name": "\u6f14\u793a\u6587\u7a3f 1.pptx"}, {"time": "2020-05-02T02:38:23Z",
  //     "size": 0, "type": "file", "id": "01ERGLJU7HP3N5MTXGKBH2CERQQOWWUZNT", "name": "\u6f14\u793a\u6587\u7a3f.pptx"},
  //   {"time": "2020-07-20T07:40:27Z", "size": 887097, "type": "picture", "id": "01ERGLJU2QYM335HTKOFC3ZIJOZTJTMNM4", "name":
  //       "\u7834\u89e3huawei.PNG"}, {"time": "2021-03-04T07:37:21Z", "size": 2163061, "type": "picture", "id":
  //       "01ERGLJU772WZSMRSK5ZCIJV6IJW7LZPXO", "name": "\u8ba1\u7b97\u673a2021\u5e74\u8003\u8bd5\u5b89\u6392\uff0820210304\uff09.png"}];

  // console.log(data)
  const {
    oneDrive: { data },
    loading
  } = props;
  return (
    <div className={styles.wrap}>
      <div className={styles.content}>
        <Form
          form={form}
          name="topicBrandForm"
          onValuesChange={valueChange}
          initialValues={{ time: "3" }}
        >
          <Row className={styles.formRow} justify="space-between">
            <Col>
              <Breadcrumb>
                <Breadcrumb.Item>主页</Breadcrumb.Item>
                {nowPath.map(item => (
                  <Breadcrumb.Item key={item}>
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={() => GoPath(item)}
                    >
                      {item}
                    </span>
                  </Breadcrumb.Item>
                ))}
              </Breadcrumb>
            </Col>
            {/* <Col>
              <Form.Item name="sort">
                <Radio.Group>
                  <Radio.Button value="4">4</Radio.Button>
                  <Radio.Button value="3">3</Radio.Button>
                  <Radio.Button value="2">2</Radio.Button>
                  <Radio.Button value="1">1</Radio.Button>
                </Radio.Group>
              </Form.Item>
            </Col> */}
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
            overflow: "hidden"
          }}
          columns={columns}
          loading={loading}
          rowKey={record => record.id}
          expandRowByClick
          dataSource={data}
        />
      </div>
    </div>
  );
};
export default connect(({ oneDrive, loading }) => ({
  oneDrive,
  loading: loading.effects["oneDrive/fetchData"]
}))(OneDriveList);
