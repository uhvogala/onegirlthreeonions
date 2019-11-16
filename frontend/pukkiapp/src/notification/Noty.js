import React, { useState, useEffect, useContext } from 'react';
import { Text, Button, Box, Flex, Card, Image, Heading } from 'rebass';
import BulletText from '../components/BulletText';
import PeopleIndex from '../components/PeopleIndex';

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
                            src="https://pukkistorage.blob.core.windows.net/pukkicontainer/haukkalampi.jpg"
                        />
                        <Heading>Haukkalampi - Solvalla</Heading>
                        <Text></Text>
                        <Flex

                        >
                            <BulletText text="Approx. 2h" />
                            <BulletText text="4.6 km" />
                            <BulletText text="Extremely challenging" />
                        </Flex>
                        <PeopleIndex status="good" />
                        <Box sx={{textAlign: "left"}}>
                            <Text sx={{hyphens: "auto"}}>
                            Along the route, you will find the place above, which has been the most popular to take pictures! 
                            </Text>
                        </Box>
                        <Flex
                            alignItems="center"
                            justifyContent="space-between"
                            sx={{
                                width: "100%",
                                mt: 4,
                            }}
                        >
                            <Text variant="link">Explore other trails</Text>
                            <Button>Read more</Button>
                        </Flex>
                    </Flex>
                </Card>
            </Flex>
        </Box>
    )
}

export default NotyScreen;
