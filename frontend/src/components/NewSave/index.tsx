import React, { ChangeEvent, useState } from "react";
import { api } from "../../service";

import { Button, Container, Input } from "./styles";

import { useModal } from "../../context/modal";
import { useData } from "../../context";

const NewSave: React.FC = () => {
  const { isOpen, setIsOpen } = useModal();
  const { datas, setDatas } = useData();

  const [service, setService] = useState<string>("");
  const [link, setLink] = useState<string>("");

  const handleServiceChange = (e: ChangeEvent<HTMLInputElement>) => {
    setService(e.target.value);
  };

  const handleLinkChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLink(e.target.value);
  };

  const handleSubmitData = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (!service || !link) {
      alert("Please! fill the fields");
      return;
    }

    try {
      await api.post("api/todos/", {
        service,
        link,
      });

      const reqNewData = await api.get("api/todos");
      const newData = reqNewData.data;

      alert("Done!");
      setDatas(newData);
      setIsOpen(false);
      return;
    } catch (error: any) {
      console.log(error);
      return;
    }
  };

  return (
    <Container>
      <h1>New link</h1>
      <Input
        placeholder="Service"
        type="text"
        value={service}
        onChange={handleServiceChange}
        required={true}
      />
      <Input
        placeholder="Link"
        type="text"
        value={link}
        onChange={handleLinkChange}
        required={true}
      />
      <Button onClick={handleSubmitData}>SAVE</Button>
    </Container>
  );
};

export default NewSave;
