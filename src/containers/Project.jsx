import React from 'react';
import List from '../components/List';
import Lists from '~/api/api';

export default function Project() {
  return (
    <section id="project">
      <List title={Lists.Project.title} list_item={Lists.Project.list_item} />
    </section>
  );
}
