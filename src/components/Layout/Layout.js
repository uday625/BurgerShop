import React from 'react';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

import './Layout.css';

//import Aux from '../../hoc/Aux';

const layout = (props) =>(
    <React.Fragment>
        <Toolbar/>
        <main className ="Content">
            {props.children}
        </main>
    </React.Fragment>
);

export default layout;
