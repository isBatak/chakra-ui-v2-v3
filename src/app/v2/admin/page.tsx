"use client";

import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Text,
  VStack,
  Badge,
  Card,
  CardHeader,
  CardBody,
  Divider,
} from "@chakra-ui/react";
import {
  ChartBarIcon,
  Cog6ToothIcon,
  MagnifyingGlassIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  ShoppingBagIcon,
  ArrowTrendingUpIcon,
  BellIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { Sidebar } from "../../../components/Sidebar";

// Mock data for the dashboard
const stats = [
  {
    label: "Total Users",
    value: "2,847",
    change: "+12%",
    icon: UserGroupIcon,
    color: "blue",
  },
  {
    label: "Revenue",
    value: "$84,290",
    change: "+8.2%",
    icon: CurrencyDollarIcon,
    color: "green",
  },
  {
    label: "Orders",
    value: "1,429",
    change: "+5.1%",
    icon: ShoppingBagIcon,
    color: "purple",
  },
  {
    label: "Growth Rate",
    value: "24.8%",
    change: "+3.4%",
    icon: ArrowTrendingUpIcon,
    color: "orange",
  },
];

const recentOrders = [
  {
    id: "#12847",
    customer: "John Doe",
    email: "john@example.com",
    amount: "$125.00",
    status: "Completed",
    date: "2025-07-30",
  },
  {
    id: "#12846",
    customer: "Jane Smith",
    email: "jane@example.com",
    amount: "$89.50",
    status: "Processing",
    date: "2025-07-30",
  },
  {
    id: "#12845",
    customer: "Bob Johnson",
    email: "bob@example.com",
    amount: "$234.75",
    status: "Shipped",
    date: "2025-07-29",
  },
  {
    id: "#12844",
    customer: "Alice Brown",
    email: "alice@example.com",
    amount: "$67.25",
    status: "Completed",
    date: "2025-07-29",
  },
];

const StatusBadge = ({ status }: { status: string }) => {
  const colorScheme =
    {
      Completed: "green",
      Processing: "yellow",
      Shipped: "blue",
    }[status] || "gray";

  return (
    <Badge colorScheme={colorScheme} px={2} py={1} borderRadius="md">
      {status}
    </Badge>
  );
};

const StatCard = ({ stat }: { stat: (typeof stats)[0] }) => (
  <Card>
    <CardBody>
      <Flex justify="space-between" align="start">
        <Box>
          <Stat>
            <StatLabel fontSize="sm" color="gray.600" fontWeight="medium">
              {stat.label}
            </StatLabel>
            <StatNumber fontSize="2xl" color="gray.900">
              {stat.value}
            </StatNumber>
            <StatHelpText
              fontSize="sm"
              color="green.600"
              fontWeight="medium"
              mb={0}
            >
              {stat.change} from last month
            </StatHelpText>
          </Stat>
        </Box>

        <Flex
          w={12}
          h={12}
          borderRadius="lg"
          bg={`${stat.color}.100`}
          align="center"
          justify="center"
        >
          <Icon as={stat.icon} color={`${stat.color}.600`} w={6} h={6} />
        </Flex>
      </Flex>
    </CardBody>
  </Card>
);

export default function AdminDashboard() {
  return (
    <Box minH="100vh" bg="gray.50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content with Left Margin for Sidebar */}
      <Box ml="280px">
        {/* Header */}
        <Box bg="white" borderBottom="1px" borderColor="gray.200" px={6} py={4}>
          <Flex justify="space-between" align="center">
            <VStack align="start" spacing={0}>
              <Heading size="lg" color="gray.900">
                Admin Dashboard
              </Heading>
              <Text color="gray.600" fontSize="sm">
                Welcome back! Here&apos;s what&apos;s happening with your
                business today.
              </Text>
            </VStack>

            <HStack spacing={4}>
              <InputGroup maxW="300px">
                <InputLeftElement>
                  <Icon as={MagnifyingGlassIcon} color="gray.400" w={5} h={5} />
                </InputLeftElement>
                <Input placeholder="Search..." />
              </InputGroup>

              <IconButton
                variant="ghost"
                color="gray.600"
                aria-label="Notifications"
                icon={<Icon as={BellIcon} w={5} h={5} />}
              />

              <IconButton
                variant="ghost"
                color="gray.600"
                aria-label="Settings"
                icon={<Icon as={Cog6ToothIcon} w={5} h={5} />}
              />

              <IconButton
                variant="ghost"
                color="gray.600"
                aria-label="Profile"
                icon={<Icon as={UserCircleIcon} w={5} h={5} />}
              />
            </HStack>
          </Flex>
        </Box>

        {/* Main Content */}
        <Box p={6}>
          {/* Stats Grid */}
          <Grid
            templateColumns="repeat(auto-fit, minmax(250px, 1fr))"
            gap={6}
            mb={8}
          >
            {stats.map((stat, index) => (
              <GridItem key={index}>
                <StatCard stat={stat} />
              </GridItem>
            ))}
          </Grid>

          {/* Dashboard Content Grid */}
          <Grid templateColumns={{ base: "1fr", lg: "2fr 1fr" }} gap={6}>
            {/* Recent Orders */}
            <GridItem>
              <Card>
                <CardHeader>
                  <Flex justify="space-between" align="center">
                    <VStack align="start" spacing={1}>
                      <Heading size="lg">Recent Orders</Heading>
                      <Text color="gray.600" fontSize="sm">
                        Latest orders from your customers
                      </Text>
                    </VStack>
                    <Button variant="outline" size="sm">
                      View All
                    </Button>
                  </Flex>
                </CardHeader>

                <CardBody>
                  <TableContainer>
                    <Table variant="simple">
                      <Thead>
                        <Tr>
                          <Th>Order ID</Th>
                          <Th>Customer</Th>
                          <Th>Amount</Th>
                          <Th>Status</Th>
                          <Th>Date</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {recentOrders.map((order) => (
                          <Tr key={order.id}>
                            <Td fontWeight="medium">{order.id}</Td>
                            <Td>
                              <VStack align="start" spacing={0}>
                                <Text fontWeight="medium">
                                  {order.customer}
                                </Text>
                                <Text fontSize="sm" color="gray.600">
                                  {order.email}
                                </Text>
                              </VStack>
                            </Td>
                            <Td fontWeight="semibold">{order.amount}</Td>
                            <Td>
                              <StatusBadge status={order.status} />
                            </Td>
                            <Td color="gray.600">{order.date}</Td>
                          </Tr>
                        ))}
                      </Tbody>
                    </Table>
                  </TableContainer>
                </CardBody>
              </Card>
            </GridItem>

            {/* Quick Actions & Analytics */}
            <GridItem>
              <VStack spacing={6}>
                {/* Quick Actions */}
                <Card w="full">
                  <CardHeader>
                    <Heading size="md">Quick Actions</Heading>
                  </CardHeader>
                  <CardBody>
                    <VStack spacing={3} w="full">
                      <Button
                        w="full"
                        variant="outline"
                        leftIcon={<Icon as={UserGroupIcon} w={5} h={5} />}
                      >
                        Manage Users
                      </Button>
                      <Button
                        w="full"
                        variant="outline"
                        leftIcon={<Icon as={ShoppingBagIcon} w={5} h={5} />}
                      >
                        View Products
                      </Button>
                      <Button
                        w="full"
                        variant="outline"
                        leftIcon={<Icon as={ChartBarIcon} w={5} h={5} />}
                      >
                        Analytics
                      </Button>
                      <Button
                        w="full"
                        variant="outline"
                        leftIcon={<Icon as={Cog6ToothIcon} w={5} h={5} />}
                      >
                        Settings
                      </Button>
                    </VStack>
                  </CardBody>
                </Card>

                {/* Performance Overview */}
                <Card w="full">
                  <CardHeader>
                    <Heading size="md">Performance</Heading>
                  </CardHeader>
                  <CardBody>
                    <VStack spacing={4} w="full">
                      <Stat>
                        <StatLabel>Page Views</StatLabel>
                        <StatNumber>45,210</StatNumber>
                        <StatHelpText>+12.5%</StatHelpText>
                      </Stat>

                      <Divider />

                      <Stat>
                        <StatLabel>Conversion Rate</StatLabel>
                        <StatNumber>3.24%</StatNumber>
                        <StatHelpText>+0.8%</StatHelpText>
                      </Stat>

                      <Divider />

                      <Stat>
                        <StatLabel>Avg. Order Value</StatLabel>
                        <StatNumber>$127.45</StatNumber>
                        <StatHelpText>+$12.30</StatHelpText>
                      </Stat>
                    </VStack>
                  </CardBody>
                </Card>

                {/* System Status */}
                <Card w="full">
                  <CardHeader>
                    <Heading size="md">System Status</Heading>
                  </CardHeader>
                  <CardBody>
                    <VStack spacing={3} w="full">
                      <Flex justify="space-between" w="full">
                        <Text fontSize="sm">API Status</Text>
                        <Box w={2} h={2} borderRadius="full" bg="green.500" />
                      </Flex>
                      <Flex justify="space-between" w="full">
                        <Text fontSize="sm">Database</Text>
                        <Box w={2} h={2} borderRadius="full" bg="green.500" />
                      </Flex>
                      <Flex justify="space-between" w="full">
                        <Text fontSize="sm">CDN</Text>
                        <Box w={2} h={2} borderRadius="full" bg="yellow.500" />
                      </Flex>
                      <Flex justify="space-between" w="full">
                        <Text fontSize="sm">Payment Gateway</Text>
                        <Box w={2} h={2} borderRadius="full" bg="green.500" />
                      </Flex>
                    </VStack>
                  </CardBody>
                </Card>
              </VStack>
            </GridItem>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
