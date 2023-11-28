import React, { useState } from 'react'
import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';
import MainLayout from '../layouts/MainLayout';

import {
    StyleSheet,
    Button,
} from 'react-native';

export default function HomeScreen({ navigation }) {
    const addTask = (taskText) => {
        setTask([...tasks, taskText]);
    };
    const [tasks, setTask] = useState([
        'Do laundry',
        'Walk dog'
    ]);
    return (
        <>
            <MainLayout>
                <ToDoList tasks={tasks}></ToDoList>
                <Button
                    title="Go to About"
                    onPress={() => navigation.navigate('About')}
                />
                <ToDoForm addTask={addTask}></ToDoForm>

                
            </MainLayout>

        </>
    )
}

