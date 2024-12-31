import { BrowserRouter, Routes, Route } from 'react-router';
import Login from '../pages/Login/index';
import Dashboard from '../pages/Dashboard/index';
import Connections from '../pages/Connections/index';
import Tickets from '../pages/Tickets/index';
import Contacts from '../pages/Contacts/index';
import QuickAnswers from '../pages/QuickAnswers/index';
import Queues from '../pages/Queues/index';
import { AuthProvider } from "../context/Auth/AuthContext";

import LoggedInLayout from '../layout/index';
import CustomRoute from "./CustomRoute";

const AppRoutes = () => {
    
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path='/login' element={<CustomRoute component={<Login />} />}/>
                    <Route element={<LoggedInLayout />}>
                        <Route index element={ <CustomRoute component={<Dashboard />} isPrivate/> } />
                        <Route path='/conexiones' element={ <CustomRoute component={<Connections />} isPrivate/> } />
                        <Route path='/tickets' element={ <CustomRoute component={<Tickets />} isPrivate/> } />
                        <Route path='/contactos' element={ <CustomRoute component={<Contacts />} isPrivate/> } />
                        <Route path='/respuestasrapidas' element={ <CustomRoute component={<QuickAnswers />} isPrivate/> } />
                        <Route path='/departamentos' element={ <CustomRoute component={<Queues />} isPrivate/> } />
                    </Route>
                </Routes>
            </AuthProvider>
        </BrowserRouter>
        );
}

export default AppRoutes;
