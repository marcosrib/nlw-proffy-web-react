import React from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/TextArea';

import warningIon from '../../assets/images/icons/warning.svg';
import './styles.css'
import Select from '../../components/Select';


function TeacherForm() {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader title="Que incrivel que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição"
      />
      <main>
        <fieldset>
          <legend>Seus dados</legend>
          <Input name="name" label="Nome completo" />
          <Input name="avatar" label="avatar" />
          <Input name="whatsapp" label="whatsapp" />
          <Textarea name="bio" label="biografia" />
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>
          <Select
            name="subject"
            label="Matéria"
            options={[
              {value: 'Artes', label: 'Artes'},
              {value: 'Biologia', label: 'Biologia'},
              {value: 'Ciências', label: 'Ciências'},
              {value: 'Educação física', label: 'Educação física'},
            ]}
          />
          <Input name="cost" label="Custo da sua hora por aula" />
        </fieldset>
        <footer>
          <p>
            <img src={warningIon} alt="Aviso importante" />
            Importante! <br />
            Preencha todos os dados
        </p>
          <button type="button">Salvar cadastro</button>
        </footer>
      </main>
    </div>
  )
}

export default TeacherForm;