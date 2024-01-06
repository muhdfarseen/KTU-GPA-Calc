import React from 'react'
import
{   Tabs, rem, Group, Title, Text, Flex, Badge, Avatar, Divider,
    ActionIcon, useMantineColorScheme, useComputedColorScheme, Paper, Card, Table, Select,NumberInput
}from '@mantine/core';


function Gpa() {
  return (
    <div>

        <Paper p={20}>
            <Title order={4} className='Title'>
                Calculate your Internal  
            </Title>

            <Group justify='space-between'>

            <Card shadow="sm" padding="lg" radius="md" withBorder mt={15} className='cardtable'>
                <Table withRowBorders={false}>
                    <Table.Thead>
                        <Table.Tr>
                            <Table.Th>Subject</Table.Th>
                            <Table.Th>Credit</Table.Th>
                            <Table.Th>Grade</Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tr>
                        <Table.Td>1</Table.Td>
                        <Table.Td><NumberInput /></Table.Td>
                        <Table.Td><Select placeholder="Pick value" data={['S', 'A+', 'A', 'B+','B', 'C+', 'C', 'D','P', 'F']}/></Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td>1</Table.Td>
                        <Table.Td><NumberInput /></Table.Td>
                        <Table.Td><Select placeholder="Pick value" data={['S', 'A+', 'A', 'B+','B', 'C+', 'C', 'D','P', 'F']}/></Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td>1</Table.Td>
                        <Table.Td><NumberInput /></Table.Td>
                        <Table.Td><Select placeholder="Pick value" data={['S', 'A+', 'A', 'B+','B', 'C+', 'C', 'D','P', 'F']}/></Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td>1</Table.Td>
                        <Table.Td><NumberInput /></Table.Td>
                        <Table.Td><Select placeholder="Pick value" data={['S', 'A+', 'A', 'B+','B', 'C+', 'C', 'D','P', 'F']}/></Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td>1</Table.Td>
                        <Table.Td><NumberInput /></Table.Td>
                        <Table.Td><Select placeholder="Pick value" data={['S', 'A+', 'A', 'B+','B', 'C+', 'C', 'D','P', 'F']}/></Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td>1</Table.Td>
                        <Table.Td><NumberInput /></Table.Td>
                        <Table.Td><Select placeholder="Pick value" data={['S', 'A+', 'A', 'B+','B', 'C+', 'C', 'D','P', 'F']}/></Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td>1</Table.Td>
                        <Table.Td><NumberInput /></Table.Td>
                        <Table.Td><Select placeholder="Pick value" data={['S', 'A+', 'A', 'B+','B', 'C+', 'C', 'D','P', 'F']}/></Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td>1</Table.Td>
                        <Table.Td><NumberInput /></Table.Td>
                        <Table.Td><Select placeholder="Pick value" data={['S', 'A+', 'A', 'B+','B', 'C+', 'C', 'D','P', 'F']}/></Table.Td>
                    </Table.Tr>
                    
                </Table>
            </Card>

            <Card>

            </Card>
            </Group>

        </Paper>

    </div>
  )
}

export default Gpa