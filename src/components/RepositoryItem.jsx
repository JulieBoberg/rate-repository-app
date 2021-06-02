import React from 'react';
import {  View} from 'react-native';
import Text from './Text';

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
        
            <Text fontWeight="bold">{fullName}</Text>
            <Text color="textSecondary">{description}</Text>
            <Text color="textSecondary">{language}</Text>
            <Text color="textSecondary">{forksCount}</Text>
            <Text color="textSecondary">{stargazersCount}</Text>
            <Text color="textSecondary" >{ratingAverage}</Text>
            <Text color="textSecondary">{reviewCount}</Text>
            <Text>{ownerAvatarUrl}</Text>
        </View>
    );

};

export default RepositoryItem;