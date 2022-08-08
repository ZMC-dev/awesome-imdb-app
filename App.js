import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
     
      <View style={styles.header_logo}>
        <Image 
        source={require("./assets/img/logo.png")}
        style={{
        height: 30,
        width: 60,   
      }}/>
      </View>

      {/* Premier bloc au dessous logo */}
      <View style={styles.movie}>
        <Text style={{fontSize: 30, color: 'white'}}>Interstellar</Text>

        {/* details inline */}
        <View style={styles.movie_subtitle}>
          <Text style={styles.movie_subtitle_text}>2014</Text>
          <Text style={styles.movie_subtitle_text}>PG-13</Text>
          <Text style={styles.movie_subtitle_text}>2h 49 min </Text>
          <Text style={styles.movie_subtitle_text}>Adventure, drama, Sci-Fi</Text>
        </View>


        {/* div qui contient l'image du film plus le bloc en dessous */}
        <View style={{display: 'flex', flexDirection: 'row' }}>
          
          <Image 
          source={require("./assets/img/film.jpg")}
          style={{
          height: 150,
          width: 100,   
          }}/>

              {/* description et button */}
          <View style= {styles.movie_details}>
            <Text style={{color: 'white', fontSize: 12}}>A group of explorers make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.</Text>

            <TouchableOpacity
              style={styles.btn}
              activeOpacity={0.8}
              onPress={() => {
              console.log("pressed !");
              }}
            >
             <Text style={styles.btnText}>+ ADD TO WATCHLIST</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        {/* petit bloc avec les notes dessous la description */}
        <View style={{display: 'flex', flexDirection: 'row', padding: 20 }}>
            <View>
            <AntDesign name="star" size={24} color="black" />
            <Text>hehehe</Text>
            </View>
            

            <View>
            <AntDesign name="staro" size={24} color="white" />
            <Text>hehehe</Text>
            </View>

            <View>
              
            </View>
          </View>

      </View>


      {/* deuxième bloc avec le scroll menu en horizontal */}
      
      <ScrollView horizontal={true} >
          {/* cards avec les acteurs */}
          
          <View style={styles.scroll_view_items}>
            <Image
             source={require("./assets/img/matthew.jpg")}
             style={{
             height: 150,
             width: 100,   
             }}/>
            <Text style={styles.movie_subtitle_text}>Matthew Macounnegy</Text>
            <Text style={styles.movie_subtitle_text}>Cooper</Text>
          </View>

          <View style={styles.scroll_view_items}>
            <Image
             source={require("./assets/img/anne.jpg")}
             style={{
             height: 150,
             width: 100,   
             }}/>
            <Text style={styles.movie_subtitle_text}>Anne Hathaway</Text>
            <Text style={styles.movie_subtitle_text}>Brand</Text>
          </View>

          <View style={styles.scroll_view_items}>
            <Image
             source={require("./assets/img/jessica.jpg")}
             style={{
             height: 150,
             width: 100,   
             }}/>
            <Text style={styles.movie_subtitle_text}>Jessica Chastain</Text>
            <Text style={styles.movie_subtitle_text}>Murphy</Text>
          </View>

          <View style={styles.scroll_view_items}>
            <Image
             source={require("./assets/img/mackenzie.jpg")}
             style={{
             height: 150,
             width: 100,   
             }}/>
            <Text style={styles.movie_subtitle_text}>Mackenzie Foy</Text>
            <Text style={styles.movie_subtitle_text}>Jessy</Text>
          </View>

      </ScrollView>

  
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: '#1F1F1F',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    display:'flex',
    flexDirection: 'column',
  },

  header_logo: {
    backgroundColor: 'grey',
    width: "100%",
    padding: 10,
  },

  movie: {
    fontSize: 50, 
    height: 200,
    width: "100%", 
    color: 'white',
    padding: 10,
  },

  movie_subtitle: {
    display: 'flex',
    flexDirection: 'row', 
    paddingBottom: 20,
  },

  movie_subtitle_text: {
    fontSize: 12,
    color: 'white',
    textAlign: 'center',
  },

  movie_details: {
    width: 270,
    padding: 20,
  },
 
  btn: {
    backgroundColor: "blue",
    marginTop: 20,
    width: 180,
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
  },

  btnText: { color: "white", 
  fontSize: 15 },

  scroll_view_items: {
    flex: 1,
    backgroundColor: 'grey',
    margin: 5,
    height: 200,
  }

});


