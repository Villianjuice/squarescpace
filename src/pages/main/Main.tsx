import React, { useState } from "react";
import { MainItem, Spinner } from "../../components";

import { IItem } from "../../ts/types";

import "./main.scss";

const Main = () => {
  const [items, setItems] = useState<IItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchItems = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://628f6d170e69410599dc2f20.mockapi.io/products"
      );
      const data: IItem[] = await response.json();
      console.log(data);
      setItems(data);
      setLoading(false);
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };

  React.useEffect(() => {
    fetchItems();
  }, []);

  const skeletons = [...new Array(8)].map((_, index) => (
    <Spinner key={index} />
  ));

  return (
    <section className="main container-margin">
      <div className="main__list">
        {items && items.map((item) => <MainItem {...item} key={item.id} />)}

        {loading && skeletons}
      </div>
    </section>
  );
};

export default Main;
