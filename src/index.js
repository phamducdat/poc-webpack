import React, {useEffect} from 'react';
import {Button} from "antd";

const MyComponent = props => {


    console.log("dat wit props = ", props)
    console.log("dat with localStorage = ", localStorage)

    useEffect(() => {
        console.log("dat in useEffect")
    }, [])

    return (
        <div>
            <Button>
                datpd
            </Button>
        </div>
    );
};

MyComponent.propTypes = {};

export default MyComponent;