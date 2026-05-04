import { useRef } from "react";
import { useInView } from "framer-motion";
import { Box, Button, Container, Flex, Heading, Link, Text } from "@chakra-ui/react";

import HeroIcon from "@/components/svgs/HeroIcon";
import SocialIcons from "@/components/svgs/SocialIcons";

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Container maxW={"7xl"} mb={[8, 4, 0]} pb={[24, 0, 0]} as="section">
      <Flex
        alignItems="center"
        gap={4}
        direction={["column-reverse", "column-reverse", "row"]}
        minH={"100vh"}
        ref={ref}
      >
        <Flex direction="column" alignItems="start" justifyContent="center" w="100%">
          <Heading
            fontSize={"4xl"}
            mb={4}
            style={{
              transform: isInView ? "none" : "translateY(-100px)",
              opacity: isInView ? 1 : 0,
              transition: "all 1s ease 0.5s",
            }}
          >
            <Text as="span" color="primary.500">
              Automating the Future:
            </Text>
            <br /> Building Scalable & Reliable Systems with DevOps!
          </Heading>

          <Text
            mb={4}
            fontSize={"2xl"}
            style={{
              transform: isInView ? "none" : "translateY(100px)",
              opacity: isInView ? 1 : 0,
              transition: "all 1s ease 0.5s",
            }}
          >
            Hey there! I'm{" "}
            <Text as="span" fontWeight="medium" color="primary.500">
              Anandhakrishnan
            </Text>
            , a{" "}
            <Text as="span" fontWeight="medium" color="primary.500">
              DevOps & CI/CD Engineer
            </Text>{" "}
            from Kerala, India. I specialize in{" "}
            <Text as="span" fontWeight="medium" color="primary.500">
              continuous integration & delivery, cloud infrastructure, automation, containerization, and system
              reliability
            </Text>
            , ensuring fast, secure, and scalable deployments.
          </Text>

          <Flex alignItems="center" gap={4}>
            <Button
              colorScheme="primary"
              as={Link}
              href="mailto:kisipxbhp@gmail.com"
              target="_blank"
              style={{
                transform: isInView ? "none" : "translateY(100px)",
                opacity: isInView ? 1 : 0,
                transition: "transform 1s ease 0.5s, opacity 1s ease 0.5s",
              }}
            >
              Get in touch
            </Button>
            <Button
              colorScheme="primary"
              variant="outline"
              as={Link}
              href="/Anandhan_DevOps_Cv_v2.pdf"
              target="_blank"
              style={{
                transform: isInView ? "none" : "translateY(200px)",
                opacity: isInView ? 1 : 0,
                transition: "transform 1s ease 0.5s, opacity 1s ease 0.5s",
              }}
            >
              Résumé
            </Button>
          </Flex>

          <SocialIcons isInView={isInView} />
        </Flex>

        <Box w="100%">
          <HeroIcon />
        </Box>
      </Flex>
    </Container>
  );
};

export default HeroSection;
