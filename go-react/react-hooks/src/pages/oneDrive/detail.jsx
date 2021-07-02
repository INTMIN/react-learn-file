import React, { useEffect } from "react";
import { connect, useDispatch } from "umi";
import { Table } from "antd";
import { Link } from "react-router-dom";

const Detail = props => {
  console.log("🤙🤙🤙👍👍👍👍👍 ~ file: detail.jsx ~ line 7 ~ props", props);
  const dispatch = useDispatch();

  useEffect(
    () => {
      console.log(props.match?.params);
      // fetchData;
      loadData();
    },

    () => {
      // cleanup
    },
    [props.match?.params?.path]
  );
  const loadData = () => {
    dispatch({
      type: "oneDrive/fetchData",
      payload: { path: props.match?.params?.path }
    });
  };
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
          props.match.params?.path ? (
            <Link
              to={{
                pathname: `/oneDrive/detail`,
                params: `${props.match.params?.path}/${record.path}`
              }}
            >
              查看
            </Link>
          ) : (
            <Link
              to={{
                pathname: `/oneDrive/detail`,
                params: record.path
              }}
            >
              查看
            </Link>
          )
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

  const {
    oneDrive: { data },
    loading
  } = props;

  return (
    <div>
      <Table
        style={{
          overflow: "hidden"
        }}
        loading={loading}
        columns={columns}
        rowKey={record => record.id}
        // expandRowByClick
        dataSource={data}
      />
    </div>
  );
};

export default connect(({ oneDrive, loading }) => ({
  oneDrive,
  loading: loading.effects["oneDrive/fetchData"]
}))(Detail);
