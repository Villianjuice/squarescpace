import React, { useState } from "react";
import { MainItem, Spinner } from "../../components";

import { IItem } from "../../ts/types";

const Main = () => {
  const [items, setItems] = useState<IItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchItems = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://62f21f39b1098f15080bac7e.mockapi.io/items"
      );
      const data: IItem[] = await response.json();
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
