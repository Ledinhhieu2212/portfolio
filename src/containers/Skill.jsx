import React from 'react';
import List from '../components/List';
import Lists from '~/api/api';


export default function Skill() {
  return (
    <section id="skill">
      <List title={Lists.Skill.title} list_item={Lists.Skill.list_item}/>
    </section>
  );
}
