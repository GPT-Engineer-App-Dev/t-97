import { useState } from 'react';
import { Box, Input, Button, VStack, HStack, Text } from '@chakra-ui/react';

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <Box p={4} maxW="md" mx="auto">
      <VStack spacing={4}>
        <HStack>
          <Input
            placeholder="Add a new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <Button onClick={addTask} colorScheme="blue">
            Add
          </Button>
        </HStack>
        <VStack spacing={2} w="100%">
          {tasks.map((task, index) => (
            <HStack key={index} justify="space-between" w="100%">
              <Text>{task}</Text>
              <Button size="sm" colorScheme="red" onClick={() => removeTask(index)}>
                Remove
              </Button>
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Box>
  );
};

export default Todo;