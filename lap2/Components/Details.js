
import axios from "axios";
import React, { useEffect, useState } from "react";
import {Text,StyleSheet} from "react-native";

import { Card, Button, Title, Paragraph } from 'react-native-paper';

function Details({navigation, route}){
    const API_IMG="https://image.tmdb.org/t/p/w500/";
    const id = route.params.id;

    const [movie, setMovie] = useState({});

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=1583bd4a7b0da462480c756403c9bc65`)
        .then((res) => setMovie(res.data))
        .catch((err) => alert(err))
    }, [id])




    return(
        <Card style={Styles.container}>
        <Card.Content style={{alignItems:'center'}}>
            <Title style={{color:'orange',fontSize:'30'}}  >{movie.title} </Title>
        </Card.Content>
        <Card.Cover style={Styles.img}  source={{ uri:API_IMG+ movie.poster_path}}  />

        <Card.Content>
            <Paragraph style={{color:'white',fontSize:'18'}} >{movie.overview}</Paragraph>
        </Card.Content>
        <Card.Actions>

        </Card.Actions>
    </Card>

    )
}

export default Details;
const Styles = StyleSheet.create({
    container: {
        textAlign:'center',
        backgroundColor:'#1b1b1e',
        padding:50,
    //   width:400,
    // display:'flex',
    //   justifyContent:'center',
    //   flexWrap:'wrap',
    //   gap:13,
    
    },
    img:{
        height:300,
        width:300,
        alignSelf:'center',
        marginLeft:50
            }})