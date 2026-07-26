import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MarketingApp from './KingleyFoundation_(9).jsx';
import MembersApp from './components/MembersApp';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/members.html" element={<MembersApp />} />
        <Route path="*" element={<MarketingApp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
