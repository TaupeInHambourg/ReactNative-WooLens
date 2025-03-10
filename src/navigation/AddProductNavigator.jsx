import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CameraScreen from "../screens/CameraScreen";

const Stack = createNativeStackNavigator()

function AddProductNavigator() {
    return ( 
        <Stack.Navigator>
            <Stack.Screen name="Camera" component={CameraScreen}/>
        </Stack.Navigator>
     );
}

export default AddProductNavigator;