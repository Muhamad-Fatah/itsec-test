import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./pages/Layout"

import Dashboard from "./pages/Dashboard"
import Inbox from "./pages/Inbox"

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact element={<Dashboard />} path="/" />
          <Route element={<Dashboard />} path="/dashboard" />
          <Route element={<Inbox />} path="/inbox" />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App