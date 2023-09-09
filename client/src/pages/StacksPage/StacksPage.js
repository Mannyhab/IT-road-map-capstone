import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './StacksPage.scss'; 
import StacksCard from '../../components/StacksCard/StacksCard';
import '../../components/StacksCard/StacksCard.scss'
const stackNameToIdMap = [
    { name: 'frontend', id: 1 },
    { name: 'backend', id: 2 },
    { name: 'full-stack', id: 3 },
    { name: 'ios', id: 4 },
    { name: 'android', id: 5 },
    { name: 'cross-platform', id: 6 },
    { name: 'windows', id: 7 },
    { name: 'mac', id: 8 },
    { name: 'linux', id: 9 },
    { name: 'pc', id: 10 },
    { name: 'console', id: 11 },
    { name: 'mobile', id: 12 },
    { name: 'vr', id: 13 },
    { name: 'microcontrollers', id: 14 },
    { name: 'iot', id: 15 },
    { name: 'automotive', id: 16 },
    { name: 'supervised', id: 17 },
    { name: 'unsupervised', id: 18 },
    { name: 'reinforcement', id: 19 },
    { name: 'data-visualization', id: 20 },
    { name: 'statistical-analysis', id: 21 },
    { name: 'deep-learning', id: 22 },
    { name: 'convolutional-nns', id: 23 },
    { name: 'recurrent-nns', id: 24 },
    { name: 'automated-machines', id: 25 },
    { name: 'robot-controllers', id: 26 },
    { name: 'sensors', id: 27 },
    { name: 'translations', id: 28 },
    { name: 'sentiment-analysis', id: 29 },
    { name: 'chatbots', id: 30 },
    { name: 'infrastructure-management', id: 31 },
    { name: 'protocol-standards', id: 32 },
    { name: 'wireless-technologies', id: 33 },
    { name: 'infrastructure-solutions', id: 34 },
    { name: 'platform-solutions', id: 35 },
    { name: 'software-solutions', id: 36 },
    { name: 'network-safeguarding', id: 37 },
    { name: 'information-assurance', id: 38 },
    { name: 'application-defense', id: 39 },
  ];

 function StacksPage() {
  const { stackId } = useParams();

  const [stack, setStack] = useState({});
  const [welcomeMessage, setWelcomeMessage] = useState('');

  useEffect(() => {
    // Function to map the stackId from URL to an ID from the predefined list
    const mapStackId = () => {
      const matchedStack = stackNameToIdMap.find(
        (entry) => entry.name.toLowerCase() === stackId.toLowerCase()
      );
      return matchedStack ? matchedStack.id : null;
    };

    // Function to fetch stack data based on the mapped ID
    const fetchStackData = async () => {
      try {
        const mappedStackId = mapStackId();
        if (mappedStackId !== null) {
          const endpoint = `http://localhost:3001/api/stacks/${mappedStackId}`;
          console.log('API Endpoint:', endpoint);
          const response = await axios.get(endpoint);
          const stackDataFromAPI = response.data.data;

          console.log(stackDataFromAPI);
          setStack(stackDataFromAPI);

          setWelcomeMessage(`Welcome to the ${stackDataFromAPI.title} Stack Page!`);
        } else {
          setWelcomeMessage(`Stack '${stackId}' not found`);
        }
      } catch (error) {
        console.error(`Error fetching stack data for ID ${stackId}:`, error);
      }
    };

    // Fetch stack data when stackId changes
    fetchStackData();
  }, [stackId]);

  return (
    <div className="stacks-container">
      <h1>{welcomeMessage}</h1>
      <StacksCard key={stack.id} stack={stack} />
    </div>
  );
}

export default StacksPage;