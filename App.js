import React, { useState } from 'react';
import { StyleSheet, View, Button, ScrollView } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [goal, setgoal] = useState("");

  const [add, setadd] = useState(false);

  const goalHandler = (text) => {
      setgoal(text)
  }

  const [goals, setgoals] = useState([])

  const addGoalHandler = () => {
    setgoals(prev => [...prev,goal]);
    setgoal("");
    setadd(!add);
  }

  const deleteHandler = (i) => {
    const newGoals = goals.filter((item,index) => {
        if(index!==i)
          return item
    })
    setgoals(newGoals)
  }

  const addHandler = () => {
    setadd(!add);
  }

  const data = <View>
                  {goals.map((item,index) => <GoalItem deleteHandler={deleteHandler} key={index} index={index} item={item}/>)}
               </View>

  return (
    <ScrollView>
      <View style={styles.root}>
        {!add && <View style={styles.btnStyle}><Button title='Click Here To Add Goals' onPress={addHandler}/></View>}
        <GoalInput addHandler={addHandler} visiblity={add} goal={goal} goalHandler={goalHandler} addGoalHandler={addGoalHandler} />
        {data}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root:{
    paddingVertical:50,
    paddingHorizontal:30
  },
  btnStyle:{
    marginVertical:20
  }
});