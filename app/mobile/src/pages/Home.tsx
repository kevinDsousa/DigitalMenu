import { Backgound } from "../components/Background";
import { SafeAreaView, Text, Image } from 'react-native';
import logoImg from '../assets/icon.png';
import { useNavigation } from "@react-navigation/native";

export function Home() {
    const navigation = useNavigation()


    return (
        <Backgound>
            <SafeAreaView>
                <Image source={logoImg}/>
                <Text>oi</Text>
            </SafeAreaView>
        </Backgound>
    )
}