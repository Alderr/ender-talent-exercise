import React, { useState, useEffect } from "react";
import classnames from 'classnames';

import s from './index.module.scss';

const styles = classnames.bind(s);

const Properties = () => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        // fetch items from token
    },[]);

    return (
        <ul>
            <li>A list of items</li>
        </ul>
    );
}

export default Properties;

