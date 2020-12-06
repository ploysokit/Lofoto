import React from 'react'

import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const GET_PRODUCTS = gql`
{
    products{
        id
        name
        discription
        price
    }
}
`;

const test = () => {

    const { data } = useQuery(GET_PRODUCTS);

    return (
        <div>
            TEST PAGE
            <br />
            <br />
            {data && data.products.map((prod)=>(
                <div>
                    {prod.name},
                    {prod.price}<br/><br/>
                </div>
            ))}

        </div>
    )
}

export default test
