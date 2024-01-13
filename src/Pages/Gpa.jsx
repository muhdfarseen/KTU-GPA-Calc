import React, { useState } from 'react';
import {
Tabs, rem, Group, Title, Text, Flex, Badge, Avatar, Divider, Button,
ActionIcon, useMantineColorScheme, useComputedColorScheme, Paper, Card, Table, Select, NumberInput
} from '@mantine/core';
import { Sparkline , AreaChart } from '@mantine/charts';

import './Gpa.css'


function Gpa() {

    const [sgpa, setSgpa] = useState(null);
    const [subjects, setSubjects] = useState(Array.from({ length: 8 }, () => ({ credit: 0, grade: '' })));

    const calculateGpaPoints = (grade) => {
        switch (grade) {
            case 'S':
                return 10;
            case 'A+':
                return 9.0;
            case 'A':
                return 8.5;
            case 'B+':
                return 8.0;
            case 'B':
                return 7.5;
            case 'C+':
                return 7.0;
            case 'C':
                return 6.5;
            case 'D':
                return 6.0;
            case 'P':
                return 5.5;
            case 'F':
                return 0;
            default:
                return 0;
        }
    };

    const handleCreditChange = (index, value) => {
        const updatedSubjects = [...subjects];
        updatedSubjects[index].credit = value;
        setSubjects(updatedSubjects);
    };

    const handleGradeChange = (index, value) => {
        const updatedSubjects = [...subjects];
        updatedSubjects[index].grade = value;
        setSubjects(updatedSubjects);
    };

    const calculatesgpa = () => {
        const totalSubjects = subjects.length;
        const totalCreditPoints = subjects.reduce((total, subject) => total + subject.credit, 0);

        if (totalCreditPoints === 0) {
            setSgpa('0.00');
            return;
        }

        const totalGpaPoints = subjects.reduce(
            (total, subject) => total + subject.credit * calculateGpaPoints(subject.grade),
            0
        );

        const sgpa = totalGpaPoints / totalCreditPoints;
        setSgpa(sgpa.toFixed(2));
    };

    const sparklineData = subjects.map((subject, index) => ({
        sub: `📔 ${index + 1}`,
        'Grade Point' : calculateGpaPoints(subject.grade),
      }));

    

    return (
        <div>
            <Paper p={5}>
                <Title order={4} ta="center" className='Title'>
                    Calculate your SGPA
                </Title>

                <Flex wrap="wrap" gap="sm" justify="center" align="stretch">

                    <Card shadow="sm" padding="lg" radius="md" withBorder mt={15} className='cardtable'>
                        <Table withRowBorders={false}>
                            <Table.Thead>
                                <Table.Tr>
                                    <Table.Th>Subject</Table.Th>
                                    <Table.Th>Credit</Table.Th>
                                    <Table.Th>Grade</Table.Th>
                                </Table.Tr>
                            </Table.Thead>
                            {subjects.map((subject, index) => (
                                <Table.Tr key={index}>
                                    <Table.Td>{index + 1}</Table.Td>
                                    <Table.Td>
                                        <NumberInput min={0} max={10} value={subject.credit} onChange={(value) => handleCreditChange(index, value)} />
                                    </Table.Td>
                                    <Table.Td>
                                        <Select
                                            placeholder="Pick Grade"
                                            data={['S', 'A+', 'A', 'B+', 'B', 'C+', 'C', 'D', 'P', 'F']}
                                            value={subject.grade}
                                            onChange={(value) => handleGradeChange(index, value)}
                                        />
                                    </Table.Td>
                                </Table.Tr>

                                
                            ))}
                                <Table.Tr>
                                    <Table.Td></Table.Td>
                                    <Table.Td></Table.Td>
                                    <Table.Td><Button fullWidth radius="md" variant="filled" color="violet" onClick={calculatesgpa}>Calculate</Button></Table.Td>
                                </Table.Tr>
                        </Table>
                        
                    </Card>

                    <Card shadow="sm" padding="lg" radius="md" withBorder mt={15} className='cardtable'>
                        {sgpa !== null && (
                            <>
                                <Text fw={500} variant="gradient" gradient={{ from: 'violet', to: 'grape', deg: 90 }} style={{ fontSize: '120px' }}>
                                    {sgpa}
                                </Text>
                                <AreaChart
                                    h={300}
                                    data={sparklineData}
                                    dataKey="sub"
                                    series={[
                                    { name: 'Grade Point', color: 'violet' },
                                    ]}
                                    curveType="linear"
                                    tickLine="xy"
                                    gridAxis="xy"
                                />
                            </>
                        )}
                    </Card>

                </Flex>
            </Paper>
        </div>
    );
}

export default Gpa;