import React from 'react';

import './Layout.css';

//import Aux from '../../hoc/Aux';

const layout = (props) =>(
    <React.Fragment>
        <div> Toolbar, SideDrawer, Backdrop </div>
        <main className ="Content">
            {props.children}
        </main>
    </React.Fragment>
);

export default layout;
