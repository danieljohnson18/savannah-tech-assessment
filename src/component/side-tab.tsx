import { useState } from 'react';
import { Box, Text, Flex, useToken } from '@chakra-ui/react';
import { roadmaps, tags } from '../constants';

const SideTab = () => {
  const [selectedTag, setSelectedTag] = useState(tags[0]);

  const handleSelectedTag = (selected:string) => {
    setSelectedTag(selected);
  };

  const [blue500] = useToken('colors', ['#4661E6']);

  return (
    <Box position="fixed" top="0" left="0" w="20%" m="10" display="flex" flexDirection="column" gap="6">
      <Box bgGradient="linear(to-r, #E84D70, #A337F6, #28A7ED)" w="255px" h="137px" display="flex" flexDirection="column" justifyContent="end" alignItems="start" p="6" borderRadius="10px">
        <Text fontWeight="bold" fontSize="20px" color="white">Frontend Mentor</Text>
        <Text fontWeight="medium" fontSize="15px" color="white" opacity="0.7">Feedback Board</Text>
      </Box>
      <Box p="6" w="255px" bg="white" borderRadius="10px">
        <Flex wrap="wrap" gap="3">
          {tags.map((tag, index) => {
            const isActive = selectedTag === tag;
            return (
              <Box key={index} bg={isActive ? blue500 : '#F2F4FF'} color={isActive ? '#ffffff' : blue500} display='flex' alignItems='center' px="4" h="30px" borderRadius="10px" fontSize="13px" fontWeight="semibold" onClick={() => handleSelectedTag(tag)}>
                {tag}
              </Box>
            );
          })}
        </Flex>
      </Box>
      <Box p="6" w="255px" bg="white" borderRadius="10px">
        <Flex align="center" justify="space-between">
        <Text fontWeight="bold" fontSize="18px" color="#3A4374" mb="4">Roadmap</Text>
        <Text as="u" color={blue500} fontSize="13px" fontWeight="semibold" mb="4" alignSelf="flex-start">View</Text>
        </Flex>
        {roadmaps.map(({ id, title, tagColor, count }) => (
          <Flex key={id} justifyContent="space-between" alignItems="center" mb="2">
            <Flex alignItems="center" gap="4">
              <Box bg={tagColor} h="8px" w="8px" borderRadius="full" />
              <Text color="#647196" fontSize="sm">{title}</Text>
            </Flex>
            <Text fontSize="sm" fontWeight="bold" color="#647196">{count}</Text>
          </Flex>
        ))}
      </Box>
    </Box>
  );
};

export default SideTab;