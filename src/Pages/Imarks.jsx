import React, { useState } from 'react';
import { Group, RingProgress, Title, Text, Flex, Paper, Card, Table, NumberInput } from '@mantine/core';
import './Gpa.css'

function Imarks() {
  const [seriesExam1, setSeriesExam1] = useState(0);
  const [seriesExam2, setSeriesExam2] = useState(0);
  const [assignment, setAssignment] = useState(0);
  const [attendancePercentage, setAttendancePercentage] = useState(0);

  const calculateInternalMarks = () => {
    const attendanceMarks = (attendancePercentage / 10);

    const internalMarks = ((seriesExam1 + seriesExam2) / 4) + assignment + attendanceMarks;

    return internalMarks.toFixed(2);
  }

  const calculateProgressBarValue = () => {
    const internalMarks = calculateInternalMarks();
    const progressBarValue = (internalMarks / 50) * 100;

    return progressBarValue.toFixed(2);
  }

  return (
    <div>
      <Paper p={5}>
        <Title order={4} ta="center" className='Title'>
          Calculate your Internal Marks
        </Title>

        <Flex wrap="wrap" gap="sm" justify="center" align="stretch">
          <Card shadow="sm" padding="lg" radius="md" withBorder mt={15} className='cardtable' mb={40}>
            <Table withRowBorders={false}>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Section</Table.Th>
                  <Table.Th>Marks you scored</Table.Th>
                  <Table.Th>Out of</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tr>
                <Table.Td>Series Exam 1</Table.Td>
                <Table.Td>
                  <NumberInput min={0} max={50} onChange={(value) => setSeriesExam1(value)} />
                </Table.Td>
                <Table.Td>50</Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>Series Exam 2</Table.Td>
                <Table.Td>
                  <NumberInput min={0} max={50} onChange={(value) => setSeriesExam2(value)} />
                </Table.Td>
                <Table.Td>50</Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>Assignment</Table.Td>
                <Table.Td>
                  <NumberInput min={0} max={15} onChange={(value) => setAssignment(value)} />
                </Table.Td>
                <Table.Td>15</Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>Attendance (%)</Table.Td>
                <Table.Td>
                  <NumberInput min={0} max={100} onChange={(value) => setAttendancePercentage(value)} />
                </Table.Td>
                <Table.Td>100%</Table.Td>
              </Table.Tr>
            </Table>

            <Card shadow="sm" padding="lg" radius="md" withBorder mt={15}>
              <Group justify="center">
                <RingProgress
                  size={150}
                  sections={[{ value: calculateProgressBarValue(), color: 'violet' }]}
                  label={
                    <Text c="violet" fw={700} ta="center" size="sm">
                      {calculateInternalMarks()} / 50
                    </Text>
                  }
                />
              </Group>
            </Card>
          </Card>
        </Flex>
      </Paper>
    </div>
  );
}

export default Imarks;
