import { AddressProps } from "../../../context/Order/orderProps";

export const clientAddress = (initialValues: any) => {
    let value = "";
    
    Object.keys(initialValues.address).map(key2 => {
        const name2 = key2 as keyof AddressProps;
        const nextValue = initialValues.address[name2];
    
        if (nextValue !== "") {
            switch (key2) {
                case 'number':
                case 'city':
                    value += " ";
                    break;
                case 'local':
                    value += " lok. ";
                    break;
                case 'postalCode':
                    value += ", ";
                    break;
            }
            value += nextValue;
        };
    });

    return value
}