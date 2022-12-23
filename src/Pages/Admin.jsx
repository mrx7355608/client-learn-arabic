import {
    Card,
    CardHeader,
    CardBody,
    Heading,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    Flex
} from "@chakra-ui/react";
import React from "react";

export default function Admin() {
    return (
        <Flex justifyContent="center" alignItems="center" gap="2">
            <Card>
                <CardBody>
                    <Stat>
                        <StatLabel>Users</StatLabel>
                        <StatNumber>0</StatNumber>
                    </Stat>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <Stat>
                        <StatLabel>Tests Conducted</StatLabel>
                        <StatNumber>1</StatNumber>
                        <StatHelpText>Dec 26 - Dec 27</StatHelpText>
                    </Stat>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <Stat>
                        <StatLabel>Upcoming Tests</StatLabel>
                        <StatNumber>1</StatNumber>
                        <StatHelpText>Dec 26</StatHelpText>
                    </Stat>
                </CardBody>
            </Card>
        </Flex>
    );
}
