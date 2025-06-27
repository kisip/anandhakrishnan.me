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
    <chakra.h2 fontSize={["md", null, "lg"]}>Personal Projects</chakra.h2>

    <chakra.h1 fontSize={["lg", null, "2xl"]} mb="2" fontWeight="bold">
      AWS & CI/CD Projects
    </chakra.h1>

    <Text fontSize="md" mb={4}>
      <strong>AWS Production Environment Setup for High-Availability Web Application</strong><br />
      ● Designed and deployed a secure, scalable cloud infrastructure following AWS best practices.<br />
      ● Implemented VPCs with public and private subnets, route tables, and NAT gateways.<br />
      ● Configured EC2 instances for web, application, and database layers across multiple availability zones.<br />
      ● Integrated Elastic Load Balancer (ELB) for load distribution and Auto Scaling Groups for fault tolerance.<br />
      ● Secured public endpoints using SSL/TLS certificates via AWS Certificate Manager (ACM).<br />
      <em>Outcome: Delivered a highly available, secure environment providing reliable application performance.</em>
    </Text>

    <Text fontSize="md">
    <strong>CI/CD Pipeline for Static Website with Hugo using GitHub Pages</strong><br />
● Set up a GitHub Actions workflow to build and deploy a Hugo-based static website directly to GitHub Pages.<br />
● Automated deployment on every push to the `main` branch, ensuring consistent and versioned site updates.<br />
● Configured custom domain and enforced HTTPS via GitHub Pages settings.<br />
<em>Outcome: Delivered a fast, automated, and cost-free static website deployment with minimal overhead.</em>

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
