
import { useSelector,useDispatch } from 'react-redux';
import { ScrollView, Text, View, StyleSheet,TouchableOpacity } from "react-native";
import { RemoveFavorite,Counter } from '../Store/Action';
import { Card, Title } from 'react-native-paper';
function AddFav() {

    const API_IMG = "https://image.tmdb.org/t/p/w500/";
  

    const add = useSelector((state) => state.cart)


    const dispatch = useDispatch();
    const deletemovie = (movie) => {
        console.log(movie.id) 
        const movieindex=add.findIndex(ele=>ele.id === movie.id)
        if(movieindex > -1){
            
            dispatch(RemoveFavorite(add.splice(movieindex, 1)))
            dispatch(Counter(add.length-1))
        }
        
   }
   
    return (
        <ScrollView>
            <View style={{ backgroundColor: 'black' }}>
                <Text> Favourite List  </Text>

                {add.map((movie) => {
                    return (

                        <Card style={Styles.container} key={movie.id}>
                            <Card.Content style={{ alignItems: 'center' }}>
                                <Title style={{ color: 'orange', fontSize: '70', fontWeight: 'bold' }} onPress={() => navigation.navigate("Details", { id: movie.id })}  >{movie.title} </Title>
                            </Card.Content>
                            <Card.Cover style={Styles.img} source={{ uri: API_IMG + movie.poster_path }} />
                            <TouchableOpacity onPress={() => deletemovie(movie)}  style={Styles.btn} >
        <Text style={{color:"white"}} >Remove from Fav</Text> 
      </TouchableOpacity>
                            

                        </Card>



                    )
                })}



            </View>
        </ScrollView>
    )
}

export default AddFav;


const Styles = StyleSheet.create({
    container: {

        textAlign: 'center',
        backgroundColor: '#1b1b1e',
        padding: 50,

        margin: 50,








    }, btn:{
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 25,
        marginLeft: 20,
        color:'white',
        backgroundColor: "red",
        width: "90%",
    
    },
    img: {
        height: 500,
        width: 400,
        alignSelf: 'center',
        marginRight: 80
    }
})


