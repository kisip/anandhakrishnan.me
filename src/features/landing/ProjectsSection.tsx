import { Box, Button, Container, Flex, Heading, Link, SimpleGrid, Text } from "@chakra-ui/react";
import { FiGithub } from "react-icons/fi";

const PROJECTS = [
  {
    title: "Job Auto Apply Automation",
    description:
      "Automated job application workflow that collects matching openings, prepares repeatable application steps, and reduces manual effort for daily job searches.",
    highlights: ["Workflow automation", "Scheduled execution", "Application tracking"],
  },
  {
    title: "System Health Monitor",
    description:
      "Hourly health checking system for servers and services, built to monitor uptime, resource usage, and operational issues before they affect users.",
    highlights: ["Runs every hour", "Service health checks", "Alert-ready reporting"],
  },
  {
    title: "CI/CD Deployment Pipeline",
    description:
      "Reliable deployment pipeline for containerized applications with automated build, test, and release steps for faster and safer delivery.",
    highlights: ["GitHub Actions", "Docker deployment", "Repeatable releases"],
  },
];

const ProjectsSection = () => {
  return (
    <Container maxW={"7xl"} py={24} as="section">
      <Flex justifyContent="space-between" alignItems={["start", "start", "end"]} gap={4} mb={8} direction={["column", "column", "row"]}>
        <Box>
          <Heading fontSize={"4xl"}>Projects</Heading>
          <Text mt={4} maxW="3xl" color="gray.600">
            Practical automation and DevOps projects focused on reliability, repeatability, and reducing manual work.
          </Text>
        </Box>

        <Button
          as={Link}
          href="https://github.com/kisip"
          target="_blank"
          colorScheme="primary"
          leftIcon={<FiGithub />}
          _hover={{ textDecoration: "none" }}
        >
          GitHub
        </Button>
      </Flex>

      <SimpleGrid columns={[1, 1, 3]} spacing={6}>
        {PROJECTS.map((project) => (
          <Box
            key={project.title}
            borderWidth="1px"
            borderColor="gray.200"
            borderRadius="md"
            p={6}
            h="100%"
            transition="transform .2s ease, box-shadow .2s ease"
            _hover={{
              transform: "translateY(-4px)",
              boxShadow: "lg",
            }}
          >
            <Heading as="h3" fontSize="xl" mb={3}>
              {project.title}
            </Heading>

            <Text color="gray.600" mb={5}>
              {project.description}
            </Text>

            <Flex gap={2} wrap="wrap">
              {project.highlights.map((highlight) => (
                <Text
                  key={highlight}
                  as="span"
                  fontSize="sm"
                  color="primary.500"
                  bg="primary.50"
                  borderRadius="md"
                  px={3}
                  py={1}
                  fontWeight="medium"
                >
                  {highlight}
                </Text>
              ))}
            </Flex>
          </Box>
        ))}
      </SimpleGrid>

      <Text mt={8} color="gray.600">
        For project details or collaboration, mail{" "}
        <Link href="mailto:kisipxbhp@gmail.com" color="primary.500" fontWeight="medium">
          kisipxbhp@gmail.com
        </Link>
        .
      </Text>
    </Container>
  );
};

export default ProjectsSection;
