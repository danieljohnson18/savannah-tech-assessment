import { DownArrowIcon, LightIcon } from './icons'
import './App.css'
import { ActionCard, SideTab } from './component'
import { actionValues } from './constants'
import { Flex, Box, Text, Button } from '@chakra-ui/react'

function App() {
  return (
    <Flex direction='row' gap='30px'>
      <SideTab />
      <Box
        display='flex'
        flexDirection='column'
        gap='6'
        alignItems='start'
        width='800px'
        position='absolute'
        top='0'
        bottom='0'
        left='18rem'
        margin='10'
        overflowY='scroll'
      >
        <Flex
          bg='#373F68'
          pl='6'
          pr='4'
          py='14px'
          borderRadius='10px'
          alignItems='center'
          justifyContent='space-between'
          width='full'
        >
          <Flex direction='row' align='center'>
            <LightIcon />
            <Text
              fontWeight='bold'
              fontSize='18px'
              lineHeight='26.01px'
              color='white'
              pl='4'
            >
              6 Suggestions
            </Text>

            <Flex
              alignItems='center'
              ml='38px'
              fontSize='14px'
              fontWeight='normal'
              lineHeight='20.23px'
              color='white'
            >
              <Text as='span' mr={2}>
                Sort by : <Text as='strong'>Most Upvotes</Text>
              </Text>
              <DownArrowIcon />
            </Flex>
          </Flex>
          <Button
            bg="#AD1FEA"
            py="3"
            borderRadius="10px"
            width="158px"
            textAlign="center"
            fontWeight="bold"
            fontSize="14px"
            lineHeight="20.23px"
            color="#F2F4FE"
          >
            + Add Feedback
          </Button>
        </Flex>

        {actionValues.map(value => (
          <ActionCard key={value.id} {...value} />
        ))}
      </Box>
    </Flex>
  )
}

export default App
