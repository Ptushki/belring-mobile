import React, {useEffect} from 'react'
import {Text} from 'react-native'
import {Button} from "react-native-paper";
import {InitialDataActions} from "../../redux/reducers/initialDataReducer";
import {NavigationActions} from "../../redux/reducers/navigatorReducer";
import {EMPTY_ITEMS_SCREEN, OBSERVATION_CREATED} from "../constants";
import {useDispatch} from "react-redux";

const MainScreen = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(InitialDataActions.initialDataRequest())
    }, []);
    return (
        <>
            <Text>
                Hi
            </Text>
            <Button
                mode="outlined"
                onPress={() => dispatch(NavigationActions.navigate({routeName: EMPTY_ITEMS_SCREEN, params: {
                        title: 'places.titleEmpty',
                        description: 'places.descriptionEmpty',
                }}))}
            >New place</Button>

            <Button
                mode="outlined"
                onPress={() => dispatch(NavigationActions.navigate({routeName: EMPTY_ITEMS_SCREEN, params: {
                        title: 'addEditObservation.titleEmpty',
                        description: 'addEditObservation.descriptionEmpty',
                    }}))}
            >New observations</Button>
            <Button
                mode="outlined"
                onPress={() => dispatch(NavigationActions.navigate({routeName: OBSERVATION_CREATED }))}
            >Success observations</Button>
        </>
    )
};

export default MainScreen
