import { Flex, Text } from '@chakra-ui/react';
import { MessageIcon, UpArrowIcon } from 'icons'

type Props = {
  upVoteCount: number;
  headerText: string;
  descriptionText: string;
  tagText: string;
  messageCount: number
}
const ActionCard = (props: Props) => {
  const { upVoteCount, headerText, descriptionText, tagText, messageCount } = props
  return (
    <Flex
      py="7"
      px="8"
      bg="white"
      alignItems="center"
      justifyContent="space-between"
      width="full"
      borderRadius="10px"
    >
      <Flex align='baseline' direction='row'>
        <Flex
          direction="column"
          p="2"
          h="53px"
          w="40px"
          px="9px"
          bg="#F2F4FE"
          alignItems="center"
          justifyContent="space-between"
          borderRadius="10px"
        >
          <UpArrowIcon />
          <Text fontWeight="bold" fontSize="13px" color="#3A4374">
            {upVoteCount}
          </Text>
        </Flex>
        <Flex direction="column" ml="10">
          <Text as="h3" fontWeight="bold" fontSize="18px" lineHeight="26.01px" color="#3A4374">
            {headerText}
          </Text>
          <Text color="#647196" fontSize="sm" fontWeight="normal" lineHeight="23.12px">
            {descriptionText}
          </Text>
          <Text
            textAlign="center"
            fontSize="13px"
            lineHeight="18.79px"
            fontWeight="semibold"
            bg="#F2F4FF"
            px="4"
            py="1.25"
            borderRadius="10px"
            color="#4661E6"
            mt="3"
            w="fit-content"
          >
            {tagText}
          </Text>
        </Flex>
      </Flex>
      <Flex alignItems="center" gap="2">
        <MessageIcon />
        <Text
          fontSize="sm"
          fontWeight="bold"
          lineHeight="23.12px"
          color={messageCount > 0 ? "#3A4374" : "#3A437430"}
        >
          {messageCount}
        </Text>
      </Flex>
    </Flex>
  )
}

export default ActionCard
