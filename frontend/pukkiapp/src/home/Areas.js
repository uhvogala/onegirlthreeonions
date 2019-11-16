import React, { useState, useEffect, useContext } from 'react';
import { Text, Button, Box, Flex, Card, Image, Heading } from 'rebass';
import BulletText from '../components/BulletText';
import PeopleIndex from '../components/PeopleIndex';
import areaData from '../assets/content.json';

const AreasScreen = ({area}) => {

    const details = areaData.filter(data => data.name === area);
    
    if (details.length === 1) {
        const data = details[0];

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
                                src={data.thumbnail}
                            />
                            <Heading>{data.title}</Heading>
                            <Text></Text>
                            <Flex
    
                            >
                                <BulletText text={data.duration} />
                                <BulletText text={data.length} />
                                <BulletText text={data.difficulty} />
                            </Flex>
                            <PeopleIndex status="good" />
                            <Box sx={{textAlign: "left"}}>
                                <Text sx={{hyphens: "auto"}}>{data.text}</Text>
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

    } else {
        return <Text>No data</Text>;
    }


}

export default AreasScreen;
