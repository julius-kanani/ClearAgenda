// navigation/AppNavigator.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import NewTaskScreen from '../screens/NewTaskScreen';
import TaskListScreen from '../screens/TaskListScreen';

const Tab = createBottomTabNavigator();

const AppNavigator: React.FC = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName: string;

        if (route.name === 'New Task') {
          iconName = 'add-circle-outline';
        } else if (route.name === 'Task List') {
          iconName = 'list-circle-outline';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'blue',
      inactiveTintColor: 'gray',
    }}
  >
    <Tab.Screen name="New Task" component={NewTaskScreen} />
    <Tab.Screen name="Task List" component={TaskListScreen} />
  </Tab.Navigator>
);

export default AppNavigator;