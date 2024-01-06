import React from 'react'
import { useEffect } from 'react';
import {
Tabs, rem, Group, Title, Text, Flex, Badge, Avatar, Divider,
ActionIcon
} from '@mantine/core';
import { IconStarsFilled, IconStarFilled, IconBrandGoogleAnalytics } from '@tabler/icons-react';
import { IconSunFilled, IconMoonStars } from '@tabler/icons-react';
import cx from 'clsx';
import classes from './Demo.module.css';
import './Home.css'
import Sgpa from './Gpa';
import Cgpa from './Cgpa';
import Imarks from './Imarks';

function Home() {

    const iconStyle = { width: rem(12), height: rem(12) };


    return (

        <div>

            <Tabs variant='pills' color='violet' pt={16} mx={16} defaultValue="sgpa" >

                <Group justify="space-between">

                    <Title order={2} className='Title'>
                        KTU GPA Calculator
                        <Badge ml={10} variant="light" color="violet">2019 Scheme</Badge>
                    </Title>

                    <Tabs.List justify="flex-end" >
                        <Tabs.Tab className='list' style={{ width: "100px" }} value="sgpa" leftSection={<IconStarFilled style={iconStyle} />}>
                            SGPA
                        </Tabs.Tab>
                        <Tabs.Tab className='list' style={{ width: "100px" }} value="cgpa" leftSection={<IconStarsFilled style={iconStyle} />}>
                            CGPA
                        </Tabs.Tab>
                        <Tabs.Tab className='list' style={{ width: "100px" }} value="imarks" leftSection={<IconBrandGoogleAnalytics style={iconStyle} />}>
                            Internal
                        </Tabs.Tab>
                    </Tabs.List>

                </Group>

                <Divider my="sm" />

                <Tabs.Panel value="sgpa">
                    <Sgpa />
                </Tabs.Panel>

                <Tabs.Panel value="cgpa">
                    <Cgpa />
                </Tabs.Panel>

                <Tabs.Panel value="imarks">
                    <Imarks />
                </Tabs.Panel>
            </Tabs>


            <Divider my="sm" />
            <Group justify='center'>
                <Text ta="center" size="xs" color='grey'>
                    KTU follows 10 point grade scale.
                    SGPA and CGPA are calculated as the
                    weighted average of grade point multiplied
                    by the credits for the courses
                </Text>
            </Group>


        </div>
    )
}

export default Home