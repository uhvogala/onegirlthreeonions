import React, { useState, useEffect, useContext } from 'react';
import { Box, Button, Flex, Text } from 'rebass';

const ActivityFilter = ({values, valuesChanged}) => {

    console.log(values);

    const [selected, setSelected] = useState([]);
    useEffect(() => {
        valuesChanged(selected);
    }, [selected]);

    const addOrRemove = (arr, val) => {
        var index = arr.indexOf(val);

        if (index === -1) {
            arr.push(val);
        } else {
            arr.splice(index, 1);
        }
        return arr;
    };

    const filterButtons = values.map((value, index) => (
        <Box 
            key={index} 
            value={value} 
            onClick={event => setSelected(
                addOrRemove([...selected], event.target.textContent)
            )}
            sx={{
                height: "30px", 
                mx: 1, 
                whiteSpace: "nowrap",
                bg: selected.indexOf(value) === -1 ? "secondary" : "primary",
                px: 3,
                borderRadius: "circle"
            }}
        >
            <Text sx={{fontSize: 1, fontWeight: 600, color: "white", lineHeight: "30px"}}>{value}</Text>
        </Box>
    ));

    return (
        <Box sx={{mt: 4, position: "relative", minHeight: "35px", overflowX: "scroll"}}>
            <Box sx={{position: "absolute"}}>
                <Flex
                    justifyContent="center"
                    xs={{overflowX: "auto"}}
                >
                    {filterButtons}
                </Flex>
            </Box>
        </Box>
    )

}

export default ActivityFilter;
