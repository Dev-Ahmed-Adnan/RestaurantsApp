import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { MainAppStackTypes } from "../navigation/navigation-types";

function useNavigationHooks<T extends MainAppStackTypes>() {
    const navigate = useNavigation<StackNavigationProp<T>>();
    return navigate;
}

export { useNavigationHooks };
