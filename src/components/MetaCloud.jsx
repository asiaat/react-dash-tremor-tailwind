import React, { useState } from "react";
import {

  Button,
  Card,
  Flex,
  TabGroup,
  Tab,
  TabList,
  Bold,
  Divider,
  Metric,
  Text,
  Title,
} from "@tremor/react";
import {
  ArrowRightIcon,
  ChartPieIcon,
  ViewListIcon,
} from "@heroicons/react/outline";



const MetaCloud = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Card className="max-w-full mx-auto">
      <Flex className="space-x-8 flex-col lg:flex-row">
        <Title>Metadata values</Title>
        
      </Flex>
      <Text className="mt-8">
      <ul class="flex justify-center flex-wrap max-w-xl align-center gap-2 leading-8">
    <li><a href="#" class="text-3xl text-cyan-500">Country Names</a></li>
    <li><a href="#" class="text-xl text-teal-500">Chemistry</a></li>
    <li><a href="#" class="text-md text-red-500">File Type</a></li>
    <li><a href="#" class="text-lg text-green-500">Cryptocurrency</a></li>
    <li><a href="#" class="text-sm text-orange-500">Academic</a></li>
    <li><a href="#" class="text-3xl text-cyan-500">Softwares</a></li>
    <li><a href="#" class="text-md text-blue-500">General</a></li>
    <li><a href="#" class="text-2xl text-indigo-500">Web Technology</a></li>
    <li><a href="#" class="text-xl text-indigo-500">Business</a></li>
    <li><a href="#" class="text-md text-blue-500">Technology</a></li>
    <li><a href="#" class="text-xs text-cyan-500">Sports</a></li>
    <li><a href="#" class="text-4xl text-red-500">Law</a></li>
    <li><a href="#" class="text-lg text-gray-500">Internet Slangs</a></li>
    <li><a href="#" class="text-3xl text-cyan-500">Insurance</a></li>
    <li><a href="#" class="text-md text-blue-500">Space Science</a></li>
    <li><a href="#" class="text-4xl text-red-500">Jobs</a></li>
    <li><a href="#" class="text-lg text-gray-500">Certifications</a></li>
    <li><a href="#" class="text-sm text-orange-500">Electronics</a></li>
</ul>

      </Text>
      
      <Divider />
      
     


      <Flex className="mt-6 pt-4 border-t">
        <Button
          size="xs"
          variant="light"
          icon={ArrowRightIcon}
          iconPosition="right"
        >
          View more
        </Button>
      </Flex>
    </Card>
  );
};

export default MetaCloud;
