import { View, FlatList } from "react-native";
import { CategoryItem } from "../../components";
import { categories } from "../../constants/data/categories";
import { styles } from "./styles";

const Categories = ({ navigation }) => {

    const handleSelect = item => (
        navigation.navigate('Products', {
            categoryId: item.id,
            name: item.title,
            background: item.color
        })
    )

    const renderItem = ({ item }) => <CategoryItem item={item} handleSelect={handleSelect} />

    return (
        <View style={styles.container}>
            <FlatList
                data={categories}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                contentContainerStyle={{justifyContent: 'center', flexGrow: 1}}
            />
        </View>
    );
}

export default Categories;