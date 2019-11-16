import React from 'react'
import { Text, Box, Flex } from 'rebass'
const PeopleIndex = props => {
    const color = props.status === "good" ? "lightCrowded" : (props.status === "okay" ? "mediumCrowded" : "crowded");
    return (
        <Flex
            alignItems="center"
        >
            <Box sx={{
                bg: color,
                width: '15px',
                height: '15px',
                borderRadius: 'circle',
                mr: "10px",
                my: "15px"

            }}></Box>
            {
                props.noText ||
                <Text sx={{mr: 3, color: color}}>{props.status === "good" ? "Calm" : props.status === "okay" ? "Slightly crowded" : "Crowded"}</Text>
            }
        </Flex>
    );
}
;

export default PeopleIndex;
  