import React from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export const Cliente = ({ formData, setForm, navigation }) => {
  const { cnpj, nomeFantasia, razaoSocial, cep, endereco, numero, complemento, bairro, cidade, uf } = formData;

  return (
    <Container maxWidth="xs">
      <h3>Cliente</h3>
      <TextField
        label="Cnpj"
        name="cnpj"
        value={cnpj}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        fullWidth
      />
      <TextField
        label="Nome Fantasia"
        name="nomeFantasia"
        value={nomeFantasia}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="Razão Social"
        name="razaoSocial"
        value={razaoSocial}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="Cep"
        name="cep"
        value={cep}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="Endereço"
        name="endereco"
        value={endereco}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="Número"
        name="numero"
        value={numero}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="Complemento"
        name="complemento"
        value={complemento}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="Bairro"
        name="bairro"
        value={bairro}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="Cidade"
        name="cidade"
        value={cidade}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="Uf"
        name="uf"
        value={uf}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <Button
        variant="contained"
        fullWidth
        color="primary"
        style={{ marginTop: "1rem" }}
        onClick={() => navigation.next()}
      >
        Next
      </Button>
    </Container>
  );
};
