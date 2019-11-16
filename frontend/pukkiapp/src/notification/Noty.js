import React, { useState, useEffect, useContext } from 'react';
import { Text, Button, Box, Flex, Card, Image, Heading } from 'rebass';

const NotyScreen = ({area}) => {

    return (
        <Box variant="fullContainer" sx={{bg: 'primaryLight'}}>
            <Flex 
                flexDirection="column" 
                alignItems="center"
                justifyContent="center"
                sx={{
                    height: "100%",
                }}
            >
                <Card 
                    sx={{
                        ml: [0, "auto"],
                        mr: [0, "auto"],
                        width: ["100%", "400px"]
                    }}
                >
                    <Flex 
                        flexDirection="column"
                        alignItems="flex-start"
                        sx={{flex: "0 1 auto", p: 2}}
                    >
                        <Image
                            alignSelf="center"
                            variant="image"
                            src="https://www.luontoon.fi/documents/10550/56972493/sumumaisema_MauriLeivo_1050.jpg/79addfc2-a065-18fc-284d-293d0bda3baf?t=1557920301125"
                        />
                        <Heading>Haukkalampi - Solvalla</Heading>
                        <Text></Text>
                        <Flex

                        >
                            
                        </Flex>
                    </Flex>
                </Card>
            </Flex>
        </Box>
    )
}

export default NotyScreen;
