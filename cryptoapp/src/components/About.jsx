import React from 'react';
import { Flex,Avatar, Box, Stack, Text, HStack,VStack } from "@chakra-ui/react";

const About = () => {
  return (
    <Flex alignItems={"center"} p="40" h={"full"} bgColor={"whatsapp.50"}>
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"} >
        <VStack w={"85w"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            
            textAlign={["center", "left"]}
            color={"blackAlpha.900"}
          >
            Introducing the revolutionary crypto trading app, a gateway to the world of digital currencies. Seamlessly blending cutting-edge technology with user-friendly features, our app empowers both seasoned traders and newcomers to navigate the exhilarating realm of cryptocurrencies. With a sleek and intuitive interface, you can effortlessly buy, sell, and exchange a wide range of digital assets with just a few taps.

Our app offers real-time market data and charts, ensuring you stay up-to-date with the latest trends and prices. Armed with comprehensive analytics and indicators, you can make informed decisions and seize profitable opportunities. Whether you're a day trader, swing trader, or a long-term investor, our app caters to your unique trading style and preferences.

Security is our top priority. We employ state-of-the-art encryption protocols to safeguard your funds and personal information. Rest easy knowing that your assets are protected by multiple layers of security, including multi-factor authentication and cold storage solutions. Our app also provides real-time alerts and notifications to keep you informed of any suspicious activities or market fluctuations.

Join our vibrant and supportive community of crypto enthusiasts. Engage in discussions, share insights, and learn from experienced traders through our social features. Take advantage of our educational resources, including tutorials and guides, to enhance your trading knowledge and skills. Our customer support team is available around the clock to address any queries or concerns you may have, ensuring a smooth and seamless trading experience.

Embrace the future of finance with our crypto trading app. Download now and unlock the limitless potential of digital assets, as you embark on an exciting journey towards financial freedom and empowerment.
          </Text>
        </VStack>
        
        <VStack>
          <Avatar boxSize={"28"} mt={["4", "0"]}  />
          <Text ><center>Founder</center>Laxmikant</Text>
        </VStack>
      </Stack>
    </Flex>
  )
}

export default About
