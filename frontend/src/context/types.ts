import React from "react";

export interface IData {
  id: number;
  service: string;
  link: string;
}

export interface IDatas {
  datas: IData[];
  setDatas: (data: IData[]) => void;
}

export const DEFAULT_VALUE = {
  datas: [],
  setDatas: () => {},
};

export interface IChildren {
  children: React.ReactNode;
}

export interface IModal {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
}
