import React, { useState, useEffect, useContext } from 'react';
import { Text, Button, Box, Flex, Card } from 'rebass';

const HomeScreen = () => {

    return (
        <Flex flexDirection="column" sx={{height: "100%"}}>
            <Flex sx={{flex: "0 1 auto", p: 2}}>
                <Text>Hello</Text>
            </Flex>
        </Flex>
    )
}

export default HomeScreen;
