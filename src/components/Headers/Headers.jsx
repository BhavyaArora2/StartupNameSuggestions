import React from 'react';
import './Headers.css';

// class Application extends React.Component {
//     render() {
//         return <h1>Lenovo Laptop is cool</h1>
//     }
// }


const Header = ({ headTitle, headerExpanded }) => {
    return (
        <div className="head-container">
            <h1 className={`head-title ${headerExpanded
                    ? 'head-title-expanded'
                    : 'head-title-contracted'
                    }`} //Template Literal
                >{headTitle}</h1>

            <img
                src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png"
                className={`head-image ${headerExpanded
                    ? 'head-image-expanded'
                    : 'head-image-contracted'
                    }`} //Template Literal
                alt="headerImage"
            />
        </div>
    );
};

export default Header;
