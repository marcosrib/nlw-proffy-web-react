import React from 'react';

import whatsaapIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

export interface Teacher {
  id: number;
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
  subject: string;
  cost: number

}

interface TeacherItemProps {
  teacher: Teacher;

}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>
      <p>{teacher.bio}</p>
      <footer>
        <p>
          Preço/hora
            <strong>R${teacher.cost}</strong>
        </p>
        <a href="https://wa.me/11969239022">
          <img src={whatsaapIcon} alt="whatsapp" />
          Entrar em contato
          </a>
      </footer>
    </article>
  );
}

export default TeacherItem;