import React, { useState, useEffect, useContext } from 'react';
import { Text, Button, Box, Flex, Card, Image, Heading } from 'rebass';
import BulletText from '../components/BulletText';
import PeopleIndex from '../components/PeopleIndex';
import areaData from '../assets/content.json';

const AreasScreen = () => {

    const trails = areaData;

    const area = {
        name: "Nuuksio National Park",
        shortName: "Nuuksio"
    };

    const trailThumbs = trails.map((trail, index) => (
        <Box
            key={index}
            sx={{width: "240px", borderRadius: "default", mr: 3, my: 3, position: "relative"}}
        >
            <Image src={trail.thumbnail} sx={{
                height: "310px",
                width: "240px",
                objectFit: "cover",
                borderRadius: "default"
            }}/>
            <Box
                sx={{
                    position: "absolute",
                    bottom: "6px",
                    height: "100px",
                    width: "100%",
                    borderBottomLeftRadius: "default",
                    borderBottomRightRadius: "default",
                    backgroundImage: "linear-gradient(to bottom, #31849301, #318493)"
                }}
            >
                <Flex
                    sx={{height: "100%", mx: 3}}
                    flexDirection="column"
                    justifyContent="center"
                >
                    <Flex alignItems="center">
                        <Text variant="thumbnailHeading" sx={{mr: 4}}>{trail.title}</Text>
                        <PeopleIndex noText={true} />
                    </Flex>
                    <Flex>
                        <BulletText text={"Approx. " + trail.duration} sx={{color: "white"}} bulletSx={{bg: "white"}}/>
                        <BulletText text={trail.length}  sx={{color: "white"}} bulletSx={{bg: "white"}}/>
                    </Flex>

                </Flex>
            </Box>
        </Box>
    ));

    return (
        <Box variant="fullContainer" sx={{}}>
            <Flex 
                flexDirection="column"
                sx={{
                    height: "100%",
                    pt: "64px",
                    px: "24px"
                }}
            >
                <Heading>{area.name}</Heading>
                <Text sx={{textAlign: "left"}}>Explore everything {area.shortName} has to offer</Text>
                <Box sx={{position: "relative", minHeight: "350px", overflowX: "scroll"}}>
                    <Box sx={{position: "absolute"}}>
                        <Flex
                            justifyContent="center"
                            xs={{overflowX: "auto"}}
                        >
                            {trailThumbs}
                        </Flex>
                    </Box>
                </Box>
            </Flex>
        </Box>
    );

}

export default AreasScreen;
