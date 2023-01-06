import React from "react";
import Card from "../Card";

import { Container, OpenModal, Title } from "./styles";
import { useData } from "../../context";

import { BsPlusLg } from "react-icons/bs";

import Modal from "react-modal";
import { useModal } from "../../context/modal";
import NewSave from "../NewSave";

Modal.setAppElement("#root");

const Main: React.FC = () => {
  const { datas } = useData();
  const { isOpen, setIsOpen } = useModal();

  const onRequestOpen = () => {
    setIsOpen(true);
  };

  const onRequestClose = () => {
    setIsOpen(false);
  };

  if (!datas.length) {
    return (
      <Container>
        <OpenModal onClick={onRequestOpen}>
          <BsPlusLg />
        </OpenModal>
        <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
          <NewSave />
        </Modal>
        <Title>No links saved</Title>
      </Container>
    );
  }
  return (
    <Container>
      <OpenModal onClick={onRequestOpen}>
        <BsPlusLg />
      </OpenModal>
      <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
        <NewSave />
      </Modal>
      {datas.map(({ id, service, link }) => (
        <Card key={id} id={id} service={service} link={link} />
      ))}
    </Container>
  );
};

export default Main;
