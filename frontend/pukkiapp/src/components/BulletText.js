import React from 'react'
import { Text, Box, Flex } from 'rebass'
const BulletText = props => 
<Flex
    alignItems="center"
>
    <Box sx={{
        bg: 'text',
        width: '4px',
        height: '4px',
        borderRadius: 'circle',
        mr: "4px"
    }}></Box>
    <Text variant="subtext" sx={{mr: 3, whiteSpace: "nowrap"}}>{props.text}</Text>
</Flex>;

export default BulletText;
  