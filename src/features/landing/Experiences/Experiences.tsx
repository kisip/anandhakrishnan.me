import { Box, Container, Flex, Heading, Link, Text, chakra } from "@chakra-ui/react";
import TimeLineItem from "@/components/timeline/TimeLineItem";
import TimelineIcon from "@/components/svgs/TimelineIcon";

const Experiences = () => {
  return (
    <Container maxW={"7xl"} mb={24} as="section">
      <Heading fontSize={"4xl"} mb={4}>
        Experience
      </Heading>

      <Flex alignItems="center" gap={8} mt={24} direction={["column-reverse", "column-reverse", "row"]}>
        <Box w="100%">
          <TimeLineItem>
            <Box>
              <chakra.h2 fontSize={["md", null, "lg"]}>June 2024 - June 2025</chakra.h2>

              <chakra.h1 fontSize={["lg", null, "2xl"]} mb="2" fontWeight="bold">
              DevOps Intern
             at{" "}
                <Link href="https://www.sudoskills.in//" target="_blank" textDecoration="underline" color="primary.500">
                Sudoskills
                </Link>
              </chakra.h1>

              <Text fontSize="md">
              * Managed Linux system administration tasks including file system navigation, user/group management, package management, and storage solutions using LVM.
              * Automated Django application deployment using Ansible with Nginx and Gunicorn integration.
              * Built and deployed scalable web application infrastructure using Terraform on AWS.
              * Configured CI/CD pipelines for controlled application deployment using GitLab CI.
              * Deployed and managed Docker containers and Docker Compose setups.

              </Text>
            </Box>
          </TimeLineItem>

          <TimeLineItem>
            <Box>
              <chakra.h2 fontSize={["md", null, "lg"]}>Nov 2024 - Present</chakra.h2>

              <chakra.h1 fontSize={["lg", null, "2xl"]} mb="2" fontWeight="bold">
              Projects at{" "}
                <Link href="https://www.springworks.in/" target="_blank" textDecoration="underline" color="primary.500">
                  
                </Link>
              </chakra.h1>

              <Text fontSize="md">

              </Text>
            </Box>
          </TimeLineItem>
        </Box>

        <Box w="70%">
          <TimelineIcon />
        </Box>
      </Flex>
    </Container>
  );
};

export default Experiences;
