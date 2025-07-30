"use client";

import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Separator,
  Text,
  VStack,
} from "@chakra-ui/react@next";
import {
  HomeIcon,
  ChartBarIcon,
  UserGroupIcon,
  ShoppingBagIcon,
  Cog6ToothIcon,
  DocumentTextIcon,
  CurrencyDollarIcon,
  BellIcon,
} from "@heroicons/react/24/outline";

const navigationItems = [
  {
    label: "Dashboard",
    icon: HomeIcon,
    href: "/admin",
    active: true,
  },
  {
    label: "Analytics",
    icon: ChartBarIcon,
    href: "/admin/analytics",
    active: false,
  },
  {
    label: "Users",
    icon: UserGroupIcon,
    href: "/admin/users",
    active: false,
  },
  {
    label: "Products",
    icon: ShoppingBagIcon,
    href: "/admin/products",
    active: false,
  },
  {
    label: "Orders",
    icon: DocumentTextIcon,
    href: "/admin/orders",
    active: false,
  },
  {
    label: "Revenue",
    icon: CurrencyDollarIcon,
    href: "/admin/revenue",
    active: false,
  },
  {
    label: "Notifications",
    icon: BellIcon,
    href: "/admin/notifications",
    active: false,
  },
  {
    label: "Settings",
    icon: Cog6ToothIcon,
    href: "/admin/settings",
    active: false,
  },
];

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export function Sidebar({ isOpen = true, onClose }: SidebarProps) {
  return (
    <Box
      position="fixed"
      left={0}
      top={0}
      w="280px"
      h="100vh"
      bg="white"
      borderRight="1px"
      borderColor="gray.200"
      display={isOpen ? "block" : "none"}
      zIndex={20}
    >
      {/* Logo */}
      <Box p={6} borderBottom="1px" borderColor="gray.200">
        <Heading size="lg" color="blue.600">
          Admin Panel
        </Heading>
        <Text fontSize="sm" color="gray.600" mt={1}>
          Management Dashboard
        </Text>
      </Box>

      {/* Navigation */}
      <Box p={4}>
        <VStack gap={1} align="stretch">
          {navigationItems.map((item, index) => (
            <Button
              key={index}
              variant={item.active ? "solid" : "ghost"}
              colorScheme={item.active ? "blue" : "gray"}
              justifyContent="flex-start"
              w="full"
              h="44px"
              px={3}
              fontWeight={item.active ? "semibold" : "medium"}
            >
              <Icon mr={3} boxSize={5}>
                <item.icon />
              </Icon>
              {item.label}
            </Button>
          ))}
        </VStack>

        <Separator my={6} />

        {/* User Profile Section */}
        <Box
          p={4}
          borderRadius="lg"
          bg="gray.50"
          border="1px"
          borderColor="gray.200"
        >
          <Flex align="center" gap={3}>
            <Box
              w={10}
              h={10}
              borderRadius="full"
              bg="blue.500"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text color="white" fontWeight="bold" fontSize="sm">
                JD
              </Text>
            </Box>
            <Box flex={1}>
              <Text fontWeight="semibold" fontSize="sm">
                John Doe
              </Text>
              <Text color="gray.600" fontSize="xs">
                Administrator
              </Text>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
