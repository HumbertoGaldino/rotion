import { Router, Route } from 'electron-router-dom'

import { Blank } from './pages/blank'
import { Default } from './pages/layouts/default'
import { Document } from './pages/document'

export function Routes() {
  return (
    <Router
      main={
        <Route path="/" element={<Default />}>
          <Route path="/" element={<Blank />} />
          <Route path="/documents/:id" element={<Document />} />
        </Route>
      }
    />
  )
}
