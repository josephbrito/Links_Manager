import { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import { api } from "../service";
import { IDatas, DEFAULT_VALUE, IChildren, IData } from "./types";

const DataContext = createContext<IDatas>(DEFAULT_VALUE);

export function DataProvider({ children }: IChildren) {
  const [datas, setDatas] = useState<IData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const req = await api.get("api/todos");
      const data = req.data;
      return setDatas(data);
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ datas, setDatas }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const { datas, setDatas } = useContext(DataContext);
  return { datas, setDatas };
}
