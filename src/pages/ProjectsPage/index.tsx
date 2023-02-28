import React from 'react'
import NewsSoon from '../../components/NewsSoon'
import PageTemplate from '../../templates/PageTemplate'

function ProjectsPage() {
  const title = 'Logo mais vai ter coisa aqui!'
  return (
    <PageTemplate>
      <NewsSoon title={title}/>
    </PageTemplate>
  )
}

export default ProjectsPage