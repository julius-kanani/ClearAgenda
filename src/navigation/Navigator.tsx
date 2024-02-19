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
      headerTitleAlign: 'center',
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
    <Tab.Screen 
      name="New Task" 
      component={NewTaskScreen} 
      options={{
        title: 'Create a new task.',
      }}
    />
    <Tab.Screen 
      name="Task List" 
      component={TaskListScreen} 
      options={{
        title: 'List saved task items.',
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;