import React, { useState, useEffect } from "react";

import api from "../../services/api";
import Modal from "react-modal";

import { AiOutlineEdit, AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";
import { Container, overlayStyle, contentStyle, Form } from "./styles";

import { logout } from "../../services/auth";

export default function Home({ history }) {
  const [clientes, setClientes] = useState();
  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [estadoCivil, setEstadoCivil] = useState("");
  const [cpf, setCpf] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [cliente, setCliente] = useState({});

  async function handleClientes() {
    const { data } = await api.get("/clientes");
    setClientes(data);
  }

  async function handleAddClient(e) {
    e.preventDefault();
    try {
      await api.post("/clientes", {
        nome,
        idade,
        estado_civil: estadoCivil,
        cpf,
        cidade,
        estado,
      });
      handleClientes();
      setOpenAdd(false);
    } catch (error) {
      console.log(error);
    }
  }

  function handleOpenEdit(client) {
    setOpenEdit(true);
    setCliente(client);
  }

  async function handleDelete(id) {
    try {
      await api.delete(`/clientes/${id}`);
      handleClientes();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleEditClient(e) {
    e.preventDefault();
    try {
      await api.patch(`/clientes/${cliente.id}`, {
        nome: nome === "" ? cliente.nome : nome,
        idade: idade === "" ? cliente.idade : idade,
        estado_civil: estadoCivil === "" ? cliente.estado_civil : estadoCivil,
        cpf: cpf === "" ? cliente.cpf : cpf,
        cidade: cidade === "" ? cliente.cidade : cidade,
        estado: estado === "" ? cliente.estado : estado,
      });
      handleClientes();
      setOpenEdit(false);
    } catch (error) {
      console.log(error);
    }
  }

  function handleLogout() {
    logout();
    history.push("/");
  }

  useEffect(() => {
    handleClientes();
  }, []);

  return (
    <Container>
      <button onClick={() => handleLogout()}>Sair</button>
      <table>
        <tr>
          <th>Nome</th>
          <th>Idade</th>
          <th>Estado Civil</th>
          <th>CPF</th>
          <th>Cidade</th>
          <th>Estado</th>
          <th>Ações</th>
        </tr>
        {clientes?.map((cliente) => (
          <tr key={cliente.id}>
            <td>{cliente.nome}</td>
            <td>{cliente.idade} Anos</td>
            <td>{cliente.estado_civil}</td>
            <td>{cliente.cpf}</td>
            <td>{cliente.cidade}</td>
            <td>{cliente.estado}</td>
            <td>
              <button onClick={() => handleOpenEdit(cliente)}>
                <AiOutlineEdit />
              </button>
              <button onClick={() => handleDelete(cliente.id)}>
                <AiOutlineDelete />
              </button>
            </td>
          </tr>
        ))}
      </table>

      <button onClick={() => setOpenAdd(true)}>
        <AiOutlinePlus />
        Adicionar
      </button>
      <Modal
        onRequestClose={() => setOpenAdd(false)}
        isOpen={openAdd}
        style={{
          overlay: overlayStyle,
          content: contentStyle,
        }}>
        <h1>Cadastro de Clientes</h1>
        <Form onSubmit={handleAddClient}>
          <input
            type="text"
            placeholder="Nome"
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            type="number"
            placeholder="Idade"
            onChange={(e) => setIdade(e.target.value)}
          />
          <select
            name="estado_civil"
            onChange={(e) => setEstadoCivil(e.target.value)}>
            <option value="">Selecione..</option>
            <option value="Solteiro (a)">Solteiro (a)</option>
            <option value="Viúvo (a)">Viúvo (a)</option>
            <option value="Casado (a)">Casado (a)</option>
          </select>
          <input
            type="text"
            placeholder="CPF"
            onChange={(e) => setCpf(e.target.value)}
          />
          <input
            type="text"
            placeholder="Cidade"
            onChange={(e) => setCidade(e.target.value)}
          />
          <input
            type="text"
            placeholder="Estado"
            onChange={(e) => setEstado(e.target.value)}
          />
          <button type="submit">Cadastrar</button>
        </Form>
      </Modal>
      <Modal
        onRequestClose={() => setOpenEdit(false)}
        isOpen={openEdit}
        style={{
          overlay: overlayStyle,
          content: contentStyle,
        }}>
        <h1>Cadastro de Clientes</h1>
        <Form onSubmit={handleEditClient}>
          <input
            type="text"
            placeholder={cliente?.nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            type="number"
            placeholder={cliente?.idade}
            onChange={(e) => setIdade(e.target.value)}
          />
          <select
            name="estado_civil"
            onChange={(e) => setEstadoCivil(e.target.value)}>
            {cliente.estado_civil ? (
              <option>{cliente.estado_civil}</option>
            ) : (
              ""
            )}
            <option value="Solteiro (a)">Solteiro (a)</option>
            <option value="Viúvo (a)">Viúvo (a)</option>
            <option value="Casado (a)">Casado (a)</option>
          </select>
          <input
            type="text"
            placeholder={cliente?.cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
          <input
            type="text"
            placeholder={cliente?.cidade}
            onChange={(e) => setCidade(e.target.value)}
          />
          <input
            type="text"
            placeholder={cliente?.estado}
            onChange={(e) => setEstado(e.target.value)}
          />
          <button type="submit">Cadastrar</button>
        </Form>
      </Modal>
    </Container>
  );
}
