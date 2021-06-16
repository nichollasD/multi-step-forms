import React from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export const Usuario = ({ formData, setForm, navigation }) => {
  const { nome, sobrenome, telefone, email, senha } = formData;
  return (
    <Container maxWidth="xs">
      <h3>Usuario</h3>
      <TextField
        label="Nome"
        name="nome"
        value={nome}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="Sobrenome"
        name="sobrenome"
        value={sobrenome}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="Telefone"
        name="telefone"
        value={telefone}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="E-mail"
        name="email"
        value={email}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        fullWidth
      />
      <TextField
        label="Senha"
        name="senha"
        type="password"
        value={senha}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <div style={{ marginTop: "1rem" }}>
        <Button
          color="secondary"
          variant="contained"
          style={{ marginRight: "1rem" }}
          onClick={() => navigation.previous()}>
          Back
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={() => navigation.next()}>
          Next
        </Button>
      </div>
    </Container>
  );
};
