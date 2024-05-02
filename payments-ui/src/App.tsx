import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import PageHeader from "./components/pageHeader/PageHeader";
import Search from "./components/Search/Search";
import Transactions from "./components/Transactions/Transactions";
import NewTransaction from "./components/NewTransaction/NewTransaction"

function App() : JSX.Element  {
    return (
        <BrowserRouter>
            <PageHeader/>
            <Routes>
                <Route path="/find" element={
                    <>
                        <Search/>
                        <Transactions/>
                    </>
                } /> 
                <Route path="/add" element={
                    <>
                        <NewTransaction />
                    </>
                } /> 
                <Route path="/" element={<h1>Payments System</h1>} />  
                <Route path="*" element={<h1>Page Not Found</h1>} />                    
            </Routes>
        </BrowserRouter>
    );
}

export default App;
