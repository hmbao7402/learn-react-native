import React, { useState } from 'react';
import {
	StyleSheet,
	View,
	Text,
	KeyboardAvoidingView,
	TextInput,
	TouchableOpacity,
} from 'react-native';
import { Task } from './src/components';

const App = () => {
	const [task, setTask] = useState();
	const [taskItems, setTaskItems] = useState([]);

	const addTask = () => {
		// console.log(task);Task
		setTaskItems([...taskItems, task]);
		setTask(null);
	};

	const completeTask = (index) => {
		let itemsCopy = [...taskItems];
		itemsCopy.splice(index, 1);
		setTaskItems(itemsCopy);
	};

	return (
		<View style={styles.container}>
			{/* Display Tasks */}
			<View style={styles.tasksWrapper}>
				<Text style={styles.sectionTitle}>Today's Tasks</Text>
				<View style={styles.items}>
					{/* Tasks list */}
					{taskItems.map((item, index) => {
						return (
							<TouchableOpacity key={index} onPress={() => completeTask()}>
								<Task text={item} />
							</TouchableOpacity>
						);
					})}
				</View>
			</View>

			{/* Input Field */}
			<KeyboardAvoidingView
				behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
				style={styles.writeTaskWrapper}
			>
				<TextInput
					style={styles.textInput}
					placeholder={'Write your task here'}
					value={task}
					onChangeText={(text) => setTask(text)}
				/>
				<TouchableOpacity onPress={() => addTask()}>
					<View style={styles.addWrapper}>
						<Text style={styles.addIcon}>+</Text>
					</View>
				</TouchableOpacity>
			</KeyboardAvoidingView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#E8EAED',
	},
	tasksWrapper: {
		paddingTop: 80,
		paddingHorizontal: 20,
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: 'bold',
	},
	items: {
		marginTop: 30,
	},
	writeTaskWrapper: {
		position: 'absolute',
		bottom: 60,
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	textInput: {
		paddingVertical: 15,
		paddingHorizontal: 15,
		backgroundColor: '#fff',
		borderRadius: 60,
		borderColor: '#c0c0c0',
		borderWidth: 1,
		width: 250,
	},
	addWrapper: {
		width: 60,
		height: 60,
		backgroundColor: '#fff',
		borderRadius: 60,
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: '#c0c0c0',
		borderWidth: 1,
	},
	addIcon: {},
});

export default App;
