"use client";

import {
  Box,
  Button,
  Card,
  Flex,
  Grid,
  Heading,
  HStack,
  Icon,
  IconButton,
  Input,
  InputElement,
  Group,
  Separator,
  Stat,
  Table,
  Text,
  VStack,
} from "@chakra-ui/react@next";
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
    <Box
      px={2}
      py={1}
      borderRadius="md"
      fontSize="sm"
      fontWeight="medium"
      bg={`${colorScheme}.100`}
      color={`${colorScheme}.800`}
    >
      {status}
    </Box>
  );
};

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
            <VStack align="start" gap={0}>
              <Heading size="lg" color="gray.900">
                Admin Dashboard
              </Heading>
              <Text color="gray.600" fontSize="sm">
                Welcome back! Here&apos;s what&apos;s happening with your
                business today.
              </Text>
            </VStack>

            <HStack gap={4}>
              <Group maxW="300px">
                <InputElement>
                  <Icon color="gray.400">
                    <MagnifyingGlassIcon />
                  </Icon>
                </InputElement>
                <Input placeholder="Search..." />
              </Group>

              <IconButton variant="ghost" color="gray.600">
                <BellIcon />
              </IconButton>

              <IconButton variant="ghost" color="gray.600">
                <Cog6ToothIcon />
              </IconButton>

              <IconButton variant="ghost" color="gray.600">
                <UserCircleIcon />
              </IconButton>
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
              <Card.Root key={index} p={6}>
                <Card.Body>
                  <Flex justify="space-between" align="start">
                    <VStack align="start" gap={1}>
                      <Text fontSize="sm" color="gray.600" fontWeight="medium">
                        {stat.label}
                      </Text>
                      <Heading size="2xl" color="gray.900">
                        {stat.value}
                      </Heading>
                      <Text fontSize="sm" color="green.600" fontWeight="medium">
                        {stat.change} from last month
                      </Text>
                    </VStack>

                    <Box p={3} borderRadius="lg" bg={`${stat.color}.100`}>
                      <Icon color={`${stat.color}.600`} boxSize={6}>
                        <stat.icon />
                      </Icon>
                    </Box>
                  </Flex>
                </Card.Body>
              </Card.Root>
            ))}
          </Grid>

          {/* Dashboard Content Grid */}
          <Grid templateColumns="2fr 1fr" gap={6}>
            {/* Recent Orders */}
            <Card.Root>
              <Card.Header>
                <Flex justify="space-between" align="center">
                  <VStack align="start" gap={1}>
                    <Heading size="lg">Recent Orders</Heading>
                    <Text color="gray.600" fontSize="sm">
                      Latest orders from your customers
                    </Text>
                  </VStack>
                  <Button variant="outline" size="sm">
                    View All
                  </Button>
                </Flex>
              </Card.Header>

              <Card.Body>
                <Table.Root>
                  <Table.Header>
                    <Table.Row>
                      <Table.ColumnHeader>Order ID</Table.ColumnHeader>
                      <Table.ColumnHeader>Customer</Table.ColumnHeader>
                      <Table.ColumnHeader>Amount</Table.ColumnHeader>
                      <Table.ColumnHeader>Status</Table.ColumnHeader>
                      <Table.ColumnHeader>Date</Table.ColumnHeader>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    {recentOrders.map((order) => (
                      <Table.Row key={order.id}>
                        <Table.Cell fontWeight="medium">{order.id}</Table.Cell>
                        <Table.Cell>
                          <VStack align="start" gap={0}>
                            <Text fontWeight="medium">{order.customer}</Text>
                            <Text fontSize="sm" color="gray.600">
                              {order.email}
                            </Text>
                          </VStack>
                        </Table.Cell>
                        <Table.Cell fontWeight="semibold">
                          {order.amount}
                        </Table.Cell>
                        <Table.Cell>
                          <StatusBadge status={order.status} />
                        </Table.Cell>
                        <Table.Cell color="gray.600">{order.date}</Table.Cell>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table.Root>
              </Card.Body>
            </Card.Root>

            {/* Quick Actions & Analytics */}
            <VStack gap={6}>
              {/* Quick Actions */}
              <Card.Root w="full">
                <Card.Header>
                  <Heading size="md">Quick Actions</Heading>
                </Card.Header>
                <Card.Body>
                  <VStack gap={3} w="full">
                    <Button w="full" variant="outline">
                      <Icon mr={2}>
                        <UserGroupIcon />
                      </Icon>
                      Manage Users
                    </Button>
                    <Button w="full" variant="outline">
                      <Icon mr={2}>
                        <ShoppingBagIcon />
                      </Icon>
                      View Products
                    </Button>
                    <Button w="full" variant="outline">
                      <Icon mr={2}>
                        <ChartBarIcon />
                      </Icon>
                      Analytics
                    </Button>
                    <Button w="full" variant="outline">
                      <Icon mr={2}>
                        <Cog6ToothIcon />
                      </Icon>
                      Settings
                    </Button>
                  </VStack>
                </Card.Body>
              </Card.Root>

              {/* Performance Overview */}
              <Card.Root w="full">
                <Card.Header>
                  <Heading size="md">Performance</Heading>
                </Card.Header>
                <Card.Body>
                  <VStack gap={4} w="full">
                    <Stat.Root>
                      <Stat.Label>Page Views</Stat.Label>
                      <Stat.ValueText>45,210</Stat.ValueText>
                      <Stat.HelpText>
                        <Stat.ValueUnit>+12.5%</Stat.ValueUnit>
                      </Stat.HelpText>
                    </Stat.Root>

                    <Separator />

                    <Stat.Root>
                      <Stat.Label>Conversion Rate</Stat.Label>
                      <Stat.ValueText>3.24%</Stat.ValueText>
                      <Stat.HelpText>
                        <Stat.ValueUnit>+0.8%</Stat.ValueUnit>
                      </Stat.HelpText>
                    </Stat.Root>

                    <Separator />

                    <Stat.Root>
                      <Stat.Label>Avg. Order Value</Stat.Label>
                      <Stat.ValueText>$127.45</Stat.ValueText>
                      <Stat.HelpText>
                        <Stat.ValueUnit>+$12.30</Stat.ValueUnit>
                      </Stat.HelpText>
                    </Stat.Root>
                  </VStack>
                </Card.Body>
              </Card.Root>

              {/* System Status */}
              <Card.Root w="full">
                <Card.Header>
                  <Heading size="md">System Status</Heading>
                </Card.Header>
                <Card.Body>
                  <VStack gap={3} w="full">
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
                </Card.Body>
              </Card.Root>
            </VStack>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
