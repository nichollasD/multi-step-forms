import React from "react";
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetail from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import ListItemText from '@material-ui/core/ListItemText'

import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';

export const Review = ({ formData, navigation }) => {
  const { go } = navigation;
  const {
    cnpj, nomeFantasia, razaoSocial, cep, endereco, numero, complemento, bairro, cidade, uf, nome, sobrenome, telefone, email, senha
  } = formData;

  return (
    <Container maxWidth='sm'>
      <h3>Review</h3>
      <RenderAccordion summary="Cliente" go={go} details={[
        { 'Cnpj': cnpj },
        { 'Nome Fantasia': nomeFantasia },
        { 'Razão Social': razaoSocial },
        { 'Cep': cep },
        { 'Endereço': endereco },
        { 'Número': numero },
        { 'Complemento': complemento },
        { 'Bairro': bairro },
        { 'Cidade': cidade },
        { 'UF': uf },
      ]} />
      <RenderAccordion summary="Usuario" go={go} details={[
        { 'Nome': nome },
        { 'Sobrenome': sobrenome },
        { 'Telefone': telefone },
        { 'E-mail': email },
        { 'Senha': senha },
      ]} />

      <div style={{ marginTop: "1.5rem" }}>
        <Button
          color="secondary"
          variant="contained"
          style={{ marginRight: "1.5rem" }}
          onClick={() => navigation.previous()}>
          Back
        </Button>
        <Button
          color="primary"
          variant="contained"
          style={{ marginTop: '' }}
          onClick={() => go('submit')}>
          Submit
        </Button>
      </div>
    </Container>
  );
};

export const RenderAccordion = ({ summary, details, go }) => (
  <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
    >{summary}</AccordionSummary>
    <AccordionDetail>
      <div>
        {details.map((data, index) => {
          const objKey = Object.keys(data)[0];
          const objValue = data[Object.keys(data)[0]];

          return <ListItemText key={index}>{`${objKey}: ${objValue}`}</ListItemText>

        })}
        <IconButton
          color="primary"
          component="span"
          onClick={() => go(`${summary.toLowerCase()}`)}
        ><EditIcon /></IconButton>
      </div>
    </AccordionDetail>
  </Accordion>
)
