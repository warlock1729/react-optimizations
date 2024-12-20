import React, { useEffect } from "react";

const fetchData = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Data for item ${id}`);
    }, 1000);
  });
};

const ListItem = (id) => {
  const [data, setData] = useState("Waiting for data " + id);
  useEffect(() => {
    fetchData(id);
  });
  return <div>{data}</div>;
};

const Optimized = () => {
  return <></>;
};

const Unoptimized = () => {
  return <></>;
};

const ListKeys = () => {
  return (
    <div style={{ display: flex, gap: "20px" }}>
      <Optimized />
      <Unoptimized />
    </div>
  );
};

export default ListKeys;
