import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { ScrollView, Text, View, StyleSheet,  TouchableOpacity, } from "react-native";
import { CartAction, Counter } from "../Store/Action"
import { Card, Button, Title, Paragraph } from 'react-native-paper';

import axios from "axios";


function Movies({ navigation }) {
    const API_IMG = "https://image.tmdb.org/t/p/w500/";
    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get(" https://api.themoviedb.org/3/movie/popular?api_key=9b743af1d4fde1d65af33c40dcccce87")
            .then((res) => setMovies(res.data.results))
            .catch((err) => alert(err))
    }, [])


    const fav = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    const addFavourite = (movie) => {
        const find = fav.includes(movie)
         if (!find) {

         console.log(fav)
         
            dispatch(CartAction(fav.push(movie)))
            dispatch(Counter(fav.length))
         
         }
    }

    return (
        <ScrollView>
            <View style={{ backgroundColor: 'black' }}>
                <Text> Movies List  </Text>
                {movies.map((movie, index) => {
                    return (
                       
                        <Card style={Styles.container}>
                            <Card.Content style={{ alignItems: 'center' }}>
                                <Title style={{ color: 'orange', fontSize: '70', fontWeight: 'bold' }}   >{movie.title} </Title>
                            </Card.Content>
                            <Card.Cover style={Styles.img} source={{ uri: API_IMG + movie.poster_path }} />
                         
                            <TouchableOpacity  onPress={() => addFavourite(movie)}   style={Styles.btn} >
        <Text >Add To Fav</Text> 
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Details", { id: movie.id })}   style={Styles.btn} >
        <Text >Details</Text> 
      </TouchableOpacity>
      <TouchableOpacity  onPress={()=> navigation.navigate('Fav')}   style={Styles.btn} >
        <Text >go To Fav</Text> 
      </TouchableOpacity>
                        
                        </Card>



                    )
                })}



            </View>
        </ScrollView>
    )
}

export default Movies;


const Styles = StyleSheet.create({
    container: {

        textAlign: 'center',
        backgroundColor: '#1b1b1e',
        padding: 50,

        margin: 50,








    },
    btn:{
        width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
    marginLeft: 20,
    color:'white',
    backgroundColor: "orange",
    width: "90%",
    },
    img: {
        height: 500,
        width: 400,
        alignSelf: 'center',
        marginRight: 80
    }
})


