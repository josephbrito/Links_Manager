import React, { ChangeEvent, useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { MdModeEditOutline } from "react-icons/md";
import { useData } from "../../context";
import { api } from "../../service";
import Modal from "react-modal";

import { Container, Title, Link, Delete, Edit } from "./styles";
import { Container as ContainerModal, Button, Input } from "../NewSave/styles";

interface IProps {
  id: number;
  service: string;
  link: string;
}

Modal.setAppElement("#root");

const Card: React.FC<IProps> = ({ id, service, link }: IProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [serviceEdit, setServiceEdit] = useState<string>(service);
  const [linkEdit, setLinkEdit] = useState<string>(link);

  const handleServiceChange = (e: ChangeEvent<HTMLInputElement>) => {
    setServiceEdit(e.target.value);
  };

  const handleLinkChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLinkEdit(e.target.value);
  };

  const { setDatas } = useData();

  const onRequestOpen = () => {
    setIsOpen(true);
  };

  const onRequestClose = () => {
    setIsOpen(false);
  };

  const handleDeleteService = async () => {
    try {
      await api.delete(`api/todos/${id}`);
      const reqNewData = await api.get("api/todos");
      const newData = reqNewData.data;
      setDatas(newData);
      alert("Deleted!");
      return;
    } catch (error: any) {
      console.log(error);
      return;
    }
  };

  const handleSubmitUpdate = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    try {
      await api.put(`api/todos/${id}/`, {
        service: serviceEdit,
        link: linkEdit,
      });
      const reqNewData = await api.get("api/todos/");
      const newData = reqNewData.data;

      alert("updated!");
      setIsOpen(false);
      setDatas(newData);
    } catch (error) {
      console.log(error);
      return;
    }
  };
  return (
    <Container>
      <Delete onClick={handleDeleteService}>
        <BsFillTrashFill />
      </Delete>
      <Edit onClick={onRequestOpen}>
        <MdModeEditOutline />
      </Edit>
      <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
        <ContainerModal>
          <h1>Edit</h1>
          <Input
            placeholder="Service"
            type="text"
            value={serviceEdit}
            onChange={handleServiceChange}
            required={true}
          />
          <Input
            placeholder="Link"
            type="text"
            value={linkEdit}
            onChange={handleLinkChange}
            required={true}
          />
          <Button onClick={handleSubmitUpdate}>EDIT</Button>
        </ContainerModal>
      </Modal>

      <Title>{service}</Title>

      <span>
        <Link href={`${link}`} target={"_blank"}>
          {link}
        </Link>
      </span>
    </Container>
  );
};

export default Card;
