import React, { useState } from 'react';
import {
Tabs, rem, Group, Title, Text, Flex, Badge, Avatar, Divider, Button,
ActionIcon, useMantineColorScheme, useComputedColorScheme, Paper, Card, Table, Select, NumberInput
} from '@mantine/core';
import { Sparkline , LineChart ,AreaChart } from '@mantine/charts';
import './Gpa.css'


function Cgpa() {

  const [semester, setsemester] = useState(Array.from({ length: 8 }, () => ({ sgpa: 0 })));
  const [Cgpa, setCgpa] = useState(null);

  const handleSGPAChange = (index, value) => {
    const updatedsemester = [...semester];
    updatedsemester[index].sgpa = value;
    setsemester(updatedsemester);
  };

  const sparklineData = semester.map((semester, index) => ({
    sem: `S ${index + 1}`,
    SGPA: semester.sgpa,
  }));

  const CalculateCGPA = () => {
    const enteredSemesters = semester.filter((sem) => sem.sgpa !== 0).length;
  
    if (enteredSemesters === 0) {
      setCgpa('0.00');
    } else {
      const totalSGPA = semester.reduce((total, sem) => total + sem.sgpa, 0);
      const Cgpa = totalSGPA / enteredSemesters;
      setCgpa(Cgpa.toFixed(2));
    }
  };
  
  


  return (
    <div>
            <Paper p={5}>
                <Title order={4} ta="center" className='Title'>
                    Calculate your CGPA
                </Title>

                <Flex wrap="wrap" gap="sm" justify="center" align="stretch">

                    <Card shadow="sm" padding="lg" radius="md" withBorder mt={15} className='cardtable'>
                        <Table withRowBorders={false}>
                            <Table.Thead>
                                <Table.Tr>
                                    <Table.Th>Semester</Table.Th>
                                    <Table.Th>SGPA</Table.Th>
                                    
                                </Table.Tr>
                            </Table.Thead>

                            {semester.map((semester, index) => (
                           
                                <Table.Tr key={index}>
                                    <Table.Td>{index +1}</Table.Td>
                                    <Table.Td>
                                        <NumberInput min={0} max={10} value={semester.sgpa} onChange={(value) => handleSGPAChange(index, value)} />
                                    </Table.Td>
                                </Table.Tr>

                            ))}

                                <Table.Tr>
                                    <Table.Td></Table.Td>
                                    <Table.Td><Button fullWidth radius="md" variant="filled" color="violet" onClick={CalculateCGPA} >Calculate</Button></Table.Td>
                                </Table.Tr>
                           
                        </Table>
                        
                    </Card>

                    <Card shadow="sm" padding="lg" radius="md" withBorder mt={15} className='cardtable'>
                      {Cgpa !== null && (
                        <>
                          <Text fw={500} variant="gradient" gradient={{ from: 'violet', to: 'grape', deg: 90 }} style={{ fontSize: '120px' }}>
                              {Cgpa}
                          </Text>
                          <AreaChart
                            h={300}
                            data={sparklineData}
                            dataKey="sem"
                            series={[
                              { name: 'SGPA', color: 'violet' },
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
  )
}

export default Cgpa