import React from 'react';
import { Text, StyleSheet, View} from 'react-native';
import AppBar from './AppBar';
import RepositoryList from './RepositoryList';


const styles = StyleSheet.create({
    container: {
    
        flexGrow: 1,
        flexShrink:1,
    },
});

const Main =()=>{
    return(
        <>
        <AppBar />
        <View style={styles.container}>
        
            <Text>Rate Repository Application</Text>
            
            <RepositoryList />
            
        </View>
        </>
    );
};

export default Main;