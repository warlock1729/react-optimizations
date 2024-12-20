import React, { useState, useEffect } from "react";

const generateNumberObjects = () => {
  const numberObjects = [];
  const count = 10;
  for (let i = 1; i <= count; i++) {
    numberObjects.push({
      id: `id-${i}`, // Unique ID for each object
      number: i, // The number itself
    });
  }
  return numberObjects;
};

const fetchData = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Fetched item - ${id}`);
    }, 1000);
  });
};

const ListItem = ({ id, label }) => {

  const [data, setData] = useState(`Waiting for data ${id}`);
  useEffect(() => {
    console.log("rendering")
    fetchData(id).then((data) => {
      setData(`Fetched item - ${id}`);
    });
  }, [id]);

  return <div>{data}</div>;
};

const Optimized = () => {
  const [data, setData] = useState(generateNumberObjects());

  const addItem = () => {
    const newItem = {
      id: `id-${data.length + 1}`,
      number: data.length + 1,
    };
    setData([newItem, ...data]);
  };

  return (
    <div>
      <button onClick={addItem}>Add item (Optimized)</button>
      {data.map((item) => (
        <ListItem id={item.id} key={item.id} label={item.number} />
      ))}
    </div>
  );
};

const Unoptimized = () => {
  const [data, setData] = useState(generateNumberObjects());
  const addItem = () => {
    const newItem = {
      id: `id-${data.length + 1}`,
      number: data.length + 1,
    };
    setData([newItem, ...data]);
  };

  return (
    <div>
      <button onClick={addItem}>Add item (Unoptimized)</button>
      {data.map((item, index) => (
        <ListItem id={item.id} key={index} label={item.number} />
      ))}
    </div>
  );
};

const ListKeys = () => {
  return (
    <div className="flex gap-8 max-h-[500px] overflow-scroll">
      <Optimized />
      <Unoptimized />
    </div>
  );
};

export default ListKeys;
