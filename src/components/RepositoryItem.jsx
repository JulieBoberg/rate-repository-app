import React from 'react';
import {  View, Text } from 'react-native';

const RepositoryItem =({item})=>{

    const { 
    fullName,
    description,
    language,
    forksCount,
    stargazersCount,
    ratingAverage,
    reviewCount,
    ownerAvatarUrl} = item;


    return (
        <View>
        
            <Text>{fullName}</Text>
            <Text>{description}</Text>
            <Text>{language}</Text>
            <Text>{forksCount}</Text>
            <Text>{stargazersCount}</Text>
            <Text>{ratingAverage}</Text>
            <Text>{reviewCount}</Text>
            <Text>{ownerAvatarUrl}</Text>
        </View>
    );

};

export default RepositoryItem;