import React, { useState, useEffect, useContext } from 'react';
import { Text, Button, Box, Flex, Card, Image, Heading } from 'rebass';
import BulletText from '../components/BulletText';
import PeopleIndex from '../components/PeopleIndex';
import ActivityFilter from '../components/ActivityFilter';
import areaData from '../assets/content.json';
import activities from '../assets/activities.json';

const AreasScreen = () => {

    const trails = areaData;

    const area = {
        name: "Nuuksio National Park",
        shortName: "Nuuksio"
    };

    const tags = [...new Set(trails.reduce((prev, curr) => [...prev, ...curr.tags], []))];

    const [categoryFilter, setCategoryFilter] = useState([]);

    const trailThumbs = trails.filter(trail => (
        categoryFilter.length === 0 || trail.tags.filter(t => categoryFilter.includes(t)).length > 0
    )).map((trail, index) => (
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
                        <Text variant="thumbnailHeading" sx={{mr: 3}}>{trail.title}</Text>
                        <PeopleIndex noText={true} status="good"/>
                    </Flex>
                    <Flex>
                        <BulletText text={"Approx. " + trail.duration} sx={{color: "white"}} bulletSx={{bg: "white"}}/>
                        <BulletText text={trail.length}  sx={{color: "white"}} bulletSx={{bg: "white"}}/>
                    </Flex>

                </Flex>
            </Box>
        </Box>
    ));

    const activityBoxes = activities.map((activity, index) => (
        <Box
            key={index}
            sx={{width: ["100%", "80%"], borderRadius: "default", my: 2, position: "relative"}}
        >
            <Image src={activity.photo} sx={{
                height: ["180px", "300px"],
                width: "100%",
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
                    justifyContent="flex-end"
                >
                    <Text variant="thumbnailHeading" sx={{mr: 4, mb: 2}}>{activity.name}</Text>
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
                    px: "24px",
                    overflowY: "auto"
                }}
            >
                <Heading>{area.name}</Heading>
                <Text sx={{textAlign: "left"}}>Explore everything {area.shortName} has to offer</Text>
                <ActivityFilter values={tags} valuesChanged={setCategoryFilter}/>
                <Box sx={{position: "relative", minHeight: "380px", overflowX: "scroll"}}>
                    <Box sx={{position: "absolute"}}>
                        <Flex
                            justifyContent="center"
                            xs={{overflowX: "auto"}}
                        >
                            {trailThumbs}
                        </Flex>
                    </Box>
                </Box>
                <Text sx={{textAlign: "left", fontSize: 4, fontWeight: 400}}>Featured activities</Text>
                <Flex alignItems="center" flexDirection="column" sx={{flex: "1 1 auto"}}>
                    {activityBoxes}
                </Flex>
            </Flex>
        </Box>
    );

}

export default AreasScreen;
